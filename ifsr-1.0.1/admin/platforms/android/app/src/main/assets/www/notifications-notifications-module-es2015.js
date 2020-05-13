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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");





let NotificationsPage = class NotificationsPage {
    constructor(common, afDb, afStorage) {
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
    ngOnInit() {
        this.fetchNotifications();
    }
    fetchNotifications() {
        this.common.showLoader();
        this.afDb.list('notifications/').snapshotChanges().subscribe((res) => {
            this.notifications = [];
            res.forEach(c => this.notifications.push(Object.assign({ key: c.key }, c.payload.val())));
            this.common.hideLoader();
            this.fetchBanners();
        });
    }
    fetchBanners() {
        this.common.showLoader();
        this.afDb.list('banners/').snapshotChanges().subscribe((res) => {
            this.banners = [];
            res.forEach(c => this.banners.push(Object.assign({ key: c.key }, c.payload.val())));
            this.common.hideLoader();
        });
    }
    chooseFile() {
        document.getElementById('avatar').click();
    }
    upload() {
        this.common.showLoader();
        // Create a root reference
        for (let selectedFile of [document.getElementById('avatar').files[0]]) {
            let path = '/banners/' + Date.now() + `_${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(url => this.addBanner(url));
                this.common.hideLoader();
            }).catch(err => {
                console.log(err);
                this.common.hideLoader();
            });
        }
    }
    addBanner(url) {
        this.common.showLoader();
        this.afDb.list('banners/').push({ url: url }).then(res => {
            this.common.hideLoader();
            this.common.showToast("Added Successfully");
        }).catch(e => {
            this.common.hideLoader();
            this.common.showToast("something went wrong");
        });
    }
    deleteBanner(key) {
        this.common.showLoader();
        this.afDb.object('banners/' + key).remove().then(res => {
            this.common.hideLoader();
            this.common.showToast("Deleted Successfully");
        }).catch(e => {
            this.common.hideLoader();
            this.common.showToast("something went wrong");
        });
    }
    openEditor() {
        this.reset();
        this.isShow = true;
    }
    closeEditor() {
        this.reset();
        this.isShow = false;
    }
    reset() {
        this.notification = {};
        this.isShow = false;
    }
    add() {
        this.common.showLoader();
        this.afDb.list('notifications/').push(this.notification).then(res => {
            this.common.hideLoader();
            this.common.showToast("Added Successfully");
            this.reset();
        }).catch(e => {
            this.common.hideLoader();
            this.common.showToast("something went wrong");
        });
    }
    delete(key) {
        this.common.showLoader();
        this.afDb.object('notifications/' + key).remove().then(res => {
            this.common.hideLoader();
            this.common.showToast("Deleted Successfully");
            this.reset();
        }).catch(e => {
            this.common.hideLoader();
            this.common.showToast("something went wrong");
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
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



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map