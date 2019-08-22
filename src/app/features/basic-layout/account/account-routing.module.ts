import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountRoutes} from '../../../core/route-names';
import {AccountLoginComponent} from './account-login.component';
import {AccountRegisterComponent} from './account-register.component';

const routes: Routes = [
  {
    path: AccountRoutes.path.login,
    component: AccountLoginComponent
  },
  {
    path: AccountRoutes.path.register,
    component: AccountRegisterComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
