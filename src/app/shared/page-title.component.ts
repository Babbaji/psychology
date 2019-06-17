import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <div class="d-flex justify-content-center">
      <div class="alert alert-secondary w-100" role="alert">
        <h3 class="text-center">
          {{title}}
        </h3>
        <p class="text-center">
          {{description}}
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class PageTitleComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
