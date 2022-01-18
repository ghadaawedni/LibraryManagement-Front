import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../Model/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private apiServerUrl = 'http://localhost:9191';

  constructor(private http : HttpClient) { }

  public getAdmins() : Observable<Admin[]> {
    console.log("getAdmins in AdminService service is running !");
    return this.http.get<Admin[]> (`${this.apiServerUrl}/administration/admins`);
  }

  public addAdmin(admin: { firstName: any; lastName: any; password: any; phoneNumber: any; email: any; username: any }) : Observable<Admin> {
    return this.http.post<Admin> (`${this.apiServerUrl}/administration/register`, admin);
  }

  public deleteAdmin(id : number) {
    return this.http.delete (`${this.apiServerUrl}/administration/delete/`+id);
  }
}
