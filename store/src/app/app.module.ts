import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavComponent } from './nav/nav.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryComponent } from './category/category.component';
import {ReactiveFormsModule}  from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    NavComponent,
    ProductdetailsComponent,
    CategoryComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
