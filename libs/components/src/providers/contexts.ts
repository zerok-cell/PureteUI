import { createContext } from 'react';
import { TSelectorContext } from '../types/providers/selector.types';

export const selectorContext = createContext<TSelectorContext>({
  active: false,
  select: {
    value: {
      text: undefined,
    },
    id: undefined,
  },
  setSelect: undefined,
  setActivate: undefined,
});
