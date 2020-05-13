(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'ORDERS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"not-found\" *ngIf=\"orders.length == 0\">\n    <img src=\"./assets/images/nodata.png\" />\n    <p>{{ 'NO_ITEMS_FOUND' | translate }}</p>\n  </div>\n  <ion-list lines=\"none\" *ngIf=\"orders.length != 0\">\n    <ion-item *ngFor=\"let order of orders\" routerLink=\"/vieworder/{{order.key}}\">\n      <ion-label>\n        <p style=\"font-size: 12px\">{{order.createdAt | date: 'MMM dd, yyyy  h:mm a'}}</p>\n        <h3 style=\"font-size: 20px;font-weight: 700;\">#{{order.createdAt}}</h3>\n        <p *ngIf=\"order.cart != undefined\">{{order.cart.length}} items - {{currency}} {{order.finalPrice}}</p>\n      </ion-label>\n      <ion-badge slot=\"end\">\n        {{order.orderStatus}}\n      </ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
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
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-id {\n  font-weight: 500;\n}\n\n.order-price {\n  color: #666;\n}\n\n.order-status {\n  background: #FFEB3B;\n  padding: 2px 4px;\n  border-radius: 2px;\n}\n\n.order-subscription {\n  background: #cddc39;\n  padding: 2px 4px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0M6XFxVc2Vyc1xccmF1bHNcXE9uZURyaXZlXFxEZXNrdG9wXFx2ZXJzaW9uIDNcXGlmc3ItMS4wLjFcXHVzZXIvc3JjXFxhcHBcXG9yZGVyc1xcb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWlke1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ub3JkZXItcHJpY2V7XG4gICAgY29sb3I6ICM2NjZcbn1cbi5vcmRlci1zdGF0dXN7XG4gICAgYmFja2dyb3VuZDogI0ZGRUIzQjtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLm9yZGVyLXN1YnNjcmlwdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjY2RkYzM5O1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufSIsIi5vcmRlci1pZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5vcmRlci1wcmljZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ub3JkZXItc3RhdHVzIHtcbiAgYmFja2dyb3VuZDogI0ZGRUIzQjtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ub3JkZXItc3Vic2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogI2NkZGMzOTtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





var OrdersPage = /** @class */ (function () {
    function OrdersPage(afdb, afAuth) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.orders = [];
        this.currency = '';
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].currency;
    }
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.afdb.list('orders', function (ref) { return ref.orderByChild('userId').equalTo(_this.afAuth.auth.currentUser.uid); })
            .snapshotChanges().subscribe(function (data) {
            console.log(data);
            _this.orders = [];
            data.forEach(function (order) { return _this.orders.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: order.key }, order.payload.val())); });
            _this.orders = _this.orders.reverse();
            console.log(_this.orders);
        });
    };
    OrdersPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es5.js.map