import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { StudentProfileComponent }            from '../../pages/studentProfile/studentProfile.component';
import { LecturerProfileComponent }           from '../../pages/lecturerProfile/lecturerProfile.component';
import { StudentManagementComponent }           from '../../pages/studentManagement/studentManagement.component';
import { SubjectManagementComponent }            from '../../pages/subjectManagement/subjectManagement.component';
import {LecturerManagementComponent }   from '../../pages/lecturerManagement/lecturerManagement.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    StudentProfileComponent,
    LecturerProfileComponent,
    StudentManagementComponent,
    SubjectManagementComponent,
    LecturerManagementComponent,
  ]
})

export class AdminLayoutModule {}
