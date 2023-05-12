import { Injectable } from '@angular/core';
import { HttpHeaderCreator } from "../common/constants/httpHeaderCreator";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrders() {
        let headers = new HttpHeaderCreator().createHeader();
        return this.http.get("http://localhost:8080/api/v1/orders/get", { headers });
    }
    static { this.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=order.service.js.map