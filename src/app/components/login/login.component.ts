import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsernameValidators} from "./username.validators";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email : new FormControl('',[
      UsernameValidators.cannotContainSpace
    ],UsernameValidators.shouldBeUnique),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      UsernameValidators.cannotContainSpace
    ])
  })

  invalidLogin = false;

  constructor(private router: Router,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute
              ) {
  }

  ngOnInit(): void {
    console.log(this.loginForm)
  }

  get password(){
    return this.loginForm.get('password');
  }

  get email(){
    return this.loginForm.get('email');
  }

  login() {

  }

  signIn(value: any) {
    let returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl')
    // @ts-ignore
    console.log(value)
    // @ts-ignore
    this.authService.signIn(value)
      .subscribe(response => {
        console.log(response)
        if(response) {
          this.router.navigate([returnUrl || '/'])
          console.log(response)
        }else{
          this.invalidLogin = true;
        }
      })
  }
}
