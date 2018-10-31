import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, 
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    BrowserModule,
    CommonModule, 
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class AppCommonModule { }
