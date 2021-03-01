import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {adminProductsUrl, imageUrl, productsUrl} from '../config/api';
import {filter} from 'minimatch';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }

  create(data){
    console.log(data)
    return this.http.post(`${adminProductsUrl}/create`, data);
  }

  onDelete(id){
    console.log(id)
    return this.http.post(`${adminProductsUrl}/delete/${id}`, id);
  }

  getProduct(id){
    return this.http.get(adminProductsUrl+'/edit/'+id)
  }

  setProduct(id, data){
    console.log(data);
    return this.http.post(adminProductsUrl+'/edit/'+id, data )
  }



  // getImages(){
  //   return this.http.get(imageUrl);
  // }

  //
  // setProductId(id){
  //     return   id;
  // }


}

