import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StandardLayoutComponent} from './standard-layout/standard-layout.component';
import {ResultsComponent} from './standard-layout-router-pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: 'tests',
        loadChildren: './../test-layout/test-layout.module#TestLayoutModule'
      },
      {
        path: 'results',
        component: ResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardLayoutRoutingModule { }
