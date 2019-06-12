import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestRoutingModule} from './test-routing.module';
import {TEST_COMPONENTS} from './test.index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [...TEST_COMPONENTS],
  imports: [
    CommonModule,
    NgbButtonsModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    TestRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class TestModule {
}
