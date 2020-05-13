import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';
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
    private afAuth: AngularFireAuth,
    private common: CommonService,
  ) {
    this.currency = environment.currency;
  }

  ngOnInit() {
    this.common.showLoader();
    this.afdb.list('orders', ref => ref.orderByChild('driverId').equalTo(this.afAuth.auth.currentUser.uid))
      .snapshotChanges().subscribe((data: any) => {
        this.orders = [];
        data.forEach(order => this.orders.push({ key: order.key, ...order.payload.val() }))
        this.common.hideLoader();
      });
  }

}
