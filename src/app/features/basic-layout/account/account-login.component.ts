import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountRoutes} from '../../../core/route-names';
import {Store} from '@ngxs/store';
import {SaveBigFiveForm} from '../../../core/ngxs/big-five-form/big-five-form.action';

@Component({
  selector: 'app-login',
  template: `
    <div class="d-flex justify-content-center">
      <div class="card shadow-lg">
        <div class="card-header text-center">
          <h2>Login</h2>
        </div>
        <div class="card-body">
          <form class="mt-1 d-flex justify-content-center" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="">
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
                <div class="d-flex flex-column">
                  <button class="btn btn-info" type="submit"> Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer h-25"><a [routerLink]="urlRegister">Register</a></div>
      </div>
    </div>
  `,
  styles: []
})
export class AccountLoginComponent implements OnInit {
  urlRegister = AccountRoutes.fullPath('register');
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
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
    this.store.dispatch(new SaveBigFiveForm())
  }

}
