import { cps, call, put, takeEvery, all } from 'redux-saga/effects';
import {
  I18NEXT_INIT,
  InitAction,
  i18nextReady,
  I18NEXT_USE,
  UseAction,
  ChangeLanguageAction,
  i18nextChangeLanguageReady,
  i18nextError,
  I18NEXT_CHANGE_LANGUAGE,
  LoadNamespacesAction,
  i18nextLoadNamespacesReady,
  I18NEXT_LOAD_NAMESPACES,
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
    yield put(i18nextError(error));
  }
}

function* i18nextChangeLanguageSaga(action: ChangeLanguageAction) {
  try {
    yield cps([I18Next, 'changeLanguage'], action.payload);
    yield put(i18nextChangeLanguageReady());      
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextLoadNamespacesSaga(action: LoadNamespacesAction) {
  try {
    yield cps([I18Next, 'loadNamespaces'], action.payload);
    yield put(i18nextLoadNamespacesReady());      
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

export default function* i18nextSaga() {
  return yield all([
    yield takeEvery(I18NEXT_INIT, i18nextInitSaga),
    yield takeEvery(I18NEXT_USE, i18nextUseSaga),
    yield takeEvery(I18NEXT_CHANGE_LANGUAGE, i18nextChangeLanguageSaga),
    yield takeEvery(I18NEXT_LOAD_NAMESPACES, i18nextLoadNamespacesSaga),
  ]);
}
