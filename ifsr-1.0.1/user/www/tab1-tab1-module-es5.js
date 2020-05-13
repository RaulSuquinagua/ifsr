(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'HOME' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div>\n    <div class=\"category-slides\" *ngIf=\"banners.length !=0 \">\n      <div *ngFor=\"let b of banners\" class=\"slide\">\n        <img src=\"{{b.url}}\" style=\"height: 120px\" />\n      </div>\n    </div>\n    <div class=\"category-slides\" *ngIf=\"banners.length ==0 \">\n      <div *ngFor=\"let x of [].constructor(4)\" class=\"slide\">\n        <ion-skeleton-text animated style=\"height: 120px;width:120px\"></ion-skeleton-text>\n      </div>\n    </div>\n\n  </div>\n  <div>\n    <h5 *ngIf=\"categories.length != 0\">Categories</h5>\n    <div class=\"category-slides\">\n      <div class=\"category-slide\" *ngFor=\"let c of categories\" (click)=\"filter(c)\">\n        <img src=\"{{c.photoURL}}\" />\n        <h3>{{c.name}}</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"filter-card\">\n    <div>\n      <h5>Dishes <span *ngIf=\"products.length != allProducts.length\">({{selectedCategory}})</span></h5>\n      <p *ngIf=\"products.length != allProducts.length\">{{products.length}} items found </p>\n    </div>\n    <div>\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"resetProduct()\" *ngIf=\"products.length != allProducts.length\">Reset\n      </ion-button>\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row *ngIf=\"products.length == 0\">\n      <ion-col size=\"6\" *ngFor=\"let x of [].constructor(4)\" class=\"product-card\">\n        <ion-skeleton-text animated style=\"height: 160px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%;\"></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"products.length != 0\">\n      <ion-col size=\"6\" *ngFor=\"let product of products\" class=\"product-card\">\n        <img src=\"{{product.photoURL}}\" onerror=\"this.src='http://placehold.it/500x500'\" />\n        <h3 class=\"product-name\">{{product.name}}</h3>\n        <div class=\"add-cart\">\n          <p class=\"product-price\">{{currency}} {{product.price}}</p>\n          <ion-button size=\"small\" fill=\"solid\" (click)=\"addToCart(product)\">+</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-col {\n  padding: 12px;\n}\n\nion-button {\n  --border-radius: 4px;\n}\n\nion-badge {\n  position: absolute;\n  margin-top: -0.3rem;\n}\n\n.slide {\n  margin: 4px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.category-slides {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.category-slide {\n  margin: 4px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.category-slide img {\n  height: 60px;\n  width: 60px;\n}\n\n.category-slide h3 {\n  font-size: 12px;\n  margin: 8px 0px;\n}\n\n.category-slide img {\n  border-radius: 200px;\n  padding: 2px;\n  border: 2px solid #fdcc00;\n}\n\n.product-card img {\n  border-radius: 8px;\n}\n\n.product-card h3 {\n  font-weight: 600;\n  color: #333;\n  font-size: 16px;\n  margin: 4px 0px;\n}\n\n.product-card p {\n  margin: 0;\n  color: #4caf50;\n}\n\n.add-cart {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.filter-card p {\n  margin: 4px 0px;\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXHJhdWxzXFxPbmVEcml2ZVxcRGVza3RvcFxcdmVyc2lvbiAzXFxpZnNyLTEuMC4xXFx1c2VyL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDQyxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR0Q7O0FEREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNPRjs7QURMQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FDUUY7O0FETkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY29se1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLWJhZGdle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0wLjNyZW07XG59XG5cbi5zbGlkZXtcbiAgbWFyZ2luOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmNhdGVnb3J5LXNsaWRlc3tcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2F0ZWdvcnktc2xpZGV7XG4gbWFyZ2luOiA0cHg7XG4gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBhbGlnbi1pdGVtczogY2VudGVyO1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhdGVnb3J5LXNsaWRlIGltZ3tcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cbi5jYXRlZ29yeS1zbGlkZSBoM3tcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46OHB4IDBweDtcbn1cbi5jYXRlZ29yeS1zbGlkZSBpbWd7XG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZGNjMDA7XG59XG5cbi5wcm9kdWN0LWNhcmQgaW1ne1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJvZHVjdC1jYXJkIGgze1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAwcHg7XG59XG4ucHJvZHVjdC1jYXJkIHB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IzRjYWY1MFxufVxuLmFkZC1jYXJ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmlsdGVyLWNhcmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5maWx0ZXItY2FyZCBwe1xuICBtYXJnaW46IDRweCAwcHg7XG4gIGNvbG9yOiAjNzc3O1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMC4zcmVtO1xufVxuXG4uc2xpZGUge1xuICBtYXJnaW46IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jYXRlZ29yeS1zbGlkZXMge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNhdGVnb3J5LXNsaWRlIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhdGVnb3J5LXNsaWRlIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5jYXRlZ29yeS1zbGlkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuXG4uY2F0ZWdvcnktc2xpZGUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZkY2MwMDtcbn1cblxuLnByb2R1Y3QtY2FyZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5wcm9kdWN0LWNhcmQgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDRweCAwcHg7XG59XG5cbi5wcm9kdWN0LWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5hZGQtY2FydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbHRlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVyLWNhcmQgcCB7XG4gIG1hcmdpbjogNHB4IDBweDtcbiAgY29sb3I6ICM3Nzc7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");







var Tab1Page = /** @class */ (function () {
    function Tab1Page(afdb, cartService, common, zone, afAuth) {
        var _this = this;
        this.afdb = afdb;
        this.cartService = cartService;
        this.common = common;
        this.zone = zone;
        this.afAuth = afAuth;
        this.allProducts = [];
        this.products = [];
        this.currency = '';
        this.cartCount = 0;
        this.categories = [];
        this.banners = [];
        this.selectedCategory = '';
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user != null) {
                _this.getProducts();
                _this.currency = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].currency;
                _this.cartService.calculateTotal().subscribe(function (data) { return _this.zone.run(function () { return _this.cartCount = data.totalQty; }); });
            }
        });
    }
    Tab1Page.prototype.getProducts = function () {
        var _this = this;
        this.afdb.list('/products').snapshotChanges().subscribe(function (data) {
            var tmp = [];
            data.forEach(function (product) {
                var p = product.payload.val();
                if (p.isAvail == true || p.isAvail == "true") {
                    tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: product.key }, product.payload.val()));
                }
            });
            _this.allProducts = tmp;
            _this.products = tmp;
            _this.fetchCategory();
        });
    };
    Tab1Page.prototype.fetchCategory = function () {
        var _this = this;
        this.afdb.list('categories/').snapshotChanges().subscribe(function (res) {
            console.log(res);
            var tmp = [];
            res.forEach(function (c) { return tmp.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
            _this.categories = tmp;
            _this.fetchBanners();
        });
    };
    Tab1Page.prototype.fetchBanners = function () {
        var _this = this;
        this.afdb.list('banners/').snapshotChanges().subscribe(function (res) {
            console.log(res);
            _this.banners = [];
            res.forEach(function (c) { return _this.banners.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.key }, c.payload.val())); });
        });
    };
    Tab1Page.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    Tab1Page.prototype.filter = function (c) {
        this.products = this.allProducts;
        this.selectedCategory = c.name;
        this.products = this.products.filter(function (p) { return p.category == c.key; });
    };
    Tab1Page.prototype.resetProduct = function () {
        this.products = this.allProducts;
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map