import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employlog',
  templateUrl: './employlog.component.html',
  styleUrls: ['./employlog.component.css']
})
export class EmploylogComponent implements OnInit {

  constructor(private myapi:ApiService) { this.viewEmplog()}

  viewEmplog=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id")
    }
    console.log(data)
    return this.myapi.employLog(data).subscribe(
      (resp)=>{
        this.viewLog=resp
      }    )
  }
  viewLog:any=[]

  ngOnInit(): void {
  }

}
