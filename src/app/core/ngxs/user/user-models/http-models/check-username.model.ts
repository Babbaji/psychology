export interface CheckUsernameRequest {
  account: Account;
}

export interface CheckUsernameResponse {
  code: string;
  message: 'Account non trovato!' | 'Account trovato!';

}

export interface Account {
  username: string;
}

