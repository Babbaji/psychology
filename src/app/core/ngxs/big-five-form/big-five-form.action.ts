import {BigFiveSaveObject} from './big-five-form.state.model';

export class SaveBigFiveForm {
  static readonly type = '[bigfive] Save SBigFiveForm';

  constructor(public bigFiveForm: BigFiveSaveObject) {
  }
}
