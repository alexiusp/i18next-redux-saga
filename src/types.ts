import { Module, Newable, ThirdPartyModule } from 'i18next';

export type I18nextModule = Module | Newable<Module> | ThirdPartyModule[] | Newable<ThirdPartyModule>[];
