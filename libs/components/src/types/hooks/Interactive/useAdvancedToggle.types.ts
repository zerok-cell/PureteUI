import { FTRUseToggle, FTUseToggle } from './useToggle.types';

export type FTRUseAdvancedToggle = {
  open: () => void;
  close: () => void;
} & FTRUseToggle;

export type FTUseAdvancedToggle = (
  ...args: Parameters<FTUseToggle>
) => FTRUseAdvancedToggle;
