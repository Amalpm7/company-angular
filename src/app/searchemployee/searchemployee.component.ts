import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  searchEmployee=()=>{
    let data={
      "name":this.name
    }
    this.myapi.searchEmploy(data).subscribe(
      (resp)=>{
        this.searchData=resp
      }
    )
  }
  updateEmployee=()=>{
   this.myapi.updateEmploy(this.searchData[0]).subscribe(
    
   ) 
  }
  searchData:any=[]

  ngOnInit(): void {
  }

}
