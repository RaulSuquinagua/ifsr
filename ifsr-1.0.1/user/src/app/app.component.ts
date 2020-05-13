import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  lang: any = 'en';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang('en');
    if (localStorage.getItem('lang') == undefined) {
      this.translate.use('en');
      this.lang = 'en';
    }

    else {
      this.translate.use(localStorage.getItem('lang'))
      this.lang = localStorage.getItem('lang');
    }



    this.translate.onLangChange.subscribe((event) => {
      localStorage.setItem('lang', event.lang);

      this.lang = event.lang;
      let dir = 'ltr';

      if (event.lang == 'ar')
        dir = 'rtl';

      else
        dir = 'ltr';

      document.getElementsByTagName("html")[0].setAttribute('lang', this.lang);
      document.getElementsByTagName("body")[0].setAttribute('dir', dir);
    });

    this.afAuth.auth.onAuthStateChanged(user => {
      if (user == null)
        this.router.navigateByUrl('/login', { replaceUrl: true, skipLocationChange: true })
      else
        this.router.navigateByUrl('/', { skipLocationChange: true, replaceUrl: true })
    })
  }
}
