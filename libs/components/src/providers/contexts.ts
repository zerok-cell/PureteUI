import { createContext } from 'react';
import { TSelectorContext } from '../types';

export const DEFAULT_CONTEXT_VALUE: TSelectorContext = {
  active: false,
  select: null,
  setSelect: () => undefined,
  setActivate: () => undefined,
};
export const selectorContext = createContext<TSelectorContext>(
  DEFAULT_CONTEXT_VALUE
);
