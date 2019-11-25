import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import {HttpClientModule} from '@angular/common/http';
import {PizzaService} from './data.servpizza';

import {Pizza} from './pizza';






@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [PizzaService, Pizza],
  bootstrap: [AppComponent]
})
export class AppModule { }
