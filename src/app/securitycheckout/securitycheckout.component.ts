import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitycheckout',
  templateUrl: './securitycheckout.component.html',
  styleUrls: ['./securitycheckout.component.css']
})
export class SecuritycheckoutComponent implements OnInit {

  constructor(private myapi:ApiService) { this.getCheckInData()}

  getCheckInData=()=>{
     this.myapi.viewCeckIn().subscribe(
      (resp)=>{
        console.log("Entered")
        this.dataCheck = resp;
        console.log(resp)
      }
    )
  }
  checkOut=(id:any)=>{
    let data={
      "id":id,
      "logout_sec_id":localStorage.getItem("sec_id")
    }
    this.myapi.checkOut(data).subscribe()
    alert("Checked Out")
    this.getCheckInData()
  }

  dataCheck:any=[]
  ngOnInit(): void {
  }

}
