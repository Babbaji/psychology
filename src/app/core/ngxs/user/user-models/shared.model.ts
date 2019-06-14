
export interface Id {
  '$oid': string;
}

export interface InsertedIdBody {
  insertedId: Id;
}

export interface InfoPersona {
  eta: string;
  sesso: string;
  nazionalita: string;
}
