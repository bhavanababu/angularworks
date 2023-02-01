import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CubeComponent } from './cube/cube.component';
import { SmartSubComponent } from './smart-sub/smart-sub.component';
import {FormsModule} from '@angular/forms';
import { InterestComponent } from './interest/interest.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component'


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CubeComponent,
    SmartSubComponent,
    InterestComponent,
    HomeComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
