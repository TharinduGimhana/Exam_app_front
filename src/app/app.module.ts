import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddNewLecComponent } from './add-new-lec/add-new-lec.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { EditStdProfileComponent } from './edit-std-profile/edit-std-profile.component';
import { EditLecProfileComponent } from './edit-lec-profile/edit-lec-profile.component';
import { AddNewSubjectComponent } from './add-new-subject/add-new-subject.component';
import { ApproveSubjectsComponent } from './approve-subjects/approve-subjects.component';
import { ApplyExamComponent } from './apply-exam/apply-exam.component';
import { ApprovalFormComponent } from './approval-form/approval-form.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './services/admin-service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student-service/student.service';

import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AddNewLecComponent,
    AddNewStudentComponent,
    EditStdProfileComponent,
    EditLecProfileComponent,
    AddNewSubjectComponent,
    ApproveSubjectsComponent,
    ApplyExamComponent,
    ApprovalFormComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '',
      component: LoginComponent},
      {
      path: 'AddNewLec',
      component: AddNewLecComponent
    },
  {
    path: 'AddNewStudent',
      component: AddNewStudentComponent
  },
  {
    path: 'AddNewSubject',
      component: AddNewSubjectComponent
  },
  {path: 'EditStdProfile',
  component: EditStdProfileComponent
  },
  {path: 'EditLecProfile',
  component: EditLecProfileComponent
  },
  {path: 'ApplyExam',
  component: ApplyExamComponent
  },
  {path: 'ApproveSubjects',
  component: ApproveSubjectsComponent
  },
  {path: 'ApprovalForm',
  component: ApprovalFormComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent
  },{
    path: 'dash',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  
]),
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
    
  ],
  providers: [
    AdminService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
