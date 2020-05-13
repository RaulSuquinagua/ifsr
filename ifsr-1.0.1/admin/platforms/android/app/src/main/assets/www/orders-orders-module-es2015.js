(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'ORDERS' | translate }} ({{orders.length}})</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"8\">\n      <ion-card>\n        <ion-card-content>\n          <div\n            style=\"display: flex;flex-direction: row;padding: 8px 0px;justify-content: space-between;align-items: center;\">\n            <div>\n              <input type=\"date\" [(ngModel)]=\"selectedDate\" (change)=\"getAllOrders()\">\n            </div>\n            <div style=\"display: flex;justify-content: center;align-items: center;\">\n              <select [(ngModel)]=\"filter.orderStatus\" (change)=\"sortByStatus()\">\n                <option value=\"ordered\">Ordered</option>\n                <option value=\"processing\">Processing</option>\n                <option value=\"ontheway\">On the way</option>\n                <option value=\"delivered\">Delivered</option>\n                <option value=\"canceled\">Canceled</option>\n              </select>\n              &nbsp;&nbsp;\n              <select [(ngModel)]=\"filter.driverId\" (change)=\"sortByDriver()\">\n                <option value=\"unassigned\">Unassigned</option>\n                <option *ngFor=\"let driver of drivers\" value=\"{{driver.key}}\">{{driver.name}}</option>\n              </select>\n              <ion-button size=\"small\" fill=\"clear\" (click)=\"reset()\">{{ 'RESET' | translate }}</ion-button>\n            </div>\n          </div>\n          <p *ngIf=\"orders.length == 0 \">No orders found on {{selectedDate}}</p>\n          <table *ngIf=\"orders.length != 0\">\n            <thead>\n              <tr>\n                <td>{{ 'DESCRIPTION' | translate }}</td>\n                <td>{{ 'STATUS' | translate }}</td>\n                <td>{{ 'PRICE' | translate }}</td>\n                <td>{{ 'ACTION' | translate }}</td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\">\n                <td>\n                  <p style=\"font-weight: 700; margin:4\">Order Id: {{order.createdAt}}</p>\n                  <p style=\"color: #777;font-size:14px\">{{order.createdAt | date: 'dd-MM-yyyy h:mm:ss a'}}</p>\n                </td>\n                <td>\n                  {{order.orderStatus}}\n                </td>\n                <td>\n                  <h5>{{order.finalPrice}} {{currency}}</h5>\n                </td>\n                <td>\n                  <ion-button size=\"small\" fill=\"clear\" color=\"secondary\" (click)=\"view(order)\">\n                    <ion-icon name=\"eye\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" *ngIf=\"order.key != undefined\">\n      <ion-card>\n        <ion-card-content>\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-label>\n                <h3>Order ID: {{ order.createdAt }}</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                Status\n              </ion-label>\n              <select slot=\"end\" [(ngModel)]=\"order.orderStatus\" (change)=\"updateStatus(order.key,order.orderStatus)\">\n                <option value=\"ordered\">Ordered</option>\n                <option value=\"processing\">Processing</option>\n                <option value=\"ontheway\">On the way</option>\n                <option value=\"delivered\">Delivered</option>\n                <option value=\"canceled\">Canceled</option>\n              </select>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                Driver\n              </ion-label>\n              <select slot=\"end\" [(ngModel)]=\"order.driverId\" (change)=\"updateDriver(order.key, order.driverId)\">\n                <option *ngFor=\"let driver of drivers\" value=\"{{driver.key}}\">{{driver.name}}</option>\n              </select>\n            </ion-item>\n\n            <ion-item-divider>\n              <ion-label>CART</ion-label>\n              <ion-badge slot=\"end\">{{order.finalPrice}} {{currency}}</ion-badge>\n            </ion-item-divider>\n            <ion-item *ngFor=\"let item of order.cart\">\n              <ion-checkbox slot=\"start\"></ion-checkbox>\n              <ion-label>\n                <h3>{{item.name}} </h3>\n                <p>{{item.qty}} x {{currency}} {{ item.price}} = {{currency}} {{item.total}} </p>\n              </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"order.address != undefined\">\n              <ion-label>\n                <h3>Address</h3>\n                <p>{{order.address.address}}-{{order.address.pincode}} (Landmark: {{order.address.landmark}}</p>\n                <p><a\n                    href=\"https://www.google.com/maps?saddr=Current+Location&daddr={{order.address.lat}},{{order.address.lng}}\"\n                    target=\"_blank\">View\n                    on Map</a></p>\n              </ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"order.address != undefined\">\n              <ion-label>\n                {{order.address.mobile}}\n                <a class=\"ion-button\" href=\"tel:{{order.address.mobile}}\">call</a>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

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

module.exports = "ion-card {\n  --background: #fff;\n}\n\nion-select {\n  margin: 0 !important;\n  background: none !important;\n  border: none !important;\n}\n\ninput {\n  padding: 2px !important;\n  height: 28px;\n  background: #f8f8f8;\n  outline: 0;\n  border: 0;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0M6XFxVc2Vyc1xccmF1bHNcXE9uZURyaXZlXFxEZXNrdG9wXFx2ZXJzaW9uIDNcXGlmc3ItMS4wLjFcXGFkbWluL3NyY1xcYXBwXFxvcmRlcnNcXG9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1zZWxlY3R7XG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0e1xuICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMnB4O1xufSIsImlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");






let OrdersPage = class OrdersPage {
    constructor(afdb, route, common) {
        this.afdb = afdb;
        this.route = route;
        this.common = common;
        this.orders = [];
        this.allOrders = [];
        this.userId = '';
        this.drivers = [];
        this.currency = '';
        this.filter = {};
        this.userType = '';
        this.today = new Date().toISOString().substring(0, 10);
        this.order = {};
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].currency;
        this.userId = this.route.snapshot.paramMap.get('id');
        this.userType = this.route.snapshot.paramMap.get('type');
        this.selectedDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
        if (this.userType != undefined) {
            if (this.userType == 'driver') {
                this.getDriverOrders();
            }
            else if (this.userType == 'user') {
                this.getUserOrders();
            }
        }
        else {
            this.getAllOrders();
        }
    }
    ngOnInit() {
        this.getDrivers();
    }
    reset() {
        this.orders = this.allOrders;
        this.filter = {};
    }
    sortByDriver() {
        let data = this.orders;
        this.orders = data.filter((item) => {
            if (this.filter.driverId == 'unassigned') {
                return item.driverId == "";
            }
            else {
                return item.driverId == this.filter.driverId;
            }
        });
    }
    sort() {
        let data = this.orders;
        this.orders = data.filter((item) => {
            let createdAt = new Date(item.createdAt).getTime();
            return createdAt >= new Date(this.filter.from).getTime() && createdAt <= new Date(this.filter.to).getTime();
        });
    }
    sortByStatus() {
        let data = this.orders;
        console.log(this.filter);
        this.orders = data.filter((item) => {
            return item.orderStatus == this.filter.orderStatus;
        });
    }
    getAllOrders() {
        console.log(this.selectedDate);
        var start = new Date(this.selectedDate);
        start.setHours(0, 0, 0, 0);
        var end = new Date(this.selectedDate);
        end.setHours(23, 59, 59, 999);
        let startTime = start.getTime();
        let endTime = end.getTime();
        console.log(startTime, endTime);
        this.afdb.list('orders/', ref => ref.orderByChild('createdAt').startAt(startTime).endAt(endTime)).snapshotChanges().subscribe((data) => {
            let tmp = [];
            data.forEach(order => {
                tmp.push(Object.assign({ key: order.key }, order.payload.val()));
            });
            this.allOrders = tmp;
            this.orders = tmp.reverse();
            console.log(this.orders);
        });
    }
    getUserOrders() {
        this.afdb.list('orders', ref => ref.orderByChild('userId').equalTo(this.userId))
            .snapshotChanges().subscribe((data) => {
            console.log(data);
            let tmp = [];
            data.forEach(order => {
                tmp.push(Object.assign({ key: order.key }, order.payload.val()));
            });
            this.orders = tmp;
        });
    }
    getDriverOrders() {
        this.afdb.list('orders', ref => ref.orderByChild('driverId').equalTo(this.userId))
            .snapshotChanges().subscribe((data) => {
            console.log(data);
            let tmp = [];
            data.forEach(order => {
                tmp.push(Object.assign({ key: order.key }, order.payload.val()));
            });
            this.orders = tmp;
        });
    }
    updateStatus(key, status) {
        this.afdb.object('orders/' + key).update({
            orderStatus: status
        }).then(() => {
            this.common.showToast("Updated");
        }).catch((err) => {
            this.common.showToast("Something went wrong");
        });
    }
    updateDriver(key, driverId) {
        this.afdb.object('orders/' + key).update({
            driverId: driverId
        }).then(() => {
            this.common.showToast("Updated");
        }).catch((err) => {
            this.common.showToast("Something went wrong");
        });
    }
    getDrivers() {
        this.afdb.list('drivers').snapshotChanges().subscribe((data) => {
            console.log(data);
            let tmp = [];
            data.forEach(user => {
                if (user.payload.val().isApproved == true || user.payload.val().isApproved == "true") {
                    tmp.push(Object.assign({ key: user.key }, user.payload.val()));
                }
            });
            this.drivers = tmp;
        });
        console.log(this.drivers);
    }
    view(order) {
        this.order = order;
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.page.html"),
        styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], OrdersPage);



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map