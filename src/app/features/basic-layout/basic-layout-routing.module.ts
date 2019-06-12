import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent} from './basic-layout.component';
import {BasicLayoutRoutes} from '../../core/route-names';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: BasicLayoutRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: BasicLayoutRoutes.BASE,
    component: BasicLayoutComponent,
    children: [
      {
        path: BasicLayoutRoutes.HOME,
        component: HomeComponent
      },
      {
        path: BasicLayoutRoutes.TESTMODULE,
        loadChildren: './test/test.module#TestModule'
      },
      {
        path: BasicLayoutRoutes.ACCOUNTMODULE,
        loadChildren: './account/account.module#AccountModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicLayoutRoutingModule {
}
