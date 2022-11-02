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
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { LeavemanageComponent } from './leavemanage/leavemanage.component';
import { LogComponent } from './log/log.component';
import { EmployComponent } from './employ/employ.component';
import { EmploynavbarComponent } from './employnavbar/employnavbar.component';
import { EmploystatusComponent } from './employstatus/employstatus.component';


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
  },
  {
    path:"addsec",component:AddsecurityComponent
  },
  {
    path:"viewsec",component:ViewsecurityComponent
  },
  {
    path:"searchsec",component:SearchsecurityComponent
  },
  {
    path:"leavemanage",component:LeavemanageComponent
  },
  {
    path:"log",component:LogComponent
  },
  {
    path:"employ",component:EmployComponent
  },
  {
    path:"viewleave",component:EmploystatusComponent
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
    SearchemployeeComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    LeavemanageComponent,
    LogComponent,
    EmployComponent,
    EmploynavbarComponent,
    EmploystatusComponent,
    
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
