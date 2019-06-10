import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
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
      link: './bigfive',
      buttonText: 'Go To Big Five Quick Test'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
