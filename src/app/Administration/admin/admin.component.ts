import { Component, OnInit } from '@angular/core';
import {Student} from "../../Model/student";
import {StudentService} from "../../Services/student.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Book} from "../../Model/book";
import {BookService} from "../../Services/book.service";
import {Admin} from "../../Model/admin";
import {AuthenticationService} from "../../Services/authentication.service";
import {AdminService} from "../../Services/admin.service";
import {Emprunte} from "../../Model/Emprunte";
import {EmprunteService} from "../../Services/emprunte.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public students: Student[] = [] ;
  public books: Book[] = [] ;
  public empruntes: Emprunte[] = [] ;
  public admins: Admin[] = [] ;
  public showAddForm : boolean = false;
  public showAddBookForm : boolean = false;
  public showAddAdminForm : boolean = false;
  public showAddEmprunteForm : boolean = false;


  msgBtn1 : String ='Add emprunte';
  msgBtn2 : String ='Add Admin';
  msgBtn3 : String ='Add Book';
  msgBtn4 : String ='Add Student';
  constructor(private emprunteService: EmprunteService,private adminService :AdminService,private authenticationService : AuthenticationService,private studentService : StudentService, private bookService : BookService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getBooks();
    this.getAdmins();
    this.getEmpruntes();
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

  public getEmpruntes ( ) : void {
    this.emprunteService.getEmpruntes()
      .subscribe(
        (res ) => {
          console.log(res)
          this.empruntes = res ;
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
      if(this.showAddForm) {
        this.msgBtn4 = "Cancel" ;
      }else {
        this.msgBtn4 ="Add Student";
      }
  }
  public addNewBook(){
      this.showAddBookForm = !this.showAddBookForm;
      if(this.showAddBookForm) {
        this.msgBtn3 = "Cancel" ;
      }else {
        this.msgBtn3 ="Add Book";
      }
  }

  public addNewAdmin(){
      this.showAddAdminForm = !this.showAddAdminForm;
      if(this.showAddAdminForm) {
        this.msgBtn2 = "Cancel" ;
      }else {
        this.msgBtn2 ="Add Admin";
      }
  }
  public addNewEmprunte(){
    this.showAddEmprunteForm = !this.showAddEmprunteForm;
    if(this.showAddEmprunteForm) {
      this.msgBtn1 = "Cancel" ;
    }else {
      this.msgBtn1 ="Add emprunte";
    }
  }


  deleteAdmin(id : number) {
    if(window.confirm("Would you really delete this E ")){
      this.adminService.deleteAdmin(id)
        .subscribe((data: any) =>  {
          this.getAdmins();
        }),
        (error : HttpErrorResponse) => {
        }
    };
  }


  public deleteEmprunte(id : number) {
    if(window.confirm("Would you really delete this Emprunte ")){
      this.emprunteService.deleteEmprunte(id)
        .subscribe((data: any) =>  {
          this.getEmpruntes();
        }),
        (error : HttpErrorResponse) => {
        }
    };
  }
}
