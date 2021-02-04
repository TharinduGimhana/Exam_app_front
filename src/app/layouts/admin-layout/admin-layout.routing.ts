import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { StudentProfileComponent } from '../../pages/studentProfile/studentProfile.component';
import { LecturerProfileComponent } from '../../pages/lecturerProfile/lecturerProfile.component';
import { StudentManagementComponent } from '../../pages/studentManagement/studentManagement.component';
import { SubjectManagementComponent } from '../../pages/subjectManagement/subjectManagement.component';
import { LecturerManagementComponent } from '../../pages/lecturerManagement/lecturerManagement.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'studentProfile',           component: StudentProfileComponent },
    { path: 'lecturerProfile',          component: LecturerProfileComponent },
    { path: 'studentManagement',          component: StudentManagementComponent },
    { path: 'subjectManagement',           component: SubjectManagementComponent },
    { path: 'lecturerManagement',  component: LecturerManagementComponent },
];
