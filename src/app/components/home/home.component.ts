import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService,
              ) {
  }

}
