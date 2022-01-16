import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./Components/book/book.component";
import {AdminComponent} from "./Administration/admin/admin.component";
import {HomeComponent} from "./Components/home/home.component";
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";

const routes: Routes = [
  {path: "home"      ,component: HomeComponent},
  {path: "students"  ,component: StudentComponent},
  {path: "books"     ,component: BookComponent},
  {path: "admin"     ,component: AdminComponent},
  {path: "login"     ,component: LoginComponent},
  {path: "register"  ,component: RegisterComponent},
  {path : "**"       ,redirectTo : "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
