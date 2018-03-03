import { Action, ActionCreator } from 'redux';
export declare const I18NEXT_USE = "@@i18n/I18NEXT_USE";
export declare const I18NEXT_INIT = "@@i18n/I18NEXT_INIT";
export declare const I18NEXT_ERROR = "@@i18n/I18NEXT_ERROR";
export declare const I18NEXT_READY = "@@i18n/I18NEXT_READY";
export declare const I18NEXT_CHANGE_LANGUAGE = "@@i18n/I18NEXT_CHANGE_LANGUAGE";
export declare const I18NEXT_CHANGE_LANGUAGE_READY = "@@i18n/I18NEXT_CHANGE_LANGUAGE_READY";
export declare const I18NEXT_LOAD_NAMESPACES = "@@i18n/I18NEXT_LOAD_NAMESPACES";
export declare const I18NEXT_LOAD_NAMESPACES_READY = "@@i18n/I18NEXT_LOAD_NAMESPACES_READY";
export declare const I18NEXT_LOAD_LANGUAGES = "@@i18n/I18NEXT_LOAD_LANGUAGES";
export declare const I18NEXT_LOAD_LANGUAGES_READY = "@@i18n/I18NEXT_LOAD_LANGUAGES_READY";
export declare const I18NEXT_CREATE_INSTANCE = "@@i18n/I18NEXT_CREATE_INSTANCE";
export declare const I18NEXT_CREATE_INSTANCE_READY = "@@i18n/I18NEXT_CREATE_INSTANCE_READY";
export interface SimpleAction extends Action {
    type: string;
}
export interface BaseAction<T> extends SimpleAction {
    payload: T;
}
export interface UseAction extends BaseAction<any> {
}
export interface InitAction extends BaseAction<any> {
}
export interface ErrorAction extends BaseAction<any> {
}
export interface ChangeLanguageAction extends BaseAction<string> {
}
export interface LoadNamespacesAction extends BaseAction<string | string[]> {
}
export interface LoadLanguagesAction extends BaseAction<string | string[]> {
}
export declare const i18nextUse: ActionCreator<UseAction>;
export declare const i18nextInit: ActionCreator<InitAction>;
export declare const i18nextReady: ActionCreator<SimpleAction>;
export declare const i18nextError: ActionCreator<ErrorAction>;
export declare const i18nextChangeLanguage: ActionCreator<ChangeLanguageAction>;
export declare const i18nextChangeLanguageReady: ActionCreator<SimpleAction>;
export declare const i18nextLoadNamespaces: ActionCreator<LoadNamespacesAction>;
export declare const i18nextLoadNamespacesReady: ActionCreator<SimpleAction>;
export declare const i18nextLoadLanguages: ActionCreator<LoadLanguagesAction>;
export declare const i18nextLoadLanguagesReady: ActionCreator<SimpleAction>;
export declare const i18nextCreateInstance: ActionCreator<InitAction>;
export declare const i18nextCreateInstanceReady: ActionCreator<InitAction>;
