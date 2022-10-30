import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  
  constructor(private myapi:ApiService) { }

  name=""
  Age=""
  Address=""
  Salary=""
  Phone=""
  email=""
  password=""

  readValue=()=>{
    let data={
      "name":this.name,
      "age":this.Age,
      "address":this.Address,
      "salary":this.Salary,
      "phone":this.Phone,
      "email":this.email,
      "password":this.password

    }
    this.myapi.addSecurity(data).subscribe(
      
    )
  }

  ngOnInit(): void {
  }

}
