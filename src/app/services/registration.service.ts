import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Registration } from '../models/registration';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private readonly url:string="https://techapziura-789e3-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http:HttpClient, private authService:AuthService) { }

  public addRegistration(registration:Registration){
    return this.http.post(this.url+"registrations.json",registration);
  }

  public getRegistrations(){
    return this.http.get<{[key:string]:Registration}>(this.url+"registrations.json").pipe(
      map((response)=>{
        let result:Registration[]=[];
        for(let key in response){
          result.push( {...response[key],id:key} );
        }
        return result;
      })
    )
  }

  public getRegistration(id:string){
    return this.http.get<Registration>(this.url+"registrations/"+id+".json").pipe(
      map((response)=>{
        response.id=id;
        return response;
      })
    )
  }

  public updateRegistration(registration:Registration){
    return this.http.patch(this.url+"registrations/"+registration.id+".json?auth="+this.authService.user?.idToken, registration);
  }

  public deleteRegistration(id:string){
    return this.http.delete(this.url+"registrations/"+id+".json");
  }

  

}
