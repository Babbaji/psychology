import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StandardLayoutComponent} from './standard-layout/standard-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TopBarComponent} from './layout-components/top-bar/top-bar.component';
import { TestComponent } from './router-pages/test/test.component';
import { ResultsComponent } from './router-pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: 'tests',
        component: TestComponent
      },
      {
        path: 'results',
        component: ResultsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    StandardLayoutComponent,
    TopBarComponent,
    TestComponent,
    ResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    NgbModule
  ],
  exports: [RouterModule]
})
export class StandardLayoutModule {
}
