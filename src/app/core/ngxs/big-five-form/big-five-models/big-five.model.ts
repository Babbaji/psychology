import {Id} from '../../user/user-models/shared.model';

export interface BigFiveRequest {
  _idUser: Id;
  creativo: number;
  fantasioso: number;
  originale: number;
  preciso: number;
  ordinato: number;
  diligente: number;
  estroverso: number;
  espansivo: number;
  chiuso: number;
  altruista: number;
  disponibile: number;
  generoso: number;
  emotivo: number;
  ansioso: number;
  nervoso: number;
}

export interface BigFiveResponse {
  code: '200' | '404' | '400';
  message: string;
  body: Body;
}

export interface Body {
  insertedId: Id;
}
