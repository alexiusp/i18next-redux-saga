declare module 'i18next' {
  interface I18Next {
    use: (plugin: any) => I18Next;
    init: (config: any) => I18Next;
    t: (key: string) => string;
    // changeLanguage: () => void;
  }
  const I18Next: I18Next;
  export = I18Next;
}