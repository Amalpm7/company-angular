import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

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
    this.myapi.addEmploy(data).subscribe(

    )
    alert("Added Succesfully")
  }
  ngOnInit(): void {
  }

}
