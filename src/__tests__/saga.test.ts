import I18Next, { i18n, InitOptions } from 'i18next';
import { expectSaga } from 'redux-saga-test-plan';
import 'regenerator-runtime/runtime';
import * as Actions from '../actions';
import i18nextSaga from '../saga';
import { I18nextModule } from '../types';

jest.mock('i18next');

describe('saga for wrapping i18next calls', () => {
  // TODO: write unit-tests for error cases

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call use for given module', async () => {
    const mockModule = {} as I18nextModule;
    const action = Actions.i18nextUse(mockModule);
    await expectSaga(i18nextSaga).dispatch(action).call([I18Next, 'use'], mockModule).silentRun();
    expect(I18Next.use).toHaveBeenCalledWith(mockModule);
  });

  it('should call init with given options', async () => {
    const mockOptions = {} as InitOptions;
    const action = Actions.i18nextInit(mockOptions);
    await expectSaga(i18nextSaga)
      .dispatch(action)
      .call([I18Next, 'init'], mockOptions)
      .put(Actions.i18nextReady(I18Next))
      .silentRun();
    expect(I18Next.init).toHaveBeenCalledWith(mockOptions);
  });

  it('should call changeLanguage with given language', async () => {
    const mockLanguage = 'en';
    const action = Actions.i18nextChangeLanguage(mockLanguage);
    await expectSaga(i18nextSaga)
      .dispatch(action)
      .call([I18Next, 'changeLanguage'], mockLanguage)
      .put(Actions.i18nextChangeLanguageReady())
      .silentRun();
    expect(I18Next.changeLanguage).toHaveBeenCalledWith(mockLanguage);
  });

  it('should call loadNamespaces with given namespaces', async () => {
    const mockNamespaces = ['ns1', 'ns2'];
    const action = Actions.i18nextLoadNamespaces(mockNamespaces);
    await expectSaga(i18nextSaga)
      .dispatch(action)
      .call([I18Next, 'loadNamespaces'], mockNamespaces)
      .put(Actions.i18nextLoadNamespacesReady())
      .silentRun();
    expect(I18Next.loadNamespaces).toHaveBeenCalledWith(mockNamespaces);
  });

  it('should create new instance and call init with given options on it', async () => {
    const mockOptions = {} as InitOptions;
    const action = Actions.i18nextCreateInstance(mockOptions);
    const mockInstance = ({ init: jest.fn() } as unknown) as i18n;
    (I18Next.createInstance as jest.Mock).mockReturnValue(mockInstance);
    const expectedAction = Actions.i18nextCreateInstanceReady(mockInstance);
    await expectSaga(i18nextSaga)
      .dispatch(action)
      .call([mockInstance, 'init'], mockOptions)
      .put(expectedAction)
      .silentRun();
    expect(I18Next.createInstance).toHaveBeenCalled();
    expect(mockInstance.init).toHaveBeenCalledWith(mockOptions);
  });
});
