import {User} from '../user.state.model';

export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  code: '404' | '200';
  message: string;
  body: User;
}

