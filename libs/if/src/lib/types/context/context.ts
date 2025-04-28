import { TArgs } from '../builderIf.types.js';

export type TContext = {
  tmp: Array<unknown>;
  memory: {
    tmp: TContext['tmp'];
  } & Record<string, unknown>;
  lastArgs: TArgs;
};

export type TContextObject<T extends string> = Record<T, TContext>;
