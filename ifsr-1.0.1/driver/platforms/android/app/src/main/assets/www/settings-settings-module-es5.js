(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'SETTINGS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item routerLink=\"/profile\">\n      {{ 'PROFILE' | translate }}\n    </ion-item>\n    <ion-item routerLink=\"/orders\">\n      {{ 'ORDERS' | translate }}\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ 'PUSH_NOTIFICATION' | translate }}</ion-label>\n      <ion-toggle slot=\"end\" (ionChange)=\"changePush()\" [(ngModel)]=\"isPushEnabled\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'LANGUAGE' | translate }}\n      </ion-label>\n      <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"ar\">عربى</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var SettingsPage = /** @class */ (function () {
    function SettingsPage(translate, firebase, afdb, afAuth) {
        this.translate = translate;
        this.firebase = firebase;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.lang = 'en';
        this.isPushEnabled = false;
    }
    SettingsPage.prototype.ngOnInit = function () {
        this.lang = localStorage.getItem('lang');
        this.isPushEnabled = (localStorage.getItem('isPushEnabled') == 'true');
    };
    SettingsPage.prototype.changePush = function () {
        var _this = this;
        if (this.isPushEnabled == true) {
            localStorage.setItem('isPushEnabled', 'true');
            this.firebase.getToken().then(function (token) {
                _this.afdb.object('drivers/' + _this.afAuth.auth.currentUser.uid).update({
                    pushToken: token,
                    isPushEnabled: true
                });
            });
            this.firebase.onMessageReceived().subscribe(function (data) {
                console.log(data);
            });
        }
        else {
            localStorage.setItem('isPushEnabled', 'false');
            this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).update({
                pushToken: '',
                isPushEnabled: false
            });
        }
    };
    SettingsPage.prototype.changeLang = function () {
        console.log(this.lang);
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map