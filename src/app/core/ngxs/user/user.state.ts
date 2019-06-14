import {Action, State, StateContext} from '@ngxs/store';
import {UserStateModel} from './user-models/user.state.model';
import {UserService} from '../../http-services/user.service';
import {ChangePassword, CheckUsername, Login, Logout, Register, ReturnAid, AidToBigFive, UpdateInfoPersona} from './user.action';
import {StorageService} from '../../storage.service';
import {UserLoginResponse} from './user-models/http-models/login.model';
import {
  CheckUsernameFailure,
  CheckUsernameSuccess,
  LoginFailure,
  LoginSuccess,
  RegisterFailure,
  RegisterSuccess,
  ReturnAidFailure,
  ReturnAidSuccess, UpdateInfoPersonaSuccess, UpdateInfoPersonaFailure, ChangePasswordSuccess, ChangePasswordFailure
} from './user-events-state/user-events.action';
import {UserRegisterResponse} from './user-models/http-models/register.model';
import {ReturnAidResponse} from './user-models/http-models/return-aid.model';
import {CheckUsernameResponse} from './user-models/http-models/check-username.model';
import {UpdateInfoPersonaResponse} from './user-models/http-models/updateInfoPersona.model';
import {ChangePasswordResponse} from './user-models/http-models/change-password.model';
import {Id} from './user-models/shared.model';
import {SaveBigFiveForm} from '../big-five-form/big-five-form.action';

@State<UserStateModel>({
  name: 'user',
  defaults: {
    _id: undefined,
    user: undefined,
  }
})

export class UserState {
  constructor(private userService: UserService,
              private storageService: StorageService) {
  }


  @Action(Login)
  login({dispatch, patchState}: StateContext<UserStateModel>, {request, rememberMe}: Login) {
    return this.userService.login(request)
      .subscribe((response: UserLoginResponse) => {
        if (response.code === '200') {
          patchState({user: response.body, _id: response.body._id});
          return dispatch(new LoginSuccess());
        } else {
          return dispatch(new LoginFailure());
        }
      });
  }

  @Action(Register)
  register({patchState, dispatch}: StateContext<UserStateModel>, {request}: Register) {
    return this.userService.register(request)
      .subscribe((response: UserRegisterResponse) => {
        if (response.code === '200') {
          patchState({_id: response.body.insertedId});
          return dispatch(new RegisterSuccess());
        } else {
          return dispatch(new RegisterFailure());
        }
      });
  }

  @Action(ReturnAid)
  returnAid({patchState, dispatch, getState}: StateContext<UserStateModel>) {
    const _id: Id = getState()._id;
    if (_id === undefined || _id === null) {
      return this.userService.returnAid()
        .subscribe((response: ReturnAidResponse) => {
          if (response.code === '200') {
            patchState({_id: response.body.insertedId});
            return dispatch(new ReturnAidSuccess());
          } else {
            return dispatch(new ReturnAidFailure());
          }
        });
    }
  }

  @Action(AidToBigFive)
  returnAidForBigFive({patchState, dispatch, getState}: StateContext<UserStateModel>) {
    const _id: Id = getState()._id;
    if (_id === undefined || _id === null) {
      return this.userService.returnAid()
        .subscribe((response: ReturnAidResponse) => {
          if (response.code === '200') {
            patchState({_id: response.body.insertedId});
            return dispatch(new SaveBigFiveForm());
          } else {
            return dispatch(new ReturnAidFailure());
          }
        });
    } else {
      return dispatch(new SaveBigFiveForm());
    }
  }

  @Action(CheckUsername)
  checkUsername({dispatch}: StateContext<UserStateModel>, {request}: CheckUsername) {
    return this.userService.checkUsername(request)
      .subscribe((response: CheckUsernameResponse) => {
        if (response.code !== '200') {
          return dispatch(new CheckUsernameSuccess());
        } else {
          return dispatch(new CheckUsernameFailure());
        }
      });
  }

  @Action(UpdateInfoPersona)
  updateInfoPersona({patchState, getState, dispatch, setState}: StateContext<UserStateModel>, {request}: UpdateInfoPersona) {
    return this.userService.updateInfoPersona(request)
      .subscribe((response: UpdateInfoPersonaResponse) => {
        if (response.code === '200') {
          const user = getState().user;
          user.infoPersona = response.body.infoPersona;
          patchState({user: user});
          return dispatch(new UpdateInfoPersonaSuccess());
        } else {
          return dispatch(new UpdateInfoPersonaFailure());
        }
      });
  }

  @Action(ChangePassword)
  changePassword({patchState, getState, dispatch, setState}: StateContext<UserStateModel>, {request}: ChangePassword) {
    return this.userService.changePassword(request)
      .subscribe((response: ChangePasswordResponse) => {
        if (response.code === '200') {
          const user = getState().user;
          user.password = response.body.password;
          user.previousPassword = response.body.previousPassword;
          patchState({user: user});
          return dispatch(new ChangePasswordSuccess());
        } else {
          return dispatch(new ChangePasswordFailure());
        }
      });
  }

  @Action(Logout)
  logout({patchState}: StateContext<UserStateModel>) {
    this.storageService.removeUser();
    return patchState({user: undefined});
  }


}

