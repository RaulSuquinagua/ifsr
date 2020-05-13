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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let SettingsPage = class SettingsPage {
    constructor(translate, firebase, afdb, afAuth) {
        this.translate = translate;
        this.firebase = firebase;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.lang = 'en';
        this.isPushEnabled = false;
    }
    ngOnInit() {
        this.lang = localStorage.getItem('lang');
        this.isPushEnabled = (localStorage.getItem('isPushEnabled') == 'true');
    }
    changePush() {
        if (this.isPushEnabled == true) {
            localStorage.setItem('isPushEnabled', 'true');
            this.firebase.getToken().then(token => {
                this.afdb.object('drivers/' + this.afAuth.auth.currentUser.uid).update({
                    pushToken: token,
                    isPushEnabled: true
                });
            });
            this.firebase.onMessageReceived().subscribe(data => {
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
    }
    changeLang() {
        console.log(this.lang);
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
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



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map