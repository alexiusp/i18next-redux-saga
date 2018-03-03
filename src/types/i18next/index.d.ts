declare module 'i18next' {
  type Callback = (err: any | undefined, t: (key: string) => string) => void;
  interface I18Next {
    use: (plugin: any) => I18Next;
    init: (config: any, callback: Callback) => I18Next;
    t: (key: string) => string;
    changeLanguage: (language: string, callback: Callback) => I18Next;
    language: string;
    languages: string[];
    loadNamespaces: (ns: string | string[], callback: Callback) => I18Next;
    loadLanguages: (ns: string | string[], callback: Callback) => I18Next;
    createInstance: (config: any, callback: Callback) => I18Next;
  }
  const I18Next: I18Next;
  export = I18Next;
}