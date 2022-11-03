import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitycheckin',
  templateUrl: './securitycheckin.component.html',
  styleUrls: ['./securitycheckin.component.css']
})
export class SecuritycheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  emp_id=""

  checkin=()=>{
    let data={
      "emp_id":this.emp_id,
      "login_sec_id":localStorage.getItem("sec_id")
    }
    this.myapi.checkIn(data).subscribe()
    this.emp_id=""
  }

  ngOnInit(): void {
  }

}
