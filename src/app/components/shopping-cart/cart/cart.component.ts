import { Component, OnInit } from '@angular/core';
import { MessengerService} from '../../../services/messenger.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productId: 2, productName: 'test 1',  qty: 4, price: 100},
    // {id: 2, productId: 1, productName: 'test 1', qty: 3, price: 150},
    // {id: 3, productId: 4, productName: 'test 1', qty: 5, price: 100},
    // {id: 4, productId: 3, productName: 'test 1', qty: 2, price: 200}
  ];

  cartTotal = 0;
  constructor(
      private msg: MessengerService,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      // this.addProductToCart(product);
      this.loadCartItems();
    });
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateCartTotal();
    });
  }

  // addProductToCart(product: Product){
  //
  //   let productExists = false;
  //
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++;
  //       productExists = true;
  //       // break;
  //     }
  //   }
  //   if (!productExists){
  //     this.cartItems.push({
  //           productId: product.id,
  //           productName: product.name,
  //           qty: 1,
  //           price: product.price
  //         });
  //   }
  //
  //   // if(this.cartItems.length === 0){
  //   //   this.cartItems.push({
  //   //     productId: product.id,
  //   //     productName: product.name,
  //   //     qty: 1,
  //   //     price: product.price
  //   //   });
  //   // }else{
  //   //   for (let i in this.cartItems){
  //   //     if(this.cartItems[i].productId == product.id){
  //   //       this.cartItems[i].qty++;
  //   //       break;
  //   //     }else{
  //   //       this.cartItems.push({
  //   //         productId: product.id,
  //   //         productName: product.name,
  //   //         qty: 1,
  //   //         price: product.price
  //   //       });
  //   //     }
  //   //   }
  //   // }
  //
  //   console.log(product);
  //   this.calculateCartTotal();
  // }

  calculateCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
