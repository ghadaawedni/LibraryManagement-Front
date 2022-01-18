import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../../Administration/admin/admin.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../Services/admin.service";
import {Admin} from "../../Model/admin";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminComponent: AdminComponent, private router: Router, private adminService: AdminService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required]
  });


  addAdmin() {
    let admin  = {
      username: this.addForm.value.username,
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      email: this.addForm.value.email,
      phoneNumber: this.addForm.value.phoneNumber,
      password: this.addForm.value.password
    }
    this.adminService.addAdmin(admin)
      .subscribe((data) => {

          this.adminComponent.addNewAdmin()
          this.adminComponent.getAdmins()
        },
        (error) => {

        }
      );

  }
}
