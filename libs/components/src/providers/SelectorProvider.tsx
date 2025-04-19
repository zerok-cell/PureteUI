import { selectorContext } from './contexts';
import { useState } from 'react';
import {
  TSelectorContext,
  TSelectorProvider,
} from '../types/providers/selector.types';

export const SelectorProvider: TSelectorProvider = ({ children, value }) => {
  const [activateState, setActivate] =
    useState<TSelectorContext['active']>(false);
  const [selectState, setSelect] =
    useState<TSelectorContext['select']>(undefined);

  return (
    <selectorContext.Provider
      value={
        value
          ? value
          : {
              active: activateState,
              select: selectState,
              setActivate,
              setSelect,
            }
      }
    >
      {children}
    </selectorContext.Provider>
  );
};
