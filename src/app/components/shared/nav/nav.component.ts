import {AfterContentInit, AfterViewChecked, Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../services/local-storage.service';
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit, AfterViewChecked {

  public loggedIn: boolean;
  public isAdmin: boolean;

  constructor(private auth: AuthService,
              private router: Router,
              private localStorage: LocalStorageService,
              private admin: AdminService) { }


  ngAfterViewChecked(): void{
    if(this.localStorage.getUserLocal()){

      this.isAdmin =  this.admin.checkRole();
    }
  }

  ngOnInit(): void {
    this.auth.authStatus.subscribe( value => this.loggedIn = value);
    // this.isAdmin =  this.admin.checkRole();
  }

  toProducts(event: MouseEvent){
    event.preventDefault();
    this.router.navigateByUrl('/admin/products');
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.localStorage.removeTokenLocal();
    this.localStorage.removeUserLocal();
    this.auth.changeAuthStatus(false);
    // this.localStorage.setTokenLocal(data)
    this.router.navigateByUrl('/login');

  }

}
