import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Route } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'PRODUCTS',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'CATEGORIES',
      url: '/category',
      icon: 'apps'
    },
    {
      title: 'ORDERS',
      url: '/orders',
      icon: 'cart'
    },
    {
      title: 'NOTIFICATIONS',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'DRIVERS',
      url: '/drivers',
      icon: 'car'
    },
    {
      title: 'USERS',
      url: '/users',
      icon: 'contacts'
    },
    {
      title: 'SETTINGS',
      url: '/settings',
      icon: 'settings'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router,
    private translate: TranslateService,
    private menuCtrl: MenuController,
    private common: CommonService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang('en');
    if (localStorage.getItem('lang') == undefined)
      this.translate.use('en');
    else
      this.translate.use(localStorage.getItem('lang'))


    this.translate.onLangChange.subscribe((event) => {
      localStorage.setItem('lang', event.lang);

      let lang = event.lang;
      let dir = 'ltr';

      if (event.lang == 'ar')
        dir = 'rtl';

      else
        dir = 'ltr';

      document.getElementsByTagName("html")[0].setAttribute('lang', lang);
      document.getElementsByTagName("body")[0].setAttribute('dir', dir);
    });

    this.afAuth.auth.onAuthStateChanged((data) => {
      if (data != null) {
        if (data.email == environment.adminEmail) {
          this.menuCtrl.enable(true);
          this.router.navigateByUrl('/');
        }
        else {
          this.common.showToast("Not Authorized")
          this.afAuth.auth.signOut();
          this.menuCtrl.enable(false);
          this.router.navigateByUrl('/login');
        }
      }
      else {
        this.menuCtrl.enable(false);
        this.common.showToast("Not Authorized")
        this.router.navigateByUrl('/login');
      }

    })

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
