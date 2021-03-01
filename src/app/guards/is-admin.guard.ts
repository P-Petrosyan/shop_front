import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

import {AdminService} from "../services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(this.admin.checkRole()){
      console.log(this.admin.checkRole());
      return true;
    }else{
      this.router.navigateByUrl('/shop');
      window.alert("You don't have permisson to view this page");
      return false
    }
  }

  constructor(private admin: AdminService,
              private router: Router){

  }
}
