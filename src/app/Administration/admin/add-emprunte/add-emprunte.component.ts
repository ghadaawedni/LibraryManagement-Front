import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../admin.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmprunteService} from "../../../Services/emprunte.service";
import {Student} from "../../../Model/student";
import {Book} from "../../../Model/book";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-emprunte',
  templateUrl: './add-emprunte.component.html',
  styleUrls: ['./add-emprunte.component.css'],
  providers: [DatePipe]
})
export class AddEmprunteComponent implements OnInit {

  public students: Student[] = [] ;
  public books: Book[] = [] ;

  constructor(private datePipe: DatePipe,private adminComponent: AdminComponent, private router: Router, private emprunteService: EmprunteService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
   this.students = this.adminComponent.students;
   this.books = this.adminComponent.books.filter(filterBook);
    // @ts-ignore
    function filterBook(book) {
      if (book.nbCopy > 0) {
        return book;
      }
    }
    this.addForm.controls["dateEmprunte"].setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'))
  }



  addForm: FormGroup = this.fb.group({
    bookId: ['', Validators.required],
    studentId: ['', Validators.required],
    dateEmprunte: ['', Validators.required],
    datePrevue: ['', Validators.required]
  });


  addEmprunte() {
    let emprunte = {
      bookId: this.addForm.value.bookId,
      studentId: this.addForm.value.studentId,
      dateEmprunte: this.addForm.value.dateEmprunte,
      datePrevue: this.addForm.value.datePrevue
    }


     this.emprunteService.addEmprunte(emprunte)
       .subscribe((data) => {
           this.adminComponent.addNewEmprunte()
           this.adminComponent.getEmpruntes()
           this.adminComponent.getBooks()
         },
         (error) => {
         }
       );

  }


}
