import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestLayoutComponent} from './test-layout/test-layout.component';
import {TestListComponent} from './pages/test-list/test-list.component';
import {FormsModule} from '@angular/forms';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {testRoutes} from './core/test-routes';

@NgModule({
  declarations: [
    TestLayoutComponent,
    TestListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbButtonsModule,
    RouterModule.forChild(testRoutes)
  ]
})
export class TestModule {
}
