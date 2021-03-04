import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {JarwisService} from '../../../services/jarwis.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';




/*
@param form
*/


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name: FormControl;
  registerForm: FormGroup;

  form: any = {};

  public error = [];

  constructor( private builder: FormBuilder,
               private Jarwis: JarwisService,
               private router: Router,
               private localStorage: LocalStorageService,) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:[Validators.required]
    })
  }

  register(){
    this.Jarwis.signup(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
    );
  }

  handleResponse(data) {
    // this.Token.handle(data.access_token);
    this.localStorage.handleToken(data);
    this.router.navigateByUrl('/shop');
  }

  handleError(error){
    this.error = error.error.errors;
     // this.pass = this.error;
    // console.log(pass.password);
  }
}
