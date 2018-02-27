import { Action, ActionCreator } from 'redux';

// actions
export const I18NEXT_USE = '@@i18n/I18NEXT_USE';
export const I18NEXT_INIT = '@@i18n/I18NEXT_INIT';
export const I18NEXT_ERROR = '@@i18n/I18NEXT_ERROR';
export const I18NEXT_READY = '@@i18n/I18NEXT_READY';
export const I18NEXT_CHANGE_LANGUAGE = '@@i18n/I18NEXT_CHANGE_LANGUAGE';
export const I18NEXT_CHANGE_LANGUAGE_READY = '@@i18n/I18NEXT_CHANGE_LANGUAGE_READY';
export const I18NEXT_LOAD_NAMESPACES = '@@i18n/I18NEXT_LOAD_NAMESPACES';
export const I18NEXT_LOAD_NAMESPACES_READY = '@@i18n/I18NEXT_LOAD_NAMESPACES_READY';

// interfaces
export interface SimpleAction extends Action {
  type: string;
}

export interface BaseAction<T> extends SimpleAction {
  payload: T;
}

export interface UseAction extends BaseAction<any> {
  payload: any;
}

export interface InitAction extends BaseAction<any> {
  payload: any;
}

export interface ErrorAction extends BaseAction<any> {
  payload: any;
}

export interface ChangeLanguageAction extends BaseAction<string> {
}

export interface LoadNamespacesAction extends BaseAction<string | string[]> {
}

// action builders
export const i18nextUse: ActionCreator<UseAction> = (plugin: any) => {
  return {
    type: I18NEXT_USE,
    payload: plugin,
  };
};

export const i18nextInit: ActionCreator<InitAction> = (config: any) => {
  return {
    type: I18NEXT_INIT,
    payload: config,
  };
};

export const i18nextReady: ActionCreator<SimpleAction> = () => {
  return {
    type: I18NEXT_READY,
  };
};

export const i18nextError: ActionCreator<ErrorAction> = (error: any) => {
  return {
    type: I18NEXT_ERROR,
    payload: error,
  };
};

export const i18nextChangeLanguage: ActionCreator<ChangeLanguageAction> = (language: string) => {
  return {
    type: I18NEXT_CHANGE_LANGUAGE,
    payload: language,
  };
};

export const i18nextChangeLanguageReady: ActionCreator<SimpleAction> = () => {
  return {
    type: I18NEXT_CHANGE_LANGUAGE_READY,
  };
};

export const i18nextLoadNamespaces: ActionCreator<LoadNamespacesAction> = (ns: string | string[]) => {
  return {
    type: I18NEXT_LOAD_NAMESPACES,
    payload: ns,
  };
};

export const i18nextLoadNamespacesReady: ActionCreator<SimpleAction> = () => {
  return {
    type: I18NEXT_LOAD_NAMESPACES_READY,
  };
};