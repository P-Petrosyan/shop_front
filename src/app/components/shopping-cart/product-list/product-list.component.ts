import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../../../models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = [];
  totalRecords: number;
  page: number = 1;

  constructor(private productService: ProductService) {

  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
       this.productsList = products;

       this.totalRecords = products.length
    });
  }
}

