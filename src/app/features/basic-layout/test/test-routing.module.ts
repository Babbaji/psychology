import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestListComponent} from './test-list.component';
import {TestRoutes} from '../../../core/route-names';
import {TestBigFiveComponent} from './test-big-five.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: TestRoutes.path.list,
    pathMatch: 'full'
  },
  {
    path: TestRoutes.path.list,
    component: TestListComponent
  },
  {
    path: TestRoutes.path.bigFive,
    component: TestBigFiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
