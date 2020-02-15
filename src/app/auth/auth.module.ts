import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { LocksreenComponent } from './locksreen/locksreen.component';
import { RegisterComponent } from './register/register.component';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    ErrorComponent,
    ForgotComponent,
    LoginComponent,
    LocksreenComponent,
    RegisterComponent,
  ],
  exports: [
    AuthComponent,
    ErrorComponent,
    ForgotComponent,
    LoginComponent,
    LocksreenComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
