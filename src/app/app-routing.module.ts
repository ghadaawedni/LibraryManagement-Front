import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {BookComponent} from "./book/book.component";
import {AdminComponent} from "./admin/admin.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "home"  , component: HomeComponent},
  {path: "students" , component: StudentComponent},
  {path: "books" , component: BookComponent},
  {path: "admin" , component: AdminComponent},
  {path : "**" , component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
