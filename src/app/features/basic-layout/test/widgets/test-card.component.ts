import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{description}}</p>
        <a href="#" class="btn btn-outline-info" [routerLink]="link">Vai</a>
      </div>
    </div>
  `,
  styles: []
})
export class TestCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() {
  }

  ngOnInit() {
  }

}
