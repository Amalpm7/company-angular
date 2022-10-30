import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavemanage',
  templateUrl: './leavemanage.component.html',
  styleUrls: ['./leavemanage.component.css']
})
export class LeavemanageComponent implements OnInit {

  constructor(private myapi:ApiService) {this.view() }

  status=""

  view=()=>{
    this.myapi.viewLeave().subscribe(
      (resp)=>{
        this.leaveData=resp
      }
    )
  }
  updateStatus=(id:any)=>{
    let data={
      "id":id,
      "status":this.status
    }
    console.log(data)
    this.myapi.leaveStatus(data).subscribe(
      
    )
    alert("Updated Succesfully")
    this.view()
  }
  leaveData:any=[]

  ngOnInit(): void {
  }

}
