import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../Services/authentication.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appcomponent : AppComponent,private router: Router , private authenticationService : AuthenticationService, private fb : FormBuilder) { }

  ngOnInit(): void {
  }


  control : string =  "";
  jwt     : string =  "";

  loginForm: FormGroup =this.fb.group({
    username: ['',Validators.required ],
    password: ['',Validators.required],
  });

  signIn(){
    this.control = "";
    this.authenticationService.login(this.loginForm.value.username ,this.loginForm.value.password )
      .subscribe( (  data: any) => {
        this.jwt = data.jwt;
        localStorage.setItem("jwt" , this.jwt);
        this.authenticationService.getLogged(this.loginForm.value.username,this.jwt)
          .subscribe( ( data  ) => {
          localStorage.setItem('currentUser',JSON.stringify(data));
          this.router.navigate( ['/admin']);
          this.appcomponent.setLoged(true);
        });
      },(error) => {
        console.log(error)
        if(error.status == 403){
          this.control = "Vérifier vos données !";
        }
      }
    );
  }
}
