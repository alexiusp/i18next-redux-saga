import { i18n, InitOptions } from 'i18next';
import * as ActionTypes from './actionTypes';
import { I18nextModule } from './types';

export const i18nextUse: (module: I18nextModule) => ActionTypes.IUseAction = (module) => ({
  type: ActionTypes.I18NEXT_USE,
  module,
});

export const i18nextInit: (options: InitOptions) => ActionTypes.IInitAction = (options) => ({
  type: ActionTypes.I18NEXT_INIT,
  options,
});

export const i18nextError: (error: Error | null | undefined) => ActionTypes.IErrorAction = (error) => ({
  type: ActionTypes.I18NEXT_ERROR,
  error,
});

export const i18nextReady: (instance: i18n) => ActionTypes.IReadyAction = (instance) => ({
  type: ActionTypes.I18NEXT_READY,
  instance,
});

export const i18nextChangeLanguage: (language: string) => ActionTypes.IChangeLanguageAction = (language) => ({
  type: ActionTypes.I18NEXT_CHANGE_LANGUAGE,
  language,
});

export const i18nextChangeLanguageReady: () => ActionTypes.IChangeLanguageReadyAction = () => ({
  type: ActionTypes.I18NEXT_CHANGE_LANGUAGE_READY,
});

export const i18nextLoadNamespaces: (ns: string | string[]) => ActionTypes.ILoadNamespacesAction = (ns) => ({
  type: ActionTypes.I18NEXT_LOAD_NAMESPACES,
  ns,
});

export const i18nextLoadNamespacesReady: () => ActionTypes.ILoadNamespacesReadyAction = () => ({
  type: ActionTypes.I18NEXT_LOAD_NAMESPACES_READY,
});

export const i18nextLoadLanguages: (languages: string | string[]) => ActionTypes.ILoadLanguagesAction = (
  languages
) => ({
  type: ActionTypes.I18NEXT_LOAD_LANGUAGES,
  languages,
});

export const i18nextLoadLanguagesReady: () => ActionTypes.ILoadLanguagesReadyAction = () => ({
  type: ActionTypes.I18NEXT_LOAD_LANGUAGES_READY,
});

export const i18nextCreateInstance: (options: InitOptions) => ActionTypes.ICreateInstanceAction = (options) => ({
  type: ActionTypes.I18NEXT_CREATE_INSTANCE,
  options,
});

export const i18nextCreateInstanceReady: (instance: i18n) => ActionTypes.ICreateInstanceReadyAction = (instance) => ({
  type: ActionTypes.I18NEXT_CREATE_INSTANCE_READY,
  instance,
});
