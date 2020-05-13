import { Component, NgZone } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment.prod'
import { AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  total = 0;
  cart = [];
  finalPrice = 0;
  addresses: any = [];
  addressIndex = 0;
  address: any = {};
  currency: any = '';
  today = new Date().toISOString().substring(0, 10);
  isSubscribe = false;
  order: any = {};
  numbers = Array(30).fill(0).map((x, i) => i + 1);

  constructor(
    private cartService: CartService,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private zone: NgZone,
    private alertCtrl: AlertController,
    private common: CommonService

  ) {
    this.currency = environment.currency;
    console.log(this.today);

    this.cartService.calculateTotal().subscribe(data => {

      this.zone.run(() => {
        this.finalPrice = data.finalPrice;
        console.log(this.finalPrice);
      })
    })
    this.getAddress();
  }
  ionViewWillEnter() {

    this.cart = this.cartService.get();
    this.total = this.cart.length;

    this.cartService.calculateTotal().subscribe(data => {
      this.finalPrice = data.finalPrice;
      this.total = data.totalQty;
    });
  }

  swapMethod() {

    this.isSubscribe = !this.isSubscribe;
    console.log(this.isSubscribe);
  }

  increase(index) {
    this.cartService.increase(index);
  }

  decrease(index) {
    this.cartService.decrease(index);
  }

  getAddress() {
    this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
      .snapshotChanges().subscribe((data: any) => {
        this.addresses = [];
        data.forEach(address => this.addresses.push({ key: address.key, ...address.payload.val() }));
      });
  }

  updateAddress() {
    if (this.addresses[this.addressIndex] != undefined)
      this.address = this.addresses[this.addressIndex]
  }

  checkout() {
    console.log(this.address);
    if (Object.keys(this.address).length != 0) {
      this.alertCtrl.create({
        message: 'Are you sure want to checkout?',
        buttons: [
          { text: 'Confirm', handler: () => this.assignToDriver() },
          { text: 'Cancel' },
        ]
      }).then(r => r.present());
    }
    else {
      this.alertCtrl.create({ message: "Please Choose Address" }).then(r => r.present());
    }
  }

  assignToDriver() {
    this.common.showLoader();

    this.afdb.list('drivers', ref => ref.orderByChild("pincodes/" + this.address.pin).equalTo(true))
      .snapshotChanges().pipe(take(1)).subscribe((drivers: any) => {
        console.log(drivers);
        let driverId = '';

        if (drivers != null && drivers != undefined && drivers.length != 0)
          driverId = drivers[0].key
        else
          driverId = '';

        console.log(driverId);


        let orderInput = {};


        orderInput = {
          createdAt: new Date().getTime(),
          userId: this.afAuth.auth.currentUser.uid,
          cart: this.cart,
          finalPrice: this.finalPrice,
          orderStatus: 'ordered',
          address: this.address,
          driverId: driverId,
        }


        this.afdb.list('orders').push(orderInput).then(() => {
          this.common.hideLoader();

          this.cartService.clear();
          this.cart = [];
          this.total = 0;
          this.cartService.calculateTotal();

          this.common.showToast("Ordered Placed Successfully");
        }).catch(err => {
          console.log(err);
          this.common.hideLoader();
          this.common.showToast("Something went wrong");
        })

      })
  }
}
