import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { AdminService } from 'app/services/admin-service/admin.service';
import { Router } from '@angular/router';
import { RouterModule, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage = '';

  constructor(private _myservice: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup(
      {
        adminRegNumber: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }
    );
  }

  ngOnInit() {
  }

  IsValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }



  loginFormModalRegno = new FormControl('', Validators.required);
  loginFormModalPassword = new FormControl('', Validators.required);

  adminLogin() {

    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._myservice.adminLogin(this.loginForm.value)
        .subscribe(
          data => {
            console.log("sdasd")
            console.log(data);
            if (data.token != undefined) {
              localStorage.setItem('token', data.token);
              this.router.navigate(['/dash']);
            } else {
              this.successMessage = 'Invalid Email Or Password';
            }


          },
          error => this.successMessage = 'Invalid Email Or Password'
        );
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


}
