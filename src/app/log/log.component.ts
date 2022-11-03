import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private myapi:ApiService) {this.view() }

  view=()=>{
    this.myapi.viewLog().subscribe(
      (resp)=>{
        this.logData=resp
        console.log(resp)
      }
    )
    
  }
 
  logData:any=[]

  

  ngOnInit(): void {
  }

}
