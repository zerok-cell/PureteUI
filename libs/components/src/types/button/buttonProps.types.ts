import { ComponentProps, FC } from 'react';
import { TButtonStyle } from '../../components/Button/buttonStyle.css';

export type TButtonProps = TButtonStyle & ComponentProps<'button'>;

export type TButton = FC<TButtonProps>;
