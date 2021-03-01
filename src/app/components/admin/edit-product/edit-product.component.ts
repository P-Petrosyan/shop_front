import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, NgForm} from '@angular/forms';
import {Product} from '../../../models/product';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {CategoryService} from '../../../services/category.service';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})


export class EditProductComponent implements OnInit {

  editForm: FormGroup;
  product: any;
  id: number;
  public error = [];
  form: any = {
    category_id: [] = [],
  };

  dropdownList:any = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};


  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategories().subscribe((data: {}) => {
      this.dropdownList = data;
      console.log(this.dropdownList)
    });

    this.product = this.productService.getProduct(this.id).subscribe((product: any) => {
      this.product = product;
      this.editForm = product;
      console.log( this.product.categories)
      console.log( this.editForm)


    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
    };
    // console.log(this.productService.getProduct(this.id));
    // getProduct(id){
    //
    //   this.getProducts().subscribe((products: any) => {
    //     console.log(products.find(x=>x.id === id));
    //     return products.find(x=>x.id === id)
    //   })
    //   // console.log(id)
    // }
  }

  edit(form: NgForm){
    const fd = new FormData();


    // this.form.category_id = product.categories


    console.log(this.product.categories);
      for (let i =0 ; i < this.product.categories.length; i++){

        console.log(this.product.categories[i].id)
        // for (let j = 0 ; j < this.form.category_id.length ; j++){
        //   if(this.form.category_id[j] != this.product.categories[i].id){

          this.form.category_id.push(this.product.categories[i].id)
          // }
        // }
        console.log(this.form.category_id);

      }
    // console.log(this.form.category_id);
    // form.value.category_id =  form.value.categories
    debugger

    // fd.append('image', this.form.image, this.form.image.name)
    fd.append('name', this.product.name)
    fd.append('category_id', this.form.category_id)
    // fd.append('category_id', this.form.category_id)
    fd.append('full_description', this.product.full_description)
    fd.append('short_description', this.product.short_description)
    fd.append('price', this.product.price)
    // console.log(this.product.categories.id)

    console.log(fd)
    debugger
    this.productService.setProduct(this.id, fd).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

  handleResponse(data) {
    // this.Token.handle(data.access_token);
    this.router.navigateByUrl('/admin/products');
    // this.localStorage.handleToken(data);
    console.log(data);
  }

  handleError(error){
    this.error = error.error.errors;

  }

  onItemSelect(item: any) {
    console.log(item.id);
    // this.form.category_id.push(item.id);
    // console.log(this.form.category_id)
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onFileSelected(event){
    console.log(event)
    this.form.image = event.target.files[0];
  }

}
