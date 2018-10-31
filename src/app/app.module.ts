import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppCommonModule } from './modules/common/app-common.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthenticationModule,
    AppCommonModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
