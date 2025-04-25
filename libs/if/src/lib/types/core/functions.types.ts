import { TPlugin } from '../builderIf.types.js';

export type FTOnceParam = TPlugin<[unknown]>;
export type FTDoubleParam<T> = TPlugin<[unknown, T]>;
