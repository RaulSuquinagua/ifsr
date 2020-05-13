(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'REGISTER' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-header\">\n    <img src=\"./assets/images/icon.png\" />\n    <h3>App Name</h3>\n    <p>App short text</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'NAME' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'PASSWORD' | translate }}</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'MOBILE' | translate }}</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"userInfo.mobile\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"register()\">\n      {{ 'REGISTER' | translate }}\n    </ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxyYXVsc1xcT25lRHJpdmVcXERlc2t0b3BcXHZlcnNpb24gM1xcaWZzci0xLjAuMVxcZHJpdmVyL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59IiwiLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





let RegisterPage = class RegisterPage {
    constructor(afAuth, afdb, common) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.common = common;
        this.userInfo = {};
    }
    ngOnInit() {
    }
    register() {
        this.common.showLoader();
        let email = ((this.userInfo.email).toLowerCase().trim());
        this.afAuth.auth.createUserWithEmailAndPassword(email, this.userInfo.password).then(data => {
            this.afdb.object('drivers/' + data.user.uid).set({
                name: this.userInfo.name,
                email: email,
                mobile: this.userInfo.mobile,
                userType: 'driver',
                isApproved: false,
                photoURL: 'http://placehold.it/80x80'
            });
            this.common.hideLoader();
        }).catch(err => {
            console.log(err);
            this.common.showToast(err.message);
            this.common.hideLoader();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map