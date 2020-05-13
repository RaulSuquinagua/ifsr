(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forget/forget.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'FORGET' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-header\">\n    <img src=\"./assets/images/icon.png\" />\n    <h3>{{ 'APP_NAME' | translate}}</h3>\n    <p>{{'APP_SLOGAN' | translate}}</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" (click)=\"reset()\">{{ 'RESET_PASSWORD' | translate }}</ion-button>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/forget/forget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/*! exports provided: ForgetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget.page */ "./src/app/forget/forget.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]
    }
];
let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
    })
], ForgetPageModule);



/***/ }),

/***/ "./src/app/forget/forget.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L0M6XFxVc2Vyc1xccmF1bHNcXE9uZURyaXZlXFxEZXNrdG9wXFx2ZXJzaW9uIDNcXGlmc3ItMS4wLjFcXHVzZXIvc3JjXFxhcHBcXGZvcmdldFxcZm9yZ2V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn0iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forget/forget.page.ts":
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");




let ForgetPage = class ForgetPage {
    constructor(afAuth, common) {
        this.afAuth = afAuth;
        this.common = common;
    }
    ngOnInit() {
    }
    reset() {
        let email = ((this.email).toLowerCase().trim());
        this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
            console.log("Sent");
            this.common.showToast("Please Check your inbox for instruction");
        }).catch(err => {
            console.log(err);
            this.common.showToast(err.message);
        });
    }
};
ForgetPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: __webpack_require__(/*! raw-loader!./forget.page.html */ "./node_modules/raw-loader/index.js!./src/app/forget/forget.page.html"),
        styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/forget/forget.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], ForgetPage);



/***/ })

}]);
//# sourceMappingURL=forget-forget-module-es2015.js.map