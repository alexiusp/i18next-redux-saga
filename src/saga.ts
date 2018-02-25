import { cps, call, put, takeEvery, all } from 'redux-saga/effects';
import {
  I18NEXT_INIT,
  InitAction,
  i18nextReady,
  I18NEXT_USE,
  UseAction,
} from './actions';
import * as I18Next from 'i18next';

function* i18nextUseSaga(action: UseAction) {
  yield call([I18Next, 'use'], action.payload);
}

function* i18nextInitSaga(action: InitAction) {
  try {
    yield cps([I18Next, 'init'], action.payload);
    yield put(i18nextReady());      
  } catch (error) {
    console.error(error);
  }
}

export default function* i18nextSaga() {
  return yield all([
    yield takeEvery(I18NEXT_INIT, i18nextInitSaga),
    yield takeEvery(I18NEXT_USE, i18nextUseSaga),
  ]);
}
