import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-register',
  template: `
    <div class="d-flex justify-content-center">
      <div class="card shadow-lg">
        <div class="card-header text-center">
          <h2>Login</h2>
        </div>
        <div class="card-body">
          <form class="mt-1 d-flex justify-content-center" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div>
              <h4> Account Info</h4>
              <hr class="w-100 my-2">
              <div class="form-group row">
                <label for="account" class="col-sm-4 col-form-label">Account</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" placeholder="Enter Account"
                         id="account" aria-describedby="accountHelp" formControlName="account" name="account">
                  <small id="accountHelp" class="form-text text-muted">This is just an identifier, you'll be anonymous.</small>
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">Password</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" placeholder="Enter Password"
                         id="password" formControlName="password" name="password">
                </div>
              </div>
              <div class="form-group row">
                <label for="repeatPassword" class="col-sm-4 col-form-label">Again</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" placeholder="Repeat Password"
                         id="repeatPassword" formControlName="repeatPassword" name="repeatPassword">
                  <small id="repeatPasswordHelp" class="form-text text-muted">As usual the boring part, repeat the password.</small>
                </div>
              </div>

              <h4> Statistical Info</h4>
              <hr class="w-100 my-2">

              <div class="form-group row">
                <label for="sesso" class="col-sm-4 col-form-label">Gender</label>
                <div class="col-sm-8">
                  <select class="form-control" name="sesso" id="sesso" formControlName="sesso">
                    <option [value]="'M'">M</option>
                    <option [value]="'F'">F</option>
                    <option [value]="'?'">?</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="nazionalita" class="col-sm-4 col-form-label">Nationality</label>
                <div class="col-sm-8">
                  <select class="form-control" name="nazionalita" id="nazionalita" formControlName="nazionalita">
                    <option [value]="'IT'">Italian</option>
                    <option [value]="'EU'">European</option>
                    <option [value]="'EXTRA'">Outside Europe</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="eta" class="col-sm-4 col-form-label">Age</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" name="eta" id="eta" formControlName="eta">
                </div>
              </div>
              
              <div class="d-flex justify-content-center">
                <div class="d-flex flex-column">
                  <button class="btn btn-info" type="submit"> Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer h-25">
          <i>Through registration you can keep track of your tests.
            <br>Adding information about your age, nationality and gender helps statistical psychological research,
            <br>by no means it'll be used to identify you.</i>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AccountRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setupForm();

  }

  ngOnInit() {
  }

  setupForm() {
    this.registerForm = this.formBuilder.group({
      account: [null],
      password: [null],
      repeatPassword: [null],
      eta: [null , Validators.pattern('^\\d+$')],
      nazionalita: [null],
      sesso: [null],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.registerForm);
  }

}
