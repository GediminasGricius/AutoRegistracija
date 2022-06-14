import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-new',
  templateUrl: './registration-new.component.html',
  styleUrls: ['./registration-new.component.css']
})
export class RegistrationNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public registrationSubmit(f:NgForm){
    console.log("Forma išsiųsta");
    console.log(f);
  }

}
