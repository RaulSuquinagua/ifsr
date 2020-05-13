import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any = [];

  constructor(
    private afDb: AngularFireDatabase
  ) {

  }

  getAllCategories() {
    this.afDb.list('categories/').snapshotChanges().subscribe((res: any) => {
      let tmp = [];
      res.forEach(c => tmp.push({ key: c.key, ...c.payload.val() }));
      this.categories = tmp;
      return this.categories;
    })
  }
}
