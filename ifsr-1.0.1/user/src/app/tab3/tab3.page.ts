import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: any = {};
  lang: any = 'en';
  isPushEnabled = false;

  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private translate: TranslateService,
    private firebase: FirebaseX
  ) {

    this.isPushEnabled = (localStorage.getItem('isPushEnabled') == 'true');

  }

  ionViewDidEnter() {
    this.lang = localStorage.getItem('lang');
    this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(data => {
      if (data != null)
        this.user = data.payload.val();
      console.log(this.user);
    })
  }

  changeLang() {
    console.log(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }

  changePush() {
    if (this.isPushEnabled == true) {
      localStorage.setItem('isPushEnabled', 'true');
      this.firebase.getToken().then(token => {
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).update({
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
      this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).update({
        pushToken: '',
        isPushEnabled: false,
      })
    }
  }

}
