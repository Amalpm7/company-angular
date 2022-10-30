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
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
