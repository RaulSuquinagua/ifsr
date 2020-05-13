import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private common: CommonService,
  ) { }

  ngOnInit() {

    this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(data => {
      this.user = data.payload.val();
      console.log(this.user);
    })
  }

  // choose file for upload
  chooseFile() {
    document.getElementById('avatar').click();
  }

  upload() {
    this.common.showLoader();
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('avatar')).files[0]]) {
      let path = '/drivers/' + Date.now() + `_${selectedFile.name}`;
      let ref = this.afStorage.ref(path)
      ref.put(selectedFile).then(() => {
        ref.getDownloadURL().subscribe(data => { this.user.photoURL = data; });
        this.common.hideLoader();
      }).catch(err => {
        console.log(err);
        this.common.hideLoader();
      });

    }
  }

  update() {

    this.common.showLoader();
    this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).update(this.user).then(() => {
      this.common.hideLoader();
      this.common.showToast("Updated");
    }).catch((err) => {
      console.log(err);
      this.common.hideLoader();
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
