import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employstatus',
  templateUrl: './employstatus.component.html',
  styleUrls: ['./employstatus.component.css']
})
export class EmploystatusComponent implements OnInit {

  constructor(private myapi:ApiService) { this.view()}

  status=""
  // emp_id=localStorage.getItem("emp_id")
  view=()=>{
    let data={
      "emp_id":localStorage.getItem("emp_id")
    }
    console.log(data)
    return this.myapi.employStatus(data).subscribe(
      (resp)=>{
        // console.log(resp)
        // console.log("success")
        this.viewStatus=resp
        
      }
      
    )
  }
  viewStatus:any=[]

  ngOnInit(): void {
  }

}
