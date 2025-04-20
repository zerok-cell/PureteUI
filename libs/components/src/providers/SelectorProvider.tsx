import { selectorContext } from './contexts';
import { useState } from 'react';
import { TSelectorContext, TSelectorProvider } from '../types';

/**
 * SelectorProvider component wraps its children with the selector context.
 *
 * It allows consuming components to access and modify the selector state,
 * including the currently selected item and whether the selector is active.
 *
 * If a custom value is provided via props, it **must include the `setSelect` and `setActivate` setters**.
 * Otherwise, the provider will internally manage its own state.
 *
 * @param props - React props
 * @param props.children - Children components that will consume the context
 * @param [props.value] - Optional custom context value (must include both setters)
 *
 * @throws {Error} If a custom `value` is provided without both `setSelect` and `setActivate`
 *
 */
export const SelectorProvider: TSelectorProvider = ({ children, value }) => {
  if (value && (!value.setSelect || !value.setActivate)) {
    throw new Error('SelectorProvider: value must include setters');
  }

  const [activateState, setActivate] =
    useState<TSelectorContext['active']>(false);
  const [selectState, setSelect] = useState<TSelectorContext['select']>(null);

  const contextValue = value || {
    active: activateState,
    select: selectState,
    setActivate,
    setSelect,
  };

  return (
    <selectorContext.Provider value={contextValue}>
      {children}
    </selectorContext.Provider>
  );
};
