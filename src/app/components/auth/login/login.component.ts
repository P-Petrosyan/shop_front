import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import {JarwisService} from '../../../services/jarwis.service';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // http: HttpClient;

  model: any = {};
  error = null;
  token = null;

  constructor( private builder: FormBuilder,
               private Jarwis: JarwisService,
               private localStorage: LocalStorageService,
               private auth: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.token =  this.localStorage.getTokenLocal();
    // console.log(this.localStorage.getUserLocal());
  }

  buildForm(){
    this.loginForm = this.builder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    })
  }

  login(){
    // console.log(this.model);
      this.Jarwis.login(this.model).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.localStorage.handleToken(data);
    this.auth.changeAuthStatus(true);
    // this.localStorage.setTokenLocal(data)
    this.router.navigateByUrl('/shop');
  }

  handleError(error){
    this.error = error.error.error;
  }
}
