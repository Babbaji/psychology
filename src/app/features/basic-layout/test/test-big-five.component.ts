import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AidToBigFive} from '../../../core/ngxs/user/user.action';

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
            <app-test-radio-group
              [control]="bigFiveForm.get(control)"
              [parentForm]="bigFiveForm"
              [property]="control"
              [count]="7"></app-test-radio-group>
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

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.setupForm();
  }

  setupForm() {
    this.bigFiveForm = this.formBuilder.group({
      creativo: [null, Validators.required],
      fantasioso: [null, Validators.required],
      originale: [null, Validators.required],
      preciso: [null, Validators.required],
      ordinato: [null, Validators.required],
      diligente: [null, Validators.required],
      estroverso: [null, Validators.required],
      espansivo: [null, Validators.required],
      chiuso: [null, Validators.required],
      altruista: [null, Validators.required],
      disponibile: [null, Validators.required],
      generoso: [null, Validators.required],
      emotivo: [null, Validators.required],
      ansioso: [null, Validators.required],
      nervoso: [null, Validators.required]
    });
    Object.keys(this.bigFiveForm.controls).forEach(key => {
      this.formControls.push(key.toString());
    });
  }

  onSubmit() {
    this.validateAllFormFields(this.bigFiveForm);
    if (this.bigFiveForm.valid) {
      this.bigFiveForm.disable();
      this.store.dispatch(new AidToBigFive());
    }
  }

  ngOnInit() {
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
