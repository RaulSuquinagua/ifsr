import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users = [];
  constructor(
    private afdb: AngularFireDatabase,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.afdb.list('/users').snapshotChanges().subscribe((data: any) => {
      console.log(data);
      let tmp = [];
      data.forEach(user => {
        tmp.push({
          key: user.key,
          ...user.payload.val()
        })
      })
      this.users = tmp;

    });
    console.log(this.users);
  }
}
