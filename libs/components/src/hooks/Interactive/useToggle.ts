import { useState } from 'react';
import { FTRUseToggle, FTUseToggle } from '../../types';

/**
 * @function
 * A simple toggle hook that manages a boolean state.
 *
 * @example
 * const { toggle, swap } = useToggle();
 * console.log(toggle); // false
 * swap();              // toggle becomes true
 *
 * @example
 * const { toggle, swap } = useToggle(true);
 * console.log(toggle); // true
 * swap();              // toggle becomes false
 *
 * @param initial Optional initial state. Defaults to false.
 *                (Note: Avoid relying on this too much for controlled logic)
 *
 * @returns An object with:
 * - toggle: boolean - current state
 * - swap: () => void - toggles the state
 *
 * @group Hooks
 */
export const useToggle: FTUseToggle = (initial) => {
  const [toggle, setToggle] = useState<boolean>(initial || false);
  const swap: FTRUseToggle['swap'] = () => {
    setToggle(!toggle);
  };
  return { toggle, swap };
};
