import { FTDoubleParam } from './functions.types.js';
import { TTypeofType } from './typeof.types.js';
import { TRPlugin } from '../builderIf.types.js';

export type TIfCore = {
  ifExists: (variable: unknown, i?: boolean) => TRPlugin;
  isType: FTDoubleParam<TTypeofType>;
  isEqual: FTDoubleParam<unknown>;
  ifExistKey: <T extends object>(
    obj: Partial<T>,
    key: keyof T | string
  ) => TRPlugin;
  ifEmpty: <T = unknown>(variable: T) => TRPlugin;
};

export type TIfCoreKey<T extends keyof TIfCore> = TIfCore[T];
