import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';

const routes: Routes = [

  {path : 'signup', component:AuthContainerComponent},
  {path : 'login', component:AuthContainerComponent},
  {path : 'authcontainer', component:AuthContainerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
