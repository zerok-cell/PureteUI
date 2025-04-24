import { Dispatch, FC, ProviderProps, SetStateAction } from 'react';

/**
 * React component that provides the selector context to its children.
 * Wraps children in a context provider with partial props.
 */
export type TSelectorProvider = FC<Partial<ProviderProps<TSelectorContext>>>;

/**
 * Represents an item in the selector dropdown.
 * Can be either a valid item with `id` and `text`, or a null value.
 */
export type TSelectItem =
  | {
      /** Unique identifier of the item */
      id: string;
      /** Displayed value of the item */
      value: {
        /** Text content to be shown in UI */
        text: string;
      };
    }
  | {
      /** Null ID means no item is selected */
      id: null;
      /** Should never exist if id is null */
      value?: never;
    };

/**
 * Setters used for updating selector context state.
 */
export type TSelectorContextSetters = {
  /**
   * Updates the selected item.
   * @param value - New selected item
   */
  setSelect: Dispatch<SetStateAction<TSelectorContext['select']>>;

  /**
   * Updates the active/open state.
   * @param value - New active state (true/false)
   */
  setActivate: Dispatch<SetStateAction<TSelectorContext['active']>>;
};

/**
 * Selector context that holds current state and update functions.
 */
export type TSelectorContext = {
  /** Whether the selector is currently active/open */
  active: boolean;

  /** Currently selected item or null */
  select: TSelectItem | null;
} & TSelectorContextSetters;
