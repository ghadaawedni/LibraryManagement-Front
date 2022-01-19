import { Component, OnInit } from '@angular/core';
import {AdminComponent} from "../../Administration/admin/admin.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../Services/book.service";
import {Emprunte} from "../../Model/Emprunte";
import {BookStudent} from "../../Model/bookStudent";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(  private bookService : BookService, private fb : FormBuilder) { }

  public empruntes : BookStudent [] = [];
  public  show : boolean = false;

  ngOnInit(): void {
  }

  studentForm: FormGroup =this.fb.group({
    email: ['',[Validators.required ]]
  });

  getMyBooks(){

    this.bookService.getBooksByStudent(this.studentForm.value.email)
      .subscribe( (  data: any) => {
        this.empruntes = data;
        console.log(data)
        this.show = true;
        },(error) => {

        }
      );
  }

}
