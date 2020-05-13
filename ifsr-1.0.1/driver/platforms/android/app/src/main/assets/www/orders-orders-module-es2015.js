(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'ORDERS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"not-found\" *ngIf=\"orders.length == 0\">\n    <img src=\"./assets/images/nodata.png\" />\n    <p>{{ 'NO_ITEMS_FOUND' | translate }}</p>\n  </div>\n  <ion-list lines=\"none\" *ngIf=\"orders.length != 0\">\n    <ion-item *ngFor=\"let order of orders\" routerLink=\"/vieworder/{{order.key}}\">\n      <ion-label>\n        <p style=\"font-size: 12px\">{{order.createdAt | date: 'MMM dd, yyyy  h:mm a'}}</p>\n        <h3 style=\"font-size: 20px;font-weight: 700;\">#{{order.createdAt}}</h3>\n        <p *ngIf=\"order.cart != undefined\">{{order.cart.length}} items - {{currency}} {{order.finalPrice}}</p>\n      </ion-label>\n      <ion-badge slot=\"end\">\n        {{order.orderStatus}}\n      </ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 8px 0px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0M6XFxVc2Vyc1xccmF1bHNcXE9uZURyaXZlXFxEZXNrdG9wXFx2ZXJzaW9uIDNcXGlmc3ItMS4wLjFcXGRyaXZlci9zcmNcXGFwcFxcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgfSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");






let OrdersPage = class OrdersPage {
    constructor(afdb, afAuth, common) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.common = common;
        this.orders = [];
        this.currency = '';
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].currency;
    }
    ngOnInit() {
        this.common.showLoader();
        this.afdb.list('orders', ref => ref.orderByChild('driverId').equalTo(this.afAuth.auth.currentUser.uid))
            .snapshotChanges().subscribe((data) => {
            this.orders = [];
            data.forEach(order => this.orders.push(Object.assign({ key: order.key }, order.payload.val())));
            this.common.hideLoader();
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html"),
        styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map