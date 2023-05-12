import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../service/order.service";
import * as i2 from "@angular/common";
function AdminComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1);
} }
export class AdminComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orders = [5, 9, 10];
        this.getOrders();
    }
    getOrders() {
        this.orderService.getOrders().subscribe(next => {
            // @ts-ignore
            console.log(next.body);
            // @ts-ignore
            for (const bodyElement of next.body) {
                this.orders.push(bodyElement);
            }
        });
    }
    static { this.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(i0.ɵɵdirectiveInject(i1.OrderService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminComponent, selectors: [["app-admin"]], decls: 6, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1, "Admin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "h4");
            i0.ɵɵtext(3, "Orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ul");
            i0.ɵɵtemplate(5, AdminComponent_li_5_Template, 2, 1, "li", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.orders);
        } }, dependencies: [i2.NgForOf], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin', template: "<h2>Admin</h2>\n<h4>Orders</h4>\n<ul>\n  <li *ngFor=\"let item of orders\">{{item}}</li>\n</ul>\n", styles: ["\r\n*{\r\n  margin: 20px;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.OrderService }]; }, null); })();
//# sourceMappingURL=admin.component.js.map