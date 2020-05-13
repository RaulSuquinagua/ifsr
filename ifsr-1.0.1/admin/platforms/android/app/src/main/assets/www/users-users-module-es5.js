(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'USERS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <p *ngIf=\"users.length == 0\">No users found</p>\n    <table *ngIf=\"users.length != 0\">\n      <thead>\n        <tr>\n          <td>{{ 'NAME' | translate }}</td>\n          <td>{{ 'EMAIL' | translate }}</td>\n          <td>{{ 'MOBILE' | translate }}</td>\n          <td>{{ 'ACTION' | translate }}</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>\n            <b>{{user.name}}</b>\n          </td>\n          <td>\n            <p><a href=\"mailto:{{user.email}}\">{{user.email}}</a></p>\n          </td>\n          <td>\n            <p><a href=\"tel:{{user.mobile}}\">{{user.mobile}}</a></p>\n          </td>\n          <td>\n            <ion-button slot=\"end\" fill=\"outline\" size=\"small\" routerLink=\"/orders/user/{{user.key}}\">\n              {{ 'VIEW_ORDERS' | translate }}\n            </ion-button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]
    }
];
var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());



/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




var UsersPage = /** @class */ (function () {
    function UsersPage(afdb, common) {
        this.afdb = afdb;
        this.common = common;
        this.users = [];
    }
    UsersPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersPage.prototype.getUsers = function () {
        var _this = this;
        this.afdb.list('/users').snapshotChanges().subscribe(function (data) {
            console.log(data);
            var tmp = [];
            data.forEach(function (user) {
                tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: user.key }, user.payload.val()));
            });
            _this.users = tmp;
        });
        console.log(this.users);
    };
    UsersPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.page.html"),
            styles: [__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], UsersPage);
    return UsersPage;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module-es5.js.map