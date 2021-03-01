import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {productsUrl} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private localStorage: LocalStorageService) { }

  checkRole(){
    if (this.localStorage.getUserLocal().roles == 'admin'){
      return true;
    }else{
      return false;
    }
  }

}
