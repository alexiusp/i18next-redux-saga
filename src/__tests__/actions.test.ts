import { i18n, InitOptions } from 'i18next';
import * as Actions from '../actions';
import * as ActionTypes from '../actionTypes';
import { I18nextModule } from '../types';

describe('redux action builders', () => {
  it('should create I18NEXT_USE action', () => {
    const mockModule = {} as I18nextModule;
    const action = Actions.i18nextUse(mockModule);
    expect(action.type).toEqual(ActionTypes.I18NEXT_USE);
    expect(action.module).toEqual(mockModule);
  });

  it('should create I18NEXT_INIT action', () => {
    const mockOptions = {} as InitOptions;
    const action = Actions.i18nextInit(mockOptions);
    expect(action.type).toEqual(ActionTypes.I18NEXT_INIT);
    expect(action.options).toEqual(mockOptions);
  });

  it('should create I18NEXT_ERROR action', () => {
    const mockError = new Error('some error');
    const action = Actions.i18nextError(mockError);
    expect(action.type).toEqual(ActionTypes.I18NEXT_ERROR);
    expect(action.error).toEqual(mockError);
  });

  it('should create I18NEXT_READY action', () => {
    const mockInstance = {} as i18n;
    const action = Actions.i18nextReady(mockInstance);
    expect(action.type).toEqual(ActionTypes.I18NEXT_READY);
    expect(action.instance).toEqual(mockInstance);
  });

  it('should create I18NEXT_CHANGE_LANGUAGE action', () => {
    const mockLanguage = 'some language';
    const action = Actions.i18nextChangeLanguage(mockLanguage);
    expect(action.type).toEqual(ActionTypes.I18NEXT_CHANGE_LANGUAGE);
    expect(action.language).toEqual(mockLanguage);
  });

  it('should create I18NEXT_CHANGE_LANGUAGE_READY action', () => {
    const action = Actions.i18nextChangeLanguageReady();
    expect(action.type).toEqual(ActionTypes.I18NEXT_CHANGE_LANGUAGE_READY);
  });

  it('should create I18NEXT_LOAD_NAMESPACES action', () => {
    const mockNamespaces = ['ns1', 'ns2'];
    const action = Actions.i18nextLoadNamespaces(mockNamespaces);
    expect(action.type).toEqual(ActionTypes.I18NEXT_LOAD_NAMESPACES);
    expect(action.ns).toEqual(mockNamespaces);
  });

  it('should create I18NEXT_LOAD_LANGUAGES action', () => {
    const mockLanguages = ['en', 'de'];
    const action = Actions.i18nextLoadLanguages(mockLanguages);
    expect(action.type).toEqual(ActionTypes.I18NEXT_LOAD_LANGUAGES);
    expect(action.languages).toEqual(mockLanguages);
  });

  it('should create I18NEXT_LOAD_LANGUAGES_READY action', () => {
    const action = Actions.i18nextLoadLanguagesReady();
    expect(action.type).toEqual(ActionTypes.I18NEXT_LOAD_LANGUAGES_READY);
  });

  it('should create I18NEXT_CREATE_INSTANCE action', () => {
    const mockOptions = {} as InitOptions;
    const action = Actions.i18nextCreateInstance(mockOptions);
    expect(action.type).toEqual(ActionTypes.I18NEXT_CREATE_INSTANCE);
    expect(action.options).toEqual(mockOptions);
  });

  it('should create I18NEXT_CREATE_INSTANCE_READY action', () => {
    const mockInstance = {} as i18n;
    const action = Actions.i18nextCreateInstanceReady(mockInstance);
    expect(action.type).toEqual(ActionTypes.I18NEXT_CREATE_INSTANCE_READY);
    expect(action.instance).toEqual(mockInstance);
  });
});
