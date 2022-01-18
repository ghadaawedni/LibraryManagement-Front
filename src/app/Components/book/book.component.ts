import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../../Administration/admin/admin.component";
import {Book} from "../../Model/book";
import {BookService} from "../../Services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Book[] = [] ;


  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    // this.adminComponent.getBooks();
    // this.books = this.adminComponent.books;
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
      },error => {
        console.log(error)
      }
    )
  }

}
