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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addaddress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addaddress.page */ "./src/app/addaddress/addaddress.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _addaddress_page__WEBPACK_IMPORTED_MODULE_6__["AddaddressPage"]
    }
];
var AddaddressPageModule = /** @class */ (function () {
    function AddaddressPageModule() {
    }
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
    return AddaddressPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AddaddressPage = /** @class */ (function () {
    function AddaddressPage(afdb, afAuth, route, geolocation, chRef, common) {
        var _this = this;
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
            this.geolocation.getCurrentPosition().then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
                _this.loadMap();
            }).catch(function (error) {
                _this.common.showToast("Location Error");
                console.log('Error getting location', error);
            });
        }
    }
    AddaddressPage.prototype.getAddress = function () {
        var _this = this;
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key)
            .snapshotChanges().subscribe(function (data) {
            _this.address = data.payload.val();
            _this.lat = _this.address.lat;
            _this.lng = _this.address.lng;
            _this.loadMap();
        });
    };
    AddaddressPage.prototype.ngOnInit = function () {
    };
    AddaddressPage.prototype.add = function () {
        var _this = this;
        console.log(this.address.pin);
        this.afdb.list('settings/pincodes', function (ref) { return ref.orderByKey().equalTo(_this.address.pin); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (data) {
            console.log(data);
            if (data.length == 0) {
                _this.common.showToast("Service not available in this area");
            }
            else {
                _this.afdb.list('users/' + _this.afAuth.auth.currentUser.uid + '/address').push(_this.address)
                    .then(function () { return _this.common.showToast("Added Successfully"); })
                    .catch(function (err) { return _this.common.showToast("Something went wrong"); });
            }
        });
    };
    AddaddressPage.prototype.update = function () {
        var _this = this;
        console.log(this.address.pin);
        this.afdb.list('settings/pincodes', function (ref) { return ref.orderByKey().equalTo(_this.address.pin); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (data) {
            console.log(data);
            if (data.length == 0) {
                _this.common.showToast("Service not available in this area");
            }
            else {
                _this.afdb.object('users/' + _this.afAuth.auth.currentUser.uid + '/address/' + _this.key).update(_this.address)
                    .then(function () { return _this.common.showToast("Updated Successfully"); })
                    .catch(function (err) { return _this.common.showToast("Something went wrong"); });
            }
        });
    };
    AddaddressPage.prototype.delete = function () {
        var _this = this;
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid + '/address/' + this.key).remove()
            .then(function () { return _this.common.showToast("Deleted Successfully"); })
            .catch(function (err) { return _this.common.showToast("Something went wrong"); });
    };
    AddaddressPage.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.lat, this.lng);
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
        this.map.addListener('center_changed', function (event) {
            var center = _this.map.getCenter();
            _this.findPlace(center);
        });
    };
    // find address by LatLng
    AddaddressPage.prototype.findPlace = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        this.marker.setMap(null);
        this.marker = new google.maps.Marker({ map: this.map, position: latLng });
        this.marker.setMap(this.map);
        geocoder.geocode({ 'latLng': latLng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results);
                _this.address.address = results[0].formatted_address;
                results[0].address_components.forEach(function (data) {
                    if (data.types[0] == "postal_code") {
                        _this.address.pin = data.long_name;
                    }
                });
                _this.address.lat = _this.lat;
                _this.address.lng = _this.lng;
                console.log(_this.address);
                _this.chRef.detectChanges();
            }
        });
    };
    AddaddressPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
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
    return AddaddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=addaddress-addaddress-module-es5.js.map