import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountRegisterComponent} from './pages/account-register/account-register.component';
import {AccountLoginComponent} from './pages/account-login/account-login.component';

@NgModule({
  declarations: [AccountRegisterComponent,
    AccountLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
