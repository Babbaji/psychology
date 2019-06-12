export interface IdUser {
  $oid: string;
}

export interface BigFiveSaveObject {
  _idUser: IdUser;
  bigFive: BigFiveForm;
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

export interface BigFiveFormStateModel {
  bigFiveForm: {
    model: BigFiveForm[];
    dirty: boolean;
    status: string;
    errors: any;
  };
}
