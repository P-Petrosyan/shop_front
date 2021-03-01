import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {CategoryService} from './services/category.service';

@Injectable()
export class RouteResolver implements Resolve<any> {

    constructor(public categoryServise: CategoryService) { }

    resolve() {
        return this.categoryServise.getCategories()
    }

}
