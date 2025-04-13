import { ComponentProps, FC, ReactNode } from 'react';
import { TButtonStyle } from '../../Button/buttonStyle.css';
import { TCustomizeKeyProps } from '../customizeKeyProps';

export type TButton = FC<
  TCustomizeKeyProps<TButtonStyle> & {
    children: ReactNode | string;
  } & ComponentProps<'button'>
>;
