import { TArrowSelectorProps } from './arrow.types';
import { ComponentProps, FC } from 'react';
import { TButtonProps } from '../button';

export type TButtonSelectorProps = {
  arrow?: TArrowSelectorProps;
  text?: ComponentProps<'p'>;
} & TButtonProps;

export type TButtonSelector = FC<TButtonSelectorProps>;
