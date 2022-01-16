import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../Services/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router , private authenticationService : AuthenticationService, private fb : FormBuilder) { }

  ngOnInit(): void {
  }


  registerForm: FormGroup =this.fb.group({
    firstName: ['',Validators.required ],
    lastName: ['',Validators.required],
    age: ['',Validators.required],
    studyField: ['',Validators.required],
    university: ['',Validators.required],
    phone: ['',Validators.required],
  });



  signUp(){
    let student = {
      firstName   :  this.registerForm.value.firstName,
      lastName    :  this.registerForm.value.lastName,
      age         :  this.registerForm.value.age,
      studyField  :  this.registerForm.value.studyField,
      university  :  this.registerForm.value.university,
      phone       :  this.registerForm.value.phone
    }

    this.authenticationService.register(student)
      .subscribe( (  data: any) => {
        this.router.navigate( ['/login']);
        },(error) => {

        }
      );
  }
}
