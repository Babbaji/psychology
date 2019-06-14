import { InsertedIdBody} from '../shared.model';

export interface UserRegisterRequest {
  account: Account;
}

export interface Account {
  username: string;
  password: string;
}

export interface UserRegisterResponse {
  code: string;
  message: string;
  body: InsertedIdBody;
}


