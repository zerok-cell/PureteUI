import { TButtonSelectorProps } from './buttonSelector.types';
import { TMenuSelectorProps } from './menuSelector.types';

export type TSelectorProps = TButtonSelectorProps & {
  setValue?: () => void;
} & TMenuSelectorProps;
