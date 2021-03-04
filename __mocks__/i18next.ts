import { i18n } from 'i18next';

export function _createInstance(): i18n {
  const init = jest.fn();
  const use = jest.fn();
  const changeLanguage = jest.fn();
  const loadNamespaces = jest.fn();
  const loadLanguages = jest.fn();
  const createInstance = jest.fn().mockImplementation(_createInstance);
  return ({
    init,
    use,
    changeLanguage,
    loadNamespaces,
    loadLanguages,
    createInstance,
  } as unknown) as i18n;
}

const i18nextMock = _createInstance();

export default i18nextMock;
