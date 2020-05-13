import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { environment } from '../../environments/environment.prod'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any = [];
  allOrders: any = [];
  userId: any = '';
  drivers: any = [];
  currency: any = '';
  filter: any = {};
  userType = '';
  today = new Date().toISOString().substring(0, 10);
  order: any = {};
  selectedDate: any;

  constructor(
    private afdb: AngularFireDatabase,
    private route: ActivatedRoute,
    private common: CommonService
  ) {
    this.currency = environment.currency
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userType = this.route.snapshot.paramMap.get('type');
    this.selectedDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

    if (this.userType != undefined) {

      if (this.userType == 'driver') {
        this.getDriverOrders();
      }
      else if (this.userType == 'user') {
        this.getUserOrders();
      }
    }
    else {
      this.getAllOrders();
    }

  }

  ngOnInit() {
    this.getDrivers()
  }

  reset() {
    this.orders = this.allOrders;
    this.filter = {};
  }

  sortByDriver() {
    let data = this.orders;
    this.orders = data.filter((item: any) => {
      if (this.filter.driverId == 'unassigned') {
        return item.driverId == "";
      }
      else {
        return item.driverId == this.filter.driverId;
      }
    })
  }

  sort() {
    let data = this.orders;

    this.orders = data.filter((item: any) => {
      let createdAt = new Date(item.createdAt).getTime();
      return createdAt >= new Date(this.filter.from).getTime() && createdAt <= new Date(this.filter.to).getTime();
    })
  }

  sortByStatus() {
    let data = this.orders;
    console.log(this.filter);
    this.orders = data.filter((item: any) => {
      return item.orderStatus == this.filter.orderStatus;
    })
  }


  getAllOrders() {
    console.log(this.selectedDate);

    var start = new Date(this.selectedDate);
    start.setHours(0, 0, 0, 0);

    var end = new Date(this.selectedDate);
    end.setHours(23, 59, 59, 999);

    let startTime = start.getTime();
    let endTime = end.getTime();
    console.log(startTime, endTime);

    this.afdb.list('orders/', ref => ref.orderByChild('createdAt').startAt(startTime).endAt(endTime)).snapshotChanges().subscribe((data: any) => {

      let tmp = [];
      data.forEach(order => {
        tmp.push({ key: order.key, ...order.payload.val() })
      })
      this.allOrders = tmp;
      this.orders = tmp.reverse();
      console.log(this.orders);
    });
  }

  getUserOrders() {
    this.afdb.list('orders', ref => ref.orderByChild('userId').equalTo(this.userId))
      .snapshotChanges().subscribe((data: any) => {
        console.log(data);
        let tmp = [];
        data.forEach(order => {
          tmp.push({
            key: order.key,
            ...order.payload.val()
          })
        })
        this.orders = tmp;
      });
  }

  getDriverOrders() {
    this.afdb.list('orders', ref => ref.orderByChild('driverId').equalTo(this.userId))
      .snapshotChanges().subscribe((data: any) => {
        console.log(data);
        let tmp = [];
        data.forEach(order => {
          tmp.push({
            key: order.key,
            ...order.payload.val()
          })
        })
        this.orders = tmp;
      });
  }

  updateStatus(key, status) {
    this.afdb.object('orders/' + key).update({
      orderStatus: status
    }).then(() => {
      this.common.showToast("Updated");
    }).catch((err) => {
      this.common.showToast("Something went wrong");
    })
  }

  updateDriver(key, driverId) {
    this.afdb.object('orders/' + key).update({
      driverId: driverId
    }).then(() => {
      this.common.showToast("Updated");
    }).catch((err) => {
      this.common.showToast("Something went wrong");
    })
  }


  getDrivers() {

    this.afdb.list('drivers').snapshotChanges().subscribe((data: any) => {
      console.log(data);
      let tmp = [];
      data.forEach(user => {
        if (user.payload.val().isApproved == true || user.payload.val().isApproved == "true") {
          tmp.push({
            key: user.key,
            ...user.payload.val()
          })
        }
      })
      this.drivers = tmp;

    });
    console.log(this.drivers);
  }

  view(order) {
    this.order = order;
  }





}
