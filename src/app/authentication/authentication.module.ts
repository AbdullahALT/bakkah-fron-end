import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './directives/authentication-page/login-page.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/AuthService';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  declarations: [LoginPageComponent],
  providers: [AuthService],
  exports: [AuthenticationRoutingModule]
})
export class AuthenticationModule { }
