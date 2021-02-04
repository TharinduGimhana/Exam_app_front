import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl =`${environment.host}/admin`;
  constructor(  private http: HttpClient) { }

  public signUpStudent(data:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/studentSignup`,data);

  }

  public lecturerSignUp(data:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/lecturerSignup`,data);

  }


  public adminLogin(data:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/adminLogin'`,data);

  }

  public addSubjects(data:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/addSubjects'`,data);

  }

  public getStudentSubjects():Observable<any>{
    return this.http.get<any>(`${this.adminUrl}/getStudentSubjects`);
  }

  public getLectureDetails():Observable<any>{
    return this.http.get<any>(`${this.adminUrl}/getLecturerDetails`);
  }
  

  public getUpdateSubjects(data:any):Observable<any>{
    return this.http.put<any>(`${this.adminUrl}/updateSubjects`,data);
  }

  public deleteSubject(data:any):Observable<any>{
    return this.http.delete<any>(`${this.adminUrl}/deleteSubject`,data);
  }
  public deleteStudent(data:any):Observable<any>{
    return this.http.delete<any>(`${this.adminUrl}/deleteStudent`,data);
  }

  public deleteLecturer(data:any):Observable<any>{
    return this.http.delete<any>(`${this.adminUrl}/deletedeleteLecturer`,data);
  }
  public deleteAdmin(data:any):Observable<any>{
    return this.http.delete<any>(`${this.adminUrl}/deleteAdmin`,data);
  }

  
}
