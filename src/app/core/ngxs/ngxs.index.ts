import {UserState} from './user/user.state';
import {BigFiveFormState} from './big-five-form/big-five-form.state';
import {UserEventsState} from './user/user-events-state/user-events.state';
import {BigFiveFormEventsState} from './big-five-form/big-five-form-events/big-five-form-events.state';

export const CORE_STATES = [
  UserState,
  BigFiveFormState
];

export const EVENTS_STATES = [
  UserEventsState,
  BigFiveFormEventsState
];
