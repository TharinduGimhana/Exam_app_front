import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin-service/admin.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {

  addStudent: FormGroup;
  successMessage:"";

  constructor(private AdminService:AdminService, private http: HttpClient) {


    this.addStudent = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      faculty: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      regNo: new FormControl(null, Validators.required),
      indexNo: new FormControl(null, Validators.required),
      contactNo: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
  }

 
  signUpStudent() {

    

    // console.log(this.addStudent.value);
    console.log("function work");
    if (this.addStudent.valid) {

      this.AdminService.signUpStudent(this.addStudent.value)
        .subscribe(
          // data => this.successMessage = 'Added success',
          // error => this.successMessage = 'Some error'
          data =>{console.log(data);
            console.log("service work");
          },
          error =>{
            console.log("error");
          }
          
        
        );


    }

    
  }

}
