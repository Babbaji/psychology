import {State} from '@ngxs/store';

@State({
  name: 'bigfive',
  defaults: {
    bigFiveForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})

export class BigFiveFormState {

}

