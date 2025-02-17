import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:"full"},
  {
    path: '', loadChildren:() => import("./auth/auth.module")
    .then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
