import {Component, EventEmitter, Output} from '@angular/core';
import {AccountRoutes} from '../../../core/route-names';
import {Select, Store} from '@ngxs/store';
import {UserSelector} from '../../../core/ngxs/user/user.selector';

@Component({
  selector: 'app-top-bar',
  template: `
    <nav class="navbar navbar-light bg-info" style="height:4rem">
      <i class="fa fa-bars fa-2x text-white" (click)="openMenu()" style="cursor:pointer;"></i>
      <div class="text-white" [routerLink]="urlLogin" style="cursor:pointer;font-size:2rem">
        <i class="fa fa-user fa-1x"></i>
        {{(user$ | async) !== null ? (user$ | async) : 'Anonimo'}}
      </div>
    </nav>
  `,
  styles: []
})
export class TopBarComponent {
  @Output() openMenuEmitter = new EventEmitter();
  urlLogin = AccountRoutes.fullPath('login');

  user$ = this.store.select(UserSelector.getUser);
  constructor(private store: Store) {
  }

  openMenu() {
    this.openMenuEmitter.emit(true);
  }
}
