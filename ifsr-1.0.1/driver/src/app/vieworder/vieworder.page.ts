import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';
import { environment } from '../../environments/environment.prod';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.page.html',
  styleUrls: ['./vieworder.page.scss'],
})
export class VieworderPage implements OnInit {

  orderId: any = '';
  order: any = {};
  cart = [];
  finalPrice = 0;
  currency: any = '';
  lat: any = '';
  lng: any = '';
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private common: CommonService,
    private geolocation: Geolocation,
  ) {
    this.currency = environment.currency;
    this.orderId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.afdb.object('orders/' + this.orderId).snapshotChanges().subscribe((order: any) => {
      this.order = order.payload.val();
      this.cart = order.payload.val().cart;
      this.finalPrice = order.payload.val().finalPrice;
      this.getUser();
    })

  }

  ionViewDidEnter() {
    this.geolocation.getCurrentPosition({
      timeout: 30000
    }).then(res => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }).catch(err => {
      console.log(err);
    })
  }


  getUser() {
    this.afdb.object('users/' + this.order.userId).snapshotChanges().subscribe((data: any) => {
      this.user.name = data.payload.val().name
    })
  }

  changeStatus() {
    this.common.showLoader();
    this.afdb.object('orders/' + this.orderId).update({
      orderStatus: this.order.orderStatus,
      updatedAt: new Date().getTime(),
    }).then(() => {
      this.common.hideLoader();
      this.common.showToast("Updated");
    }).catch(err => {
      this.common.hideLoader();
    })
  }

}

