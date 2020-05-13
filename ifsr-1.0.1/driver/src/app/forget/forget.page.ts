import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  email: any;
  constructor(
    private afAuth: AngularFireAuth,
    private common: CommonService

  ) { }

  ngOnInit() {
  }

  reset() {
    let email = ((this.email).toLowerCase().trim());
    this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
      console.log("Sent")
      this.common.showToast("Please Check your inbox for instruction");
    }).catch(err => {
      console.log(err);
      this.common.showToast(err.message);
    })
  }

}
