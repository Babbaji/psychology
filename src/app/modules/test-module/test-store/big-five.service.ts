import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BigFive} from './big-five';
import {StorageService} from '../../../core-module/storage.service';

@Injectable({providedIn: 'root'})
export class BigFiveService {
  APIURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/psychologydashboard-xffyl/service/bigFiveTest/incoming_webhook';
  constructor(private httpClient: HttpClient, private storageService: StorageService) {
  }

  bigFiveTest(bigFiveTest: BigFive) {
    const url = this.APIURL + 'bigFiveTest';
    bigFiveTest._idUser = this.storageService.getId();
    return this.httpClient.post(url, bigFiveTest);
  }
}
