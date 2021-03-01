import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {MessengerService} from '../../../services/messenger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @Input() productItem: Product;

  productsList: Product[] = [];
  totalRecords: number;
  page: number = 1;
  imagePath: string;

  constructor(private productService: ProductService,
              private msg: MessengerService,
              private actRoute: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.productsList = products;
      this.totalRecords = products.length
    });

    this.actRoute.data.subscribe((data:any) => {
      console.log(data);
      // console.log(data.routeResolver)
    });

    // this.productService.getImages().subscribe((images: any) =>{
    //    this.imagePath = images;
    // })
  }

  onDelete(id: number){
    return this.productService.onDelete(id).subscribe((data:any) => {
      console.log(data);
    });
  }

}
