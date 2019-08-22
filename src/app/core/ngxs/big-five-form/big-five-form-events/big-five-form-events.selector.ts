import {Selector} from '@ngxs/store';
import {BigFiveFormEventsStateModel} from './big-five-form-events.state.model';
import {BigFiveFormEventsState} from './big-five-form-events.state';


export class BigFiveFormEventsSelector {
  @Selector([BigFiveFormEventsState])
  static getBigFiveValue(state: BigFiveFormEventsStateModel) {
    return state.bigFive;
  }
}

