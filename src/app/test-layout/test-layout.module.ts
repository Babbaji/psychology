import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLayoutRoutingModule } from './test-layout-routing.module';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { BigFiveQuickTestComponent } from './test-layout-router-pages/big-five-quick-test/big-five-quick-test.component';
import { TestListComponent } from './test-layout-router-pages/test-list/test-list.component';
import {FormsModule} from '@angular/forms';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TestLayoutComponent, BigFiveQuickTestComponent, TestListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TestLayoutRoutingModule,
    NgbButtonsModule
  ]
})
export class TestLayoutModule { }
