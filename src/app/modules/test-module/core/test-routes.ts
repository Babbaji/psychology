import {Routes} from '@angular/router';
import {TestLayoutComponent} from '../test-layout/test-layout.component';
import {TestListComponent} from '../pages/test-list/test-list.component';
import {testRoutesNames} from '../../../core-module/routes.constants';




export const testRoutes: Routes = [
  { path: '', redirectTo: testRoutesNames.LISTPATH, pathMatch: 'full' },
  {
    path: '',
    component: TestLayoutComponent,
    children: [
      {
        path: testRoutesNames.LIST,
        component: TestListComponent
      }
    ]
  }
];
