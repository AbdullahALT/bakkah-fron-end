import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/AuthService';
import { AuthInterceptor } from './services/AuthInterceptor';
import { LoginPageComponent } from './components/authentication-page/login-page.component';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  declarations: [LoginPageComponent],
  providers: [AuthService, AuthInterceptor],
  exports: [AuthenticationRoutingModule]
})
export class AuthenticationModule { }
