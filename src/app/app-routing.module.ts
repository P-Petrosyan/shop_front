import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import {ProfileComponent} from './components/auth/profile/profile.component';
import {RequestResetComponent} from './components/auth/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/auth/response-reset/response-reset.component';
import {AfterLoginGuard} from './guards/after-login.guard';
import {BeforeLoginGuard} from './guards/before-login.guard';
import {AdminComponent} from "./components/admin/admin.component";
import {IsAdminGuard} from "./guards/is-admin.guard";
import {CreateProductComponent} from "./components/admin/create-product/create-product.component";
import {RouteResolver} from './RouteResolver';
import {EditProductComponent} from './components/admin/edit-product/edit-product.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'},
    { path: 'login', component : LoginComponent, canActivate:[ BeforeLoginGuard ] },
    { path: 'register', component : RegisterComponent, canActivate:[ BeforeLoginGuard ]  },
    { path: 'profile', component : ProfileComponent, canActivate:[ AfterLoginGuard ]  },
    { path: 'request-password-reset', component : RequestResetComponent, canActivate:[ AfterLoginGuard ]  },
    { path: 'response-password-reset', component : ResponseResetComponent, canActivate:[ AfterLoginGuard ]  },
    { path: 'shop', component : ShoppingCartComponent},
    { path: 'cart', component : CartComponent },

    { path: 'admin/products', component : AdminComponent, canActivate:[ IsAdminGuard ] },
    { path: 'admin/products/edit/:id', component : EditProductComponent, canActivate:[ IsAdminGuard ] },
    {
        path: 'admin/products/create',
        component : CreateProductComponent,
        canActivate:[ IsAdminGuard ],
        resolve: {
            routeResolver: RouteResolver
        },
    },

    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [RouteResolver]
})


export class AppRoutingModule{

}
