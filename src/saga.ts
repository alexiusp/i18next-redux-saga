import I18Next from 'i18next';
import { all, call, cps, put, takeEvery } from 'redux-saga/effects';
import {
  I18NEXT_CHANGE_LANGUAGE,
  I18NEXT_CREATE_INSTANCE,
  I18NEXT_INIT,
  I18NEXT_LOAD_LANGUAGES,
  I18NEXT_LOAD_NAMESPACES,
  I18NEXT_USE,
  ICreateInstanceAction,
} from './actionTypes';
import {
  IChangeLanguageAction,
  IInitAction,
  ILoadLanguagesAction,
  ILoadNamespacesAction,
  IUseAction,
} from './actionTypes';
import {
  i18nextChangeLanguageReady,
  i18nextCreateInstanceReady,
  i18nextError,
  i18nextLoadLanguagesReady,
  i18nextLoadNamespacesReady,
  i18nextReady,
} from './actions';

function* i18nextUseSaga(action: IUseAction) {
  yield call([I18Next, 'use'], action.module);
}

function* i18nextInitSaga(action: IInitAction) {
  try {
    yield cps([I18Next, 'init'], action.options);
    yield put(i18nextReady(I18Next));
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextChangeLanguageSaga(action: IChangeLanguageAction) {
  try {
    yield cps([I18Next, 'changeLanguage'], action.language);
    yield put(i18nextChangeLanguageReady());
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextLoadNamespacesSaga(action: ILoadNamespacesAction) {
  try {
    yield cps([I18Next, 'loadNamespaces'], action.ns);
    yield put(i18nextLoadNamespacesReady());
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextLoadLanguagesSaga(action: ILoadLanguagesAction) {
  try {
    yield cps([I18Next, 'loadLanguages'], action.languages);
    yield put(i18nextLoadLanguagesReady());
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextCreateInstance(action: ICreateInstanceAction) {
  try {
    const newInstance = I18Next.createInstance();
    yield cps([newInstance, 'init'], action.options);
    yield put(i18nextCreateInstanceReady(newInstance));
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
    yield takeEvery(I18NEXT_LOAD_LANGUAGES, i18nextLoadLanguagesSaga),
    yield takeEvery(I18NEXT_CREATE_INSTANCE, i18nextCreateInstance),
  ]);
}
