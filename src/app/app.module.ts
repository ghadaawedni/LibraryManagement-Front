import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './Components/book/book.component';
import { AdminComponent } from './Administration/admin/admin.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentService} from "./Services/student.service";
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {BookService} from "./Services/book.service";
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component';
import { AddEmprunteComponent } from './Components/add-emprunte/add-emprunte.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    AddAdminComponent,
    AddEmprunteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
