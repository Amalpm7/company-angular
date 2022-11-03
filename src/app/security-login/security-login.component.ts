import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  constructor(private myapi:ApiService, private myrouter:Router) { }

  email=""
  password=""
  secLogin=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    return this.myapi.securityLogin(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          localStorage.setItem("sec_id",resp[0].id)
          this.myrouter.navigate(["/checkin"])
          alert("Credentials Entered")
        } else {
          alert("Inavlid Credentials")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
