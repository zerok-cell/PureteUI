import Button from '../Button/Button';
import { TButton, TGradient, TRainbowBorderProps } from '../../types';
import { FC } from 'react';
import RainbowBorder from '../Effects/RainbowBorder/RainbowBorder';

type TRainbowButtonProps = Omit<Parameters<TButton>[0], 'borderStyle'> &
  Partial<TRainbowBorderProps>;
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
    <RainbowBorder flex={flex} rainbowStyle={rainbowStyle} gradient={gradient}>
      <Button
        style={{
          ...style,
        }}
        className={`${className}`}
        borderStyle={'none'}
        {...props}
      >
        {children}
      </Button>
    </RainbowBorder>
  );
};

type TFullRainbowButton = Omit<TRainbowButtonProps, 'gradient'> & {
  gradient?: Omit<TGradient, 'gradientHeight'>;
};

export const FullRainbowButton: FC<TFullRainbowButton> = ({
  gradient,
  rainbowStyle,
  flex,
  children,
  ...props
}) => {
  return (
    <RainbowButton
      flex={flex}
      rainbowStyle={rainbowStyle}
      gradient={{
        borderSize: '1px',
        gradientBlur: '2px',
        gradientHeight: '100%',
        ...gradient,
      }}
      {...props}
    >
      {children}
    </RainbowButton>
  );
};

export default RainbowButton;
