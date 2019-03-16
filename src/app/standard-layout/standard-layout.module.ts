import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StandardLayoutComponent} from './standard-layout/standard-layout.component';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TopBarComponent} from './standard-layout-components/top-bar/top-bar.component';
import { ResultsComponent } from './standard-layout-router-pages/results/results.component';
import {StandardLayoutRoutingModule} from './standard-layout-routing.module';


@NgModule({
  declarations: [
    StandardLayoutComponent,
    TopBarComponent,
    ResultsComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    NgbModule,
    StandardLayoutRoutingModule
  ],
  exports: [RouterModule]
})
export class StandardLayoutModule {
}
