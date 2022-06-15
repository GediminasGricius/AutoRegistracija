import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-new',
  templateUrl: './registration-new.component.html',
  styleUrls: ['./registration-new.component.css']
})
export class RegistrationNewComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  public registrationSubmit(f:NgForm){
    console.log("Forma išsiųsta");
    
    this.registrationService.addRegistration(f.form.value).subscribe(()=>{
      this.router.navigate(['/']);
      
    });
    
  }

}
