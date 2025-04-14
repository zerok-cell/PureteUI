import { ComponentProps, FC } from 'react';
import { TSlideTextStyle } from '../../components/SlideText/slideText.css';

export type TSlideTextProps = {
  endColorCustom: string;
  startColorCustom: string;
} & TSlideTextStyle &
  ComponentProps<'h1'>;

export type TSlideText = FC<TSlideTextProps>;
