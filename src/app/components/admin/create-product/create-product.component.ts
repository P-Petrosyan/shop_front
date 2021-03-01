import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {JarwisService} from "../../../services/jarwis.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";
import {FormControl} from '@angular/forms';
import { CheckBoxSelectionService, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createForm: FormGroup;
  form: any = {
    category_id: [] = [],
  };
  public error = [];

  dropdownList:any = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService,

              ) { }

  ngOnInit(): void {
    // this.actRoute.data.subscribe(data => {
    //   console.log('Check route resolver data')
    //   console.log(data.routeResolver)
    // })

    this.categoryService.getCategories().subscribe((data: {}) => {
      this.dropdownList = data;
      console.log(this.dropdownList)
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
    };
  }

  onItemSelect(item: any) {
    console.log(item);
    this.form.category_id.push(item.id);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onFileSelected(event){
    console.log(event)
    this.form.image = event.target.files[0];
  }

  create(){
    console.log(this.form);
    // debugger;
    const fd = new FormData();
    fd.append('image', this.form.image, this.form.image.name)
    fd.append('name', this.form.name)
    fd.append('category_id', this.form.category_id)
    fd.append('full_description', this.form.full_description)
    fd.append('short_description', this.form.short_description)
    fd.append('price', this.form.price)

    this.productService.create(fd).subscribe(
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
}
