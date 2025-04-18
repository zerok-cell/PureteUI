import Button from '../Button/Button';
import { TButton, TRainbowBorderProps } from '../../types';
import { FC } from 'react';
import RainbowBorder from '../Effects/RainbowBorder/RainbowBorder';

type TRainbowButtonProps = Parameters<TButton>[0] & TRainbowBorderProps;
type TRainbowButton = FC<TRainbowButtonProps>;

export const RainbowButton: TRainbowButton = ({
  children,
  rainbowStyle,
  gradient,
  flex,
  style,
  className,
  ...props
}) => {
  return (
    // <span className={spanStyle}>
    <RainbowBorder flex={flex} rainbowStyle={rainbowStyle} gradient={gradient}>
      <Button
        style={{
          ...style,
        }}
        className={`${className}`}
        borderStyle={'none'}
        {...props}
      >
        {children}Купить
      </Button>
    </RainbowBorder>
    // </span>
  );
};

export default RainbowButton;
