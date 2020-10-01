import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

class LineItem {
  quantity: number

  constructor(private product: any){
    this.quantity = 1;
  }

  get name(): string {
    return this.product.product;
  }

  get price(): number {
    return this.product.price;
  }

  get image(): string {
    return this.product.img_cart;
  }

  get total(): number {
    return this.price * this.quantity;
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}

class Cart {
  constructor(private items: LineItem[]) { }

  get total(): number {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  }
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  lineItems: LineItem[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  increase(lineItem: LineItem){
    lineItem.increase()
  }

  decrease(lineItem: LineItem){
    lineItem.decrease()

    if (lineItem.quantity <= 0) {
      const index = this.lineItems.indexOf(lineItem, 0);
      if (index > -1) {
        this.lineItems.splice(index, 1)
      }
    }
  }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCartDetails().subscribe(
      (data) => {
        this.lineItems = data['shopping_cart'].map(product => new LineItem(product));
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
