
export class LoginSuccess {
  static readonly type = '[user] Login Success';
  constructor() {}
}

export class LoginFailure {
  static readonly type = '[user] Login Failure';
  constructor() {}
}

export class ChangePasswordSuccess {
  static readonly type = '[user] Change Password Success';
  constructor() {}
}

export class ChangePasswordFailure {
  static readonly type = '[user] Change Password Failure';
  constructor() {}
}

export class CheckUsernameSuccess {
  static readonly type = '[user] Check Username Success';
  constructor() {}
}

export class CheckUsernameFailure {
  static readonly type = '[user] Check Username Failure';
  constructor() {}
}

export class ReturnAidSuccess {
  static readonly type = '[user] Return Aid Success';
  constructor() {}
}

export class ReturnAidFailure {
  static readonly type = '[user-events] Return Aid Failure';
  constructor() {}
}

export class UpdateInfoPersonaSuccess {
  static readonly type = '[user-events] Update Info Persona Success';
  constructor() {}
}

export class UpdateInfoPersonaFailure {
  static readonly type = '[user-events] Update Info Persona Failure';
  constructor() {}
}

export class RegisterSuccess {
  static readonly type = '[user-events] Register Success';
  constructor() {}
}

export class RegisterFailure {
  static readonly type = '[user-events] Register Failure';
  constructor() {}
}
