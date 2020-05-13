(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-padding\">\n        <ion-card>\n          <ion-item>\n            <ion-label>\n              Manage Banners\n              <form ngNoForm>\n                <input id=\"avatar\" style=\"display:none\" name=\"file\" type=\"file\" (change)=\"upload()\">\n              </form>\n            </ion-label>\n            <ion-button slot=\"end\" (click)=\"chooseFile()\">Add Banner</ion-button>\n          </ion-item>\n          <ion-row *ngIf=\"banners.length != 0\">\n            <ion-col *ngFor=\"let b of banners\" size=\"3\">\n              <img src=\"{{b.url}}\" style=\"height:80px;width:auto\" />\n              <ion-button size=\"small\" (click)=\"deleteBanner(b.key)\">Delete</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-label>\n              Manage Notifications\n            </ion-label>\n            <ion-button slot=\"end\" (click)=\"openEditor()\">Add New</ion-button>\n          </ion-item>\n          <ion-list *ngIf=\"notifications.lengh != 0\" lines=\"none\">\n            <ion-item *ngFor=\"let n of notifications\">\n              <ion-label>\n                <ion-text>\n                  <h3>{{n.title}}</h3>\n                  <p>{{n.message}}</p>\n                </ion-text>\n              </ion-label>\n              <ion-button slot=\"end\" fill=\"outline\" (click)=\"delete(n.key)\">Delete</ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-padding\" *ngIf=\"isShow\">\n        <ion-card>\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-button (click)=\"closeEditor()\" fill=\"clear\" slot=\"end\">\n                <ion-icon name=\"close-circle\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Name</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"notification.title\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Message</ion-label>\n              <ion-textarea type=\"text\" [(ngModel)]=\"notification.message\"></ion-textarea>\n            </ion-item>\n            <ion-radio-group [(ngModel)]=\"notification.for\">\n              <ion-item>\n                <ion-label>Users</ion-label>\n                <ion-radio value=\"users\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Drivers</ion-label>\n                <ion-radio value=\"drivers\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Both</ion-label>\n                <ion-radio value=\"all\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n          <div class=\"ion-padding\">\n            <ion-button expand=\"block\" *ngIf=\"!isEdit\" (click)=\"add()\">Add</ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(common, afDb, afStorage) {
        this.common = common;
        this.afDb = afDb;
        this.afStorage = afStorage;
        this.isEdit = false;
        this.notification = {};
        this.notifications = [];
        this.banners = [];
        this.banner = {};
        this.isShow = false;
    }
    NotificationsPage.prototype.ngOnInit = function () {
        this.fetchNotifications();
    };
    NotificationsPage.prototype.fetchNotifications = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('notifications/').snapshotChanges().subscribe(function (res) {
            _this.notifications = [];
            res.forEach(function (c) { return _this.notifications.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.common.hideLoader();
            _this.fetchBanners();
        });
    };
    NotificationsPage.prototype.fetchBanners = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('banners/').snapshotChanges().subscribe(function (res) {
            _this.banners = [];
            res.forEach(function (c) { return _this.banners.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.common.hideLoader();
        });
    };
    NotificationsPage.prototype.chooseFile = function () {
        document.getElementById('avatar').click();
    };
    NotificationsPage.prototype.upload = function () {
        var _this = this;
        this.common.showLoader();
        var _loop_1 = function (selectedFile) {
            var path = '/banners/' + Date.now() + ("_" + selectedFile.name);
            var ref = this_1.afStorage.ref(path);
            ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (url) { return _this.addBanner(url); });
                _this.common.hideLoader();
            }).catch(function (err) {
                console.log(err);
                _this.common.hideLoader();
            });
        };
        var this_1 = this;
        // Create a root reference
        for (var _i = 0, _a = [document.getElementById('avatar').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    NotificationsPage.prototype.addBanner = function (url) {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('banners/').push({ url: url }).then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Added Successfully");
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    NotificationsPage.prototype.deleteBanner = function (key) {
        var _this = this;
        this.common.showLoader();
        this.afDb.object('banners/' + key).remove().then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Deleted Successfully");
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    NotificationsPage.prototype.openEditor = function () {
        this.reset();
        this.isShow = true;
    };
    NotificationsPage.prototype.closeEditor = function () {
        this.reset();
        this.isShow = false;
    };
    NotificationsPage.prototype.reset = function () {
        this.notification = {};
        this.isShow = false;
    };
    NotificationsPage.prototype.add = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('notifications/').push(this.notification).then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Added Successfully");
            _this.reset();
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    NotificationsPage.prototype.delete = function (key) {
        var _this = this;
        this.common.showLoader();
        this.afDb.object('notifications/' + key).remove().then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Deleted Successfully");
            _this.reset();
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    NotificationsPage.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
    ]; };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map