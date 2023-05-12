import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router?: HttpClient
  ) { }

  public signIn(credentials:any){
    return this.router?.post('http://localhost:8080/api/v1/auth/login',credentials).pipe(
      map((response:any) => {
        console.log(response)
        if(response && response.body.accessToken) {
          localStorage.setItem('token', response.body.accessToken)
          return true
        }
        return false
      })
    )
  }

  logout(){
    localStorage.removeItem('token')
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token') as string
    console.log(jwtHelper.decodeToken(token))
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    console.log(expirationDate)
    let isExpired = jwtHelper.isTokenExpired(token)
    return !isExpired;
  }

  getCurrentUserRoles(): Array<String>{
    let claims = new JwtHelperService().decodeToken(
      localStorage.getItem('token') as string
    )
    return claims.roles;
  }

  isUser(user: string):boolean {
    console.log(localStorage.getItem('token') as string)
    console.log(this.getCurrentUserRoles())
    console.log(user)
    for (const role of this.getCurrentUserRoles()) {
      if(user.trim() === role.trim()) {
        console.log(role)
        return true;
      }
      return false;
    }
    return false;
  }
}
