webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".text {\r\n  font-family: Arial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_site_routing_public_site_routing_module__ = __webpack_require__("./src/app/public-site-routing/public-site-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authenticated_portal_routing_authenticated_portal_routing_module__ = __webpack_require__("./src/app/authenticated-portal-routing/authenticated-portal-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_site_public_site_module__ = __webpack_require__("./src/app/public-site/public-site.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authenticated_portal_authenticated_portal_module__ = __webpack_require__("./src/app/authenticated-portal/authenticated-portal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_common_oauth2_http_oauth2_http_request_interceptor_service__ = __webpack_require__("./src/app/site-common/oauth2-http/oauth2-http-request-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var publicRoutes = [
    { path: '', redirectTo: '/public/welcome', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__public_site_routing_public_site_routing_module__["a" /* PublicSiteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__authenticated_portal_routing_authenticated_portal_routing_module__["a" /* AuthenticatedPortalRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__public_site_public_site_module__["a" /* PublicSiteModule */],
                __WEBPACK_IMPORTED_MODULE_8__authenticated_portal_authenticated_portal_module__["a" /* AuthenticatedPortalModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(publicRoutes)
            ],
            providers: [
                [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                        useClass: __WEBPACK_IMPORTED_MODULE_10__site_common_oauth2_http_oauth2_http_request_interceptor_service__["a" /* Oauth2HttpRequestInterceptorService */],
                        multi: true }]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticated-portal-routing/authenticated-portal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedPortalRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticated_portal_authenticated_portal_module__ = __webpack_require__("./src/app/authenticated-portal/authenticated-portal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticated_portal_authenticated_portal_page_authenticated_portal_page_component__ = __webpack_require__("./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authenticated_portal_report_enquiry_report_enquiry_module__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authenticated_portal_report_enquiry_report_enquiry_page_report_enquiry_page_component__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_common_security_require_auth_route_guard__ = __webpack_require__("./src/app/site-common/security/require-auth-route-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_4__authenticated_portal_authenticated_portal_page_authenticated_portal_page_component__["a" /* AuthenticatedPortalPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__site_common_security_require_auth_route_guard__["a" /* RequireAuthRouteGuard */]],
        children: [
            { path: 'report',
                component: __WEBPACK_IMPORTED_MODULE_6__authenticated_portal_report_enquiry_report_enquiry_page_report_enquiry_page_component__["a" /* ReportEnquiryPageComponent */],
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_7__site_common_security_require_auth_route_guard__["a" /* RequireAuthRouteGuard */]] },
            { path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__authenticated_portal_report_enquiry_report_enquiry_page_report_enquiry_page_component__["a" /* ReportEnquiryPageComponent */],
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_7__site_common_security_require_auth_route_guard__["a" /* RequireAuthRouteGuard */]] }
        ]
    }
];
var AuthenticatedPortalRoutingModule = /** @class */ (function () {
    function AuthenticatedPortalRoutingModule() {
    }
    AuthenticatedPortalRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__authenticated_portal_authenticated_portal_module__["a" /* AuthenticatedPortalModule */],
                __WEBPACK_IMPORTED_MODULE_5__authenticated_portal_report_enquiry_report_enquiry_module__["a" /* ReportEnquiryModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_7__site_common_security_require_auth_route_guard__["a" /* RequireAuthRouteGuard */]]
        })
    ], AuthenticatedPortalRoutingModule);
    return AuthenticatedPortalRoutingModule;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-div {\r\n  float:right;\r\n}\r\n\r\n.text {\r\n  font-family: Arial;\r\n}\r\n\r\n.action-link {\r\n  cursor:pointer;\r\n  color:blue;\r\n  text-decoration:underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-div\">\n  <a (click)=\"logout()\" class=\"text action-link\">logout</a>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedPortalHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_common_authentication_authentication_service__ = __webpack_require__("./src/app/site-common/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatedPortalHeaderComponent = /** @class */ (function () {
    function AuthenticatedPortalHeaderComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthenticatedPortalHeaderComponent.prototype.ngOnInit = function () {
    };
    AuthenticatedPortalHeaderComponent.prototype.logout = function () {
        console.log("AuthenticatedPortalHeaderComponent.logout() starts.");
        this.authenticationService.logout(this.logoutSuccess.bind(this), this.logoutFail);
    };
    AuthenticatedPortalHeaderComponent.prototype.logoutSuccess = function () {
        console.log("AuthenticatedPortalHeaderComponent.logoutSuccess() starts.");
        this.router.navigate(['/']);
    };
    AuthenticatedPortalHeaderComponent.prototype.logoutFail = function (e) {
        console.error("AuthenticatedPortalHeaderComponent.logoutFail() - e: " + JSON.stringify(e));
        if (e.hasOwnProperty("errorMessage")) {
            alert(e['errorMessage']);
        }
        else {
            alert("Logout failed, please try again later.");
        }
    };
    AuthenticatedPortalHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authenticated-portal-header',
            template: __webpack_require__("./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.html"),
            styles: [__webpack_require__("./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__site_common_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], AuthenticatedPortalHeaderComponent);
    return AuthenticatedPortalHeaderComponent;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n  float:left;\r\n  width:100%;\r\n  border-bottom:1px solid;\r\n}\r\n\r\n.content{\r\n  float:left;\r\n  width:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"authenticatedPortalHeader\" class=\"header\">\n    <app-authenticated-portal-header></app-authenticated-portal-header>\n  </div>\n  <div id=\"authenticatedNavContent\" class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedPortalPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticatedPortalPageComponent = /** @class */ (function () {
    function AuthenticatedPortalPageComponent() {
    }
    AuthenticatedPortalPageComponent.prototype.ngOnInit = function () {
    };
    AuthenticatedPortalPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authenticated-portal-page',
            template: __webpack_require__("./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.html"),
            styles: [__webpack_require__("./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticatedPortalPageComponent);
    return AuthenticatedPortalPageComponent;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/authenticated-portal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedPortalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticated_portal_header_authenticated_portal_header_component__ = __webpack_require__("./src/app/authenticated-portal/authenticated-portal-header/authenticated-portal-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticated_portal_page_authenticated_portal_page_component__ = __webpack_require__("./src/app/authenticated-portal/authenticated-portal-page/authenticated-portal-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_enquiry_report_enquiry_module__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_common_authentication_authentication_module__ = __webpack_require__("./src/app/site-common/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_common_authentication_authentication_service__ = __webpack_require__("./src/app/site-common/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthenticatedPortalModule = /** @class */ (function () {
    function AuthenticatedPortalModule() {
    }
    AuthenticatedPortalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__site_common_authentication_authentication_module__["a" /* AuthenticationModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__authenticated_portal_page_authenticated_portal_page_component__["a" /* AuthenticatedPortalPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__report_enquiry_report_enquiry_module__["a" /* ReportEnquiryModule */],
                __WEBPACK_IMPORTED_MODULE_3__authenticated_portal_header_authenticated_portal_header_component__["a" /* AuthenticatedPortalHeaderComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__authenticated_portal_header_authenticated_portal_header_component__["a" /* AuthenticatedPortalHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__authenticated_portal_page_authenticated_portal_page_component__["a" /* AuthenticatedPortalPageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__site_common_authentication_authentication_service__["a" /* AuthenticationService */]]
        })
    ], AuthenticatedPortalModule);
    return AuthenticatedPortalModule;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.css":
/***/ (function(module, exports) {

module.exports = ".text {\r\n  font-family: Arial;\r\n}\r\n\r\n.input-group {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.division-separator {\r\n  border-top: #a9a9a9 solid 1px;\r\n}\r\n\r\n.data-column {\r\n  text-align: center;\r\n}\r\n\r\n.website-column {\r\n  width:150px;\r\n}\r\n\r\n.visit-column {\r\n  width:100px;\r\n}\r\n\r\n.visit-date-column {\r\n  width:150px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"text\">Website Visit Report Enquiry</h2>\n  <div>\n    <div class=\"input-group\">\n      <label class=\"text\">Select a date to enquire:</label>\n      <select id=\"dateSelect\" name=\"dateSelect\" [(ngModel)]=\"selectedDate\" (change)=\"getReportByDates()\">\n        <option value=\"\" class=\"text\">Please select...</option>\n        <option *ngFor=\"let date of (dates | async)\" [ngValue]=\"date\" class=\"text\">{{date}}</option>\n      </select>\n    </div>\n    <div *ngIf=\"(reports != null) && (reports | async).length > 0\" class=\"division-separator\">\n      <table>\n        <tr>\n          <th class=\"website-column data-column\">Website:</th>\n          <th class=\"visit-column data-column\">Visits:</th>\n          <th class=\"visit-date-column data-column\">Visit Date:</th>\n        </tr>\n        <tr *ngFor=\"let report of (reports | async)\">\n          <td class=\"website-column data-column\">{{report.website}}</td>\n          <td class=\"visit-column data-column\">{{report.visit}}</td>\n          <td class=\"visit-date-column data-column\">{{report.visitDate | date: 'yyyy-MM-dd'}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEnquiryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_enquiry_service__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportEnquiryPageComponent = /** @class */ (function () {
    function ReportEnquiryPageComponent(reportEnquiryService) {
        this.reportEnquiryService = reportEnquiryService;
    }
    ReportEnquiryPageComponent.prototype.ngOnInit = function () {
        this.selectedDate = "";
        this.reports = null;
        this.dates = this.reportEnquiryService.getAllDates(this.getAllDatesSuccessCallBack.bind(this), this.getAllDatesFailCallBack);
    };
    ReportEnquiryPageComponent.prototype.getAllDatesSuccessCallBack = function (datesResponse) {
        console.log("ReportEnquiryPageComponent.getAllDatesSuccessCallBack() - datesResponse: " + JSON.stringify(datesResponse));
    };
    ReportEnquiryPageComponent.prototype.getAllDatesFailCallBack = function (error) {
        console.error("ReportEnquiryPageComponent.getAllDatesFailCallBack() - error: " + JSON.stringify(error));
        if (error.hasOwnProperty("errorMessage")) {
            alert(error['errorMessage']);
        }
        else {
            alert("Report date loading failed, please try again later.");
        }
    };
    ReportEnquiryPageComponent.prototype.getReportByDates = function () {
        if ((this.selectedDate) && !(/^\s*$/.test(this.selectedDate))) {
            this.reports = this.reportEnquiryService.getReportsByDate(this.selectedDate, this.getReportByDatesSuccessCallBack.bind(this), this.getReportByDatesFailCallBack);
        }
        else {
            this.reports = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
        }
    };
    ReportEnquiryPageComponent.prototype.getReportByDatesSuccessCallBack = function (response) {
        console.log("ReportEnquiryPageComponent.getReportByDatesSuccessCallBack() - response: " + JSON.stringify(response));
    };
    ReportEnquiryPageComponent.prototype.getReportByDatesFailCallBack = function (error) {
        console.error("ReportEnquiryPageComponent.getReportByDatesFailCallBack() - error: " + JSON.stringify(error));
        if (error.hasOwnProperty("errorMessage")) {
            alert(error['errorMessage']);
        }
        else {
            alert("Report loading failed, please try again later.");
        }
    };
    ReportEnquiryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-enquiry-page',
            template: __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.html"),
            styles: [__webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__report_enquiry_service__["a" /* ReportEnquiryService */]])
    ], ReportEnquiryPageComponent);
    return ReportEnquiryPageComponent;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/report-enquiry/report-enquiry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEnquiryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_enquiry_page_report_enquiry_page_component__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_enquiry_service__ = __webpack_require__("./src/app/authenticated-portal/report-enquiry/report-enquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportEnquiryModule = /** @class */ (function () {
    function ReportEnquiryModule() {
    }
    ReportEnquiryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__report_enquiry_page_report_enquiry_page_component__["a" /* ReportEnquiryPageComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__report_enquiry_page_report_enquiry_page_component__["a" /* ReportEnquiryPageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__report_enquiry_service__["a" /* ReportEnquiryService */]]
        })
    ], ReportEnquiryModule);
    return ReportEnquiryModule;
}());



/***/ }),

/***/ "./src/app/authenticated-portal/report-enquiry/report-enquiry.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEnquiryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportEnquiryService = /** @class */ (function () {
    function ReportEnquiryService(http) {
        this.http = http;
    }
    ReportEnquiryService.prototype.getAllDates = function (successCallBack, failCallBack) {
        var _this = this;
        console.log("ReportEnquiryService.getAllDates() starts.");
        var getAllDatesUri = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].webServiceProtocol + "://" +
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].reportServiceHost + ":" +
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].reportServicePort +
            "/api/dates";
        console.log("ReportEnquiryService.getAllDates() - getAllDatesUri: " + getAllDatesUri);
        var result = this.http.get(getAllDatesUri);
        result.subscribe(function (response) { return _this.getAllDatesSuccessCallBack(response, successCallBack); }, function (e) { return _this.getAllDatesFailCallBack(e, failCallBack); });
        return result;
    };
    ReportEnquiryService.prototype.getAllDatesSuccessCallBack = function (response, successCallBack) {
        console.log("ReportEnquiryService.getAllDatesSuccessCallBack() starts.");
        if (successCallBack) {
            successCallBack(response);
        }
    };
    ReportEnquiryService.prototype.getAllDatesFailCallBack = function (e, failCallBack) {
        console.error("ReportEnquiryService.getAllDatesFailCallBack() - e: " + JSON.stringify(e));
        if (failCallBack) {
            failCallBack(e);
        }
    };
    ReportEnquiryService.prototype.getReportsByDate = function (dateStr, successCallBack, failCallBack) {
        var _this = this;
        console.log("ReportEnquiryService.getReportsByDate() - dateStr: " + dateStr);
        var getReportsUri = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].webServiceProtocol + "://" +
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].reportServiceHost + ":" +
            __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].reportServicePort +
            "/api/reportForDate/" + dateStr;
        console.log("ReportEnquiryService.getReportsByDate() - getReportsUri: " + getReportsUri);
        var result = this.http.get(getReportsUri);
        result.subscribe(function (response) { return _this.getReportByDateSuccessCallBack(response, successCallBack); }, function (error) { return _this.getReportByDateFailCallBack(error, failCallBack); });
        return result;
    };
    ReportEnquiryService.prototype.getReportByDateSuccessCallBack = function (response, successCallBack) {
        console.log("ReportEnquiryService.getReportByDateSuccessCallBack() - response: " + JSON.stringify(response));
        if (successCallBack) {
            successCallBack(response);
        }
    };
    ReportEnquiryService.prototype.getReportByDateFailCallBack = function (e, failCallBack) {
        console.error("ReportEnquiryService.getReportByDateFailCallBack() - error: " + JSON.stringify(e));
        if (failCallBack) {
            failCallBack(e);
        }
    };
    ReportEnquiryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ReportEnquiryService);
    return ReportEnquiryService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n  float:left;\r\n  width:100%;\r\n}\r\n\r\n.text {\r\n  font-family: Arial;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div *ngIf=\"isUserLoggedIn\">\n    <app-authenticated-portal-header></app-authenticated-portal-header>\n  </div>\n  <div *ngIf=\"!isUserLoggedIn\">\n    <app-public-site-header></app-public-site-header>\n  </div>\n</div>\n<div id=\"commonSiteContent\">\n  <h2 class=\"text\">Page not found!</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_common_session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(session) {
        this.session = session;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.session.isUserLoggedIn();
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__site_common_session_user_session_service__["a" /* UserSessionService */]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/public-site-routing/public-site-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicSiteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_site_login_page_login_page_component__ = __webpack_require__("./src/app/public-site/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_site_public_site_module__ = __webpack_require__("./src/app/public-site/public-site.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_site_public_site_page_public_site_page_component__ = __webpack_require__("./src/app/public-site/public-site-page/public-site-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_site_welcome_page_welcome_page_component__ = __webpack_require__("./src/app/public-site/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'public',
        component: __WEBPACK_IMPORTED_MODULE_4__public_site_public_site_page_public_site_page_component__["a" /* PublicSitePageComponent */],
        children: [
            { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_5__public_site_welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__public_site_login_page_login_page_component__["a" /* LoginPageComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__public_site_welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] }
        ] }
];
var PublicSiteRoutingModule = /** @class */ (function () {
    function PublicSiteRoutingModule() {
    }
    PublicSiteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__public_site_public_site_module__["a" /* PublicSiteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            declarations: []
        })
    ], PublicSiteRoutingModule);
    return PublicSiteRoutingModule;
}());



/***/ }),

/***/ "./src/app/public-site/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = ".text {\r\n  font-family: Arial;\r\n}\r\n\r\n.input-ui-label-container {\r\n  width:80px;\r\n}\r\n\r\n.input-ui-group-container {\r\n  margin-left:5px;\r\n  margin-bottom:2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/public-site/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"text\">Login</h2>\n  <div>\n    <form [formGroup]=\"loginForm\">\n      <div class=\"input-ui-group-container\">\n        <div>\n          <div class=\"input-ui-label-container\">\n            <label for=\"username\" class=\"text\">Username:</label>\n          </div>\n          <div>\n            <input id=\"username\" name=\"username\" type=\"text\" formControlName=\"username\" />\n          </div>\n        </div>\n        <div *ngIf=\"loginForm.controls['username'].dirty && loginForm.controls['username'].errors && loginForm.controls['username'].errors.required\">\n          <span class=\"text\">Please enter username</span>\n        </div>\n      </div>\n      <div class=\"input-ui-group-container\">\n        <div>\n          <div class=\"input-ui-label-container\">\n            <label for=\"password\" class=\"text\">Password:</label>\n          </div>\n          <div>\n            <input id=\"password\" name=\"password\" type=\"password\" formControlName=\"password\" />\n          </div>\n        </div>\n        <div *ngIf=\"loginForm.controls['password'].dirty && loginForm.controls['password'].errors && loginForm.controls['password'].errors.required\">\n          <span class=\"text\">Please enter password</span>\n        </div>\n      </div>\n    </form>\n    <div class=\"input-ui-group-container\">\n      <button type=\"submit\" (click)=\"login()\" [disabled]=\"loginForm.invalid\" class=\"text\">Login</button>\n      <button type=\"button\" (click)=\"back()\" class=\"text\">Back</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public-site/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_common_authentication_authentication_service__ = __webpack_require__("./src/app/site-common/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, formBuilder, authenticationService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
    }
    LoginPageComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginPageComponent.prototype.login = function () {
        console.log("login() - loginForm: " + JSON.stringify(this.loginForm.value));
        var username = this.loginForm.value.username;
        console.log("login() - username: " + username);
        var password = this.loginForm.value.password;
        console.log("login() - password: " + password);
        this.authenticationService.authenticate(username, password, this.loginSuccess.bind(this), this.loginFail);
    };
    LoginPageComponent.prototype.loginSuccess = function () {
        console.log("LoginPageComponent.loginSuccess() starts.");
        this.router.navigate(['auth']);
    };
    LoginPageComponent.prototype.loginFail = function (e) {
        console.error("LoginPageComponent.loginFail() - e: " + JSON.stringify(e));
        if (e.hasOwnProperty("errorMessage")) {
            alert(e['errorMessage']);
        }
        else {
            alert("Login failed, please try again later.");
        }
    };
    LoginPageComponent.prototype.back = function () {
        console.log("LoginPageComponent.back() starts.");
        this.router.navigate(['/']);
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("./src/app/public-site/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/public-site/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__site_common_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/public-site/public-site-header/public-site-header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-div {\r\n  float:right;\r\n}\r\n\r\n.header-div-item {\r\n  float:left;\r\n  margin-left: 5px;\r\n}\r\n\r\n.text {\r\n  font-family: Arial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/public-site/public-site-header/public-site-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-div\">\n  <div class=\"header-div-item\">\n    <a [routerLink]=\"['/public/login']\" class=\"text\">login</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/public-site/public-site-header/public-site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicSiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicSiteHeaderComponent = /** @class */ (function () {
    function PublicSiteHeaderComponent() {
    }
    PublicSiteHeaderComponent.prototype.ngOnInit = function () {
    };
    PublicSiteHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-public-site-header',
            template: __webpack_require__("./src/app/public-site/public-site-header/public-site-header.component.html"),
            styles: [__webpack_require__("./src/app/public-site/public-site-header/public-site-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicSiteHeaderComponent);
    return PublicSiteHeaderComponent;
}());



/***/ }),

/***/ "./src/app/public-site/public-site-page/public-site-page.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n  float:left;\r\n  width:100%;\r\n  border-bottom:1px solid;\r\n}\r\n\r\n.body {\r\n  float:left;\r\n  width:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/public-site/public-site-page/public-site-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publicSiteHeader\" class=\"header\">\n  <app-public-site-header></app-public-site-header>\n</div>\n<div id=\"publicSiteContent\" class=\"body\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/public-site/public-site-page/public-site-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicSitePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicSitePageComponent = /** @class */ (function () {
    function PublicSitePageComponent() {
    }
    PublicSitePageComponent.prototype.ngOnInit = function () {
    };
    PublicSitePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-public-site-page',
            template: __webpack_require__("./src/app/public-site/public-site-page/public-site-page.component.html"),
            styles: [__webpack_require__("./src/app/public-site/public-site-page/public-site-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicSitePageComponent);
    return PublicSitePageComponent;
}());



/***/ }),

/***/ "./src/app/public-site/public-site.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicSiteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_page_welcome_page_component__ = __webpack_require__("./src/app/public-site/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_site_header_public_site_header_component__ = __webpack_require__("./src/app/public-site/public-site-header/public-site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__ = __webpack_require__("./src/app/public-site/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__public_site_page_public_site_page_component__ = __webpack_require__("./src/app/public-site/public-site-page/public-site-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_common_authentication_authentication_module__ = __webpack_require__("./src/app/site-common/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_common_authentication_authentication_service__ = __webpack_require__("./src/app/site-common/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PublicSiteModule = /** @class */ (function () {
    function PublicSiteModule() {
    }
    PublicSiteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__site_common_authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__public_site_page_public_site_page_component__["a" /* PublicSitePageComponent */], __WEBPACK_IMPORTED_MODULE_5__public_site_header_public_site_header_component__["a" /* PublicSiteHeaderComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__public_site_header_public_site_header_component__["a" /* PublicSiteHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__public_site_page_public_site_page_component__["a" /* PublicSitePageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__site_common_authentication_authentication_service__["a" /* AuthenticationService */]]
        })
    ], PublicSiteModule);
    return PublicSiteModule;
}());



/***/ }),

/***/ "./src/app/public-site/welcome-page/welcome-page.component.css":
/***/ (function(module, exports) {

module.exports = ".text{\r\n  font-family: Arial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/public-site/welcome-page/welcome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"text\">Welcome to Coding Challenge website!</h2>\n  <p class=\"text\">Login to view website daily visit reports!</p>\n</div>\n"

/***/ }),

/***/ "./src/app/public-site/welcome-page/welcome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomePageComponent = /** @class */ (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    WelcomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome-page',
            template: __webpack_require__("./src/app/public-site/welcome-page/welcome-page.component.html"),
            styles: [__webpack_require__("./src/app/public-site/welcome-page/welcome-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomePageComponent);
    return WelcomePageComponent;
}());



/***/ }),

/***/ "./src/app/site-common/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_module__ = __webpack_require__("./src/app/site-common/session/session.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oauth2_http_oauth2_http_util_service__ = __webpack_require__("./src/app/site-common/oauth2-http/oauth2-http-util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__oauth2_http_oauth2_http_module__ = __webpack_require__("./src/app/site-common/oauth2-http/oauth2-http.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__session_session_module__["a" /* SessionModule */],
                __WEBPACK_IMPORTED_MODULE_5__oauth2_http_oauth2_http_module__["a" /* Oauth2HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */]
            ],
            exports: [],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__session_user_session_service__["a" /* UserSessionService */], __WEBPACK_IMPORTED_MODULE_4__oauth2_http_oauth2_http_util_service__["a" /* Oauth2HttpUtilService */]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/site-common/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oauth2_http_oauth2_http_util_service__ = __webpack_require__("./src/app/site-common/oauth2-http/oauth2-http-util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(session, oauth2HttpUtil, http) {
        this.session = session;
        this.oauth2HttpUtil = oauth2HttpUtil;
        this.http = http;
    }
    AuthenticationService.prototype.authenticate = function (username, password, successCallBack, failCallBack) {
        var _this = this;
        console.log("AuthenticationService.authenticate() - username: " + username + " password: " + password);
        var authenticationRequest = {
            "username": username,
            "password": password
        };
        console.log("request: " + JSON.stringify(authenticationRequest));
        var loginUri = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].webServiceProtocol + "://" +
            __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].authenticationServiceHost + ":" +
            __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].authenticationServicePort +
            "/api/authenticate";
        console.log("AuthenticationService.authenticate() - loginUri: " + loginUri);
        this.http.post(loginUri, authenticationRequest).subscribe(function (response) { return _this.authenticationSuccessCallBack(response, successCallBack); }, function (e) { return _this.authenticationFailCallBack(e, failCallBack); });
    };
    AuthenticationService.prototype.authenticationSuccessCallBack = function (response, successCallBack) {
        console.log("AuthenticationService.authenticationSuccessCallBack() - token: " + JSON.stringify(response));
        var tokenStr = response.token;
        this.session.storeAuthenticationTokenForLogin(tokenStr);
        if (successCallBack) {
            successCallBack();
        }
    };
    AuthenticationService.prototype.authenticationFailCallBack = function (e, failCallBack) {
        console.error("AuthenticationService.authenticationFailCallBack() - error: " + JSON.stringify(e));
        if (failCallBack) {
            failCallBack(e);
        }
    };
    AuthenticationService.prototype.logout = function (successCallBack, failCallBack) {
        var _this = this;
        console.log("AuthenticationService.logout() starts.");
        var token = this.session.getAuthenticationToken();
        console.log("AuthenticationService.logout() - token: " + token);
        var logoutUri = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].webServiceProtocol + "://" +
            __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].authenticationServiceHost + ":" +
            __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].authenticationServicePort +
            "/api/revoke/" + token;
        console.log("AuthenticationService.logout() - logoutUri: " + logoutUri);
        this.http.delete(logoutUri).subscribe(function (response) { return _this.logoutSuccessCallBack(response, successCallBack); }, function (error) { return _this.logoutFailCallBack(error, failCallBack); });
    };
    AuthenticationService.prototype.logoutSuccessCallBack = function (response, successCallBack) {
        console.log("AuthenticationService.logoutSuccessCallBack() - token: " + response['revokedToken'] + " has been revoked.");
        if (successCallBack) {
            successCallBack();
        }
    };
    AuthenticationService.prototype.logoutFailCallBack = function (e, failCallBack) {
        console.error("AuthenticationService.logoutFailCallBack() - error: " + JSON.stringify(e));
        if (failCallBack) {
            failCallBack(e);
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__session_user_session_service__["a" /* UserSessionService */],
            __WEBPACK_IMPORTED_MODULE_3__oauth2_http_oauth2_http_util_service__["a" /* Oauth2HttpUtilService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/site-common/oauth2-http/oauth2-http-request-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Oauth2HttpRequestInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oauth2_http_util_service__ = __webpack_require__("./src/app/site-common/oauth2-http/oauth2-http-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Oauth2HttpRequestInterceptorService = /** @class */ (function () {
    function Oauth2HttpRequestInterceptorService(oauth2HttpUtil) {
        this.oauth2HttpUtil = oauth2HttpUtil;
    }
    Oauth2HttpRequestInterceptorService.prototype.intercept = function (req, next) {
        console.log("Oauth2HttpRequestInterceptorService.intercept() starts.");
        var newReq = null;
        var bearerToken = this.oauth2HttpUtil.prepareOauth2BearerToken();
        console.log("Oauth2HttpRequestInterceptorService.intercept() - bearerToken: " + bearerToken);
        if (bearerToken == null) {
            newReq = req;
        }
        else {
            newReq = req.clone({
                setHeaders: {
                    Authorization: bearerToken
                }
            });
        }
        return next.handle(newReq);
    };
    Oauth2HttpRequestInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__oauth2_http_util_service__["a" /* Oauth2HttpUtilService */]])
    ], Oauth2HttpRequestInterceptorService);
    return Oauth2HttpRequestInterceptorService;
}());



/***/ }),

/***/ "./src/app/site-common/oauth2-http/oauth2-http-util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Oauth2HttpUtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Oauth2HttpUtilService = /** @class */ (function () {
    function Oauth2HttpUtilService(session) {
        this.session = session;
        this.bearerHeaderPrefix = "Bearer ";
    }
    Oauth2HttpUtilService.prototype.prepareOauth2BearerToken = function () {
        console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() starts.");
        var result = null;
        if (this.session.isUserLoggedIn()) {
            console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - user is logged in.");
            var token = this.session.getAuthenticationToken();
            console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - token: " + token);
            var bearerTokenValue = this.bearerHeaderPrefix + token;
            console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - bearerTokenValue: " + bearerTokenValue);
            result = bearerTokenValue;
        }
        else {
            console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - user is is not logged in, return null.");
        }
        return result;
    };
    Oauth2HttpUtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_user_session_service__["a" /* UserSessionService */]])
    ], Oauth2HttpUtilService);
    return Oauth2HttpUtilService;
}());



/***/ }),

/***/ "./src/app/site-common/oauth2-http/oauth2-http.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Oauth2HttpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_module__ = __webpack_require__("./src/app/site-common/session/session.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Oauth2HttpModule = /** @class */ (function () {
    function Oauth2HttpModule() {
    }
    Oauth2HttpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__session_session_module__["a" /* SessionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */]
            ],
            exports: [],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_4__session_user_session_service__["a" /* UserSessionService */]]
        })
    ], Oauth2HttpModule);
    return Oauth2HttpModule;
}());



/***/ }),

/***/ "./src/app/site-common/security/require-auth-route-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequireAuthRouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_user_session_service__ = __webpack_require__("./src/app/site-common/session/user-session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequireAuthRouteGuard = /** @class */ (function () {
    function RequireAuthRouteGuard(userSessionService, router) {
        this.userSessionService = userSessionService;
        this.router = router;
    }
    RequireAuthRouteGuard.prototype.checkLogin = function (url) {
        console.log("RequireAuthRouteGuard.checkLogin() - url: " + url);
        var result = false;
        if (this.userSessionService.isUserLoggedIn()) {
            console.log("RequireAuthRouteGuard.checkLogin() - user is logged in.");
            result = true;
        }
        else {
            console.log("RequireAuthRouteGuard.checkLogin() - user is NOT logged in.");
            this.router.navigate(["/public/login"]);
        }
        return result;
    };
    RequireAuthRouteGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    RequireAuthRouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    RequireAuthRouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__session_user_session_service__["a" /* UserSessionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RequireAuthRouteGuard);
    return RequireAuthRouteGuard;
}());



/***/ }),

/***/ "./src/app/site-common/session/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [],
            declarations: []
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/site-common/session/user-session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSessionService = /** @class */ (function () {
    function UserSessionService() {
        this.userTokenSessionKey = 'userTokenSessionKey';
    }
    UserSessionService.prototype.setAttribute = function (key, value) {
        console.log("UserSessionService.setAttribute() - key: " + key + " value: " + JSON.stringify(value));
        sessionStorage.setItem(key, value);
    };
    UserSessionService.prototype.getAttribute = function (key) {
        console.log("UserSessionService.getAttribute() - key: " + key);
        return sessionStorage.getItem(key);
    };
    UserSessionService.prototype.remove = function (key) {
        console.log("UserSessionService.remove() - key: " + key);
        sessionStorage.removeItem(key);
    };
    UserSessionService.prototype.storeAuthenticationTokenForLogin = function (token) {
        console.log("UserSessionService.storeAuthenticationTokenForLogin() - token: " + token);
        this.setAttribute(this.userTokenSessionKey, token);
    };
    UserSessionService.prototype.getAuthenticationToken = function () {
        console.log("UserSessionService.getAuthenticationToken() starts.");
        var result = this.getAttribute(this.userTokenSessionKey);
        console.log("UserSessionService.getAuthenticationToken() - result: " + JSON.stringify(result));
        return result;
    };
    UserSessionService.prototype.isUserLoggedIn = function () {
        console.log("UserSessionService.isUserLoggedIn() starts.");
        var result = (this.getAuthenticationToken() != null);
        console.log("UserSessionService.isUserLoggedIn() - result: " + result);
        return result;
    };
    UserSessionService.prototype.removeAuthenticationTokenForLogout = function () {
        console.log("UserSessionService.removeAuthenticationTokenForLogout() starts.");
        this.remove(this.userTokenSessionKey);
    };
    UserSessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserSessionService);
    return UserSessionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    webServiceProtocol: "http",
    authenticationServiceHost: "localhost",
    authenticationServicePort: 8081,
    reportServiceHost: "localhost",
    reportServicePort: 8082
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map