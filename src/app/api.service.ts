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
  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",data)
  }
  updateSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/updateSecurity",data)
  }
  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchSecurity",data)
  }
  deleteSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteSecurity",data)
  }
  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewSecurity")
  }
  leaveStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/leaveStatus",data)
  }
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewAllLeaves")
  }
  viewLog=()=>{
    return this.http.get("http://localhost:8080/viewAllLog")
  }
  employLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/authEmp",data)
  }
  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/applyLeave",data)
  }
  employStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLeaveById",data)
  }
  employLog=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLogById",data)
  }
  securityLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/authSecurity",data)
  }
  checkIn=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }
  viewCeckIn=()=>{
    return this.http.get("http://localhost:8080/viewCheckin")
  }
  checkOut=(data:any)=>{
    return this.http.post("http://localhost:8080/checkOut",data)
  }
}
