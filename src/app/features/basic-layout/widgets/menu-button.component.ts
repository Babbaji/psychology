import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  template: `
    <a class="btn btn-info m-3
          d-flex align-items-center justify-content-center" [routerLink]="url" (click)="onClickMenuButton()" style="height: 4rem">
      <div style="font-size: 2rem"><i class="fa fa-bars"></i> {{title}}
      </div>
    </a>
  `,
  styles: []
})
export class MenuButtonComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Output() closeMenu = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onClickMenuButton() {
    this.closeMenu.emit();
  }
}
