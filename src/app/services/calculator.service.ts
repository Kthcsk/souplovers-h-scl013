import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  quantity: number;

  constructor() {
    this.quantity = 0;
   }

/*    get price(): number {
     return this.product.price * this.quantity;
   } */

   increase(){
     this.quantity++;
   }

   decrease(){
     if (this.quantity > 0){
       this.quantity--;
     }
   }
}
