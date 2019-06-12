import {Injectable} from '@angular/core';
import {User} from '../ngxs/user/user.state.model';


@Injectable()
export class UserService {

  constructor() {
  }

  login(username: string, password: string): User {
    if (password.length > 0) {
      return {username, password};
    } else {
      return null;
    }
  }

}
