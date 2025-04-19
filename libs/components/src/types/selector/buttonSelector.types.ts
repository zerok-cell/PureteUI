import { TArrowSelectorProps } from './arrow.types';
import { ComponentProps, FC } from 'react';
import { TButtonProps } from '../button';

export type TButtonSelectorProps = {
  arrow?: TArrowSelectorProps;
  initial?: string;
  text?: ComponentProps<'p'>;
  button?: TButtonProps;
};

export type TButtonSelector = FC<TButtonSelectorProps>;
