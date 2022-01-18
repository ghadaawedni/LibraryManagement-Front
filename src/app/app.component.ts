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
  constructor(private route : Router ,private authenticationService : AuthenticationService,) {
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
      this.route.navigate(["/home"])
      this.setLoged(false);
    }
  }
}
