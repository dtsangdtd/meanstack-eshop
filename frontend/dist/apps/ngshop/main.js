(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+4mC":
/*!**************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home.module.ts ***!
  \**************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "dLdB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "pmcy");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "k9o9");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/header/header.component */ "sSEx");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ "TwOB");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/nav/nav.component */ "zApM");
/* harmony import */ var _products_details_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-details/product-page/product-page.component */ "p51j");
/* harmony import */ var _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../primeng/primeng.module */ "/TZt");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bluebits/ui */ "HYn3");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_10__["PrimengModule"],
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_11__["OrdersModule"],
            _bluebits_products__WEBPACK_IMPORTED_MODULE_12__["ProductsModule"],
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
            _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _products_details_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"],
        _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_10__["PrimengModule"],
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_11__["OrdersModule"],
        _bluebits_products__WEBPACK_IMPORTED_MODULE_12__["ProductsModule"],
        _bluebits_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
        _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _products_details_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductPageComponent"],
                    _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_10__["PrimengModule"],
                    _bluebits_orders__WEBPACK_IMPORTED_MODULE_11__["OrdersModule"],
                    _bluebits_products__WEBPACK_IMPORTED_MODULE_12__["ProductsModule"],
                    _bluebits_ui__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
                    _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "/+lM":
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");












function OrderSummaryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function OrderSummaryComponent_div_21_Template_p_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.navigateToCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OrderSummaryComponent {
    constructor(cartService, productService, router) {
        this.cartService = cartService;
        this.productService = productService;
        this.router = router;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isCheckout = false;
    }
    ngOnInit() {
        this._getOrderSummary();
        this.router.url.includes('checkout')
            ? (this.isCheckout = true)
            : (this.isCheckout = false);
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.endSubs$)).subscribe((cart) => {
            this.totalPrice = 0;
            cart.items.map((cartItem) => {
                this.productService
                    .getProduct(cartItem.productId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
                    .subscribe((product) => {
                    this.totalPrice += product.price * cartItem.quantity;
                });
            });
        });
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
OrderSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], decls: 22, vars: 7, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Items Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Packing & Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrderSummaryComponent_div_21_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 5, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCheckout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OrderSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'orders-order-summary',
                templateUrl: './order-summary.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _bluebits_products__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "/KYO":
/*!**********************************************!*\
  !*** ./apps/ngshop/src/app/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.component */ "dLdB");



class AppComponent {
    constructor() {
        this.title = 'ngshop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["bluebits-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bluebits-home");
    } }, directives: [_pages_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bluebits-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "/TZt":
/*!*******************************************************!*\
  !*** ./apps/ngshop/src/app/primeng/primeng.module.ts ***!
  \*******************************************************/
/*! exports provided: PrimengModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengModule", function() { return PrimengModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");








class PrimengModule {
}
PrimengModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimengModule });
PrimengModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrimengModule_Factory(t) { return new (t || PrimengModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"],
        ], primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"]], exports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimengModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"],
                ],
                exports: [
                    primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__["InputNumberModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./apps/ngshop/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My Document\AssignmentAngular\Mean Stack E-Commerce App\frontend\apps\ngshop\src\main.ts */"16di");


/***/ }),

/***/ "02PH":
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/*! exports provided: ordersRoutes, OrdersModule, Order, OrderItem, Cart, CartItem, CartItemDetail, OrdersService, CartService, ORDER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ "NvDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ordersRoutes", function() { return _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__["ordersRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__["OrdersModule"]; });

/* harmony import */ var _lib_models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/order */ "d3/B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _lib_models_order__WEBPACK_IMPORTED_MODULE_1__["Order"]; });

/* harmony import */ var _lib_models_orderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/orderItem */ "42eQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return _lib_models_orderItem__WEBPACK_IMPORTED_MODULE_2__["OrderItem"]; });

/* harmony import */ var _lib_models_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/cart */ "Sx6H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_3__["Cart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_3__["CartItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartItemDetail", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_3__["CartItemDetail"]; });

/* harmony import */ var _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/orders.service */ "CkZn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]; });

/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/cart.service */ "d6aw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]; });

/* harmony import */ var _lib_models_order_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/models/order.constants */ "gdVW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUS", function() { return _lib_models_order_constants__WEBPACK_IMPORTED_MODULE_6__["ORDER_STATUS"]; });










/***/ }),

/***/ "16di":
/*!*********************************!*\
  !*** ./apps/ngshop/src/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "bzRM");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "D0az");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "3rLv":
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "v6z4");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/localstorage.service */ "lkXw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
















function LoginComponent_small_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email invalid!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_small_17_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_small_17_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(formBuilder, authService, messageService, localstorageService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.messageService = messageService;
        this.localstorageService = localstorageService;
        this.router = router;
        this.isSubmited = false;
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    onSubmit() {
        this.isSubmited = true;
        if (this.loginFormGroup.invalid) {
            return;
        }
        const loginData = {
            email: this.loginForm.email.value,
            password: this.loginForm.password.value,
        };
        this.authService.login(loginData.email, loginData.password).subscribe((response) => {
            console.log(response);
            this.localstorageService.setToken(response.token);
            this.router.navigate(['/']);
        }, (error) => {
            if (error.status !== 400) {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error in the server please try agian later',
                });
            }
            else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.error,
                });
            }
        }, () => { });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["users-login"]], decls: 29, vars: 3, consts: [[1, "login-register"], [1, "login-register-panel"], [1, "grid-container"], [1, "grid-item"], ["src", "assets/images/login-register.jpg", "alt", ""], [3, "formGroup"], [1, "grid", "fluid", "m-4"], [1, "col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "email", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "Password"], [3, "onClick"], [1, "pi", "pi-sign-in"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 3, 2, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_25_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p-toast");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.email.invalid && ctx.isSubmited);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.password.invalid && ctx.isSubmited);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'users-login',
                templateUrl: './login.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "42eQ":
/*!*************************************************!*\
  !*** ./libs/orders/src/lib/models/orderItem.ts ***!
  \*************************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
class OrderItem {
}


/***/ }),

/***/ "661k":
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: CartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconComponent", function() { return CartIconComponent; });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe((cart) => {
            var _a;
            this.cartCount = (_a = cart === null || cart === void 0 ? void 0 : cart.items.length) !== null && _a !== void 0 ? _a : 0;
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"])); };
CartIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "danger", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "mr-2", 2, "font-size", "1.5rem", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cartCount);
    } }, directives: [primeng_badge__WEBPACK_IMPORTED_MODULE_2__["BadgeDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'orders-cart-icon',
                templateUrl: './cart-icon.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"] }]; }, null); })();


/***/ }),

/***/ "7L/a":
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/category.ts ***!
  \**************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "7Qtu":
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ThankYouComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["orders-thank-you"]], decls: 7, vars: 0, consts: [[1, "checkout-page"], [1, "thankyou-page"], ["label", "Back to shop", "routerLink", "/"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank you for Shopping with us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We have recieved your order and it will be delivered in the next 3 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["Button"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'orders-thank-you',
                templateUrl: './thank-you.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7o28":
/*!******************************************************!*\
  !*** ./apps/admin/src/app/primeng/primeng.module.ts ***!
  \******************************************************/
/*! exports provided: PrimengModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengModule", function() { return PrimengModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "ZRSf");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/colorpicker */ "bv7W");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "y1st");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/editor */ "dgC2");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fieldset */ "fk4S");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/message */ "FMpt");





















class PrimengModule {
}
PrimengModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimengModule });
PrimengModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrimengModule_Factory(t) { return new (t || PrimengModule)(); }, imports: [[
            primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
            primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
            primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
            primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
            primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]
        ], primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, { imports: [primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]], exports: [primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimengModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
                    primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                    primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
                    primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]
                ],
                exports: [
                    primeng_card__WEBPACK_IMPORTED_MODULE_1__["CardModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModule"],
                    primeng_colorpicker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                    primeng_editor__WEBPACK_IMPORTED_MODULE_13__["EditorModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_14__["TagModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_16__["FieldsetModule"],
                    primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_18__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_19__["MessageModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "CkZn":
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/services/orders.service.ts ***!
  \********************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @evn/environment */ "PIN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiURLOrder = _evn_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'orders';
    }
    getOrders() {
        return this.http.get(this.apiURLOrder);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrder, order);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.apiURLOrder}/${orderId}`);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrder}/${orderId}`);
    }
    updateOrder(orderId, orderStatus) {
        return this.http.put(`${this.apiURLOrder}/${orderId}`, orderStatus);
    }
    getCountOrder() {
        return this.http
            .get(`${this.apiURLOrder}` + '/get/count')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((objectValues) => objectValues.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrder}` + '/get/totalsales')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((objectValues) => objectValues.totalSales));
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "D0az":
/*!*******************************************!*\
  !*** ./apps/ngshop/src/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.module */ "+4mC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "/KYO");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "tdpJ");
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bluebits/ui */ "HYn3");
/* harmony import */ var _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./primeng/primeng.module */ "/TZt");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "ZJrt");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home.component */ "dLdB");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
            _bluebits_products__WEBPACK_IMPORTED_MODULE_3__["ProductsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _pages_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
            _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_11__["PrimengModule"],
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_12__["OrdersModule"],
            _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
        _bluebits_products__WEBPACK_IMPORTED_MODULE_3__["ProductsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _pages_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
        _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_11__["PrimengModule"],
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_12__["OrdersModule"],
        _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"]], exports: [_pages_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                    _bluebits_products__WEBPACK_IMPORTED_MODULE_3__["ProductsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _pages_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
                    _primeng_primeng_module__WEBPACK_IMPORTED_MODULE_11__["PrimengModule"],
                    _bluebits_orders__WEBPACK_IMPORTED_MODULE_12__["OrdersModule"],
                    _bluebits_users__WEBPACK_IMPORTED_MODULE_14__["UsersModule"],
                ],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_13__["MessageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                exports: [_pages_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "DHMQ":
/*!****************************************************!*\
  !*** ./libs/ui/src/lib/slider/slider.component.ts ***!
  \****************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["slider"]], decls: 2, vars: 0, template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "slider works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'slider',
                templateUrl: './slider.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EtvX":
/*!**************************************************************************!*\
  !*** ./libs/ui/src/lib/featured-products/featured-products.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function() { return FeaturedProductsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-item/product-item.component */ "nUv2");








function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "products-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1);
} }
class FeaturedProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
    _getFeaturedProducts() {
        this.productService
            .getProductFeatured(4)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.endSub$))
            .subscribe((products) => {
            this.products = products;
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
FeaturedProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products"], [1, "grid"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeaturedProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'featured-products',
                templateUrl: './featured-products.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _bluebits_products__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "F+dT":
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products-search/products-search.component */ "WuMT");




class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_2__["ProductsSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_2__["ProductsSearchComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_2__["ProductsSearchComponent"]],
                exports: [_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_2__["ProductsSearchComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Fgct":
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @evn/environment */ "PIN6");





class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiURLCategories = _evn_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiURLCategories);
    }
    createCategory(category) {
        return this.http.post(this.apiURLCategories, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiURLCategories}/${categoryId}`);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiURLCategories}/${categoryId}`);
    }
    updateCategory(categoryId, category) {
        return this.http.put(`${this.apiURLCategories}/${categoryId}`, category);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HYn3":
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/*! exports provided: ui, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui */ "NNZp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return _lib_ui__WEBPACK_IMPORTED_MODULE_0__["ui"]; });

/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ui.module */ "V9qr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__["UiModule"]; });





/***/ }),

/***/ "I8uz":
/*!**************************************************************************!*\
  !*** ./libs/ui/src/lib/categories-banner/categories-banner.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriesBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesBannerComponent", function() { return CategoriesBannerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function (a0) { return { backgroundColor: a0 }; };
function CategoriesBannerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/category/" + category_r1.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, category_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi pi-", category_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.name);
} }
class CategoriesBannerComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.categoryService
            .getCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.endSub$))
            .subscribe((categories) => {
            console.log(categories);
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"])); };
CategoriesBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriesBannerComponent, selectors: [["categories-banner"]], decls: 5, vars: 1, consts: [[1, "categories-banner"], [1, "grid"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"], ["routerLinkActive", "router-link-active", 1, "category", 3, "routerLink", "ngStyle"], [1, "category-icon"], [1, "category-name"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoriesBannerComponent_div_4_Template, 6, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriesBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'categories-banner',
                templateUrl: './categories-banner.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _bluebits_products__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "NNZp":
/*!*******************************!*\
  !*** ./libs/ui/src/lib/ui.ts ***!
  \*******************************/
/*! exports provided: ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
function ui() {
    return 'ui';
}


/***/ }),

/***/ "NvDY":
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/*! exports provided: ordersRoutes, OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersRoutes", function() { return ordersRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _users_src_lib_services_has_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../users/src/lib/services/has-role.guard */ "pAFJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cart.service */ "d6aw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ "661k");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/messages/messages.component */ "vUT8");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ "cP/G");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "/+lM");
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ "et1J");
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ "7Qtu");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fieldset */ "fk4S");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "y1st");

























const ordersRoutes = [
    { path: 'cart', component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__["CartPageComponent"], canActivate: [_users_src_lib_services_has_role_guard__WEBPACK_IMPORTED_MODULE_0__["HasRoleGuard"]] },
    { path: 'checkout', component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutPageComponent"] },
    { path: 'thankyou', component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"] },
];
class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function OrdersModule_Factory(t) { return new (t || OrdersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(ordersRoutes),
            primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
            primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"],
        ], primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"],
        _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__["CartPageComponent"],
        _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_13__["OrderSummaryComponent"],
        _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutPageComponent"],
        _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"]], exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"],
        _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__["CartPageComponent"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
        _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_13__["OrderSummaryComponent"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(ordersRoutes),
                    primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"],
                ],
                exports: [
                    _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"],
                    _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                    _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__["CartPageComponent"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__["InputNumberModule"],
                    _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_13__["OrderSummaryComponent"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_18__["FieldsetModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_20__["MessageModule"],
                ],
                declarations: [
                    _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"],
                    _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                    _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_10__["CartPageComponent"],
                    _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_13__["OrderSummaryComponent"],
                    _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutPageComponent"],
                    _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"],
                ],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, null); })();


/***/ }),

/***/ "OgsD":
/*!************************************************************!*\
  !*** ./libs/ui/src/lib/ui-gallery/ui-gallery.component.ts ***!
  \************************************************************/
/*! exports provided: UiGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiGalleryComponent", function() { return UiGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "background-image": a0 }; };
function UiGalleryComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiGalleryComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const imageUrl_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeSelectedImage(imageUrl_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + imageUrl_r1 + ")"));
} }
class UiGalleryComponent {
    constructor() { }
    ngOnInit() { }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
}
UiGalleryComponent.ɵfac = function UiGalleryComponent_Factory(t) { return new (t || UiGalleryComponent)(); };
UiGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiGalleryComponent, selectors: [["ui-gallery"]], inputs: { images: "images" }, decls: 6, vars: 2, consts: [[1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function UiGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UiGalleryComponent_li_5_Template, 1, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", !ctx.selectedImageUrl ? ctx.images[0] : ctx.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-gallery',
                templateUrl: './ui-gallery.component.html',
                styles: [],
            }]
    }], function () { return []; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PIN6":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://localhost:3000/api/v1/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PYQy":
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/products.ts ***!
  \**************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "RVbv":
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/*! exports provided: usersRoutes, UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersRoutes", function() { return usersRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "3rLv");
/* harmony import */ var _apps_admin_src_app_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../apps/admin/src/app/primeng/primeng.module */ "7o28");








const usersRoutes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
];
class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(usersRoutes),
            _apps_admin_src_app_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _apps_admin_src_app_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(usersRoutes),
                    _apps_admin_src_app_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_5__["PrimengModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ],
                declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sx6H":
/*!********************************************!*\
  !*** ./libs/orders/src/lib/models/cart.ts ***!
  \********************************************/
/*! exports provided: Cart, CartItem, CartItemDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemDetail", function() { return CartItemDetail; });
class Cart {
}
class CartItem {
}
class CartItemDetail {
}


/***/ }),

/***/ "TwOB":
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["ngshop-footer"]], decls: 15, vars: 0, consts: [[1, "p-grid", "footer-wrapper"], [1, "p-col-8"], [1, "p-col-4", "social"], [1, "nav"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "pi", "pi-facebook"], [1, "pi", "pi-twitter"], [1, "pi", "pi-youtube"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 1994 - 2022 E-Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-footer',
                templateUrl: './footer.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "V9qr":
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner/banner.component */ "hbts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider/slider.component */ "DHMQ");
/* harmony import */ var _categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-banner/categories-banner.component */ "I8uz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-products/featured-products.component */ "EtvX");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-item/product-item.component */ "nUv2");
/* harmony import */ var _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-gallery/ui-gallery.component */ "OgsD");











class UiModule {
}
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
        _categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesBannerComponent"],
        _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
        _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"],
        _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_9__["UiGalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
        _categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesBannerComponent"],
        primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
        _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"],
        _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_9__["UiGalleryComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
                    _categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesBannerComponent"],
                    _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
                    _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"],
                    _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_9__["UiGalleryComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                exports: [
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
                    _categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesBannerComponent"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
                    _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"],
                    _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_9__["UiGalleryComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "VoFj":
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/*! exports provided: ProductsModule, CategoriesService, ProductsService, Category, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ "F+dT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return _lib_products_module__WEBPACK_IMPORTED_MODULE_0__["ProductsModule"]; });

/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ "Fgct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]; });

/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ "d+1U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]; });

/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category */ "7L/a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _lib_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]; });

/* harmony import */ var _lib_models_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/products */ "PYQy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _lib_models_products__WEBPACK_IMPORTED_MODULE_4__["Product"]; });








/***/ }),

/***/ "WuMT":
/*!*************************************************************************************!*\
  !*** ./libs/products/src/lib/products/products-search/products-search.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function() { return ProductsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsSearchComponent.ɵfac = function ProductsSearchComponent_Factory(t) { return new (t || ProductsSearchComponent)(); };
ProductsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsSearchComponent, selectors: [["products-search"]], decls: 3, vars: 0, consts: [[1, "products-search"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "Find products", "name", "search", "id", "search", 1, "products-search-input"]], template: function ProductsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-search',
                templateUrl: './products-search.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yod6":
/*!***************************************************!*\
  !*** ./libs/users/src/lib/services/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthGuard {
    constructor(router, localstorageService) {
        this.router = router;
        this.localstorageService = localstorageService;
    }
    canActivate(route, state) {
        const token = this.localstorageService.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            console.log(tokenDecode);
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__["LocalstorageService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_0__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "ZJrt":
/*!***************************************************!*\
  !*** ./apps/ngshop/src/app/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.component */ "dLdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var libs_users_src_lib_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/users/src/lib/pages/login/login.component */ "3rLv");







const routes = [
    {
        path: 'login',
        component: libs_users_src_lib_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: '',
        component: _pages_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "aZeU":
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @evn/environment */ "PIN6");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n-iso-countries */ "Lhj3");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class UsersService {
    constructor(http) {
        this.http = http;
        this.apiURLUsers = _evn_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'users';
        i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3__["registerLocale"](__webpack_require__(/*! i18n-iso-countries/langs/en.json */ "0TwG"));
    }
    getUsers() {
        return this.http.get(this.apiURLUsers);
    }
    createUser(users) {
        return this.http.post(this.apiURLUsers, users);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURLUsers}/${userId}`);
    }
    updateUser(userId, users) {
        return this.http.put(`${this.apiURLUsers}/${userId}`, users);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURLUsers}/${userId}`);
    }
    getCountries() {
        return Object.entries(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3__["getNames"]('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1],
            };
        });
    }
    getCountry(countryKey) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_3__["getName"](countryKey, 'en');
    }
    getCountUser() {
        return this.http
            .get(`${this.apiURLUsers}` + '/get/count')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((objectValues) => objectValues.userCount));
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "bzRM":
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/environments/environment.ts ***!
  \*****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "cP/G":
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/order-summary/order-summary.component */ "/+lM");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















function CartPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CartPageComponent_div_10_Template_p_button_onClick_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const cartItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.deleteCartItem(cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p-inputNumber", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CartPageComponent_div_10_Template_p_inputNumber_ngModelChange_12_listener($event) { const cartItem_r1 = ctx.$implicit; return cartItem_r1.quantity = $event; })("onInput", function CartPageComponent_div_10_Template_p_inputNumber_onInput_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const cartItem_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.updateCartItemQuantity($event, cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Subtotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", cartItem_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cartItem_r1 == null ? null : cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, cartItem_r1 == null ? null : cartItem_r1.product.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showButtons", true)("inputId", cartItem_r1.product.id)("min", 1)("max", 100)("ngModel", cartItem_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, cartItem_r1.product.price * cartItem_r1.quantity), "");
} }
class CartPageComponent {
    constructor(router, cartService, productService) {
        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.cartItemsDetail = [];
        this.cartCount = 0;
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._getCartDetails();
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
    _getCartDetails() {
        this.cartService.cart$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.endSub$))
            .subscribe((resCart) => {
            var _a;
            this.cartItemsDetail = [];
            this.cartCount = (_a = resCart === null || resCart === void 0 ? void 0 : resCart.items.length) !== null && _a !== void 0 ? _a : 0;
            resCart.items.forEach((cartItem) => {
                this.productService
                    .getProduct(cartItem.productId)
                    .subscribe((resProduct) => {
                    this.cartItemsDetail.push({
                        product: resProduct,
                        quantity: cartItem.quantity,
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }
    updateCartItemQuantity(event, cartItem) {
        this.cartService.setCartItem({
            productId: cartItem.product.id,
            quantity: event.value,
        }, true);
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_5__["ProductsService"])); };
CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 13, vars: 2, consts: [[1, "cart-page"], [1, "grid"], [1, "col-8"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", "styleClass", "p-button-outlined", 3, "onClick"], [1, "cart-shipping", "mb-5"], [1, "cart-item"], ["class", "grid", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "col-2", "cart-item-image"], ["alt", "", 3, "src"], [1, "col-6"], [1, "cart-item-name"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", "styleClass", "p-button-danger p-button-outlined", 3, "onClick"], [1, "col-4", "cart-item-quantity"], ["mode", "decimal", 3, "showButtons", "inputId", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CartPageComponent_Template_p_button_onClick_3_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Shipping after the payment, Delivery time: 1 to 4 working day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CartPageComponent_div_10_Template, 18, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("My Cart: ", ctx.cartCount, " Items(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cartItemsDetail);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__["OrderSummaryComponent"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'orders-cart-page',
                templateUrl: './cart-page.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _bluebits_products__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "d+1U":
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @evn/environment */ "PIN6");






class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURLProducts = _evn_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'products';
    }
    getProducts(categoryFilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (categoryFilter) {
            params = params.append('categories', categoryFilter.join(','));
        }
        return this.http.get(this.apiURLProducts, { params: params });
    }
    createProduct(productData) {
        return this.http.post(this.apiURLProducts, productData);
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    updateProduct(productId, productData) {
        return this.http.put(`${this.apiURLProducts}/${productId}`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiURLProducts}/${productId}`);
    }
    getCountProduct() {
        return this.http
            .get(`${this.apiURLProducts}` + '/get/count')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((objectValues) => objectValues.productCount));
    }
    getProductFeatured(count) {
        return this.http.get(`${this.apiURLProducts}/get/featured/${count}`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "d3/B":
/*!*********************************************!*\
  !*** ./libs/orders/src/lib/models/order.ts ***!
  \*********************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
}


/***/ }),

/***/ "d6aw":
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.getCart());
    }
    initCartLocalStorage() {
        const cart = this.getCart();
        if (!cart) {
            const initCart = {
                items: [],
            };
            localStorage.setItem('cart', JSON.stringify(initCart));
        }
    }
    getCart() {
        const cartJsonString = localStorage.getItem('cart');
        const cart = JSON.parse(cartJsonString);
        return cart;
    }
    emptyCart() {
        const initCart = {
            items: [],
        };
        localStorage.setItem('cart', JSON.stringify(initCart));
    }
    setCartItem(cartItem, updateCartItem) {
        let cart = this.getCart();
        const cartItemExist = cart.items.find((items) => items.productId == cartItem.productId);
        if (cartItemExist) {
            cart.items.map((items) => {
                if (items.productId === cartItem.productId) {
                    if (updateCartItem) {
                        items.quantity = cartItem.quantity;
                    }
                    else {
                        items.quantity = items.quantity + cartItem.quantity;
                    }
                    return items;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cart$.next(cart);
        return cart;
    }
    // setCartItem(CartItem: CartItem): Cart {
    //   let cart = this.getCart();
    //   let CartExist = cart.items.find(
    //     (items) => items.productId === CartItem.productId
    //   );
    //   if (CartExist) {
    //     cart.items.map((items) => {
    //       if (items.productId === CartItem.productId) {
    //         items.quantity = items.quantity + CartItem.quantity;
    //         return items;
    //       }
    //     });
    //   } else {
    //     cart.items.push(CartItem);
    //   }
    //   localStorage.setItem('cart', JSON.stringify(cart));
    //   return cart;
    // }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
        cart.items = newCart;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cart$.next(cart);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dLdB":
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_orders_src_lib_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/orders/src/lib/components/messages/messages.component */ "vUT8");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ "sSEx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.component */ "TwOB");






class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["bluebits-home"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "orders-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngshop-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngshop-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_libs_orders_src_lib_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bluebits-home',
                templateUrl: './home.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "et1J":
/*!****************************************************************************!*\
  !*** ./libs/orders/src/lib/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/orders.service */ "CkZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "y1st");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/order-summary/order-summary.component */ "/+lM");


















function CheckoutPageComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutPageComponent_small_20_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckoutPageComponent_small_20_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.email);
} }
function CheckoutPageComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Apartment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Zip is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CheckoutPageComponent {
    constructor(router, formBuilder, userService, cartService, orderService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.isSubmitted = false;
        this.orderItems = [];
        this.userId = '611b8485052fc59ea8734cf2';
        this.countries = [];
    }
    ngOnInit() {
        this._initForm();
        this._getCartItems();
        this._getContries();
    }
    _initForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`,
        };
        this.orderService.createOrder(order).subscribe(() => {
            this.cartService.emptyCart();
            this.router.navigate(['/thankyou']);
        });
    }
    _getContries() {
        this.countries = this.userService.getCountries();
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
    _getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) => {
            return {
                product: item.productId,
                quantity: item.quantity,
            };
        });
        console.log(this.orderItems);
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__["OrdersService"])); };
CheckoutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 68, vars: 12, consts: [[1, "checkout-page"], ["label", "Back to cart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form"], [1, "col-8"], [3, "formGroup"], [1, "grid"], [1, "p-field", "col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], [1, "fluid", "formgrid", "grid"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], ["for", "country"], ["formControlName", "country", "optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], [1, "col-4"], [1, "checkout-button", "mt-4"], ["label", "Place-Order", 3, "onClick"], [1, "p-error"], [4, "ngIf"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CheckoutPageComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CheckoutPageComponent_small_20_Template, 3, 2, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "p-inputMask", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CheckoutPageComponent_small_27_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CheckoutPageComponent_small_35_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CheckoutPageComponent_small_42_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CheckoutPageComponent_small_49_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, CheckoutPageComponent_small_56_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "p-dropdown", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, CheckoutPageComponent_small_63_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_67_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.street.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.apartment.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.zip.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.city.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.country.invalid && ctx.isSubmitted);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMask"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_11__["OrderSummaryComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckoutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'orders-checkout-page',
                templateUrl: './checkout-page.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _bluebits_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_0__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "gdVW":
/*!*******************************************************!*\
  !*** ./libs/orders/src/lib/models/order.constants.ts ***!
  \*******************************************************/
/*! exports provided: ORDER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUS", function() { return ORDER_STATUS; });
const ORDER_STATUS = {
    0: {
        lable: 'Pending',
        color: 'primary',
    },
    1: {
        lable: 'Processed',
        color: 'warning',
    },
    2: {
        lable: 'Shipped',
        color: 'warning',
    },
    3: {
        lable: 'Delivered',
        color: 'success',
    },
    4: {
        lable: 'Failed',
        color: 'danger',
    },
};


/***/ }),

/***/ "hbts":
/*!****************************************************!*\
  !*** ./libs/ui/src/lib/banner/banner.component.ts ***!
  \****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");



class BannerComponent {
    constructor() { }
    ngOnInit() { }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["ui-banner"]], decls: 10, vars: 0, consts: [[1, "banner"], [1, "grid"], [1, "col-5", "col-offset-1", "banner-text"], ["styleClass", "mt-4 banner-button", "label", "See more", "icon", "pi pi-chevron-right", "iconPos", "right"], [1, "col-6", "banner-image", "animate__animated", "animate__slideInLeft"], ["src", "assets/images/banner-image.svg", "alt", "", "srcset", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Best Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "in Every Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["Button"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-banner',
                templateUrl: './banner.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k9o9":
/*!**************************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _libs_ui_src_lib_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/product-item/product-item.component */ "nUv2");












function ProductListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const category_r3 = ctx.$implicit; return category_r3.checked = $event; })("onChange", function ProductListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.categoryFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", category_r3.checked)("inputId", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r3.name);
} }
function ProductListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductListComponent_div_2_div_3_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function ProductListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "products-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!ctx_r1.isCategoryPage ? "col-4" : "col-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r7);
} }
class ProductListComponent {
    constructor(productService, categoiesService, route) {
        this.productService = productService;
        this.categoiesService = categoiesService;
        this.route = route;
        this.products = [];
        this.categories = [];
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isCategoryPage = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            let id = params.categoryid;
            id ? this._getProducts([id]) : this._getProducts();
            id ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
        });
        this._getCategories();
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
    categoryFilter() {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category.id);
        this._getProducts(selectedCategories);
    }
    _getProducts(categoryFilter) {
        this.productService
            .getProducts(categoryFilter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.endSub$))
            .subscribe((products) => {
            this.products = products;
        });
    }
    _getCategories() {
        this.categoiesService
            .getCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.endSub$))
            .subscribe((categories) => {
            this.categories = categories;
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["bluebits-product-list"]], decls: 6, vars: 4, consts: [[1, "products-page"], [1, "grid"], ["class", "col-3", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "col-3"], ["class", "field-checkbox", 4, "ngFor", "ngForOf"], [1, "field-checkbox"], ["binary", "true", 3, "ngModel", "inputId", "ngModelChange", "onChange"], [3, "for"], [3, "product"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProductListComponent_div_5_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCategoryPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!ctx.isCategoryPage ? "col-9" : "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _libs_ui_src_lib_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'bluebits-product-list',
                templateUrl: './product-list.component.html',
            }]
    }], function () { return [{ type: _bluebits_products__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _bluebits_products__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "l0/T":
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @evn/environment */ "PIN6");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class JwtInterceptor {
    constructor(localstorageService) {
        this.localstorageService = localstorageService;
    }
    intercept(request, next) {
        const token = this.localstorageService.getToken();
        const isAPIUrl = request.url.startsWith(_evn_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL);
        if (token && isAPIUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "lSKE":
/*!********************************************!*\
  !*** ./libs/users/src/lib/models/users.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "lkXw":
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/services/localstorage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN = 'jwtToken';
class LocalstorageService {
    constructor() { }
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalstorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nUv2":
/*!****************************************************************!*\
  !*** ./libs/ui/src/lib/product-item/product-item.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");









function ProductItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ProductItemComponent_div_0_Template_p_button_onClick_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/products/" + ctx_r0.product.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r0.product.price));
} }
class ProductItemComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    ngOnInit() { }
    addProductToCart() {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            return this.router.navigate(['/login']);
        }
        const cartItem = {
            productId: this.product.id,
            quantity: 1,
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["products-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], ["alt", "", 1, "image", 3, "src"], [1, "name", 3, "routerLink"], [1, "price"], ["label", "Add to cart", "styleClass", "mt-4 add-to-cart", "icon", "pi pi-shopping-cart", "iconPos", "right", 3, "onClick"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductItemComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-item',
                templateUrl: './product-item.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "p51j":
/*!*******************************************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/products-details/product-page/product-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _libs_ui_src_lib_ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/ui/src/lib/ui-gallery/ui-gallery.component */ "OgsD");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
















class ProductPageComponent {
    constructor(productService, route, cartService) {
        this.productService = productService;
        this.route = route;
        this.cartService = cartService;
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.quantity = 1;
        this.images = [];
    }
    ngOnInit() {
        this._getProduct();
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
    onAddToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: this.quantity,
        };
        this.cartService.setCartItem(cartItem);
    }
    _getProduct() {
        this.route.params.subscribe((params) => {
            let productId = params.productId;
            if (productId) {
                this.productService
                    .getProduct(productId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.endSub$))
                    .subscribe((product) => {
                    this.product = product;
                    this.images = product.images;
                });
            }
        });
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_products__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
ProductPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["products-page"]], decls: 29, vars: 17, consts: [[1, "product-page"], [1, "grid"], [1, "col-6"], [3, "images"], [1, "col-6", "product"], [1, "product-name"], [1, "product-desc"], [1, "product-rating"], ["disabled", "true", "stars", "5", 3, "ngModel", "cancel"], [1, "product-price"], [1, "price-before"], [1, "product-quantity"], [1, "p-field", "col-12", "md-3", "p-0"], ["for", "quantity"], ["mode", "decimal", 3, "ngModel", "showButtons", "inputId", "min", "max", "ngModelChange"], [1, "product-action"], ["pButton", "", "pRipple", "", "label", "Buy Now", 1, "p-button-outlined", "p-button-rounded", "p-button-danger"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", "icon", "pi pi-shopping-cart", 1, "ml-2", "p-button-outlined", "p-button-rounded", "p-button-danger", 3, "click"], [1, "col-12", "richDesciption"], [3, "innerHTML"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ui-gallery", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-rating", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p-inputNumber", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_Template_p_inputNumber_ngModelChange_22_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductPageComponent_Template_button_click_25_listener() { return ctx.onAddToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.product == null ? null : ctx.product.rating)("cancel", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, ctx.product == null ? null : ctx.product.price), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 15, (ctx.product == null ? null : ctx.product.price) + 18));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.quantity)("showButtons", true)("inputId", ctx.quantity)("min", 1)("max", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.product == null ? null : ctx.product.richDescription, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, directives: [_libs_ui_src_lib_ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_6__["UiGalleryComponent"], primeng_rating__WEBPACK_IMPORTED_MODULE_7__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumber"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProductPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'products-page',
                templateUrl: './product-page.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _bluebits_products__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_5__["CartService"] }]; }, null); })();


/***/ }),

/***/ "pAFJ":
/*!*******************************************************!*\
  !*** ./libs/users/src/lib/services/has-role.guard.ts ***!
  \*******************************************************/
/*! exports provided: HasRoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleGuard", function() { return HasRoleGuard; });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HasRoleGuard {
    constructor(router, localstorageService) {
        this.router = router;
        this.localstorageService = localstorageService;
    }
    canActivate(route, state) {
        const token = this.localstorageService.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            console.log(tokenDecode);
            if (!tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
HasRoleGuard.ɵfac = function HasRoleGuard_Factory(t) { return new (t || HasRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__["LocalstorageService"])); };
HasRoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HasRoleGuard, factory: HasRoleGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HasRoleGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_0__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "pmcy":
/*!**********************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "k9o9");
/* harmony import */ var _products_details_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-details/product-page/product-page.component */ "p51j");






const routes = [
    {
        path: 'products',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
    },
    { path: 'category/:categoryid', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
    { path: 'products/:productId', component: _products_details_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_3__["ProductPageComponent"] },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qdGH":
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/*! exports provided: usersRoutes, UsersModule, User, UsersService, AuthGuard, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ "RVbv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersRoutes", function() { return _lib_users_module__WEBPACK_IMPORTED_MODULE_0__["usersRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return _lib_users_module__WEBPACK_IMPORTED_MODULE_0__["UsersModule"]; });

/* harmony import */ var _lib_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/users */ "lSKE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _lib_models_users__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/users.service */ "aZeU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _lib_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]; });

/* harmony import */ var _lib_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/auth.guard */ "Yod6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });

/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ "l0/T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });








/***/ }),

/***/ "sSEx":
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_products_src_lib_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/products/products-search/products-search.component */ "WuMT");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "zApM");
/* harmony import */ var _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/orders/src/lib/components/cart-icon/cart-icon.component */ "661k");





class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ngshop-header"]], decls: 11, vars: 0, consts: [[1, "grid"], [1, "col-3"], ["src", "../../../assets/images/logo.png", "alt", "", 1, "logo"], [1, "col-4"], [1, "col-3", "col-offset-1", "m-5", "p-3"], [1, "col-1", "mt-5", "p-3"], [1, "pi", "pi-user", "mr-1", 2, "font-size", "1.5rem"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "products-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngshop-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "orders-cart-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_libs_products_src_lib_products_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__["ProductsSearchComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_3__["CartIconComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-header',
                templateUrl: './header.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tdpJ":
/*!********************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_ui_src_lib_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/banner/banner.component */ "hbts");
/* harmony import */ var _libs_ui_src_lib_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/categories-banner/categories-banner.component */ "I8uz");
/* harmony import */ var _libs_ui_src_lib_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/featured-products/featured-products.component */ "EtvX");





class HomePageComponent {
    constructor() { }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["ngshop-home-page"]], decls: 3, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ui-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "categories-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "featured-products");
    } }, directives: [_libs_ui_src_lib_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _libs_ui_src_lib_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesBannerComponent"], _libs_ui_src_lib_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__["FeaturedProductsComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-home-page',
                templateUrl: './home-page.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v6z4":
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _evn_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @evn/environment */ "PIN6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");










class AuthService {
    constructor(http, localstorageService, router) {
        this.http = http;
        this.localstorageService = localstorageService;
        this.router = router;
        this.apiURLUsers = _evn_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, {
            email: email,
            password: password,
        });
    }
    logout() {
        this.localstorageService.removeToken();
        this.router.navigate(['/login']);
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "vUT8":
/*!***********************************************************************!*\
  !*** ./libs/orders/src/lib/components/messages/messages.component.ts ***!
  \***********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ "Gxio");







class MessagesComponent {
    constructor(messageService, cartService) {
        this.messageService = messageService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'successfull',
                detail: `Cart is Updated!`,
            });
        });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["orders-messages"]], decls: 1, vars: 0, consts: [["position", "top-right"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__["Toast"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'orders-messages',
                templateUrl: './messages.component.html',
                styles: [],
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, null); })();


/***/ }),

/***/ "xIsW":
/*!******************************************************************!*\
  !*** ./apps/ngshop/$$_lazy_route_resource lazy namespace object ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "xIsW";

/***/ }),

/***/ "zApM":
/*!*********************************************************!*\
  !*** ./apps/ngshop/src/app/shared/nav/nav.component.ts ***!
  \*********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["ngshop-nav"]], decls: 10, vars: 0, consts: [[1, "nav"], ["routerLink", "/"], ["routerLink", "/products"], ["routerLink", "/contact"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-nav',
                templateUrl: './nav.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map