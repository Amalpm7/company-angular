import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRouter:Router) { }

  email=""
  password=""
  readValue=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    if(this.email=="admin" && this.password=="admin"){
      this.myRouter.navigate(["/adminDashbord"])
    }
    else{
      alert("in valid")
    }
    console.log(data)
    alert("Sucess")
  
  }

  ngOnInit(): void {
  }

}
