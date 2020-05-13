import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOpen = false;

  constructor(
    private afDB: AngularFireDatabase,
    private common: CommonService
  ) {
  }
  ionViewDidEnter() {
    this.common.showLoader();
    this.afDB.object('settings/').snapshotChanges().subscribe((settings: any) => {
      if (settings.payload.val().isOpen != undefined && settings.payload.val().isOpen != null)
        this.isOpen = settings.payload.val().isOpen;

      this.common.hideLoader();
    })
  }

  changeStatus() {
    this.afDB.object('settings/').update({ isOpen: this.isOpen }).then(() => {
      this.common.showToast("Updated");
    }).catch(e => {
      this.common.showToast("Error");
    });
  }

}
