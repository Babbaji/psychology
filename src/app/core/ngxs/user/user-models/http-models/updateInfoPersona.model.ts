import {Id, InfoPersona} from '../shared.model';

export interface UpdateInfoPersonaRequest {
  account: Account;
  infoPersona: InfoPersona;
}

export interface UpdateInfoPersonaResponse {
  code: string;
  message: string;
  body: Body;
}

export interface Body {
  _id: Id;
  username: string;
  password: string;
  infoPersona: InfoPersona;
}

export interface Account {
  _id: Id;
}

