import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestListComponent} from './test-list.component';
import {TestRoutes} from '../../../core/route-names';
import {TestBigFiveComponent} from './test-big-five.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: TestRoutes.LIST,
    pathMatch: 'full'
  },
  {
    path: TestRoutes.LIST,
    component: TestListComponent
  },
  {
    path: TestRoutes.BIGFIVE,
    component: TestBigFiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
