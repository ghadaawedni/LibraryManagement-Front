import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../Model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl = 'http://localhost:9191';

  constructor(private http : HttpClient) { }

  public getStudents() : Observable<Student[]> {
    return this.http.get<Student[]> (`${this.apiServerUrl}/students/all`);
  }

  public addStudent(student :Student) : Observable<Student> {
    return this.http.post<Student> (`${this.apiServerUrl}/students/save`, student);
  }

  public updateStudent(student :Student) : Observable<Student> {
    return this.http.post<Student> (`${this.apiServerUrl}/students/update`, student);
  }

  public deleteStudent(studentID :number)  {
    let student = {
      studentId : studentID
    }
    return this.http.post ("http://localhost:9191/students/delete",student);
  }

}
