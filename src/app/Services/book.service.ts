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

  public addStudent(book :Book) : Observable<Book> {
    return this.http.post<Book> (`${this.apiServerUrl}/books/save`, book);
  }

  public updateStudent(book :Book) : Observable<Book> {
    return this.http.post<Book> (`${this.apiServerUrl}/books/update`, book);
  }

  public deleteStudent(bookId :number) : Observable<unknown> {
    const url = `http://localhost:9191/books/${bookId}`

    return this.http.delete(url);
  }
}
