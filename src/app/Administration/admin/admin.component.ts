import { Component, OnInit } from '@angular/core';
import {Student} from "../../Model/student";
import {StudentService} from "../../Services/student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Book} from "../../Model/book";
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public students: Student[] = [] ;
  public books: Book[] = [] ;

  constructor(private studentService : StudentService, private bookService : BookService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getBooks();
  }

  public getStudents ( ) : void {
    this.studentService.getStudents()
      .subscribe(
        (response ) => {
          console.log(response);
          response.map((res: Student) => {
            if(res.exist == 1){
              this.students.push(res)
            }
          })
        },
        (error : HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public getBooks ( ) : void {
    this.bookService.getBooks()
      .subscribe(
        (res ) => {
          this.books = res ;
        },
        (error : HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public deleteStudent (id :number){
    if(window.confirm("message")){
      this.studentService.deleteStudent(id)
        .subscribe((data: any) =>  {}),
        (error : HttpErrorResponse) => {
      }
    };
  }

  public updateStudent (id : number){
    //Student student = this.studentService.getStudentById(id)
    //this.studentService.updateStudent(student);
  }

}
