import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../Model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiServerUrl = 'http://localhost:9191';

  constructor(private http : HttpClient) { }

  public getBooks() : Observable<Book[]> {
    console.log("getbooks in book service is running !");
    return this.http.get<Book[]> (`${this.apiServerUrl}/books/all`);
  }

  public addBook(book: { nbCopy: any; description: any; bookAuthor: any; bookName: any }) : Observable<Book> {
    return this.http.post<Book> (`${this.apiServerUrl}/books/`, book);
  }

  public deleteBook(id : number)   {
    return this.http.delete (`${this.apiServerUrl}/books/`+id);
  }

}
