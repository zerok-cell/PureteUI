import { useState } from 'react';
import { FTRUseAdvancedToggle, FTUseAdvancedToggle } from '../../types';

/**
 * @function
 * Custom hook that provides advanced toggle functionality with multiple actions: toggle, open, and close.
 *
 * @param initial - The initial state of the toggle. Defaults to `false` if not provided.
 *
 * @returns An object containing:
 *   - `toggle`: The current state of the toggle (boolean).
 *   - `swap`: A function to toggle the state between `true` and `false`.
 *   - `open`: A function to set the toggle state to `true`.
 *   - `close`: A function to set the toggle state to `false`.
 *
 * @example
 * const MyComponent = () => {
 *   const { toggle, swap, open, close } = useAdvancedToggle(false);
 *
 *   return (
 *     <div>
 *       <p>The current state is {toggle ? "Open" : "Closed"}</p>
 *       <button onClick={swap}>Toggle</button>
 *       <button onClick={open}>Open</button>
 *       <button onClick={close}>Close</button>
 *     </div>
 *   );
 * };
 *
 * @group Hooks
 */
export const useAdvancedToggle: FTUseAdvancedToggle = (initial) => {
  const [toggle, setToggle] = useState<boolean>(initial || false);
  const swap: FTRUseAdvancedToggle['swap'] = () => setToggle(!toggle);
  const open: FTRUseAdvancedToggle['open'] = () => setToggle(true);
  const close: FTRUseAdvancedToggle['close'] = () => {
    setToggle(false);
  };

  return { toggle, swap, open, close };
};
