import { Component } from '@angular/core';
import {AuthenticationService} from "./Services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ms-front-angular';
  logged : Boolean = false;
  constructor(private authenticationService : AuthenticationService,) {
  }

}
