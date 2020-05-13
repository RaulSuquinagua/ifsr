import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  pincodes: any = [];
  lang: any = 'en';
  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private common: CommonService,
    private translate: TranslateService
  ) { }

  ngOnInit() {

    this.lang = localStorage.getItem('lang');

    this.afdb.list('settings/pincodes').snapshotChanges().subscribe((pincodes: any) => {
      let tmp = [];
      pincodes.forEach(pin => {
        console.log(pin);
        tmp.push(pin.key);
      })
      this.pincodes = tmp.toString();
    })
  }

  changeLang() {
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }

  save() {
    let pin = {};
    this.pincodes = this.pincodes.split(",")
    this.pincodes.forEach((data, index) => {
      let p = data.trim();
      pin[p] = true
    });
    this.afdb.object('settings').update({
      pincodes: pin
    }).then(() => {
      this.common.showToast("Updated");
    }).catch(() => {
      this.common.showToast("Something went wrong");
    });
  }

  logout() {
    this.afAuth.auth.signOut()
  }

}
