import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../auth.service";
import * as i2 from "@angular/router";
export class AdminAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn() && this.authService.isUser("ADMIN"))
            return true;
        this.router.navigate(['/access-denied']);
        setTimeout(() => {
            this.router.navigate(['']);
        }, 3000);
        return false;
    }
    static { this.ɵfac = function AdminAuthGuard_Factory(t) { return new (t || AdminAuthGuard)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminAuthGuard, factory: AdminAuthGuard.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=admin-auth-guard.service.js.map