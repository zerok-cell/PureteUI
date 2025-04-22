import { builderIf } from '../builder/index.js';

export type TPlugin = (ctx: ReturnType<typeof builderIf>) => void;
export type TPluginBody<TArgs extends Array<unknown> = [string]> = (
  ...args: TArgs
) => void;
