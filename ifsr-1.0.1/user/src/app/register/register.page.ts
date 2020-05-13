import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userInfo: any = {}
  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private common: CommonService
  ) {

  }

  ngOnInit() {
  }

  register() {
    this.common.showLoader();
    let email = ((this.userInfo.email).toLowerCase().trim());
    this.afAuth.auth.createUserWithEmailAndPassword(email, this.userInfo.password).then(
      data => {
        this.afdb.object('users/' + data.user.uid).set({
          name: this.userInfo.name,
          email: email,
          mobile: this.userInfo.mobile,
          userType: 'user',
          photoURL: 'http://placehold.it/80x80'
        });
        this.common.hideLoader();
      }
    ).catch(err => {
      console.log(err)
      this.common.showToast(err.message);
      this.common.hideLoader();
    })
  }

}
