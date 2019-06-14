import {Id, InfoPersona} from './shared.model';

export interface UserStateModel {
  _id: Id;
  user: User;
}

export interface User {
  _id: Id;
  username: string;
  password: string;
  previousPassword: string;
  email: string;
  creation: string;
  infoPersona: InfoPersona;
}
