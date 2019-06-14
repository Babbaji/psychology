import {Action, State, StateContext} from '@ngxs/store';
import {BigFiveFormEventsStateModel} from './big-five-form-events.state.model';
import {ResetBigFiveEvents, SaveBigFiveFormFailure, SaveBigFiveFormSuccess} from './big-five-form-events.action';

@State<BigFiveFormEventsStateModel>({
  name: 'bigfiveEvents',
  defaults: {
    bigFive: {
      failure: undefined,
      failureMessage: undefined,
      success: undefined,
      successMessage: undefined,
      bigFiveLink: undefined,
    }
  }
})

export class BigFiveFormEventsState {

  @Action(ResetBigFiveEvents)
  resetBigFiveEvents({patchState, getState, dispatch, setState}: StateContext<BigFiveFormEventsStateModel>) {
    setState({
      bigFive: {
        failure: undefined,
        failureMessage: undefined,
        success: undefined,
        successMessage: undefined,
        bigFiveLink: undefined,
      }
    });
  }

  @Action(SaveBigFiveFormSuccess)
  saveBigFiveFormSuccess({patchState, getState, dispatch, setState}: StateContext<BigFiveFormEventsStateModel>) {
    setState({
      bigFive: {
        failure: false,
        failureMessage: undefined,
        success: true,
        successMessage: 'Test del Big Five salvato con successo!',
        bigFiveLink: 'link',
      }
    });
  }

  @Action(SaveBigFiveFormFailure)
  saveBigFiveFormFailure({patchState, getState, dispatch, setState}: StateContext<BigFiveFormEventsStateModel>) {
    setState({
      bigFive: {
        failure: true,
        failureMessage: 'Errore nel salvataggio del test del Big Five, riprovare più tardi.',
        success: false,
        successMessage: undefined,
        bigFiveLink: undefined,
      }
    });
  }
}
