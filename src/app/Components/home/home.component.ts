import { Component, OnInit } from '@angular/core';
import {BookService} from "../../Services/book.service";
import {Book} from "../../Model/book";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bestBooks: Book[] = [] ;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBestBooks().subscribe(
      data => {
        this.bestBooks = data;
      },error => {
        console.log(error)
      }
    )
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
