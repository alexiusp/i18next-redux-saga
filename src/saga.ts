import I18Next from 'i18next';
import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import * as Actions from './actions';

function* i18nextUseSaga({ module }: ActionTypes.IUseAction): SagaIterator {
  yield call([I18Next, 'use'], module);
}

function* i18nextInitSaga({ options }: ActionTypes.IInitAction): SagaIterator {
  try {
    yield call([I18Next, 'init'], options);
    yield put(Actions.i18nextReady(I18Next));
  } catch (error) {
    console.error(error);
    yield put(Actions.i18nextError(error));
  }
}

function* i18nextChangeLanguageSaga({ language }: ActionTypes.IChangeLanguageAction): SagaIterator {
  try {
    yield call([I18Next, 'changeLanguage'], language);
    yield put(Actions.i18nextChangeLanguageReady());
  } catch (error) {
    console.error(error);
    yield put(Actions.i18nextError(error));
  }
}

function* i18nextLoadNamespacesSaga({ ns }: ActionTypes.ILoadNamespacesAction): SagaIterator {
  try {
    yield call([I18Next, 'loadNamespaces'], ns);
    yield put(Actions.i18nextLoadNamespacesReady());
  } catch (error) {
    console.error(error);
    yield put(Actions.i18nextError(error));
  }
}

function* i18nextLoadLanguagesSaga({ languages }: ActionTypes.ILoadLanguagesAction): SagaIterator {
  try {
    yield call([I18Next, 'loadLanguages'], languages);
    yield put(Actions.i18nextLoadLanguagesReady());
  } catch (error) {
    console.error(error);
    yield put(Actions.i18nextError(error));
  }
}

function* i18nextCreateInstance({ options }: ActionTypes.ICreateInstanceAction): SagaIterator {
  try {
    const newInstance = I18Next.createInstance();
    yield call([newInstance, 'init'], options);
    yield put(Actions.i18nextCreateInstanceReady(newInstance));
  } catch (error) {
    console.error(error);
    yield put(Actions.i18nextError(error));
  }
}

export default function* i18nextSaga(): SagaIterator {
  return yield all([
    yield takeEvery(ActionTypes.I18NEXT_INIT, i18nextInitSaga),
    yield takeEvery(ActionTypes.I18NEXT_USE, i18nextUseSaga),
    yield takeEvery(ActionTypes.I18NEXT_CHANGE_LANGUAGE, i18nextChangeLanguageSaga),
    yield takeEvery(ActionTypes.I18NEXT_LOAD_NAMESPACES, i18nextLoadNamespacesSaga),
    yield takeEvery(ActionTypes.I18NEXT_LOAD_LANGUAGES, i18nextLoadLanguagesSaga),
    yield takeEvery(ActionTypes.I18NEXT_CREATE_INSTANCE, i18nextCreateInstance),
  ]);
}
