(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'ACCOUNT' | translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"ar\">عربى</ion-select-option>\n      </ion-select>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item routerLink=\"/profile\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{user.photoURL}}\" onerror=\"this.src='./assets/sample.png'\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>\n          <h3>{{user.name}}</h3>\n        </ion-text>\n        <ion-text>\n          <p>{{user.email}}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{ 'PUSH_NOTIFICATION' | translate }}</ion-label>\n      <ion-toggle slot=\"end\" (ionChange)=\"changePush()\" [(ngModel)]=\"isPushEnabled\"></ion-toggle>\n    </ion-item>\n\n    <ion-item routerLink=\"/addresses\">\n      {{ 'MANAGE_ADDRESS' | translate }}\n    </ion-item>\n    <ion-item routerLink=\"/orders\">\n      {{ 'MY_ORDERS' | translate }}\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");






let Tab3Page = class Tab3Page {
    constructor(afdb, afAuth, translate, firebase) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.translate = translate;
        this.firebase = firebase;
        this.user = {};
        this.lang = 'en';
        this.isPushEnabled = false;
        this.isPushEnabled = (localStorage.getItem('isPushEnabled') == 'true');
    }
    ionViewDidEnter() {
        this.lang = localStorage.getItem('lang');
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(data => {
            if (data != null)
                this.user = data.payload.val();
            console.log(this.user);
        });
    }
    changeLang() {
        console.log(this.lang);
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    }
    changePush() {
        if (this.isPushEnabled == true) {
            localStorage.setItem('isPushEnabled', 'true');
            this.firebase.getToken().then(token => {
                this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).update({
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
            this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).update({
                pushToken: '',
                isPushEnabled: false,
            });
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseX"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseX"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map