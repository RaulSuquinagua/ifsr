(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'SETTINGS' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">{{ 'LOGOUT' | translate }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-content>\n      <table>\n        <tr>\n          <td>{{ 'LANGUAGE' | translate }}</td>\n          <td>\n            <select (change)=\"changeLang()\" [(ngModel)]=\"lang\">\n              <option value=\"en\">English</option>\n              <option value=\"ar\">عربى</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>{{ 'SUPPORTED_PINCODE' | translate }}</td>\n          <td>\n            <p>{{ 'COMMA' | translate }}</p>\n            <ion-textarea [(ngModel)]=\"pincodes\"></ion-textarea>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <ion-button (click)=\"save()\">{{ 'SAVE' | translate }}</ion-button>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var SettingsPage = /** @class */ (function () {
    function SettingsPage(afdb, afAuth, common, translate) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.common = common;
        this.translate = translate;
        this.pincodes = [];
        this.lang = 'en';
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = localStorage.getItem('lang');
        this.afdb.list('settings/pincodes').snapshotChanges().subscribe(function (pincodes) {
            var tmp = [];
            pincodes.forEach(function (pin) {
                console.log(pin);
                tmp.push(pin.key);
            });
            _this.pincodes = tmp.toString();
        });
    };
    SettingsPage.prototype.changeLang = function () {
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    };
    SettingsPage.prototype.save = function () {
        var _this = this;
        var pin = {};
        this.pincodes = this.pincodes.split(",");
        this.pincodes.forEach(function (data, index) {
            var p = data.trim();
            pin[p] = true;
        });
        this.afdb.object('settings').update({
            pincodes: pin
        }).then(function () {
            _this.common.showToast("Updated");
        }).catch(function () {
            _this.common.showToast("Something went wrong");
        });
    };
    SettingsPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map