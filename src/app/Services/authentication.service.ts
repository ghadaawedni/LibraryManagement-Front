import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../Model/student";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private router: Router, private httpClient : HttpClient) { }


  login(username : string, password : string ) {
    let user = {
      username: username,
      password : password
    }
    console.log(user)
    return this.httpClient.post ('http://localhost:9191/administration/authenticate',user );
  }

  getLogged(username : string, jwt : string){
    let headers = new HttpHeaders({
      'Authorization': "Bearer "+jwt });
    return this.httpClient.get<Student>('http://localhost:9191/administration/user/'+username,{headers : headers}) ;
  }

  register( student : Student) {
    return this.httpClient.post("http://localhost:9191/students/save",student)
  }

  getUserValue(){
    return JSON.parse(<string>localStorage.getItem('currentUser'));
  }

  signUp(user : Student){
    this.httpClient
      .post<any>('http://localhost:9090/user/register',user)
      .subscribe( (  )  => {
          this.router.navigate(['/login']);

        },(error) => {

          if(error.status == 400){
            console.log("your not registred yet !");
          }else if(error.status == 404){
            console.log("data invalid");
          }
        }
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
