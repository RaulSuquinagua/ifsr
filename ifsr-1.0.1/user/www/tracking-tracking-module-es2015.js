(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tracking/tracking.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'TRACK_ORDER' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\" style=\"height: 100%;width: 100%\"></div>\n</ion-content>\n\n<ion-footer *ngIf=\"driver != null\">\n  <ion-toolbar>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{driver.photoURL}}\" />\n      </ion-avatar>\n      <ion-label>\n        <h3>{{driver.name}}</h3>\n        <p>{{distanceText}} {{durationText}}</p>\n      </ion-label>\n      <ion-button slot=\"end\" (click)=\"call(driver.mobile)\">\n        {{ 'CALL' | translate }}\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }
];
let TrackingPageModule = class TrackingPageModule {
};
TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
    })
], TrackingPageModule);



/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNraW5nL3RyYWNraW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TrackingPage = class TrackingPage {
    constructor(route, afdb) {
        this.route = route;
        this.afdb = afdb;
        this.order = {};
        this.orderId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.afdb.object('orders/' + this.orderId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((order) => {
            this.order = Object.assign({ 'key': order.key }, order.payload.val());
            console.log(this.order);
            this.getDriver(this.order.driverId);
        });
    }
    getDriver(driverId) {
        this.afdb.object('drivers/' + driverId).valueChanges().subscribe((driver) => {
            console.log(driver);
            this.driver = driver;
            if (this.map == null)
                this.loadMap(driver.location.lat, driver.location.lng);
            else
                this.updateMarker(driver.location.lat, driver.location.lng);
        });
    }
    call(mobile) {
        window.open("tel:" + mobile);
    }
    updateMarker(lat, lng) {
        this.marker.setMap(null);
        let latLng = new google.maps.LatLng(lat, lng);
        this.marker = new google.maps.Marker({
            map: this.map, position: latLng,
            icon: {
                url: 'assets/bike.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
        this.marker.setMap(this.map);
        this.drawRoute();
    }
    loadMap(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false,
        });
        this.marker = new google.maps.Marker({
            map: this.map, position: latLng,
            icon: {
                url: 'assets/bike.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
        this.marker.setMap(null);
        this.marker.setMap(this.map);
        this.drawRoute();
    }
    drawRoute() {
        console.log("drawRoute()");
        if (this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "black" } });
        ;
        // this.directionsDisplay.setMap(this.map);
        console.log(this.driver.location.lat, this.driver.location.lng);
        console.log(this.order.address.lat, this.order.address.lng);
        let origin = new google.maps.LatLng(this.driver.location.lat, this.driver.location.lng);
        let dest = new google.maps.LatLng(this.order.address.lat, this.order.address.lng);
        var request = {
            origin: origin,
            destination: dest,
            travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(request, (response, status) => {
            console.log(response);
            if (status == google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
                this.directionsDisplay.setMap(this.map);
                this.distanceText = response.routes[0].legs[0].distance.text;
                this.durationText = response.routes[0].legs[0].duration.text;
            }
            else {
                console.log("error");
            }
        });
    }
};
TrackingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracking',
        template: __webpack_require__(/*! raw-loader!./tracking.page.html */ "./node_modules/raw-loader/index.js!./src/app/tracking/tracking.page.html"),
        styles: [__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], TrackingPage);



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module-es2015.js.map