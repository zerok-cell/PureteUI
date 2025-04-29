import { ComponentProps, FC } from 'react';
import { TRainbowBorderStyle } from '../../components/Effects/RainbowBorder/rainbowBorder.css';
import { TFlexContainerVariants } from '../../css/variants/flex.css';

type TPropsState = string | null | undefined;

export type TGradient = {
  borderSize?: TPropsState;
  gradientHeight?: TPropsState;
  gradientBlur?: TPropsState;
  rainbowGradient?: TPropsState;
};

export type TRainbowBorderProps = {
  gradient?: TGradient;
} & ComponentProps<'div'> &
  TRainbowBorderStyle &
  TFlexContainerVariants;

export type TRainbowBorder = FC<TRainbowBorderProps>;
