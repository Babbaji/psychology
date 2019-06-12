import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test-big-five',
  template: `
    <app-page-title [title]="'Big Five Test'"
                    [description]="'The following statements concern your perception about yourself in a variety of situations.' +
            'Your task is to indicate the strength of your agreement with each statement,' +
            'utilizing a scale in which 1 denotes strong disagreement,' +
            '7 denotes strong agreement, and 2, 3, 4, 5 and 6 represent intermediate judgments. In the boxes after each' +
            'statement, click a number from 1 to 7 from the following scale:'"></app-page-title>
    <form class="mt-5" [formGroup]="bigFiveForm" ngxsForm="bigfive.bigFiveForm" (ngSubmit)="onSubmit()">
      <div class="d-flex w-100 justify-content-center">
        <div class="d-flex flex-column w-50 text-center">
          <ng-container *ngFor="let control of formControls">
            <app-test-radio-group [parentForm]="bigFiveForm" [property]="control" [count]="7"></app-test-radio-group>
            <hr class="w-100 my-4">
          </ng-container>
        </div>
      </div>
      <div class="d-flex w-100 justify-content-center">
        <div class="d-flex flex-column w-25">
          <button class="btn btn-info" type="submit"> Submit</button>
        </div>
      </div>
    </form>    `,
  styles: []
})
export class TestBigFiveComponent implements OnInit {
  bigFiveForm: FormGroup;
  formControls: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {
    this.setupForm();
  }

  setupForm() {
    this.bigFiveForm = this.formBuilder.group({
      creativo: [null],
      fantasioso: [null],
      originale: [null],
      preciso: [null],
      ordinato: [null],
      diligente: [null],
      estroverso: [null],
      espansivo: [null],
      chiuso: [null],
      altruista: [null],
      disponibile: [null],
      generoso: [null],
      emotivo: [null],
      ansioso: [null],
      nervoso: [null]
    });
    Object.keys(this.bigFiveForm.controls).forEach(key => {
      this.formControls.push(key.toString());
    });
  }

  onSubmit() {
    console.log(this.bigFiveForm.value);
  }

  ngOnInit() {
  }
}
