import { TButtonSelectorProps } from './buttonSelector.types';

export type TSelectorProps = TButtonSelectorProps & {
  items?: string[];
  setValue?: () => void;
};
