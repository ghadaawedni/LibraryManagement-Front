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
}
