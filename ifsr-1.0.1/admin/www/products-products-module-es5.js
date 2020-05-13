(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ 'PRODUCTS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col class=\"ion-padding\">\n      <ion-card>\n        <ion-item>\n          <ion-label>\n            Manage Products\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" fill=\"solid\" (click)=\"openEditor()\">Add New</ion-button>\n          </ion-buttons>\n        </ion-item>\n        <ion-list *ngIf=\"products.length != 0 \" lines=\"none\">\n          <ion-item *ngFor=\"let product of products\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"{{product.photoURL}}\" onerror=\"this.src='http://placehold.it/500x500'\" />\n            </ion-thumbnail>\n            <ion-label>\n              <h5>{{product.name}}</h5>\n              <p>{{currency}} {{product.price}}</p>\n            </ion-label>\n            <ion-button fill=\"outline\" (click)=\"edit(product)\">Edit</ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" *ngIf=\"isShow\">\n      <ion-card>\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-button (click)=\"closeEditor()\" fill=\"clear\" slot=\"end\">\n              <ion-icon name=\"close-circle\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-thumbnail>\n              <img src={{product.photoURL}} onerror=\"this.src='http://placehold.it/500x500'\" />\n              <form ngNoForm>\n                <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n              </form>\n            </ion-thumbnail>\n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"chooseFile()\">Upload</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"product.name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Price</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"product.price\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Category</ion-label>\n            <ion-select [(ngModel)]=\"product.category\">\n              <ion-select-option value=\"{{c.key}}\" *ngFor=\"let c of categories\">{{c.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description</ion-label>\n            <ion-textarea type=\"text\" [(ngModel)]=\"product.description\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label>is Veg?</ion-label>\n            <ion-toggle type=\"text\" [(ngModel)]=\"product.isVeg\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>Available?</ion-label>\n            <ion-toggle type=\"text\" [(ngModel)]=\"product.isAvail\"></ion-toggle>\n          </ion-item>\n          <div class=\"ion-padding\">\n            <ion-button expand=\"block\" *ngIf=\"!isEdit\" (click)=\"add()\">Add</ion-button>\n            <ion-button expand=\"block\" *ngIf=\"isEdit\" (click)=\"update()\">Update</ion-button>\n            <ion-button expand=\"block\" color=\"danger\" fill=\"clear\" *ngIf=\"isEdit\" (click)=\"delete()\">Delete</ion-button>\n          </div>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");







var ProductsPage = /** @class */ (function () {
    function ProductsPage(afdb, common, afStorage, categoryService) {
        this.afdb = afdb;
        this.common = common;
        this.afStorage = afStorage;
        this.categoryService = categoryService;
        this.products = [];
        this.categories = [];
        this.currency = '';
        this.product = {};
        this.isEdit = false;
        this.isShow = false;
        this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].currency;
    }
    ProductsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afdb.list('/products').snapshotChanges().subscribe(function (data) {
            _this.products = [];
            data.forEach(function (p) { return _this.products.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: p.key }, p.payload.val())); });
            _this.fetchCategory();
        });
        console.log(this.products);
    };
    ProductsPage.prototype.edit = function (p) {
        this.isEdit = true;
        this.product = p;
        this.isShow = true;
    };
    ProductsPage.prototype.openEditor = function () {
        this.reset();
        this.isShow = true;
    };
    ProductsPage.prototype.closeEditor = function () {
        this.reset();
        this.isShow = false;
    };
    ProductsPage.prototype.reset = function () {
        this.isEdit = false;
        this.product = {};
        this.isShow = false;
    };
    ProductsPage.prototype.chooseFile = function () {
        document.getElementById('avatar').click();
    };
    ProductsPage.prototype.upload = function () {
        var _this = this;
        this.common.showLoader();
        var _loop_1 = function (selectedFile) {
            var path = '/products/' + Date.now() + ("_" + selectedFile.name);
            var ref = this_1.afStorage.ref(path);
            ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (data) { _this.product.photoURL = data; });
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
    ProductsPage.prototype.add = function () {
        var _this = this;
        this.afdb.database.ref('products').push(this.product).then(function (data) {
            _this.common.showToast("Added");
            _this.reset();
        }).catch(function (err) {
            console.log(err);
            _this.common.showToast("Something went wrong");
        });
    };
    ProductsPage.prototype.fetchCategory = function () {
        var _this = this;
        this.afdb.list('categories/').snapshotChanges().subscribe(function (res) {
            res.forEach(function (c) { return _this.categories.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
        });
    };
    ProductsPage.prototype.update = function () {
        var _this = this;
        this.afdb.database.ref('products/' + this.product.key).update(this.product).then(function (data) {
            console.log("Updated");
            _this.common.showToast("Updated");
            _this.reset();
        }).catch(function (err) {
            console.log(err);
            _this.common.showToast("Something went wrong");
        });
    };
    ProductsPage.prototype.delete = function () {
        var _this = this;
        this.afdb.database.ref('products/' + this.product.key).remove().then(function (data) {
            console.log("deleted");
            _this.common.showToast("Deleted");
            _this.reset();
        }).catch(function (err) {
            console.log(err);
            _this.common.showToast("Something went wrong");
        });
    };
    ProductsPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }
    ]; };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(afDb) {
        this.afDb = afDb;
        this.categories = [];
    }
    CategoryService.prototype.getAllCategories = function () {
        var _this = this;
        this.afDb.list('categories/').snapshotChanges().subscribe(function (res) {
            var tmp = [];
            res.forEach(function (c) { return tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.categories = tmp;
            return _this.categories;
        });
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module-es5.js.map