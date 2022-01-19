import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./Components/book/book.component";
import {AdminComponent} from "./Administration/admin/admin.component";
import {HomeComponent} from "./Components/home/home.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Administration/admin/add-student/register.component";
import {AuthGuard} from "./Guards/auth.guard";
import {NotAuthGuard} from "./Guards/not-auth.guard";
import {StudentComponent} from "./Components/student/student.component";

const routes: Routes = [
  {path: "home"      ,component: HomeComponent},
  {path: "books"     ,component: BookComponent},
  {path: "student"     ,component: StudentComponent},
  {path: "admin"     ,component: AdminComponent , canActivate : [NotAuthGuard]},
  {path: "login"     ,component: LoginComponent , canActivate : [AuthGuard]},
  {path: "register"  ,component: RegisterComponent},
  {path : "**"       ,redirectTo : "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
