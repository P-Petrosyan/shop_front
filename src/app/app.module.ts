import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { RequestResetComponent } from './components/auth/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/response-reset/response-reset.component';
import { JarwisService} from './services/jarwis.service';
import { LocalStorageService} from './services/local-storage.service';
import { AuthService} from './services/auth.service';
import { AfterLoginGuard} from './guards/after-login.guard';
import { BeforeLoginGuard} from './guards/before-login.guard';
import {IsAdminGuard} from "./guards/is-admin.guard";
import { ProductsComponent } from './components/admin/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckbox, MatCheckboxDefaultOptions} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormField} from '@angular/material/form-field';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { ProductPaginationComponent } from './product-pagination/product-pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProductsComponent,
    AdminComponent,
    CreateProductComponent,
    EditProductComponent,
    // MatFormField

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    NoopAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatPaginatorModule,
    NgxPaginationModule
    // MatFormField
    // BrowserModule,FormsModule, MultiSelectModule
    // BrowserAnimationsModule
],
  providers: [JarwisService, LocalStorageService, AuthService, AfterLoginGuard, BeforeLoginGuard, IsAdminGuard,
    MatFormField],
  bootstrap: [AppComponent]
})
export class AppModule { }
