import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {this.viewSec() }

  viewSec=()=>{
    this.myapi.viewSecurity().subscribe(
      (resp)=>{
        this.secData=resp
      }
    )
  }
  deleteValue=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteSecurity(data).subscribe(
      
    )
    alert("Deleted Succesfully")
    this.viewSec()
  }
  secData:any=[]

  ngOnInit(): void {
  }

}
