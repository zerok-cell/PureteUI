import { core } from '../ifCore.js';

export type TArgs = unknown[];
export type TPlugin<Args extends TArgs = []> = (...args: Args) => boolean;
export type TContext = {
  tmp: Array<unknown>;
  memory: Record<string, unknown>;
  lastArgs: TArgs;
};

export type TBuilder<T extends Record<string, TPlugin>> = {
  plugin: <N extends string, A extends TArgs>(
    name: N,
    fn: TPlugin<A>
  ) => TBuilder<TDoubleRecord<T, N, TPlugin<A>>>;
  s: <K extends keyof T>(name: K, args: Parameters<T[K]>) => void;
} & T &
  typeof core;

export type TDoubleRecord<A, B extends string, C> = A & Record<B, C>;
