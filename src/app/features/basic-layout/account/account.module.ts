import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {ACCOUNT_COMPONENTS} from './account.index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';

@NgModule({
  declarations: [...ACCOUNT_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    AccountRoutingModule
  ]
})
export class AccountModule {
}
