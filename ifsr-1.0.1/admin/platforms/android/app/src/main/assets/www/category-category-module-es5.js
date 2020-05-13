(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-padding\">\n        <ion-card>\n          <ion-item>\n            <ion-label>\n              Manage Categories\n            </ion-label>\n            <ion-button slot=\"end\" (click)=\"openEditor()\">Add New</ion-button>\n          </ion-item>\n          <ion-list *ngIf=\"categories.lengh != 0\" lines=\"none\">\n            <ion-item *ngFor=\"let c of categories\">\n              <ion-thumbnail slot=\"start\">\n                <img src=\"{{c.photoURL}}\" />\n              </ion-thumbnail>\n              <ion-label>\n                <ion-text>\n                  {{c.name}}\n                </ion-text>\n              </ion-label>\n              <ion-button slot=\"end\" fill=\"outline\" (click)=\"edit(c)\">Edit</ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-padding\" *ngIf=\"isShow\">\n        <ion-card>\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-button (click)=\"closeEditor()\" fill=\"clear\" slot=\"end\">\n                <ion-icon name=\"close-circle\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-thumbnail slot=\"start\">\n                <img src={{category.photoURL}} onerror=\"this.src='http://placehold.it/500x500'\" />\n              </ion-thumbnail>\n              <ion-button slot=\"end\" fill=\"outline\" (click)=\"chooseFile()\">Upload</ion-button>\n              <form ngNoForm>\n                <input id=\"avatar\" style=\"display: none;\" name=\"file\" type=\"file\" (change)=\"upload()\">\n              </form>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Name</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"category.name\"></ion-input>\n            </ion-item>\n          </ion-list>\n          <div class=\"ion-padding\">\n            <ion-button expand=\"block\" *ngIf=\"!isEdit\" (click)=\"add()\">Add</ion-button>\n            <ion-button expand=\"block\" *ngIf=\"isEdit\" (click)=\"update()\">Update</ion-button>\n            <ion-button expand=\"block\" color=\"danger\" fill=\"clear\" *ngIf=\"isEdit\" (click)=\"delete()\">DELETE</ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var CategoryPage = /** @class */ (function () {
    function CategoryPage(common, afDb, afStorage) {
        this.common = common;
        this.afDb = afDb;
        this.afStorage = afStorage;
        this.isEdit = false;
        this.category = {};
        this.categories = [];
        this.isShow = false;
    }
    CategoryPage.prototype.ngOnInit = function () {
        this.fetchCategory();
    };
    CategoryPage.prototype.fetchCategory = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('categories/').snapshotChanges().subscribe(function (res) {
            _this.categories = [];
            res.forEach(function (c) { return _this.categories.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.common.hideLoader();
        });
    };
    CategoryPage.prototype.openEditor = function () {
        this.reset();
        this.isShow = true;
    };
    CategoryPage.prototype.closeEditor = function () {
        this.reset();
        this.isShow = false;
    };
    CategoryPage.prototype.chooseFile = function () {
        document.getElementById('avatar').click();
    };
    CategoryPage.prototype.upload = function () {
        var _this = this;
        this.common.showLoader();
        var _loop_1 = function (selectedFile) {
            var path = '/category/' + Date.now() + ("_" + selectedFile.name);
            var ref = this_1.afStorage.ref(path);
            ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (url) { _this.category.photoURL = url; });
                _this.common.hideLoader();
            }).catch(function (err) {
                console.log(err);
                _this.common.showToast("Something went wrong");
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
    CategoryPage.prototype.reset = function () {
        this.category = {};
        this.isEdit = false;
        this.isShow = false;
    };
    CategoryPage.prototype.edit = function (c) {
        this.category = c;
        this.isEdit = true;
        this.isShow = true;
    };
    CategoryPage.prototype.add = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.list('categories/').push(this.category).then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Added Successfully");
            _this.reset();
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    CategoryPage.prototype.update = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.object('categories/' + this.category.key).update(this.category).then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Updated Successfully");
            _this.reset();
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    CategoryPage.prototype.delete = function () {
        var _this = this;
        this.common.showLoader();
        this.afDb.object('categories/' + this.category.key).remove().then(function (res) {
            _this.common.hideLoader();
            _this.common.showToast("Deleted Successfully");
            _this.reset();
        }).catch(function (e) {
            _this.common.hideLoader();
            _this.common.showToast("something went wrong");
        });
    };
    CategoryPage.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
    ]; };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-module-es5.js.map