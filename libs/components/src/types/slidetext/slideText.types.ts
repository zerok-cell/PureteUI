import { ComponentProps, FC, ReactNode } from 'react';
import { TSlideTextStyle } from '../../components/SlideText/slideText.css';

export type TSlideTextProps = {
  children: ReactNode | string;
  endColorCustom: string;
  startColorCustom: string;
} & TSlideTextStyle &
  ComponentProps<'h1'>;

export type TSlideText = FC<TSlideTextProps>;
