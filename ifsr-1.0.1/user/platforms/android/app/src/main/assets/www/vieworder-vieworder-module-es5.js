(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vieworder-vieworder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vieworder/vieworder.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vieworder/vieworder.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'ORDER' | translate }} - #{{order.createdAt}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label>\n        <h3>{{ 'STATUS' | translate }}</h3>\n      </ion-label>\n      <ion-badge slot=\"end\">{{order.orderStatus}}</ion-badge>\n    </ion-item>\n    <ion-item *ngIf=\"order.address != undefined\">\n      <ion-label>\n        <h3>{{ 'ADDRESS' | translate }}</h3>\n        <p class=\"text-wrap\">{{order.address.address}} {{order.address.pincode}} <br> {{order.address.landmark}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label>\n        {{ 'CART' | translate }}\n      </ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let item of cart; let i = index\" lines=\"none\">\n      <ion-label>\n        <h3>{{item.name}}</h3>\n        <p>{{item.qty}} x {{currency}} {{item.price}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{currency}} {{item.total}}\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'TOTAL' | translate }}\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{currency}} {{finalPrice}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"order.orderStatus == 'ontheway'\" routerLink=\"/tracking/{{orderId}}\">\n  <ion-toolbar>\n    <ion-button expand=\"block\">{{ 'TRACK_ORDER' | translate }}</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vieworder/vieworder.module.ts":
/*!***********************************************!*\
  !*** ./src/app/vieworder/vieworder.module.ts ***!
  \***********************************************/
/*! exports provided: VieworderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieworderPageModule", function() { return VieworderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vieworder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vieworder.page */ "./src/app/vieworder/vieworder.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _vieworder_page__WEBPACK_IMPORTED_MODULE_6__["VieworderPage"]
    }
];
var VieworderPageModule = /** @class */ (function () {
    function VieworderPageModule() {
    }
    VieworderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vieworder_page__WEBPACK_IMPORTED_MODULE_6__["VieworderPage"]]
        })
    ], VieworderPageModule);
    return VieworderPageModule;
}());



/***/ }),

/***/ "./src/app/vieworder/vieworder.page.scss":
/*!***********************************************!*\
  !*** ./src/app/vieworder/vieworder.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlci92aWV3b3JkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vieworder/vieworder.page.ts":
/*!*********************************************!*\
  !*** ./src/app/vieworder/vieworder.page.ts ***!
  \*********************************************/
/*! exports provided: VieworderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieworderPage", function() { return VieworderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");








var VieworderPage = /** @class */ (function () {
    function VieworderPage(translate, route, afdb, afAuth, common) {
        this.translate = translate;
        this.route = route;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.common = common;
        this.orderId = '';
        this.order = {};
        this.cart = [];
        this.finalPrice = 0;
        this.orderId = this.route.snapshot.paramMap.get('id');
        this.currency = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].currency;
    }
    VieworderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afdb.object('orders/' + this.orderId).snapshotChanges().subscribe(function (order) {
            _this.order = order.payload.val();
            _this.cart = order.payload.val().cart;
            _this.finalPrice = order.payload.val().finalPrice;
        });
    };
    VieworderPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    VieworderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vieworder',
            template: __webpack_require__(/*! raw-loader!./vieworder.page.html */ "./node_modules/raw-loader/index.js!./src/app/vieworder/vieworder.page.html"),
            styles: [__webpack_require__(/*! ./vieworder.page.scss */ "./src/app/vieworder/vieworder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], VieworderPage);
    return VieworderPage;
}());



/***/ })

}]);
//# sourceMappingURL=vieworder-vieworder-module-es5.js.map