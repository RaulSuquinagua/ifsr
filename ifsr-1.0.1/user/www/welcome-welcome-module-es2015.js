(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <img src=\"./assets/images/slide_1.png\" />\n      <h3>Get Fresh Food</h3>\n      <p>Say goodbye to premade or packed foods</p>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"./assets/images/slide_2.png\" />\n      <h3>Track your orders</h3>\n      <p>Keep eye on your order</p>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"./assets/images/slide_3.png\" />\n      <h3>Reserve your seats</h3>\n      <p>Want to book seats? let's do it</p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"skip()\">Let's Start</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after, .footer-md:before {\n  background-image: none;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 1em;\n}\n\nion-slide img {\n  height: 180px;\n}\n\nion-slide p {\n  font-size: 14px;\n  color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVyLC5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5pb24tc2xpZGVze1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbmlvbi1zbGlkZSBpbWd7XG4gICAgaGVpZ2h0OiAxODBweDtcbn1cbmlvbi1zbGlkZSBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjojNTU1O1xufSIsIi5oZWFkZXItbWQ6YWZ0ZXIsIC5mb290ZXItbWQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmlvbi1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG5pb24tc2xpZGUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NTU7XG59Il19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WelcomePage = class WelcomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    skip() {
        localStorage.setItem('displaySlider', "false");
        this.router.navigateByUrl('/login');
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html"),
        styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map