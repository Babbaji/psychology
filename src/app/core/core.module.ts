import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CORE_SERVICES} from './core.index';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsRouterPluginModule} from '@ngxs/router-plugin';
import {CORE_STATES, EVENTS_STATES} from './ngxs/ngxs.index';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([...CORE_STATES, ...EVENTS_STATES]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
  ],
  providers: [
    ...CORE_SERVICES
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
