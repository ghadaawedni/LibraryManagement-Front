import { Component, OnInit } from '@angular/core';
import {Student} from "../Model/student";
import {StudentService} from "../Services/student.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: Student[] =[];

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
      this.getStudents();
  }

  public getStudents ( ) : void {
    this.studentService.getStudents()
      .subscribe(
      (response ) => {
        console.log(response)
        this.students = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
