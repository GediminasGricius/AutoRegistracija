import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import { RegnumberValidatorDirective } from './directive/regnumber-validator.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const routes:Routes=[
  {path: '', component:RegistrationListComponent},
  {path: 'registrationNew', component:RegistrationNewComponent},
  {path: 'registrationEdit/:id', component:RegistrationEditComponent},
  {path: 'register', component:AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    RegnumberValidatorDirective,
    RegistrationListComponent,
    RegistrationEditComponent,
    AuthComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
