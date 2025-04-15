import {
  gradientBlurVariable,
  gradientHeightVariable,
  rainbowButtonStyle,
  rainbowGradientVariable,
} from './rainbowButton.css';
import Button from '../Button/Button';
import { spanStyle } from './spanStyle.css';
import { TButton } from '../../types';
import { FC } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type TRainbowButtonProps = Parameters<TButton>[0] & {
  gradientBlur: string;
  gradientHeight: string;
  rainbowGradientColor: string;
};
type TRainbowButton = FC<TRainbowButtonProps>;

export const RainbowButton: TRainbowButton = ({
  children,
  gradientHeight,
  gradientBlur,
  rainbowGradientColor,
  style,
  ...props
}) => {
  const { borderStyle, ...filteredProps } = props;
  return (
    <span className={spanStyle}>
      <Button
        style={{
          ...assignInlineVars({
            [gradientHeightVariable]: gradientHeight,
            [gradientBlurVariable]: gradientBlur,
            [rainbowGradientVariable]: rainbowGradientColor,
          }),
          ...style,
        }}
        className={rainbowButtonStyle()}
        borderStyle={'none'}
        {...filteredProps}
      >
        {children}Купить
      </Button>
    </span>
  );
};

export default RainbowButton;
