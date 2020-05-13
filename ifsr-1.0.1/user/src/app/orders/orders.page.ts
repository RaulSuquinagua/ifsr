import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders = [];
  currency: any = '';

  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.currency = environment.currency;
  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.afdb.list('orders', ref => ref.orderByChild('userId').equalTo(this.afAuth.auth.currentUser.uid))
      .snapshotChanges().subscribe((data: any) => {
        console.log(data);
        this.orders = []
        data.forEach(order => this.orders.push({ key: order.key, ...order.payload.val() }))
        this.orders = this.orders.reverse();
        console.log(this.orders);
      });
  }

}
