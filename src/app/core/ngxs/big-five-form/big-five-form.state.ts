import {Action, State, StateContext, Store} from '@ngxs/store';
import {BigFiveService} from '../../http-services/big-five.service';
import {BigFiveFormStateModel} from './big-five-models/big-five-form.state.model';
import {SaveBigFiveForm} from './big-five-form.action';
import {BigFiveRequest, BigFiveResponse} from './big-five-models/big-five.model';
import {UserSelector} from '../user/user.selector';
import {SaveBigFiveFormFailure, SaveBigFiveFormSuccess} from './big-five-form-events/big-five-form-events.action';

@State<BigFiveFormStateModel>({
  name: 'bigfive',
  defaults: {
    bigFiveForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    },
    lastInsertedTest: undefined,
  }
})

export class BigFiveFormState {

  constructor(private bigFiveService: BigFiveService, private store: Store) {
  }

  @Action(SaveBigFiveForm)
  saveBigFiveForm({dispatch, patchState, getState}: StateContext<BigFiveFormStateModel>) {
    const bigFiveForm = getState().bigFiveForm.model;
    const bigFiveRequest: BigFiveRequest = {
      _idUser: this.store.selectSnapshot(UserSelector.getId),
      altruista: bigFiveForm.altruista,
      ansioso: bigFiveForm.ansioso,
      chiuso: bigFiveForm.chiuso,
      creativo: bigFiveForm.creativo,
      diligente: bigFiveForm.diligente,
      disponibile: bigFiveForm.disponibile,
      emotivo: bigFiveForm.emotivo,
      espansivo: bigFiveForm.espansivo,
      estroverso: bigFiveForm.estroverso,
      fantasioso: bigFiveForm.fantasioso,
      generoso: bigFiveForm.generoso,
      nervoso: bigFiveForm.nervoso,
      ordinato: bigFiveForm.ordinato,
      originale: bigFiveForm.originale,
      preciso: bigFiveForm.preciso,
    };
    return this.bigFiveService.saveBigFive(bigFiveRequest)
      .subscribe((response: BigFiveResponse) => {
        if (response.code === '200') {
          patchState({lastInsertedTest: response.body.insertedId});
          return dispatch(new SaveBigFiveFormSuccess());
        } else {
          return dispatch(new SaveBigFiveFormFailure());
        }
      });
  }
}

