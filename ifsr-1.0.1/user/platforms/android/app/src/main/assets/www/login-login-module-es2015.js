(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-select (ionChange)=\"changeLang()\" [(ngModel)]=\"lang\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"ar\">عربى</ion-select-option>\n      </ion-select>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-header\">\n    <img src=\"./assets/images/icon.png\" />\n    <h3>{{ 'APP_NAME' | translate}}</h3>\n    <p>{{'APP_SLOGAN' | translate}}</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'PASSWORD' | translate }}</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-button slot=\"end\" color=\"secondary\" size=\"small\" fill=\"clear\" routerLink=\"/forget\">\n        {{ 'FORGET' | translate }}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"login()\">\n      {{ 'LOGIN' | translate }}\n    </ion-button>\n    &nbsp;&nbsp;\n    <ion-button color=\"secondary\" expand=\"block\" fill=\"clear\" routerLink=\"/register\">\n      {{ 'CREATE_NEW_ACCOUNT' | translate }}</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyYXVsc1xcT25lRHJpdmVcXERlc2t0b3BcXHZlcnNpb24gM1xcaWZzci0xLjAuMVxcdXNlci9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSIsIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let LoginPage = class LoginPage {
    constructor(afAuth, common, translate, router, menuCtrl) {
        this.afAuth = afAuth;
        this.common = common;
        this.translate = translate;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.userInfo = {};
        this.lang = 'en';
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.lang = localStorage.getItem('lang');
        if (localStorage.getItem('displaySlider') == undefined || localStorage.getItem('displaySlider') == 'true') {
            this.router.navigateByUrl('/welcome');
        }
    }
    login() {
        this.common.showLoader();
        let email = ((this.userInfo.email).toLowerCase().trim());
        this.afAuth.auth.signInWithEmailAndPassword(email, this.userInfo.password).then((data) => {
            console.log(data);
            this.common.hideLoader();
        }).catch(err => {
            console.log(err);
            this.common.hideLoader();
            this.common.showToast(err.message);
        });
    }
    changeLang() {
        console.log(this.lang);
        this.translate.use(this.lang);
        localStorage.setItem('lang', this.lang);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map