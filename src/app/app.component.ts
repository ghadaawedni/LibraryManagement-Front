import { Component } from '@angular/core';
import {AuthenticationService} from "./Services/authentication.service"
import { Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-front-angular';
  logged : Boolean = false;
  constructor(private route : Router ,private authenticationService : AuthenticationService) {
    if(localStorage.getItem("currentUser")){
      this.setLoged(true);
    }
  }

  setLoged(value : boolean){
    this.logged = value;
  }

  logOut(){
    if(window.confirm("Would you really log OUT ? ")){
      localStorage.removeItem("currentUser");
      localStorage.removeItem("jwt");
      this.route.navigate(["/home"])
      this.setLoged(false);
    }
  }

  // @ts-ignore
  onActivate(event) {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
}
