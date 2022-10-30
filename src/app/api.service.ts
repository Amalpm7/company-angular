import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmploy=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmp",data)
  }
  
  viewEmploy=()=>{
    return this.http.get("http://localhost:8080/viewEmp")
  }
  searchEmploy=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmp",data)
  }
  updateEmploy=(data:any)=>{
    return this.http.post("http://localhost:8080/updateEmp",data)
  }
  deleteEmploy=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmp",data)
  }
  
}
