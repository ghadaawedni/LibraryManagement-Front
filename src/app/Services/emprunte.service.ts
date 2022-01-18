import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../Model/admin";
import {Emprunte} from "../Model/Emprunte";

@Injectable({
  providedIn: 'root'
})
export class EmprunteService {

  private apiServerUrl = 'http://localhost:9191';

  constructor(private http : HttpClient) { }

  public getEmpruntes() : Observable<Emprunte[]> {
    console.log("getAdmins in AdminService service is running !");
    return this.http.get<Emprunte[]> (`${this.apiServerUrl}/books/empruntes/all`);
  }

  public addEmprunte(emprunte: { studentId: any; datePrevue: any; dateEmprunte: any; bookId: any }) : Observable<Emprunte> {
     return this.http.post<Emprunte> (`${this.apiServerUrl}/books/empruntes/save`, emprunte);
  }

  public updateEmprunte(emprunte: { dateRetour: string | null; id: number }) : Observable<Emprunte> {

     return this.http.put<Emprunte> (`${this.apiServerUrl}/books/empruntes/save`, emprunte);
  }

  deleteEmprunte(id: number) {
    return this.http.delete (`${this.apiServerUrl}/books/empruntes/`+id);
  }
}

