import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import { RegnumberValidatorDirective } from './directive/regnumber-validator.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path: '', component:RegistrationListComponent},
  {path: 'registrationNew', component:RegistrationNewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    RegnumberValidatorDirective,
    RegistrationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
