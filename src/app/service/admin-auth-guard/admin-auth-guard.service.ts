import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(){
    if(this.authService.isLoggedIn() && this.authService.isUser("ADMIN")) return true;
    this.router.navigate(['/access-denied'])
    setTimeout(()=>{
      this.router.navigate([''])
    }, 3000)
    return false;
  }
}
