import {Component, OnInit} from '@angular/core';
import {TestRoutes} from '../../../core/route-names';
import {Test} from 'tslint';

@Component({
  selector: 'app-test-list',
  template:
      `
    <app-page-title
      [title]="'Mettiti alla prova!'"
      [description]="'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
            'sed do eiusmod tempor incididunt ut labore et dolore' +
            'magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'"
    ></app-page-title>
    <hr class="style2 border-info">
    <div class="row">
      <div class="col-sm-6" *ngFor="let test of listTest">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{test.title}}</h5>
            <p class="card-text">{{test.description}}</p>
            <a href="#" class="btn btn-outline-info" [routerLink]="test.link">{{test.buttonText}}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TestListComponent implements OnInit {
  listTest = [
    {
      title: 'Big Five',
      description: 'The Big Five personality traits, ' +
        'also known as the five-factor model (FFM) and the OCEAN model, is a taxonomy for personality traits.' +
        'It is based on common language descriptors. When factor analysis (a statistical technique) ' +
        'is applied to personality survey data, some words used to describe aspects of personality ' +
        'are often applied to the same person.',
      link: TestRoutes.fullPath('bigFive'),
      buttonText: 'Go To Big Five Test'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
