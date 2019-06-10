import {Routes} from '@angular/router';
import {AccountLoginComponent} from './pages/account-login/account-login.component';
import {AccountRegisterComponent} from './pages/account-register/account-register.component';

export const accountRoutesNames = {
  LOGIN: 'login',
  REGISTER: 'register'
};
export const accountRoutes: Routes = [
  {
    path: accountRoutesNames.LOGIN,
    component: AccountLoginComponent
  },
  {
    path: accountRoutesNames.REGISTER,
    component: AccountRegisterComponent
  }
];
