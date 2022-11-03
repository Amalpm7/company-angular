import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent implements OnInit {

  constructor(private myapi:ApiService, private myrouter:Router) { }
  email=""
  password=""
  
  empLogin=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    this.myapi.employLogin(data).subscribe(
      (resp:any)=>{
        if(resp.length>0){
          localStorage.setItem("emp_id",resp[0].id)
          this.myrouter.navigate(["/employ"])
        alert("Credentials Entered")
      }
      else{
        alert("Invalid")
      }
    }
    )
  }
  
  ngOnInit(): void {
  }

}
