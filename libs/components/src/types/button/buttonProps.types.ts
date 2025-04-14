import { ComponentProps, FC, ReactNode } from 'react';
import { TButtonStyle } from '../../components/Button/buttonStyle.css';

export type TButton = FC<
  TButtonStyle & {
    children?: ReactNode | string;
  } & ComponentProps<'button'>
>;
