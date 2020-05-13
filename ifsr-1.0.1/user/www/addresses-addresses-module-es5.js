(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addresses-addresses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addresses/addresses.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addresses/addresses.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'MANAGE_ADDRESS' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" routerLink=\"/addaddress\">{{ 'ADD' | translate }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"not-found\" *ngIf=\"addresses.length == 0\">\n    <img src=\"./assets/images/nodata.png\" />\n    <p>{{ 'NO_ITEMS_FOUND' | translate }}</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let address of addresses\">\n      <ion-label>\n        <ion-text>\n          <h3>{{address.tag}}</h3>\n        </ion-text>\n        <ion-text>\n          <p>{{address.address}}</p>\n        </ion-text>\n      </ion-label>\n      <ion-button fill=\"clear\" slot=\"end\" routerLink=\"/address/edit/{{address.key}}\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/addresses/addresses.module.ts":
/*!***********************************************!*\
  !*** ./src/app/addresses/addresses.module.ts ***!
  \***********************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses.page */ "./src/app/addresses/addresses.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]
    }
];
var AddressesPageModule = /** @class */ (function () {
    function AddressesPageModule() {
    }
    AddressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
        })
    ], AddressesPageModule);
    return AddressesPageModule;
}());



/***/ }),

/***/ "./src/app/addresses/addresses.page.scss":
/*!***********************************************!*\
  !*** ./src/app/addresses/addresses.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/addresses/addresses.page.ts":
/*!*********************************************!*\
  !*** ./src/app/addresses/addresses.page.ts ***!
  \*********************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AddressesPage = /** @class */ (function () {
    function AddressesPage(afdb, afAuth) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.addresses = [];
    }
    AddressesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
            .snapshotChanges().subscribe(function (data) {
            _this.addresses = [];
            data.forEach(function (address) { return _this.addresses.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: address.key }, address.payload.val())); });
        });
    };
    AddressesPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    AddressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__(/*! raw-loader!./addresses.page.html */ "./node_modules/raw-loader/index.js!./src/app/addresses/addresses.page.html"),
            styles: [__webpack_require__(/*! ./addresses.page.scss */ "./src/app/addresses/addresses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AddressesPage);
    return AddressesPage;
}());



/***/ })

}]);
//# sourceMappingURL=addresses-addresses-module-es5.js.map