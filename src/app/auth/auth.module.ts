import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '../auth/auth-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthContainerComponent } from './auth-container/auth-container.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
