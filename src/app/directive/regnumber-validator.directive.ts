import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[regnumber]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:RegnumberValidatorDirective,
      multi:true
    }
  ]
})
export class RegnumberValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let value:string=control.value;
    let patern:RegExp=/^[a-z|A-Z]{3}[0-9]{3}$/;
    if (patern.test(value)){
      return null;
    }else{
      return {error:"klaida"};
    }
   
  }

}
