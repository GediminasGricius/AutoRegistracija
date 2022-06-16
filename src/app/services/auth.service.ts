import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly key="AIzaSyBMjK9X-IscBCfHyVdG4BGeG06d9WP25ao";
  private readonly url="https://identitytoolkit.googleapis.com/v1/accounts";


  constructor(private http:HttpClient) { }

  public register(email:string,password:string){
    return this.http.post(this.url+":signUp?key="+this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    });
  }
}
