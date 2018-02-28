import { Action, ActionCreator } from 'redux';
export declare const I18NEXT_USE = "@@i18n/I18NEXT_USE";
export declare const I18NEXT_INIT = "@@i18n/I18NEXT_INIT";
export declare const I18NEXT_ERROR = "@@i18n/I18NEXT_ERROR";
export declare const I18NEXT_READY = "@@i18n/I18NEXT_READY";
export declare const I18NEXT_CHANGE_LANGUAGE = "@@i18n/I18NEXT_CHANGE_LANGUAGE";
export declare const I18NEXT_CHANGE_LANGUAGE_READY = "@@i18n/I18NEXT_CHANGE_LANGUAGE_READY";
export declare const I18NEXT_LOAD_NAMESPACES = "@@i18n/I18NEXT_LOAD_NAMESPACES";
export declare const I18NEXT_LOAD_NAMESPACES_READY = "@@i18n/I18NEXT_LOAD_NAMESPACES_READY";
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
export declare const i18nextUse: ActionCreator<UseAction>;
export declare const i18nextInit: ActionCreator<InitAction>;
export declare const i18nextReady: ActionCreator<SimpleAction>;
export declare const i18nextError: ActionCreator<ErrorAction>;
export declare const i18nextChangeLanguage: ActionCreator<ChangeLanguageAction>;
export declare const i18nextChangeLanguageReady: ActionCreator<SimpleAction>;
export declare const i18nextLoadNamespaces: ActionCreator<LoadNamespacesAction>;
export declare const i18nextLoadNamespacesReady: ActionCreator<SimpleAction>;