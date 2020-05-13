import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CommonService } from '../services/common.service';
import { take } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})

export class AddaddressPage implements OnInit {
  address: any = {};
  key: any = '';
  isEdit = false;
  map: any;
  marker: any;
  lat: any;
  lng: any;
  googleAutocomplete: any;

  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private geolocation: Geolocation,
    private chRef: ChangeDetectorRef,
    private common: CommonService
  ) {
    this.key = this.route.snapshot.paramMap.get('id');
    console.log(this.key);
    if (this.key != '' && this.key != null) {
      this.isEdit = true;
      this.getAddress();
    }
    else {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.loadMap();
      }).catch((error) => {
        this.common.showToast("Location Error");
        console.log('Error getting location', error);
      });
    }
  }

  getAddress() {
    this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key)
      .snapshotChanges().subscribe((data) => {
        this.address = data.payload.val();
        this.lat = this.address.lat;
        this.lng = this.address.lng;
        this.loadMap();
      });
  }

  ngOnInit() {
  }

  add() {
    console.log(this.address.pin);
    this.afdb.list('settings/pincodes', ref => ref.orderByKey().equalTo(this.address.pin))
      .snapshotChanges().pipe(take(1)).subscribe((data) => {
        console.log(data);
        if (data.length == 0) {
          this.common.showToast("Service not available in this area");
        }
        else {
          this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address').push(this.address)
            .then(() => this.common.showToast("Added Successfully"))
            .catch((err) => this.common.showToast("Something went wrong"));
        }
      })
  }

  update() {
    console.log(this.address.pin);
    this.afdb.list('settings/pincodes', ref => ref.orderByKey().equalTo(this.address.pin))
      .snapshotChanges().pipe(take(1)).subscribe((data) => {
        console.log(data);
        if (data.length == 0) {
          this.common.showToast("Service not available in this area");
        }
        else {
          this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key).update(this.address)
            .then(() => this.common.showToast("Updated Successfully"))
            .catch((err) => this.common.showToast("Something went wrong"));

        }
      })
  }

  delete() {
    this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key).remove()
      .then(() => this.common.showToast("Deleted Successfully"))
      .catch((err) => this.common.showToast("Something went wrong"));
  }


  loadMap() {

    let latLng = new google.maps.LatLng(this.lat, this.lng);

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
    });

    this.marker = new google.maps.Marker({ map: this.map, position: latLng });
    this.marker.setMap(this.map);

    // get center's address
    this.findPlace(latLng);

    this.map.addListener('center_changed', (event) => {
      let center = this.map.getCenter();
      this.findPlace(center);
    })
  }


  // find address by LatLng
  findPlace(latLng) {
    let geocoder = new google.maps.Geocoder();

    this.marker.setMap(null);
    this.marker = new google.maps.Marker({ map: this.map, position: latLng });
    this.marker.setMap(this.map);

    geocoder.geocode({ 'latLng': latLng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        this.address.address = results[0].formatted_address;

        results[0].address_components.forEach(data => {
          if (data.types[0] == "postal_code") {
            this.address.pin = data.long_name;
          }
        })

        this.address.lat = this.lat;
        this.address.lng = this.lng;
        console.log(this.address);
        this.chRef.detectChanges();
      }
    });
  }

}
