(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vieworder-vieworder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vieworder/vieworder.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vieworder/vieworder.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'ORDER' | translate }} - #{{order.createdAt}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label>\n        <h3>{{ 'STATUS' | translate }}</h3>\n        <p>{{order.orderStatus}}</p>\n      </ion-label>\n      <select [(ngModel)]=\"order.orderStatus\" slot=\"end\" (change)=\"changeStatus()\">\n        <option value=\"ontheway\">ON THE WAY</option>\n        <option value=\"delivered\">DELIVERED</option>\n      </select>\n    </ion-item>\n    <ion-item *ngIf=\"order.address != undefined\">\n      <ion-label>\n        <h3>{{user.name}}</h3>\n        <p>{{order.address.mobile}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        <a href=\"tel:{{order.address.mobile}}\" target=\"_blank\">{{ 'CALL' | translate }}</a>\n      </ion-text>\n    </ion-item>\n    <ion-item *ngIf=\"order.address != undefined\">\n      <ion-label>\n        <h3>{{ 'ADDRESS' | translate }}</h3>\n        <p class=\"text-wrap\">{{order.address.address}} {{order.address.pincode}} <br> {{order.address.landmark}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        <a href=\"https://www.google.com/maps?saddr={{lat}},{{lng}}&daddr={{order.address.lat}},{{order.address.lng}}\"\n          target=\"_blank\">{{ 'NAVIGATE' | translate }}</a>\n      </ion-text>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label>\n        {{ 'CART' | translate }}\n      </ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let item of cart; let i = index\" lines=\"none\">\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n      <ion-label>\n        <h3>{{item.name}}</h3>\n        <p>{{item.qty}} x {{currency}} {{item.price}}</p>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{currency}} {{item.total}}\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        {{ 'TOTAL' | translate }}\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{currency}} {{finalPrice}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

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

module.exports = ".cart {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.cart div {\n  padding: 4px;\n}\n\n.cart h5 {\n  margin: 0;\n}\n\n.cart p {\n  color: #777;\n  margin: 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld29yZGVyL0M6XFxVc2Vyc1xccmF1bHNcXE9uZURyaXZlXFxEZXNrdG9wXFx2ZXJzaW9uIDNcXGlmc3ItMS4wLjFcXGRyaXZlci9zcmNcXGFwcFxcdmlld29yZGVyXFx2aWV3b3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3b3JkZXIvdmlld29yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFNBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC92aWV3b3JkZXIvdmlld29yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jYXJ0IGRpdntcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4uY2FydCBoNXtcbiAgICBtYXJnaW46MFxufVxuLmNhcnQgcHtcbiAgICBjb2xvcjogIzc3NztcbiAgICBtYXJnaW46IDRweCAwcHg7XG59IiwiLmNhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYXJ0IGRpdiB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmNhcnQgaDUge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJ0IHAge1xuICBjb2xvcjogIzc3NztcbiAgbWFyZ2luOiA0cHggMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");








var VieworderPage = /** @class */ (function () {
    function VieworderPage(route, afdb, afAuth, common, geolocation) {
        this.route = route;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.common = common;
        this.geolocation = geolocation;
        this.orderId = '';
        this.order = {};
        this.cart = [];
        this.finalPrice = 0;
        this.currency = '';
        this.lat = '';
        this.lng = '';
        this.user = {};
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].currency;
        this.orderId = this.route.snapshot.paramMap.get('id');
    }
    VieworderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afdb.object('orders/' + this.orderId).snapshotChanges().subscribe(function (order) {
            _this.order = order.payload.val();
            _this.cart = order.payload.val().cart;
            _this.finalPrice = order.payload.val().finalPrice;
            _this.getUser();
        });
    };
    VieworderPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({
            timeout: 30000
        }).then(function (res) {
            _this.lat = res.coords.latitude;
            _this.lng = res.coords.longitude;
        }).catch(function (err) {
            console.log(err);
        });
    };
    VieworderPage.prototype.getUser = function () {
        var _this = this;
        this.afdb.object('users/' + this.order.userId).snapshotChanges().subscribe(function (data) {
            _this.user.name = data.payload.val().name;
        });
    };
    VieworderPage.prototype.changeStatus = function () {
        var _this = this;
        this.common.showLoader();
        this.afdb.object('orders/' + this.orderId).update({
            orderStatus: this.order.orderStatus,
            updatedAt: new Date().getTime(),
        }).then(function () {
            _this.common.hideLoader();
            _this.common.showToast("Updated");
        }).catch(function (err) {
            _this.common.hideLoader();
        });
    };
    VieworderPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] }
    ]; };
    VieworderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vieworder',
            template: __webpack_require__(/*! raw-loader!./vieworder.page.html */ "./node_modules/raw-loader/index.js!./src/app/vieworder/vieworder.page.html"),
            styles: [__webpack_require__(/*! ./vieworder.page.scss */ "./src/app/vieworder/vieworder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
    ], VieworderPage);
    return VieworderPage;
}());



/***/ })

}]);
//# sourceMappingURL=vieworder-vieworder-module-es5.js.map