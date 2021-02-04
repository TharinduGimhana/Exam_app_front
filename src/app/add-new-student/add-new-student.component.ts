import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin-service/admin.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {

  public firstName:string
  public lastName:string
  public faculty:string
  public department:string
  public regNo:string
  public indexNo:string
  public contactNo:number
  public email:string
  public password:string
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  addStudent(form){
    console.log({
      firstName:this.firstName,
      lastName:this.lastName,
      faculty:this.faculty,
      department:this.department,
      regNo:this.regNo,
      indexNo:this.indexNo,
      contactNo:this.contactNo,
      email:this.email,
      password:this.password
    })
    this.adminService.signUpStudent({
      firstName:this.firstName,
      lastName:this.lastName,
      faculty:this.faculty,
      department:this.department,
      regNo:this.regNo,
      indexNo:this.indexNo,
      contactNo:this.contactNo,
      email:this.email,
      password:this.password
    }).subscribe(data=>{
      console.log (data)
    })
  }

}
