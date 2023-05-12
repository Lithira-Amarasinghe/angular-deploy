import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    constructor(router) {
        this.router = router;
    }
    signIn(credentials) {
        return this.router?.post('http://localhost:8080/api/v1/auth/login', credentials).pipe(map((response) => {
            console.log(response);
            if (response && response.body.accessToken) {
                localStorage.setItem('token', response.body.accessToken);
                return true;
            }
            return false;
        }));
    }
    logout() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        let jwtHelper = new JwtHelperService();
        let token = localStorage.getItem('token');
        console.log(jwtHelper.decodeToken(token));
        let expirationDate = jwtHelper.getTokenExpirationDate(token);
        console.log(expirationDate);
        let isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    }
    getCurrentUserRoles() {
        let claims = new JwtHelperService().decodeToken(localStorage.getItem('token'));
        return claims.roles;
    }
    isUser(user) {
        console.log(localStorage.getItem('token'));
        console.log(this.getCurrentUserRoles());
        console.log(user);
        for (const role of this.getCurrentUserRoles()) {
            if (user.trim() === role.trim()) {
                console.log(role);
                return true;
            }
            return false;
        }
        return false;
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=auth.service.js.map