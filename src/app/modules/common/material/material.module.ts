import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule} from '@angular/material'

const modules = [
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
