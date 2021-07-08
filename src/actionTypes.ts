import { i18n, InitOptions } from 'i18next';
import { Action } from 'redux';
import { I18nextModule } from './types';

export const I18NEXT_USE = '@@i18n/I18NEXT_USE';
export type I18NEXT_USE_TYPE = typeof I18NEXT_USE;
export interface IUseAction extends Action<I18NEXT_USE_TYPE> {
  type: I18NEXT_USE_TYPE;
  module: I18nextModule;
}

export const I18NEXT_INIT = '@@i18n/I18NEXT_INIT';
export type I18NEXT_INIT_TYPE = typeof I18NEXT_INIT;
export interface IInitAction extends Action<I18NEXT_INIT_TYPE> {
  type: I18NEXT_INIT_TYPE;
  options: InitOptions;
}

export const I18NEXT_ERROR = '@@i18n/I18NEXT_ERROR';
export type I18NEXT_ERROR_TYPE = typeof I18NEXT_ERROR;
export interface IErrorAction extends Action<I18NEXT_ERROR_TYPE> {
  type: I18NEXT_ERROR_TYPE;
  error: Error | null | undefined;
}

export const I18NEXT_READY = '@@i18n/I18NEXT_READY';
export type I18NEXT_READY_TYPE = typeof I18NEXT_READY;
export interface IReadyAction extends Action<I18NEXT_READY_TYPE> {
  type: I18NEXT_READY_TYPE;
  instance: i18n;
}

export const I18NEXT_CHANGE_LANGUAGE = '@@i18n/I18NEXT_CHANGE_LANGUAGE';
export type I18NEXT_CHANGE_LANGUAGE_TYPE = typeof I18NEXT_CHANGE_LANGUAGE;
export interface IChangeLanguageAction extends Action<I18NEXT_CHANGE_LANGUAGE_TYPE> {
  type: I18NEXT_CHANGE_LANGUAGE_TYPE;
  language: string;
}

export const I18NEXT_CHANGE_LANGUAGE_READY = '@@i18n/I18NEXT_CHANGE_LANGUAGE_READY';
export type I18NEXT_CHANGE_LANGUAGE_READY_TYPE = typeof I18NEXT_CHANGE_LANGUAGE_READY;
export interface IChangeLanguageReadyAction extends Action<I18NEXT_CHANGE_LANGUAGE_READY_TYPE> {
  type: I18NEXT_CHANGE_LANGUAGE_READY_TYPE;
}

export const I18NEXT_LOAD_NAMESPACES = '@@i18n/I18NEXT_LOAD_NAMESPACES';
export type I18NEXT_LOAD_NAMESPACES_TYPE = typeof I18NEXT_LOAD_NAMESPACES;
export interface ILoadNamespacesAction extends Action<I18NEXT_LOAD_NAMESPACES_TYPE> {
  type: I18NEXT_LOAD_NAMESPACES_TYPE;
  ns: string | string[];
}

export const I18NEXT_LOAD_NAMESPACES_READY = '@@i18n/I18NEXT_LOAD_NAMESPACES_READY';
export type I18NEXT_LOAD_NAMESPACES_READY_TYPE = typeof I18NEXT_LOAD_NAMESPACES_READY;
export interface ILoadNamespacesReadyAction extends Action<I18NEXT_LOAD_NAMESPACES_READY_TYPE> {
  type: I18NEXT_LOAD_NAMESPACES_READY_TYPE;
}

export const I18NEXT_LOAD_LANGUAGES = '@@i18n/I18NEXT_LOAD_LANGUAGES';
export type I18NEXT_LOAD_LANGUAGES_TYPE = typeof I18NEXT_LOAD_LANGUAGES;
export interface ILoadLanguagesAction extends Action<I18NEXT_LOAD_LANGUAGES_TYPE> {
  type: I18NEXT_LOAD_LANGUAGES_TYPE;
  languages: string | string[];
}

export const I18NEXT_LOAD_LANGUAGES_READY = '@@i18n/I18NEXT_LOAD_LANGUAGES_READY';
export type I18NEXT_LOAD_LANGUAGES_READY_TYPE = typeof I18NEXT_LOAD_LANGUAGES_READY;
export interface ILoadLanguagesReadyAction extends Action<I18NEXT_LOAD_LANGUAGES_READY_TYPE> {
  type: I18NEXT_LOAD_LANGUAGES_READY_TYPE;
}

export const I18NEXT_CREATE_INSTANCE = '@@i18n/I18NEXT_CREATE_INSTANCE';
export type I18NEXT_CREATE_INSTANCE_TYPE = typeof I18NEXT_CREATE_INSTANCE;
export interface ICreateInstanceAction extends Action<I18NEXT_CREATE_INSTANCE_TYPE> {
  type: I18NEXT_CREATE_INSTANCE_TYPE;
  options: InitOptions;
}

export const I18NEXT_CREATE_INSTANCE_READY = '@@i18n/I18NEXT_CREATE_INSTANCE_READY';
export type I18NEXT_CREATE_INSTANCE_READY_TYPE = typeof I18NEXT_CREATE_INSTANCE_READY;
export interface ICreateInstanceReadyAction extends Action<I18NEXT_CREATE_INSTANCE_READY_TYPE> {
  type: I18NEXT_CREATE_INSTANCE_READY_TYPE;
  instance: i18n;
}

export type II18NextActions =
  | IUseAction
  | IInitAction
  | IErrorAction
  | IReadyAction
  | IChangeLanguageAction
  | IChangeLanguageReadyAction
  | ILoadNamespacesAction
  | ILoadNamespacesReadyAction
  | ILoadLanguagesAction
  | ILoadLanguagesReadyAction
  | ICreateInstanceAction
  | ICreateInstanceReadyAction;
