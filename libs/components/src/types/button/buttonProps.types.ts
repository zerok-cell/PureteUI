import { ComponentProps, FC } from 'react';
import { TButtonStyle } from '../../components/Button/buttonStyle.css';

export type TButton = FC<TButtonStyle & ComponentProps<'button'>>;
