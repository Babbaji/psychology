import {Id} from '../../user/user-models/shared.model';

export interface BigFiveFormStateModel {
  bigFiveForm: {
    model: BigFiveForm;
    dirty: boolean;
    status: string;
    errors: any;
  };
  lastInsertedTest: Id;
}

export interface BigFiveForm {
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
