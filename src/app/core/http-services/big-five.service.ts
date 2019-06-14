import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BigFiveRequest, BigFiveResponse} from '../ngxs/big-five-form/big-five-models/big-five.model';

@Injectable()
export class BigFiveService {

  APIURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/psychologydashboard-xffyl/service/bigFiveTest/incoming_webhook';

  constructor(private http: HttpClient) {
  }

  saveBigFive(request: BigFiveRequest): Observable<BigFiveResponse> {
    const endpoint = this.APIURL + '/bigFiveTest';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<BigFiveResponse>(endpoint, request, {headers});
  }
}
