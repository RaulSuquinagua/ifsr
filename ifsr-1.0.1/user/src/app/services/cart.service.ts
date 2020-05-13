import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  // total = 0;
  total = new Subject<any>();

  constructor(
    private events: Events
  ) { }

  add(product) {

    if (this.cart.length != 0) {
      let index = this.cart.findIndex(p => p.key === product.key);
      if (index == -1) {
        console.log("pushing")
        product.qty = 1;
        product.total = product.price;
        this.cart.push(product);
      }
      else {
        console.log("increase")
        this.increase(index);
      }
    }
    else {
      product.qty = 1;
      product.total = product.price;
      this.cart.push(product);
    }


    this.calculateTotal().subscribe(data => {
      this.events.publish('cart:updated', data.totalQty);
    })
  }

  get() {
    return this.cart;
  }
  clear() {
    this.cart = [];
  }

  increase(index) {
    this.cart[index].qty += 1
    this.cart[index].total = this.cart[index].qty * parseInt(this.cart[index].price);
    this.calculateTotal();
  }

  decrease(index) {
    if (this.cart[index].qty > 1) {
      this.cart[index].qty = this.cart[index].qty - 1;
      this.cart[index].total = this.cart[index].qty * parseInt(this.cart[index].price);
    }
    else {
      this.cart.splice(index, 1);
    }
    this.calculateTotal();
  }


  calculateTotal(): Observable<any> {
    let finalPrice = 0;
    let totalQty = 0;
    this.cart.forEach(item => {
      totalQty = totalQty + parseInt(item.qty);
      finalPrice = finalPrice + parseInt(item.total)
    });
    this.total.next({ finalPrice: finalPrice, productCount: this.cart.length, totalQty: totalQty });
    return this.total.asObservable();
  }
}
