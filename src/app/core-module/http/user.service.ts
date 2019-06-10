import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../models/account';
import {InfoPersona} from '../store/models/user';
import {StorageService} from '../storage.service';

@Injectable({providedIn: 'root'})
export class UserService {
  APIURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/psychologydashboard-xffyl/service/http/incoming_webhook/';
  constructor(private httpClient: HttpClient, private storage: StorageService) {
  }

  register(account: Account) {
    const url = this.APIURL + 'register';
    return this.httpClient.post(url, account);
  }
  login(account: Account) {
    const url = this.APIURL + 'login';
    return this.httpClient.post(url, account);
  }

  changePassword(oldPassword: string, newPassword: string) {
    const url = this.APIURL + 'changePassword';
    const body = {
      account: {
        _id: this.storage.getId(),
        password: oldPassword
      },
      newPassword: newPassword
    };
    return this.httpClient.post(url, body);
  }

  checkUsername(username: string) {
    const url = this.APIURL + 'checkUsername';
    const body = {
      account: {
        username: username
      }
    };
    return this.httpClient.post(url, body);

  }
  updateInfoPersona(infoPersona: InfoPersona) {
    const url = this.APIURL + 'updateInfoPersona';
    const body = {
      account: {
        _id: this.storage.getId()
      },
      infoPersona: infoPersona
    };
    return this.httpClient.post(url, body);
  }

  returnAid() {
    const url = this.APIURL + 'returnAid';
    return this.httpClient.post(url, null);
  }
}
