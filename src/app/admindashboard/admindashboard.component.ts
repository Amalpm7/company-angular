import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

  name=""
  Age=""
  Address=""
  Salary=""
  Date=""
  Phone=""
  email=""
  password=""

  readValue=()=>{
    let data={
      "name":this.name,
      "age":this.Age,
      "address":this.Address,
      "salary":this.Salary,
      "date":this.Date,
      "phone":this.Phone,
      "email":this.email,
      "password":this.password

    }
  }
  ngOnInit(): void {
  }

}
