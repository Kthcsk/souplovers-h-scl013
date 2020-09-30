import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartDetails: any[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCartDetails().subscribe(
      (data) => {
        this.shoppingCartDetails = data['shopping_cart'];
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
