import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestLayoutComponent} from './test-layout/test-layout.component';
import {BigFiveQuickTestComponent} from './test-layout-router-pages/big-five-quick-test/big-five-quick-test.component';
import {TestListComponent} from './test-layout-router-pages/test-list/test-list.component';

const routes: Routes = [
  {
    path: '',
    component: TestLayoutComponent,
    children: [
      {
        path: '',
        component: TestListComponent
      },
      {
        path: 'bigfive',
        component: BigFiveQuickTestComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLayoutRoutingModule { }
