(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addaddress-addaddress-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addaddress/addaddress.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addaddress/addaddress.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!isEdit\">{{ 'ADD' | translate }} {{ 'ADDRESS' | translate }}</ion-title>\n    <ion-title *ngIf=\"isEdit\">{{ 'UPDATE' | translate }} {{ 'ADDRESS' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"isEdit\" expand=\"block\" color=\"danger\" fill=\"clear\" (click)=\"delete()\">\n        {{ 'DELETE' | translate }}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'TAG' | translate }}</ion-label>\n      <ion-input type=\"text\" placeholder=\"Home, Office\" [(ngModel)]=\"address.tag\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'ADDRESS' | translate }}</ion-label>\n      <ion-textarea type=\"text\" [(ngModel)]=\"address.address\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'PINCODE' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"address.pin\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'LANDMARK' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"address.landmark\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'MOBILE' | translate }}</ion-label>\n      <ion-input type=\"tel\" [(ngModel)]=\"address.mobile\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button *ngIf=\"!isEdit\" expand=\"block\" (click)=\"add()\">{{ 'ADD' | translate }}</ion-button>\n    <ion-button *ngIf=\"isEdit\" expand=\"block\" (click)=\"update()\">{{ 'UPDATE' | translate }}</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/addaddress/addaddress.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addaddress/addaddress.module.ts ***!
  \*************************************************/
/*! exports provided: AddaddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaddressPageModule", function() { return AddaddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addaddress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addaddress.page */ "./src/app/addaddress/addaddress.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _addaddress_page__WEBPACK_IMPORTED_MODULE_6__["AddaddressPage"]
    }
];
let AddaddressPageModule = class AddaddressPageModule {
};
AddaddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addaddress_page__WEBPACK_IMPORTED_MODULE_6__["AddaddressPage"]]
    })
], AddaddressPageModule);



/***/ }),

/***/ "./src/app/addaddress/addaddress.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addaddress/addaddress.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYWRkcmVzcy9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFxhZGRhZGRyZXNzXFxhZGRhZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkYWRkcmVzcy9hZGRhZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkZGFkZHJlc3MvYWRkYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufSIsIiNtYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addaddress/addaddress.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addaddress/addaddress.page.ts ***!
  \***********************************************/
/*! exports provided: AddaddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaddressPage", function() { return AddaddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let AddaddressPage = class AddaddressPage {
    constructor(afdb, afAuth, route, geolocation, chRef, common) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.route = route;
        this.geolocation = geolocation;
        this.chRef = chRef;
        this.common = common;
        this.address = {};
        this.key = '';
        this.isEdit = false;
        this.key = this.route.snapshot.paramMap.get('id');
        console.log(this.key);
        if (this.key != '' && this.key != null) {
            this.isEdit = true;
            this.getAddress();
        }
        else {
            this.geolocation.getCurrentPosition().then((resp) => {
                this.lat = resp.coords.latitude;
                this.lng = resp.coords.longitude;
                this.loadMap();
            }).catch((error) => {
                this.common.showToast("Location Error");
                console.log('Error getting location', error);
            });
        }
    }
    getAddress() {
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key)
            .snapshotChanges().subscribe((data) => {
            this.address = data.payload.val();
            this.lat = this.address.lat;
            this.lng = this.address.lng;
            this.loadMap();
        });
    }
    ngOnInit() {
    }
    add() {
        console.log(this.address.pin);
        this.afdb.list('settings/pincodes', ref => ref.orderByKey().equalTo(this.address.pin))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((data) => {
            console.log(data);
            if (data.length == 0) {
                this.common.showToast("Service not available in this area");
            }
            else {
                this.afdb.list('users/' + this.afAuth.auth.currentUser.uid + '/address').push(this.address)
                    .then(() => this.common.showToast("Added Successfully"))
                    .catch((err) => this.common.showToast("Something went wrong"));
            }
        });
    }
    update() {
        console.log(this.address.pin);
        this.afdb.list('settings/pincodes', ref => ref.orderByKey().equalTo(this.address.pin))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((data) => {
            console.log(data);
            if (data.length == 0) {
                this.common.showToast("Service not available in this area");
            }
            else {
                this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key).update(this.address)
                    .then(() => this.common.showToast("Updated Successfully"))
                    .catch((err) => this.common.showToast("Something went wrong"));
            }
        });
    }
    delete() {
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key).remove()
            .then(() => this.common.showToast("Deleted Successfully"))
            .catch((err) => this.common.showToast("Something went wrong"));
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.lat, this.lng);
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false,
        });
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        // get center's address
        this.findPlace(latLng);
        this.map.addListener('center_changed', (event) => {
            let center = this.map.getCenter();
            this.findPlace(center);
        });
    }
    // find address by LatLng
    findPlace(latLng) {
        let geocoder = new google.maps.Geocoder();
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                this.address.address = results[0].formatted_address;
                results[0].address_components.forEach(data => {
                    if (data.types[0] == "postal_code") {
                        this.address.pin = data.long_name;
                    }
                });
                this.address.lat = this.lat;
                this.address.lng = this.lng;
                console.log(this.address);
                this.chRef.detectChanges();
            }
        });
    }
};
AddaddressPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
AddaddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addaddress',
        template: __webpack_require__(/*! raw-loader!./addaddress.page.html */ "./node_modules/raw-loader/index.js!./src/app/addaddress/addaddress.page.html"),
        styles: [__webpack_require__(/*! ./addaddress.page.scss */ "./src/app/addaddress/addaddress.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], AddaddressPage);



/***/ })

}]);
//# sourceMappingURL=addaddress-addaddress-module-es2015.js.map