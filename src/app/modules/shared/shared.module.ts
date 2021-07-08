import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
