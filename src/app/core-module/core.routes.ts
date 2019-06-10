
import {Routes} from '@angular/router';
import {StandardLayoutComponent} from './layout/standard-layout/standard-layout.component';
import {coreRoutesNames} from './routes.constants';


export const coreRoutes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: coreRoutesNames.TESTS,
        loadChildren: './../modules/test-module/test.module#TestModule'
      },
      {
        path: coreRoutesNames.ACCOUNT,
        loadChildren: './../modules/account-module/account.module#AccountModule'
      }
    ]
  }
];

