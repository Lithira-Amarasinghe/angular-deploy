import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function HomeComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 1);
    i0.ɵɵtext(2, "Admin");
    i0.ɵɵelementEnd()();
} }
function HomeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 2);
    i0.ɵɵtext(2, "Login");
    i0.ɵɵelementEnd()();
} }
function HomeComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "a", 3);
    i0.ɵɵlistener("click", function HomeComponent_li_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.authService.logout()); });
    i0.ɵɵtext(2, "Logout");
    i0.ɵɵelementEnd()();
} }
export class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 3, consts: [[4, "ngIf"], ["routerLink", "/admin"], ["routerLink", "/login"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1, "Home page");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "h4");
            i0.ɵɵtext(3, "Welcome name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul");
            i0.ɵɵtemplate(5, HomeComponent_li_5_Template, 3, 0, "li", 0);
            i0.ɵɵtemplate(6, HomeComponent_li_6_Template, 3, 0, "li", 0);
            i0.ɵɵtemplate(7, HomeComponent_li_7_Template, 3, 0, "li", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.authService.isLoggedIn() && ctx.authService.isUser("ADMIN"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.authService.isLoggedIn());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.authService.isLoggedIn());
        } }, dependencies: [i2.NgIf, i3.RouterLink], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<h2>Home page</h2>\n<h4>Welcome name</h4>\n<ul>\n  <li *ngIf=\"authService.isLoggedIn() && authService.isUser('ADMIN')\"><a routerLink=\"/admin\">Admin</a></li>\n  <li *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"/login\">Login</a></li>\n  <li *ngIf=\"authService.isLoggedIn()\"><a (click)=\"authService.logout()\">Logout</a></li>\n</ul>\n", styles: ["\r\n*{\r\n  margin: 20px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=home.component.js.map