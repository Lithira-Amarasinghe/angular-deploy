import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import {AuthGuard} from "./service/auth-guard/auth-guard.service";
import {AdminAuthGuard} from "./service/admin-auth-guard/admin-auth-guard.service";
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { CourseComponent } from './components/course/course.component';

const routes : Routes = [
  // {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'access-denied', component: AccessDeniedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    AccessDeniedComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
