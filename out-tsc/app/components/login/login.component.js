import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../service/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for uniqueness...");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor(router, authService, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.loginForm = new FormGroup({
            email: new FormControl('', [
                UsernameValidators.cannotContainSpace
            ], UsernameValidators.shouldBeUnique),
            password: new FormControl('', [
                Validators.minLength(8),
                Validators.required,
                UsernameValidators.cannotContainSpace
            ])
        });
        this.invalidLogin = false;
    }
    ngOnInit() {
        console.log(this.loginForm);
    }
    get password() {
        return this.loginForm.get('password');
    }
    get email() {
        return this.loginForm.get('email');
    }
    login() {
    }
    signIn(value) {
        let returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
        // @ts-ignore
        console.log(value);
        // @ts-ignore
        this.authService.signIn(value)
            .subscribe(response => {
            console.log(response);
            if (response) {
                this.router.navigate([returnUrl || '/']);
                console.log(response);
            }
            else {
                this.invalidLogin = true;
            }
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 1, consts: [[1, "login-form", "form-group", 3, "ngSubmit"], ["f", "ngForm"], ["for", "email"], ["ngModel", "", "placeholder", "ex. jhon@gmail.com", "name", "username", "type", "text", "id", "email", 1, "form-control"], ["email", "ngModel"], [4, "ngIf"], ["for", "password"], ["placeholder", "password", "ngModel", "", "name", "password", "type", "password", "id", "password", "required", "", "autofocus", "", 1, "form-control"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            const _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.signIn(_r0.value)); });
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "SignIn");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "label", 2);
            i0.ɵɵtext(5, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 3, 4);
            i0.ɵɵtemplate(8, LoginComponent_div_8_Template, 2, 0, "div", 5);
            i0.ɵɵelementStart(9, "label", 6);
            i0.ɵɵtext(10, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 7, 8);
            i0.ɵɵelementStart(13, "button", 9);
            i0.ɵɵtext(14, "SignIn");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "hr");
            i0.ɵɵelementStart(16, "button", 10);
            i0.ɵɵtext(17, "signup");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(7);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", _r1 == null ? null : _r1.pending);
        } }, dependencies: [i3.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n  width:30%;\r\n}\r\n.login-form[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin: 100px auto;\r\n  vertical-align: center;\r\n  flex-direction: column;\r\n  border: 1px solid gray;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  align-self: center;\r\n\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<form class=\"login-form form-group\" #f=ngForm (ngSubmit)=\"signIn(f.value)\">\n  <h2>SignIn</h2>\n  <label for=\"email\">Email address</label>\n  <input class=\"form-control\" ngModel #email=ngModel placeholder=\"ex. jhon@gmail.com\" name=\"username\" type=\"text\" id=\"email\">\n  <div *ngIf=\"email?.pending\">Checking for uniqueness...</div>\n  <label for=\"password\">Password</label>\n  <input class=\"form-control\" placeholder=\"password\" ngModel #password=ngModel name=\"password\" type=\"password\" id=\"password\"\n         required\n         autofocus\n  >\n  <button class=\"btn btn-primary\" type=\"submit\">SignIn</button>\n  <hr>\n  <button class=\"btn btn-primary\">signup</button>\n</form>\n\n<!--<form class=\"form-signin\">-->\n<!--  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>-->\n<!--  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>-->\n<!--  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>-->\n<!--  <label for=\"inputPassword\" class=\"sr-only\">Password</label>-->\n<!--  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>-->\n<!--  <div class=\"checkbox mb-3\">-->\n<!--    <label>-->\n<!--      <input type=\"checkbox\" value=\"remember-me\"> Remember me-->\n<!--    </label>-->\n<!--  </div>-->\n<!--  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>-->\n<!--</form>-->\n\n<!--<form class=\"form-signin\" >-->\n<!--  <h2 class=\"form-signin-heading\">Please sign in</h2>-->\n<!--  <div class=\"alert alert-danger\">Invalid username and/or password.</div>-->\n<!--  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>-->\n<!--  <input type=\"email\"  name=\"email\" ngModel class=\"form-control\" placeholder=\"Email address\" required autofocus>-->\n<!--  <label for=\"inputPassword\" class=\"sr-only\">Password</label>-->\n<!--  <input type=\"password\"  name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>-->\n<!--  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>-->\n<!--</form>-->\n", styles: ["*{\r\n  margin: 20px;\r\n}\r\nform{\r\n  width:30%;\r\n}\r\n.login-form{\r\n  display: flex;\r\n  margin: 100px auto;\r\n  vertical-align: center;\r\n  flex-direction: column;\r\n  border: 1px solid gray;\r\n}\r\nh2{\r\n  align-self: center;\r\n\r\n}\r\n"] }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=login.component.js.map