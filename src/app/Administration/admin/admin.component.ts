import { Component, OnInit } from '@angular/core';
import {Student} from "../../Model/student";
import {StudentService} from "../../Services/student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Book} from "../../Model/book";
import {BookService} from "../../Services/book.service";
import {Admin} from "../../Model/admin";
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public students: Student[] = [] ;
  public books: Book[] = [] ;
  public admins: Admin[] = [] ;

  public showAddForm : boolean = false;
  public showAddBookForm : boolean = false;
  public showAddAdminForm : boolean = false;

  constructor(private authenticationService : AuthenticationService,private studentService : StudentService, private bookService : BookService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getBooks();
    this.getAdmins();
  }

  public getStudents ( ) : void {
    this.students = [];
    this.studentService.getStudents()
      .subscribe(
        (response ) => {
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
          console.log(res)
          this.books = res ;
        },
        (error : HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public getAdmins ( ) : void {
    this.authenticationService.getAdmins()
      .subscribe(
        (res ) => {
          console.log(res)
          this.admins = res ;
        },
        (error : HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public deleteStudent (id :number){
    if(window.confirm("Would you really delete this Student ")){
      this.studentService.deleteStudent(id)
        .subscribe((data: any) =>  {
          this.getStudents()
        }),
        (error : HttpErrorResponse) => {
      }
    };
  }

  public deleteBook (id :number){
    if(window.confirm("Would you really delete this Book ")){
      this.bookService.deleteBook(id)
        .subscribe((data: any) =>  {
          this.getBooks()
        }),
        (error : HttpErrorResponse) => {
      }
    };
  }

  public updateBook (id :number){
      // this.studentService.deleteStudent(id)
      //   .subscribe((data: any) =>  {
      //     this.getStudents()
      //   }),
      //   (error : HttpErrorResponse) => {
      // }
  }


  public addNewStudent(){
      this.showAddForm = !this.showAddForm;
  }
  public addNewBook(){
      this.showAddBookForm = !this.showAddBookForm;
  }
  public addNewAdmin(){
      this.showAddAdminForm = !this.showAddAdminForm;
  }
}
