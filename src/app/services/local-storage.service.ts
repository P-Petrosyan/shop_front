import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  }

  constructor() { }

  handleToken(data){
    this.setTokenLocal(data);
    // console.log(this.loggedIn());
  }

  setTokenLocal(data){
    localStorage.setItem('token', data.access_token);
    this.setUserLocal(data);
  }

  setUserLocal(data){
    localStorage.setItem('user', JSON.stringify(data.user));
    // console.log(localStorage.getUserLocal.roles);
  }

  getTokenLocal(){
    return localStorage.getItem('token');
  }

  getUserLocal(){
    return JSON.parse(localStorage.getItem('user'));
  }

  removeTokenLocal(){
    localStorage.removeItem('token');
  }

  removeUserLocal(){
    localStorage.removeItem('user');
  }

  // isValid(){
  //   const  token = this.getTokenLocal();
  //   if(token){
  //     const payload = this.payload(token)
  //     if(payload){
  //       return Object.values(this.iss).indexOf(payload.iss)> -1 ? true : false;
  //     }
  //   }
  //   return false;
  // }

  // payload(token){
  //  const payload = token.split('.')[1];
  //  return  this.decode(payload);
  // }
  //
  // decode(payload){
  //   return JSON.parse(atob(payload));
  // }

  loggedIn(){
    if(this.getTokenLocal()){
      return true
    }
    return false
  }
}
