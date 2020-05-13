(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'CART' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"not-found\" *ngIf=\"total == 0\">\n    <img src=\"./assets/images/nodata.png\" />\n    <p>{{ 'NO_ITEMS_FOUND' | translate }}</p>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let item of cart; let i = index\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{item.photoURL}}\" style=\"border-radius: 8px;\" />\n      </ion-thumbnail>\n      <ion-label style=\" text-align: center;\">\n        <ion-text>\n          <h3>{{item.name}}</h3>\n        </ion-text>\n        <ion-button class=\"cart-button\" color=\"primary\" fill=\"solid\" size=\"small\" (click)=\"increase(i)\">+</ion-button>\n        <ion-button fill=\"clear\" color=\"secondary\">{{item.qty}}</ion-button>\n        <ion-button class=\"cart-button\" color=\"primary\" fill=\"solid\" size=\"small\" (click)=\"decrease(i)\">-</ion-button>\n      </ion-label>\n      <ion-text slot=\"end\">\n        {{currency}} {{item.qty * item.price}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"total != 0\" class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>\n          Total\n        </ion-label>\n        <ion-text slot=\"end\" class=\"final-price\">\n          {{currency}} {{finalPrice}}\n        </ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h3>{{ 'DELIVER_TO' | translate }}</h3>\n        </ion-label>\n        <ion-button fill=\"clear\" *ngIf=\"addresses.length == 0\" slot=\"end\" routerLink=\"/addaddress\">\n          Select</ion-button>\n        <ion-select slot=\"end\" *ngIf=\"addresses.length != 0\" [(ngModel)]=\"addressIndex\" (ionChange)=\"updateAddress()\"\n          placeholder=\"select\">\n          <ion-select-option *ngFor=\"let address of addresses; let i=index\" value=\"{{i}}\">{{address.tag}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <p style=\"font-size: 12px;\" *ngIf=\"address.address != undefined\">{{ address.address }}</p>\n    <ion-button fill=\"solid\" *ngIf=\"!isSubscribe\" expand=\"block\" (click)=\"checkout()\">\n      {{ 'CHECKOUT' | translate }}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 4px 16px;\n}\n\n.cart-button {\n  height: 24px !important;\n  width: 24px !important;\n  font-size: 12px;\n  border-radius: 40px;\n}\n\n.final-price {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.footer-md:before {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xufVxuXG4uY2FydC1idXR0b257XG4gICAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLmZpbmFsLXByaWNle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9vdGVyLW1kOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufSIsIi5jaGVja291dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG59XG5cbi5jYXJ0LWJ1dHRvbiB7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5maW5hbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var Tab2Page = /** @class */ (function () {
    function Tab2Page(cartService, afdb, afAuth, zone, alertCtrl, common) {
        var _this = this;
        this.cartService = cartService;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.common = common;
        this.total = 0;
        this.cart = [];
        this.finalPrice = 0;
        this.addresses = [];
        this.addressIndex = 0;
        this.address = {};
        this.currency = '';
        this.today = new Date().toISOString().substring(0, 10);
        this.isSubscribe = false;
        this.order = {};
        this.numbers = Array(30).fill(0).map(function (x, i) { return i + 1; });
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].currency;
        console.log(this.today);
        this.cartService.calculateTotal().subscribe(function (data) {
            _this.zone.run(function () {
                _this.finalPrice = data.finalPrice;
                console.log(_this.finalPrice);
            });
        });
        this.getAddress();
    }
    Tab2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.cart = this.cartService.get();
        this.total = this.cart.length;
        this.cartService.calculateTotal().subscribe(function (data) {
            _this.finalPrice = data.finalPrice;
            _this.total = data.totalQty;
        });
    };
    Tab2Page.prototype.swapMethod = function () {
        this.isSubscribe = !this.isSubscribe;
        console.log(this.isSubscribe);
    };
    Tab2Page.prototype.increase = function (index) {
        this.cartService.increase(index);
    };
    Tab2Page.prototype.decrease = function (index) {
        this.cartService.decrease(index);
    };
    Tab2Page.prototype.getAddress = function () {
        var _this = this;
        this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address')
            .snapshotChanges().subscribe(function (data) {
            _this.addresses = [];
            data.forEach(function (address) { return _this.addresses.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: address.key }, address.payload.val())); });
        });
    };
    Tab2Page.prototype.updateAddress = function () {
        if (this.addresses[this.addressIndex] != undefined)
            this.address = this.addresses[this.addressIndex];
    };
    Tab2Page.prototype.checkout = function () {
        var _this = this;
        console.log(this.address);
        if (Object.keys(this.address).length != 0) {
            this.alertCtrl.create({
                message: 'Are you sure want to checkout?',
                buttons: [
                    { text: 'Confirm', handler: function () { return _this.assignToDriver(); } },
                    { text: 'Cancel' },
                ]
            }).then(function (r) { return r.present(); });
        }
        else {
            this.alertCtrl.create({ message: "Please Choose Address" }).then(function (r) { return r.present(); });
        }
    };
    Tab2Page.prototype.assignToDriver = function () {
        var _this = this;
        this.common.showLoader();
        this.afdb.list('drivers', function (ref) { return ref.orderByChild("pincodes/" + _this.address.pin).equalTo(true); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (drivers) {
            console.log(drivers);
            var driverId = '';
            if (drivers != null && drivers != undefined && drivers.length != 0)
                driverId = drivers[0].key;
            else
                driverId = '';
            console.log(driverId);
            var orderInput = {};
            orderInput = {
                createdAt: new Date().getTime(),
                userId: _this.afAuth.auth.currentUser.uid,
                cart: _this.cart,
                finalPrice: _this.finalPrice,
                orderStatus: 'ordered',
                address: _this.address,
                driverId: driverId,
            };
            _this.afdb.list('orders').push(orderInput).then(function () {
                _this.common.hideLoader();
                _this.cartService.clear();
                _this.cart = [];
                _this.total = 0;
                _this.cartService.calculateTotal();
                _this.common.showToast("Ordered Placed Successfully");
            }).catch(function (err) {
                console.log(err);
                _this.common.hideLoader();
                _this.common.showToast("Something went wrong");
            });
        });
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map