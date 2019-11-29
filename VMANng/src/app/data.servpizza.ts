import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Pizza} from './pizza'
import {Observable} from  'rxjs';
import { HttpHeaders } from '@angular/common/http';





@Injectable({
    providedIn: 'root'
})

export class PizzaService{

    
constructor(private http: HttpClient){

    
}
    
    

 getPizzas(){
    
    
   
         
          

    return  this.http.get("http://localhost:5000/api/Serve", { headers: new HttpHeaders({'Accept': 'application/json','Content-Type':  'application/json'  })})


}
}
