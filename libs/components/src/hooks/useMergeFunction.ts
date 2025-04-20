import * as React from 'react';
import { SyntheticEvent, useCallback } from 'react';

type FTEvent<TEvent extends SyntheticEvent> = (e: TEvent) => void;

/**
 * @description Hook for merge function and infer one function
 * @param firstFunction The first function to be called
 * @param secondFunction The following function can be an array of functions that or that will be called
 */
export const useMergeFunction = <
  TEvent extends React.SyntheticEvent = React.MouseEvent<HTMLButtonElement>
>(
  firstFunction: FTEvent<TEvent>,
  secondFunction: FTEvent<TEvent>[] | FTEvent<TEvent>
) => {
  return useCallback(
    (e: TEvent) => {
      firstFunction(e);
      if (Array.isArray(secondFunction)) secondFunction.forEach((fn) => fn(e));
      else secondFunction(e);
    },
    [firstFunction, secondFunction]
  );
};
