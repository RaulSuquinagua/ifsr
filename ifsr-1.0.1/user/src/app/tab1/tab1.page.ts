import { Component, NgZone } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CartService } from '../services/cart.service';
import { environment } from '../../environments/environment.prod';
import { CommonService } from '../services/common.service';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allProducts: any = [];
  products: any = [];
  currency: any = '';
  cartCount = 0;
  categories: any = [];
  banners: any = [];
  selectedCategory: any = '';

  constructor(
    private afdb: AngularFireDatabase,
    private cartService: CartService,
    private common: CommonService,
    private zone: NgZone,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user != null) {
        this.getProducts();
        this.currency = environment.currency;
        this.cartService.calculateTotal().subscribe(data => this.zone.run(() => this.cartCount = data.totalQty))
      }
    })

  }

  getProducts() {
    this.afdb.list('/products').snapshotChanges().subscribe((data: any) => {
      let tmp = [];
      data.forEach(product => {
        let p = product.payload.val();
        if (p.isAvail == true || p.isAvail == "true") {
          tmp.push({ key: product.key, ...product.payload.val() })
        }
      })
      this.allProducts = tmp;
      this.products = tmp;
      this.fetchCategory();
    });
  }

  fetchCategory() {
    this.afdb.list('categories/').snapshotChanges().subscribe((res: any) => {
      console.log(res);
      let tmp = [];
      res.forEach(c => tmp.push({ key: c.key, ...c.payload.val() }));
      this.categories = tmp;
      this.fetchBanners();
    })
  }

  fetchBanners() {
    this.afdb.list('banners/').snapshotChanges().subscribe((res: any) => {
      console.log(res);
      this.banners = [];
      res.forEach(c => this.banners.push({ key: c.key, ...c.payload.val() }));
    })
  }

  addToCart(product) {
    this.cartService.add(product);
  }

  filter(c) {
    this.products = this.allProducts;
    this.selectedCategory = c.name;
    this.products = this.products.filter(p => p.category == c.key)
  }

  resetProduct() {
    this.products = this.allProducts;
  }

}
