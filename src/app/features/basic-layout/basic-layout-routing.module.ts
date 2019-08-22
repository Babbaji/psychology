import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent} from './basic-layout.component';
import {BasicLayoutRoutes} from '../../core/route-names';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: BasicLayoutRoutes.path.home,
    pathMatch: 'full'
  },
  {
    path: BasicLayoutRoutes.path.base,
    component: BasicLayoutComponent,
    children: [
      {
        path: BasicLayoutRoutes.path.home,
        component: HomeComponent
      },
      {
        path: BasicLayoutRoutes.path.testModule,
        loadChildren: './test/test.module#TestModule'
      },
      {
        path: BasicLayoutRoutes.path.accountModule,
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
