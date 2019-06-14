import {UserLoginRequest} from './user-models/http-models/login.model';
import {ChangePasswordRequest} from './user-models/http-models/change-password.model';
import {CheckUsernameRequest} from './user-models/http-models/check-username.model';
import {UpdateInfoPersonaRequest} from './user-models/http-models/updateInfoPersona.model';
import {UserRegisterRequest} from './user-models/http-models/register.model';

export class Login {
  static readonly type = '[user] Login';
  constructor(public request: UserLoginRequest, public rememberMe: boolean) {}
}


export class Logout {
  static readonly type = '[user] Logout';
  constructor() {}
}

export class ChangePassword {
  static readonly type = '[user] Change Password';
  constructor(public request: ChangePasswordRequest) {}
}


export class CheckUsername {
  static readonly type = '[user] Check Username';
  constructor(public request: CheckUsernameRequest) {}
}

export class ReturnAid {
  static readonly type = '[user] Return Aid';
  constructor() {}
}

export class AidToBigFive {
  static readonly type = '[user] Aid To BigFive';
  constructor() {}
}


export class UpdateInfoPersona {
  static readonly type = '[user] Update Info Persona';
  constructor(public request: UpdateInfoPersonaRequest) {}
}


export class Register {
  static readonly type = '[user] Register';
  constructor(public request: UserRegisterRequest) {}
}



