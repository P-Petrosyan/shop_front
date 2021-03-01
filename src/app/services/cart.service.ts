import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { basketUrl } from '../config/api';
import { Product } from '../models/product';
import { LocalStorageService } from 'src/app/services/local-storage.service';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) { }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(basketUrl).pipe(
        map((result: any[]) => {
          let cartItems: CartItem[] = [];

          for (let item of result){
            let productExists = false;
            if(item.userId === this.localStorage.getUserLocal().id){
                for (let i in cartItems) {
                    if (cartItems[i].productId === item.product.id ) {
                        cartItems[i].qty++;
                        productExists = true;
                        break;
                    }
                }
                if (!productExists){
                    // this.cartItems.push({
                    //   productId: product.id,
                    //   productName: product.name,
                    //   qty: 1,
                    //   price: product.price
                    // });

                    cartItems.push( new CartItem(item.id, item.product));
                }
            }

          }
          return cartItems;

        })
    );
  }

  addProductToCart(product: Product): Observable<any>{
      // const id = product.id;
      const userId = this.localStorage.getUserLocal().id;
      // console.log(id);
      return this.http.post(basketUrl, {product,userId} );
  }
}
