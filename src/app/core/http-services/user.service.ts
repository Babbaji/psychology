import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChangePasswordRequest, ChangePasswordResponse} from '../ngxs/user/user-models/http-models/change-password.model';
import {CheckUsernameRequest, CheckUsernameResponse} from '../ngxs/user/user-models/http-models/check-username.model';
import {ReturnAidResponse} from '../ngxs/user/user-models/http-models/return-aid.model';
import {UpdateInfoPersonaRequest, UpdateInfoPersonaResponse} from '../ngxs/user/user-models/http-models/updateInfoPersona.model';
import {UserLoginRequest, UserLoginResponse} from '../ngxs/user/user-models/http-models/login.model';
import {UserRegisterRequest, UserRegisterResponse} from '../ngxs/user/user-models/http-models/register.model';


@Injectable()
export class UserService {

  APIURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/psychologydashboard-xffyl/service/http/incoming_webhook';
  constructor(private http: HttpClient) {
  }

  login(user: UserLoginRequest): Observable<UserLoginResponse> {
    const endpoint = this.APIURL + '/login';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<UserLoginResponse>(endpoint, user, {headers});
  }

  register(user: UserRegisterRequest): Observable<UserRegisterResponse> {
    const endpoint = this.APIURL + '/register';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<UserRegisterResponse>(endpoint, user, {headers});
  }

  changePassword(request: ChangePasswordRequest): Observable<ChangePasswordResponse> {
    const endpoint = this.APIURL + '/changePassword';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<ChangePasswordResponse>(endpoint, request, {headers});
  }

  checkUsername(request: CheckUsernameRequest): Observable<CheckUsernameResponse> {
    const endpoint = this.APIURL + '/checkUsername';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<CheckUsernameResponse>(endpoint, request, {headers});
  }

  returnAid(): Observable<ReturnAidResponse> {
    const endpoint = this.APIURL + '/returnAid';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<ReturnAidResponse>(endpoint, null, {headers});
  }

  updateInfoPersona(request: UpdateInfoPersonaRequest): Observable<UpdateInfoPersonaResponse> {
    const endpoint = this.APIURL + '/updateInfoPersona';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<UpdateInfoPersonaResponse>(endpoint, request, {headers});
  }

}
