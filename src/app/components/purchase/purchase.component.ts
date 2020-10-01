import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @Input() cart: Cart

  constructor() { }

  ngOnInit(): void {
  }

}
