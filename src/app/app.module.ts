import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
