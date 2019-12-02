import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PizzaService } from '../../data.servpizza'
import { User } from '../../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : NgModel
  user : any

  constructor(private PizzaService: PizzaService) { }

  ngOnInit() {
  }

  Login(email){
    this.PizzaService.getCustomer(email).subscribe(data => this.user = data)
  }
  

}
