import {Selector} from '@ngxs/store';
import {UserState} from './user.state';
import {UserStateModel} from './user.state.model';

export class UserSelector {

  @Selector([UserState])
  static isUserLoggedIn(state: UserStateModel) {
    return state.user !== undefined && state.user !== null;
  }

  @Selector([UserState])
  static getUser(state: UserStateModel) {
    return state.user;
  }

  /* Makes sense with Arrays */
  // @Selector([BigFiveFormState])
  // static getAllUsers(state: BigFiveFormStateModel) {
  //   return userEntityAdapter.getSelectors().selectAll(state);
  // }
}

