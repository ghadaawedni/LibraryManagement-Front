import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../../Administration/admin/admin.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private adminComponent: AdminComponent, private router: Router, private bookService: BookService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }


  addForm: FormGroup = this.fb.group({
    bookName: ['', Validators.required],
    bookAuthor: ['', Validators.required],
    description: ['', Validators.required],
    nbCopy: ['', Validators.required]
  });


  addBook() {
    let book = {
      bookName: this.addForm.value.bookName,
      bookAuthor: this.addForm.value.bookAuthor,
      description: this.addForm.value.description,
      nbCopy: this.addForm.value.nbCopy
    }

    this.bookService.addBook(book)
      .subscribe((data) => {

          this.adminComponent.addNewBook()
          this.adminComponent.getBooks()
        },
        (error) => {

        }
      );

  }
}
