import {Id} from '../shared.model';

export interface ChangePasswordRequest {
  account: Account;
  newPassword: string;
}

export interface ChangePasswordResponse {
  code: string;
  message: string;
  body: Body;
}

export interface Account {
  _id: Id;
  password: string;
}

export interface Body {
  _id: Id;
  username: string;
  password: string;
  previousPassword: string;
}
