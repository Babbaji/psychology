import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test-radio-group',
  template: `
    <span class="w-50 badge badge-dark">{{capitalize(property)}}</span>
    <div class="p-2" [formGroup]="parentForm">
      <!--<span class="badge badge-danger mr-1">Disapprovo</span>-->
      <div class="btn-group btn-group-toggle" ngbRadioGroup name="{{property}}" formControlName="{{property}}">
        <ng-container *ngFor="let number of createRange(count);">
          <label ngbButtonLabel [ngClass]="assignColor(count, number)">
            <input ngbButton type="radio" [value]="number"> {{number}}
          </label>
        </ng-container>
      </div>
      <!--<span class="badge badge-success ml-1">Approvo</span>-->
    </div>
  `,
  styles: []
})
export class TestRadioGroupComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() property: string;
  @Input() count: number;
  items: Array<number>;

  constructor() {
  }

  ngOnInit() {
  }

  createRange(number) {
    this.items = [];
    for (let i = 1; i <= number; i++) {
      this.items.push(i);
    }
    return this.items;
  }


  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  assignColor(count: number, number: number): string {
    return count / 2 > number ? 'btn-danger' : Math.ceil(count / 2) < number ? 'btn-success' : 'btn-secondary';
  }
}
