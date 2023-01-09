import { CompSinc14Module } from './../comp-sinc14/comp-sinc14.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CompSinc14Module
  ],
  exports:[
    HomeComponent
  ]
})
export class PageModule { }
