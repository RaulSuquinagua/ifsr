import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  orders: any = [];
  driver: any = {};
  currency: any;
  location: any = {};

  constructor(
    private geolocation: Geolocation,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private backgroundGeolocation: BackgroundGeolocation,
    private common: CommonService
  ) {
    this.currency = environment.currency;
    this.afAuth.auth.onAuthStateChanged(driver => { if (driver != null) this.getDriver(driver.uid) })
  }

  getDriver(uid) {
    this.common.showLoader();
    this.afdb.object('drivers/' + uid).snapshotChanges().subscribe((driver: any) => {
      this.driver = { key: driver.key, ...driver.payload.val() };
      console.log(this.driver);
      this.common.hideLoader();
    });
  }

  fetchOrders() {
    this.common.showLoader();
    // let today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');;

    let today = new Date();
    let start = new Date(today); start.setHours(0, 0, 0, 0);
    let end = new Date(today); end.setHours(23, 59, 59, 999);

    // Fetching data based on today

    this.afdb.list('orders/', ref => ref.orderByChild('createdAt').startAt(start.getTime()).endAt(end.getTime())).snapshotChanges().subscribe((data: any) => {

      let tmp = [];
      data.forEach(order => tmp.push({ key: order.key, ...order.payload.val() }))

      // Filter by drivers
      let driverOrders = tmp.filter(o => o.driverId == this.driver.key)

      this.orders = driverOrders;
      this.common.hideLoader();
    });
  }

  changeStatus() {
    this.driver.isActive = !this.driver.isActive
    if (this.driver.isActive) {

      // Update location immediately
      this.geolocation.getCurrentPosition({
        timeout: 30000
      }).then(res => {
        this.fetchOrders();
        this.afdb.object('drivers/' + this.driver.key).update({
          location: { lat: res.coords.latitude, lng: res.coords.longitude },
          isActive: true
        })
        this.location = { lat: res.coords.latitude, lng: res.coords.longitude };
      }).catch(err => {
        console.log(err);
      })

      //Enabling Background Tracking

      this.backgroundGeolocation.configure({
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true,
        stopOnTerminate: true,
      })
        .then(() => {
          this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
            console.log(location);

            this.location = { lat: location.latitude, lng: location.longitude };

            this.afdb.object('drivers/' + this.driver.key).update({
              location: { lat: location.latitude, lng: location.longitude },
              isActive: true
            })

            this.backgroundGeolocation.finish();
          });
        });
      this.backgroundGeolocation.start();
    }
    else {
      this.driver.isActive = false;
      this.location = {};
      this.orders = [];
      this.backgroundGeolocation.stop();
      this.afdb.object('drivers/' + this.driver.key).update({ isActive: false })
    }
  }
}
