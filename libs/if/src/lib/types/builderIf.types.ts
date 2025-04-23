import { core } from '../ifCore.js';

export type TArgs = unknown[];
export type TAllowName<T extends Record<string, TPluginBody>> = Omit<
  Builder<T>,
  'plugin' | 's' | 'tmp'
>;
export type TPluginBody<Args extends TArgs = []> = (...args: Args) => boolean;

export type TContext = {
  tmp: string[];
};

export type TCtx<T, K extends string, Args extends TArgs> = T &
  Record<K, TPluginBody<Args>>;

export type Builder<T extends Record<string, TPluginBody>> = {
  plugin: <K extends string, Args extends TArgs>(
    name: K,
    fn: TPluginBody<Args>
  ) => Builder<TCtx<T, K, Args>>;

  s: TSctx<T, keyof T>;
} & T &
  typeof core;

export type TSctx<T extends Record<string, TPluginBody>, K extends keyof T> = (
  name: K,
  args: Parameters<T[K]>
) => void;
