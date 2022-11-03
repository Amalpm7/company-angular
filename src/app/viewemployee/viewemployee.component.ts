import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {this.view() }

  view=()=>{
    this.myapi.viewEmploy().subscribe(
      (resp)=>{
        this.empData=resp
      }
    )
  }
  deleteValue=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteEmploy(data).subscribe(
      
    )
    alert("Deleted Succesfully")
    this.view()
  }
  empData:any=[]
  ngOnInit(): void {
  }

}
