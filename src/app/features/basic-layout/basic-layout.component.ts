import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BasicLayoutRoutes} from '../../core/route-names';

@Component({
  animations: [
    trigger('openClosePagina', [
      state('open', style({
        transform: 'translateZ(0px) rotateX(0deg) translateY(0vh)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateZ(-1500px) rotateX(80deg) translateY(50vh)',
        opacity: 0.7
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseMenu', [
      state('open', style({
        top: '50%',
      })),
      state('closed', style({
        top: '-50%',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  selector: 'app-basic-layout',
  template: `
    <div id="perspective" class="perspective effect-laydown" [ngClass]="isMenuOpen ? 'modalview animate' : ''">
      <div class="contenitore" (click)="isMenuOpen ? closeMenu() : undefined">
        <div class="wrapper">
          <app-top-bar (openMenuEmitter)="openMenu()"></app-top-bar>
          <div class="p-5">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
      <div class="d-flex w-100 justify-content-center" *ngIf="isMenuOpen">
        <nav class="outer-nav top w-50">
          <app-menu-button
            [title]="'Home'"
            [url]="urlHome"
            (closeMenu)="closeMenu()"
          ></app-menu-button>
          <app-menu-button
            [title]="'Tests'"
            [url]="urlTest"
            (closeMenu)="closeMenu()"
          ></app-menu-button>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {
  isMenuOpen = false;
  urlTest = BasicLayoutRoutes.TESTMODULEPATH;
  urlHome = BasicLayoutRoutes.BASE;

  constructor() {
  }

  ngOnInit() {
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  openMenu() {
    setTimeout(() => {
      this.isMenuOpen = true;
    });
  }
}
