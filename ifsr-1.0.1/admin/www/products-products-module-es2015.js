(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'PRODUCTS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col class=\"ion-padding\">\n      <ion-card>\n        <ion-item>\n          <ion-label>\n            Manage Products\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" fill=\"solid\" (click)=\"openEditor()\">Add New</ion-button>\n          </ion-buttons>\n        </ion-item>\n        <ion-list *ngIf=\"products.length != 0 \" lines=\"none\">\n          <ion-item *ngFor=\"let product of products\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"{{product.photoURL}}\" onerror=\"this.src='http://placehold.it/500x500'\" />\n            </ion-thumbnail>\n            <ion-label>\n              <h5>{{product.name}}</h5>\n              <p>{{currency}} {{product.price}}</p>\n            </ion-label>\n            <ion-button fill=\"outline\" (click)=\"edit(product)\">Edit</ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" *ngIf=\"isShow\">\n      <ion-card>\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-button (click)=\"closeEditor()\" fill=\"clear\" slot=\"end\">\n              <ion-icon name=\"close-circle\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail>\n              <img src={{product.photoURL}} onerror=\"this.src='http://placehold.it/500x500'\" />\n              <form ngNoForm>\n                <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n              </form>\n            </ion-thumbnail>\n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"chooseFile()\">Upload</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"product.name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Price</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"product.price\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Category</ion-label>\n            <ion-select [(ngModel)]=\"product.category\">\n              <ion-select-option value=\"{{c.key}}\" *ngFor=\"let c of categories\">{{c.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description</ion-label>\n            <ion-textarea type=\"text\" [(ngModel)]=\"product.description\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label>is Veg?</ion-label>\n            <ion-toggle type=\"text\" [(ngModel)]=\"product.isVeg\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>Available?</ion-label>\n            <ion-toggle type=\"text\" [(ngModel)]=\"product.isAvail\"></ion-toggle>\n          </ion-item>\n          <div class=\"ion-padding\">\n            <ion-button expand=\"block\" *ngIf=\"!isEdit\" (click)=\"add()\">Add</ion-button>\n            <ion-button expand=\"block\" *ngIf=\"isEdit\" (click)=\"update()\">Update</ion-button>\n            <ion-button expand=\"block\" color=\"danger\" fill=\"clear\" *ngIf=\"isEdit\" (click)=\"delete()\">Delete</ion-button>\n          </div>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");







let ProductsPage = class ProductsPage {
    constructor(afdb, common, afStorage, categoryService) {
        this.afdb = afdb;
        this.common = common;
        this.afStorage = afStorage;
        this.categoryService = categoryService;
        this.products = [];
        this.categories = [];
        this.currency = '';
        this.product = {};
        this.isEdit = false;
        this.isShow = false;
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].currency;
    }
    ngOnInit() {
        this.afdb.list('/products').snapshotChanges().subscribe((data) => {
            this.products = [];
            data.forEach(p => this.products.push(Object.assign({ key: p.key }, p.payload.val())));
            this.fetchCategory();
        });
        console.log(this.products);
    }
    edit(p) {
        this.isEdit = true;
        this.product = p;
        this.isShow = true;
    }
    openEditor() {
        this.reset();
        this.isShow = true;
    }
    closeEditor() {
        this.reset();
        this.isShow = false;
    }
    reset() {
        this.isEdit = false;
        this.product = {};
        this.isShow = false;
    }
    chooseFile() {
        document.getElementById('avatar').click();
    }
    upload() {
        this.common.showLoader();
        // Create a root reference
        for (let selectedFile of [document.getElementById('avatar').files[0]]) {
            let path = '/products/' + Date.now() + `_${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(data => { this.product.photoURL = data; });
                this.common.hideLoader();
            }).catch(err => {
                console.log(err);
                this.common.hideLoader();
            });
        }
    }
    add() {
        this.afdb.database.ref('products').push(this.product).then(data => {
            this.common.showToast("Added");
            this.reset();
        }).catch(err => {
            console.log(err);
            this.common.showToast("Something went wrong");
        });
    }
    fetchCategory() {
        this.afdb.list('categories/').snapshotChanges().subscribe((res) => {
            res.forEach(c => this.categories.push(Object.assign({ key: c.key }, c.payload.val())));
        });
    }
    update() {
        this.afdb.database.ref('products/' + this.product.key).update(this.product).then(data => {
            console.log("Updated");
            this.common.showToast("Updated");
            this.reset();
        }).catch(err => {
            console.log(err);
            this.common.showToast("Something went wrong");
        });
    }
    delete() {
        this.afdb.database.ref('products/' + this.product.key).remove().then(data => {
            console.log("deleted");
            this.common.showToast("Deleted");
            this.reset();
        }).catch(err => {
            console.log(err);
            this.common.showToast("Something went wrong");
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }
];
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
        styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
], ProductsPage);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");



let CategoryService = class CategoryService {
    constructor(afDb) {
        this.afDb = afDb;
        this.categories = [];
    }
    getAllCategories() {
        this.afDb.list('categories/').snapshotChanges().subscribe((res) => {
            let tmp = [];
            res.forEach(c => tmp.push(Object.assign({ key: c.key }, c.payload.val())));
            this.categories = tmp;
            return this.categories;
        });
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map