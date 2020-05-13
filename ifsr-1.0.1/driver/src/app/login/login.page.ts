import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  lang: any = 'en';

  userInfo: any = {};
  constructor(
    private afAuth: AngularFireAuth,
    private common: CommonService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
  }

  login() {
    this.common.showLoader();
    let email = ((this.userInfo.email).toLowerCase().trim());
    this.afAuth.auth.signInWithEmailAndPassword(email, this.userInfo.password).then((data) => {
      console.log(data)
      this.common.hideLoader();
    }
    ).catch(err => {
      console.log(err);
      this.common.hideLoader();
      this.common.showToast(err.message);
    })
  }

  changeLang() {
    console.log(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }
}
