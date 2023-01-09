import { CompSinc14Module } from './comp-sinc14/comp-sinc14.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    CompSinc14Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
