import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
// import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(this.localstorage.loggedIn()){
      console.log(this.localstorage.loggedIn())
      return true
    }else{
      this.router.navigateByUrl('/login');
      window.alert("You don't have permisson to view this page");
      return false
    }
    // return true;
  }

  constructor(private localstorage: LocalStorageService,
              private router: Router){

  }
}
