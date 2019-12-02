import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import {HttpClientModule} from '@angular/common/http';
import {PizzaService} from './data.servpizza';




import {FormsModule} from '@angular/forms';
import {Pizza} from './pizza';
import { OrderComponent } from './order/order.component';

import {LoginComponent } from './customer/login/login.component';
import {User} from './user';


import { RegisterComponent } from './customer/register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    OrderComponent,
    RegisterComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [PizzaService, Pizza, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
