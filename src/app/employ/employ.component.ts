import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  constructor(private myapi:ApiService) { }
    type=""
    emp_id=localStorage.getItem("emp_id")
    description=""
    leaveDate=""
    readValue=()=>{
      let data={
        "type":this.type,
        "emp_id":this.emp_id,
        "description":this.description,
        "leaveDate":this.leaveDate,

      }
      console.log(data)
      return this.myapi.applyLeave(data).subscribe(
        (resp)=>{
          alert("Leave applied")
        }
      )
    }
    
  ngOnInit(): void {
  }

}
