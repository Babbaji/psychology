import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigFiveRoutingModule } from './big-five-routing.module';
import { BigFiveLayoutComponent } from './big-five-layout/big-five-layout.component';
import {BigFiveQuickTestComponent} from './pages/big-five-quick-test/big-five-quick-test.component';

@NgModule({
  declarations: [
    BigFiveLayoutComponent,
    BigFiveQuickTestComponent
  ],
  imports: [
    CommonModule,
    BigFiveRoutingModule
  ]
})
export class BigFiveModule { }
