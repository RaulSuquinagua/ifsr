import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { Events } from '@ionic/angular';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  cartCount = 0;
  constructor(
    private events: Events,
    private detectorRef: ChangeDetectorRef,
    private zone: NgZone,
    private cartService: CartService
  ) {


    this.cartService.calculateTotal().subscribe(data => {
      this.zone.run(() => {
        this.cartCount = data.totalQty;
      })
    })
  }

}
