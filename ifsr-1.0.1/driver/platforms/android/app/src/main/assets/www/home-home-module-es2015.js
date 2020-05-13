(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ 'HOME' | translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/settings\">\n        <ion-icon name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"not-found\" *ngIf=\"orders.length == 0\">\n    <img src=\"./assets/images/nodata.png\" />\n    <p>No Orders Found</p>\n  </div>\n  <ion-list lines=\"none\" *ngIf=\"orders.length != 0\">\n    <ion-item *ngFor=\"let order of orders\" routerLink=\"/vieworder/{{order.key}}\">\n      <ion-label>\n        <h3># {{order.createdAt}}</h3>\n        <p *ngIf=\"order.cart != undefined\">{{currency}} {{order.finalPrice}} - {{order.cart.length}} items</p>\n      </ion-label>\n      <ion-badge>\n        {{order.orderStatus}}\n      </ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer class=\"ion-padding\" *ngIf=\"driver.isApproved\">\n  <ion-toolbar>\n    <ion-button color=\"success\" *ngIf=\"!driver.isActive\" (click)=\"changeStatus()\" expand=\"block\">\n      {{ 'GOONLINE' | translate}}</ion-button>\n    <ion-button color=\"danger\" *ngIf=\"driver.isActive\" (click)=\"changeStatus()\" expand=\"block\">\n      {{'GOOFFLINE' | translate}}</ion-button>\n    <p *ngIf=\"location.lat != undefined\">You're Here: {{location.lat}}, {{location.lng}}</p>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 8px 0px;\n  border-radius: 8px;\n  border: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFxkcml2ZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IDhweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");








let HomePage = class HomePage {
    constructor(geolocation, afdb, afAuth, backgroundGeolocation, common) {
        this.geolocation = geolocation;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.backgroundGeolocation = backgroundGeolocation;
        this.common = common;
        this.orders = [];
        this.driver = {};
        this.location = {};
        this.currency = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].currency;
        this.afAuth.auth.onAuthStateChanged(driver => { if (driver != null)
            this.getDriver(driver.uid); });
    }
    getDriver(uid) {
        this.common.showLoader();
        this.afdb.object('drivers/' + uid).snapshotChanges().subscribe((driver) => {
            this.driver = Object.assign({ key: driver.key }, driver.payload.val());
            console.log(this.driver);
            this.common.hideLoader();
        });
    }
    fetchOrders() {
        this.common.showLoader();
        // let today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');;
        let today = new Date();
        let start = new Date(today);
        start.setHours(0, 0, 0, 0);
        let end = new Date(today);
        end.setHours(23, 59, 59, 999);
        // Fetching data based on today
        this.afdb.list('orders/', ref => ref.orderByChild('createdAt').startAt(start.getTime()).endAt(end.getTime())).snapshotChanges().subscribe((data) => {
            let tmp = [];
            data.forEach(order => tmp.push(Object.assign({ key: order.key }, order.payload.val())));
            // Filter by drivers
            let driverOrders = tmp.filter(o => o.driverId == this.driver.key);
            this.orders = driverOrders;
            this.common.hideLoader();
        });
    }
    changeStatus() {
        this.driver.isActive = !this.driver.isActive;
        if (this.driver.isActive) {
            // Update location immediately
            this.geolocation.getCurrentPosition({
                timeout: 30000
            }).then(res => {
                this.fetchOrders();
                this.afdb.object('drivers/' + this.driver.key).update({
                    location: { lat: res.coords.latitude, lng: res.coords.longitude },
                    isActive: true
                });
                this.location = { lat: res.coords.latitude, lng: res.coords.longitude };
            }).catch(err => {
                console.log(err);
            });
            //Enabling Background Tracking
            this.backgroundGeolocation.configure({
                stationaryRadius: 20,
                distanceFilter: 30,
                debug: true,
                stopOnTerminate: true,
            })
                .then(() => {
                this.backgroundGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["BackgroundGeolocationEvents"].location).subscribe((location) => {
                    console.log(location);
                    this.location = { lat: location.latitude, lng: location.longitude };
                    this.afdb.object('drivers/' + this.driver.key).update({
                        location: { lat: location.latitude, lng: location.longitude },
                        isActive: true
                    });
                    this.backgroundGeolocation.finish();
                });
            });
            this.backgroundGeolocation.start();
        }
        else {
            this.driver.isActive = false;
            this.location = {};
            this.orders = [];
            this.backgroundGeolocation.stop();
            this.afdb.object('drivers/' + this.driver.key).update({ isActive: false });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["BackgroundGeolocation"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["BackgroundGeolocation"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map