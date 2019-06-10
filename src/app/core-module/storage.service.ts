import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  _ID = '_ID';
  constructor() {
  }

  setId(id: string) {
    sessionStorage.setItem(this._ID, id);
  }

  getId() {
    sessionStorage.getItem(JSON.parse(this._ID));
  }
}
