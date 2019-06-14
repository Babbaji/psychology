import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicLayoutRoutingModule} from './basic-layout-routing.module';
import {BASIC_LAYOUT_COMPONENTS} from './basic-layout.index';
import { GlobalAlertMessageComponent } from './widgets/global-alert-message.component';

@NgModule({
  declarations: [...BASIC_LAYOUT_COMPONENTS, GlobalAlertMessageComponent],
  imports: [
    CommonModule,
    BasicLayoutRoutingModule
  ]
})
export class BasicLayoutModule {
}
