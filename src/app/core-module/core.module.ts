import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardLayoutComponent} from './layout/standard-layout/standard-layout.component';
import {TopBarComponent} from './layout/mini-components/top-bar/top-bar.component';
import {RouterModule} from '@angular/router';
import {coreRoutes} from './core.routes';

@NgModule({
  declarations: [
    StandardLayoutComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes)
  ]
})
export class CoreModule { }
