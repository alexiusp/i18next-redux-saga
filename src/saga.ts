import I18Next from 'i18next';
import { all, call, cps, put, takeEvery } from 'redux-saga/effects';
import {
  I18NEXT_CHANGE_LANGUAGE,
  I18NEXT_CREATE_INSTANCE,
  I18NEXT_INIT,
  I18NEXT_LOAD_LANGUAGES,
  I18NEXT_LOAD_NAMESPACES,
  I18NEXT_USE,
} from './actions';
import {
  ChangeLanguageAction,
  InitAction,
  LoadLanguagesAction,
  LoadNamespacesAction,
  UseAction,
} from './actions';
import {
  i18nextChangeLanguageReady,
  i18nextCreateInstanceReady,
  i18nextError,
  i18nextLoadLanguagesReady,
  i18nextLoadNamespacesReady,
  i18nextReady,
} from './actions';

function* i18nextUseSaga(action: UseAction) {
  yield call([I18Next, 'use'], action.payload);
}

function* i18nextInitSaga(action: InitAction) {
  try {
    yield cps([I18Next, 'init'], action.payload);
    yield put(i18nextReady(I18Next));
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

function* i18nextLoadLanguagesSaga(action: LoadLanguagesAction) {
  try {
    yield cps([I18Next, 'loadLanguages'], action.payload);
    yield put(i18nextLoadLanguagesReady());
  } catch (error) {
    console.error(error);
    yield put(i18nextError(error));
  }
}

function* i18nextCreateInstance(action: InitAction) {
  try {
    const newInstance = I18Next.createInstance();
    yield cps([newInstance, 'init'], action.payload);
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
