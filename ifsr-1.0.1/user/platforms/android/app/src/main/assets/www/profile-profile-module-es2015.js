(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'PROFILE' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div style=\"text-align: center; padding: 1rem\">\n    <img src={{user.photoURL}} (click)=\"chooseFile()\" style=\"height:80px;width:80px;border-radius: 100px;\"\n      onerror=\"this.src='./assets/sample.png'\" />\n    <form ngNoForm>\n      <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n    </form>\n  </div>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'NAME' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'EMAIL' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">{{ 'MOBILE' | translate }}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user.mobile\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-padding\">\n    <ion-button (click)=\"update()\" expand=\"block\">{{ 'SAVE' | translate }}</ion-button>\n    &nbsp;&nbsp;\n    <ion-button (click)=\"logout()\" color=\"danger\" fill=\"clear\" expand=\"block\">{{ 'LOGOUT' | translate }}</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#avatar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXZhdGFye1xuICAgIGRpc3BsYXk6IG5vbmVcbn0iLCIjYXZhdGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






let ProfilePage = class ProfilePage {
    constructor(afdb, afAuth, afStorage, common) {
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.afStorage = afStorage;
        this.common = common;
        this.user = {};
    }
    ngOnInit() {
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe(data => {
            this.user = data.payload.val();
            console.log(this.user);
        });
    }
    // choose file for upload
    chooseFile() {
        document.getElementById('avatar').click();
    }
    upload() {
        // Create a root reference
        this.common.showLoader();
        for (let selectedFile of [document.getElementById('avatar').files[0]]) {
            let path = '/users/' + Date.now() + `_${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(data => { this.user.photoURL = data; });
                this.common.hideLoader();
            }).catch(err => {
                this.common.hideLoader();
                console.log(err);
            });
        }
    }
    update() {
        this.common.showLoader();
        this.afdb.object('users/' + this.afAuth.auth.currentUser.uid).update(this.user).then(() => {
            this.common.hideLoader();
            this.common.showToast("Updated");
        }).catch((err) => {
            console.log(err);
            this.common.hideLoader();
        });
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map