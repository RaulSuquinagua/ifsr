(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'REGISTER' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-header\">\n    <img src=\"./assets/images/icon.png\" />\n    <h3>{{ 'APP_NAME' | translate}}</h3>\n    <p>{{ 'APP_SLOGAN' | translate}}</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'NAME' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'PASSWORD' | translate }}</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'MOBILE' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"userInfo.mobile\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"register()\">\n      {{ 'REGISTER' | translate }}\n    </ion-button>\n  </div>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
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
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxyYXVsc1xcT25lRHJpdmVcXERlc2t0b3BcXHZlcnNpb24gM1xcaWZzci0xLjAuMVxcdXNlci9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSIsIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, afdb, common) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.common = common;
        this.userInfo = {};
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.common.showLoader();
        var email = ((this.userInfo.email).toLowerCase().trim());
        this.afAuth.auth.createUserWithEmailAndPassword(email, this.userInfo.password).then(function (data) {
            _this.afdb.object('users/' + data.user.uid).set({
                name: _this.userInfo.name,
                email: email,
                mobile: _this.userInfo.mobile,
                userType: 'user',
                photoURL: 'http://placehold.it/80x80'
            });
            _this.common.hideLoader();
        }).catch(function (err) {
            console.log(err);
            _this.common.showToast(err.message);
            _this.common.hideLoader();
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
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
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map