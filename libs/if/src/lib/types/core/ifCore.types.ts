import { FTDoubleParam } from './functions.types.js';
import { TTypeofType } from './typeof.types.js';
import { TRPlugin } from '../builderIf.types.js';

export type TIfCore = {
  isType: FTDoubleParam<TTypeofType>;
  isEq: TIsEq;
  ifExistKey: <T extends object>(
    obj: Partial<T>,
    key: keyof T | string
  ) => TRPlugin;
  ifEmpty: <T = unknown>(variable: T) => TRPlugin;
};

export type TIfCoreKey<T extends keyof TIfCore> = TIfCore[T];
export type TIsEq = <TOperandFirst extends TOperandSecond, TOperandSecond>(
  operandFirst: TOperandFirst,
  operandSecond: TOperandSecond
) => boolean;
