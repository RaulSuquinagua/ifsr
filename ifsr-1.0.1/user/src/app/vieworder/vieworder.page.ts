import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment.prod';

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
  currency;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private common: CommonService,
  ) {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.currency = environment.currency;
  }

  ngOnInit() {
    this.afdb.object('orders/' + this.orderId).snapshotChanges().subscribe((order: any) => {
      this.order = order.payload.val();
      this.cart = order.payload.val().cart;
      this.finalPrice = order.payload.val().finalPrice;
    })
  }

}
