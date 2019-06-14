import {State} from '@ngxs/store';
import {UserEventsStateModel} from './user-events.state.model';

@State<UserEventsStateModel>({
  name: 'userEvents',
  defaults: {
    login: {
      errorMessage: undefined
    },
    register: {
      errorMessage: undefined
    },
    changePassword: {
      errorMessage: undefined
    },
    checkUsername: {
      errorMessage: undefined
    },
    returnAid: {
      errorMessage: undefined
    },
    updateInfoPersona: {
      errorMessage: undefined
    }
  }
})

export class UserEventsState {
  constructor() {
  }
}
