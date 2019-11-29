import { Component, OnInit} from '@angular/core';
import { PizzaService } from '../data.servpizza';
import { Pizza } from '../pizza';






@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})


export class CustomerComponent implements OnInit{
 
  pizza :  Pizza [] = []


  
  

  pizzaImageUrl = 'dist/assets/garden-veggie-pizza.ico';

 

  constructor(private PizzaService: PizzaService){

              

  }

  ngOnInit(){
  
    
    

}
  public Pizzasgetter(){
    
    this.PizzaService.getPizzas().subscribe(data =>
      this.pizza = data[0])
  }

  public PizzaPopper(){
    
  }
  
}

  

