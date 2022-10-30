import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  searchSecurity=()=>{
    let data={
      "name":this.name
    }
    this.myapi.searchSecurity(data).subscribe(
      (resp)=>{
        this.searchData=resp
      }
    )
  }
  updatesecurity=()=>{
   this.myapi.updateSecurity(this.searchData[0]).subscribe(
    
   ) 
  }
  searchData:any=[]

  ngOnInit(): void {
  }

}
