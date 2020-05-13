import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  addresses: any = [];

  constructor(
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
      .snapshotChanges().subscribe((data: any) => {
        this.addresses = [];
        data.forEach(address => this.addresses.push({ key: address.key, ...address.payload.val() }))
      });
  }

}
