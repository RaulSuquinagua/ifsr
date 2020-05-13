import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  lang: any = 'en';
  isPushEnabled: any = false;

  constructor(
    private translate: TranslateService,
    private firebase: FirebaseX,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    this.isPushEnabled = (localStorage.getItem('isPushEnabled') == 'true');
  }

  changePush() {
    if (this.isPushEnabled == true) {

      localStorage.setItem('isPushEnabled', 'true');

      this.firebase.getToken().then(token => {
        this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).update({
          pushToken: token,
          isPushEnabled: true
        })
      })

      this.firebase.onMessageReceived().subscribe(data => {
        console.log(data);
      })
    }
    else {

      localStorage.setItem('isPushEnabled', 'false');

      this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).update({
        pushToken: '',
        isPushEnabled: false
      })
    }
  }

  changeLang() {
    console.log(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }

}
