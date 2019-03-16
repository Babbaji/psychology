import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-standard-layout',
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
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.scss']
})
export class StandardLayoutComponent implements OnInit {
  isMenuOpen = false;
  constructor() {}

  ngOnInit() {
  }

  closeMenu() {
    this.isMenuOpen = false;
    console.log('closeMenu');
  }
  openMenu() {
    setTimeout(() => {
      this.isMenuOpen = true;
    });
    console.log('openMenu');
  }
  log(any) {
    console.log(any);
  }
}
