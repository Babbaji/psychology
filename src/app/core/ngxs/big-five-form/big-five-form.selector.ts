import {Selector} from '@ngxs/store';
import {BigFiveFormState} from './big-five-form.state';
import {BigFiveFormStateModel} from './big-five-form.state.model';

export class BigFiveFormSelector {
  @Selector([BigFiveFormState])
  static getBigFiveFormValue(state: BigFiveFormStateModel) {
    return state.bigFiveForm;
  }
}

