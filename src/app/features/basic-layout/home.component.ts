import {Component, OnInit} from '@angular/core';
import {TestRoutes} from '../../core/route-names';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-flex justify-content-center">
      <div class="card shadow-lg">
        <div class="card-header">
          <h2>Benvenuto</h2>
        </div>
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <button class="btn btn-primary float-right" [routerLink]="urlTests">Vai ai test!</button>
        </div>
        <div class="card-footer">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </i>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  urlTests = TestRoutes.fullPath('list');

  constructor() {
  }

  ngOnInit() {
  }

}
