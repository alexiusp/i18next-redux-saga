import { Action, ActionCreator } from 'redux';

// actions
export const I18NEXT_USE = '@@i18n/I18NEXT_USE';
export const I18NEXT_INIT = '@@i18n/I18NEXT_INIT';
export const I18NEXT_READY = '@@i18n/I18NEXT_READY';

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
