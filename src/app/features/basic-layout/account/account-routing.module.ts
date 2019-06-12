import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountRoutes} from '../../../core/route-names';
import {AccountLoginComponent} from './account-login.component';

const routes: Routes = [
  {
    path: AccountRoutes.LOGIN,
    component: AccountLoginComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
