import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  order: any = {};
  orderId: any;
  driver: any;
  map: any;
  marker: any;
  distanceText: any;
  durationText: any;
  directionsDisplay: any;
  directionsService: any;

  constructor(
    private route: ActivatedRoute,
    private afdb: AngularFireDatabase
  ) {
    this.orderId = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit() {
    this.afdb.object('orders/' + this.orderId).snapshotChanges().pipe(take(1)).subscribe((order: any) => {
      this.order = { 'key': order.key, ...order.payload.val() };
      console.log(this.order);
      this.getDriver(this.order.driverId);
    })
  }

  getDriver(driverId) {
    this.afdb.object('drivers/' + driverId).valueChanges().subscribe((driver: any) => {
      console.log(driver);
      this.driver = driver;
      if (this.map == null)
        this.loadMap(driver.location.lat, driver.location.lng);
      else
        this.updateMarker(driver.location.lat, driver.location.lng);
    })
  }

  call(mobile) {
    window.open("tel:" + mobile);
  }

  updateMarker(lat, lng) {
    this.marker.setMap(null);

    let latLng = new google.maps.LatLng(lat, lng);
    this.marker = new google.maps.Marker({
      map: this.map, position: latLng,
      icon: {
        url: 'assets/bike.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16),
        scaledSize: new google.maps.Size(32, 32)
      },
    });

    this.marker.setMap(this.map);
    this.drawRoute();

  }


  loadMap(lat, lng) {

    let latLng = new google.maps.LatLng(lat, lng);

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
    });

    this.marker = new google.maps.Marker({
      map: this.map, position: latLng,
      icon: {
        url: 'assets/bike.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16),
        scaledSize: new google.maps.Size(32, 32)
      },
    });
    this.marker.setMap(null);
    this.marker.setMap(this.map);
    this.drawRoute();

  }

  drawRoute() {
    console.log("drawRoute()");


    if (this.directionsDisplay != null) {
      this.directionsDisplay.setMap(null);
      this.directionsDisplay = null;
    }


    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "black" } });;

    // this.directionsDisplay.setMap(this.map);

    console.log(this.driver.location.lat, this.driver.location.lng);
    console.log(this.order.address.lat, this.order.address.lng);

    let origin = new google.maps.LatLng(this.driver.location.lat, this.driver.location.lng);
    let dest = new google.maps.LatLng(this.order.address.lat, this.order.address.lng);

    var request = {
      origin: origin,
      destination: dest,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (response, status) => {
      console.log(response);
      if (status == google.maps.DirectionsStatus.OK) {

        this.directionsDisplay.setDirections(response);
        this.directionsDisplay.setMap(this.map);

        this.distanceText = response.routes[0].legs[0].distance.text;
        this.durationText = response.routes[0].legs[0].duration.text;
      } else {
        console.log("error");
      }
    });
  }

}
