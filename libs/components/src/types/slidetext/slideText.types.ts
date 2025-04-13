import { ComponentProps, FC, ReactNode } from 'react';
import { TSlideTextStyle } from '../../SlideText/slideText.css';

export type TSlideTextProps = {
  children: ReactNode | string;
} & TSlideTextStyle &
  ComponentProps<'h1'>;

export type TSlideText = FC<TSlideTextProps>;
