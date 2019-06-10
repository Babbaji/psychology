import {Injectable, Output, EventEmitter} from '@angular/core';
import {User} from '../store/models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLogged = false;
  @Output() usersignedin = new EventEmitter<User>();
  @Output() usersignedup = new EventEmitter<User>();
  @Output() userloggedout = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string) {
    const url = '';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const account = {username: username, password: password};
    return this.http.post<User>(url, account, {headers})
      .subscribe((res) => {
        console.log(res);
        // TODO EMIT USER
        this.usersignedin.emit();
      });
  }

  signUp(username: string, password: string) {
    const url = '';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const account = {username: username, password: password};
    return this.http.post<User>(url, account, {headers})
      .subscribe((res) => {
        console.log(res);
      });
  }

  signOut() {
  }
}
