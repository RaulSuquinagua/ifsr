(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drivers-drivers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/drivers/drivers.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/drivers/drivers.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'DRIVER' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card style=\"background: #fff;\">\n    <table>\n      <thead>\n        <tr>\n          <td>{{ 'STATUS' | translate }}</td>\n          <td>{{ 'NAME' | translate }}</td>\n          <td>{{ 'PINCODE' | translate }}</td>\n          <td>{{ 'ACTION' | translate }}</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let driver of drivers\">\n          <td>\n            <ion-toggle [(ngModel)]=\"driver.isApproved\" (click)=\"changeDriverStatus(driver.key,driver.isApproved)\">\n            </ion-toggle>\n          </td>\n          <td>\n            <b>{{driver.name}}</b>\n            <p><a href=\"mailto:{{driver.email}}\">{{driver.email}}</a> / <a\n                href=\"tel:{{driver.mobile}}\">{{driver.mobile}}</a></p>\n\n          </td>\n          <td>\n            <ion-textarea [(ngModel)]=\"driver.pinStr\"></ion-textarea>\n            <p></p>\n            <ion-button size=\"small\" (click)=\"updatePincode(driver.key,driver.pinStr)\">{{ 'SAVE' | translate }}\n            </ion-button>\n          </td>\n          <td>\n            <ion-button fill=\"outline\" routerLink=\"/orders/driver/{{driver.key}}\" size=\"small\">\n              {{ 'VIEW_ORDERS' | translate }}\n            </ion-button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/drivers/drivers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/drivers/drivers.module.ts ***!
  \*******************************************/
/*! exports provided: DriversPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversPageModule", function() { return DriversPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drivers.page */ "./src/app/drivers/drivers.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _drivers_page__WEBPACK_IMPORTED_MODULE_6__["DriversPage"]
    }
];
var DriversPageModule = /** @class */ (function () {
    function DriversPageModule() {
    }
    DriversPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_drivers_page__WEBPACK_IMPORTED_MODULE_6__["DriversPage"]]
        })
    ], DriversPageModule);
    return DriversPageModule;
}());



/***/ }),

/***/ "./src/app/drivers/drivers.page.scss":
/*!*******************************************!*\
  !*** ./src/app/drivers/drivers.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlcnMvZHJpdmVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/drivers/drivers.page.ts":
/*!*****************************************!*\
  !*** ./src/app/drivers/drivers.page.ts ***!
  \*****************************************/
/*! exports provided: DriversPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversPage", function() { return DriversPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





var DriversPage = /** @class */ (function () {
    function DriversPage(afAuth, afdb, common) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.common = common;
        this.drivers = [];
    }
    DriversPage.prototype.ngOnInit = function () {
        this.getDrivers();
    };
    DriversPage.prototype.changeDriverStatus = function (key, status) {
        var _this = this;
        this.afdb.object('drivers/' + key).update({
            isApproved: !status
        }).then(function () {
            _this.common.showToast("Updated");
        }).catch(function (err) {
            _this.common.showToast("Something went wrong");
        });
    };
    DriversPage.prototype.updatePincode = function (key, pin) {
        var _this = this;
        console.log(key, pin);
        var pinObj = {};
        var pinArr = pin.split(",");
        pinArr.forEach(function (data, index) {
            var p = data.trim();
            pinObj[p] = true;
        });
        this.afdb.object('drivers/' + key).update({
            pincodes: pinObj
        }).then(function () {
            _this.common.showToast("Updated");
        }).catch(function () {
            _this.common.showToast("Something went wrong");
        });
    };
    DriversPage.prototype.getDrivers = function () {
        var _this = this;
        this.afdb.list('drivers').snapshotChanges().subscribe(function (data) {
            var tmp = [];
            data.forEach(function (user) {
                var driverPin = user.payload.val().pincodes;
                var driverPinStr;
                if (driverPin != undefined && driverPin != null) {
                    driverPinStr = Object.keys(driverPin).toString();
                    console.log(driverPinStr);
                }
                tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: user.key, pinStr: driverPinStr }, user.payload.val()));
            });
            _this.drivers = tmp;
            console.log(_this.drivers);
        });
    };
    DriversPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    DriversPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! raw-loader!./drivers.page.html */ "./node_modules/raw-loader/index.js!./src/app/drivers/drivers.page.html"),
            styles: [__webpack_require__(/*! ./drivers.page.scss */ "./src/app/drivers/drivers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], DriversPage);
    return DriversPage;
}());



/***/ })

}]);
//# sourceMappingURL=drivers-drivers-module-es5.js.map