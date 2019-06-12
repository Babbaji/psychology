import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="d-flex justify-content-center">
      <div class="card w-50 shadow-lg">
        <div class="card-header text-center">
          <h2>Login</h2>
        </div>
        <div class="card-body">
          <form class="mt-1 d-flex justify-content-center" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="w-75">
              <div class="form-group">
                <label for="account">Account</label>
                <input type="text" class="form-control" placeholder="Enter Account"
                       id="account" aria-describedby="accountHelp" formControlName="account" name="account">
                <small id="accountHelp" class="form-text text-muted">This is just an identifier, you'll be anonymous.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Enter Password"
                       id="password" formControlName="password" name="password">
              </div>
              <div class="d-flex w-100 justify-content-center">
                <div class="d-flex flex-column w-25">
                  <button class="btn btn-info" type="submit"> Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer h-25"><i>Lorem ipsum</i></div>
      </div>
    </div>
  `,
  styles: []
})
export class AccountLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setupForm();

  }

  ngOnInit() {
  }

  setupForm() {
    this.loginForm = this.formBuilder.group({
      account: [null],
      password: [null]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
