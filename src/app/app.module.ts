import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployLoginComponent } from './employ-login/employ-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"emp",component:EmployLoginComponent
  },
  {
    path:"sec",component:SecurityLoginComponent
  },
  {
    path:"adminDashbord",component:AdmindashboardComponent
  },
  {
    path:"viewemp",component:ViewemployeeComponent
  },
  {
    path:"searchemp",component:SearchemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployLoginComponent,
    SecurityLoginComponent,
    AdmindashboardComponent,
    AdminnavbarComponent,
    ViewemployeeComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
