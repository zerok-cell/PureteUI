import Button from '../Button/Button';
import { TButton, TGradient, TRainbowBorderProps } from '../../types';
import { FC } from 'react';
import RainbowBorder from '../Effects/RainbowBorder/RainbowBorder';

type TRainbowButtonProps = Omit<Parameters<TButton>[0], 'borderStyle'> &
  Partial<TRainbowBorderProps>;
type TRainbowButton = FC<TRainbowButtonProps>;

/**
 * A customizable button wrapped in a rainbow border effect.
 * Extends the base `Button` component and adds support for animated borders.
 *
 * @param children - The content to be rendered inside the button.
 * @param rainbowStyle - Custom styles for the rainbow effect (optional).
 * @param gradient - Gradient configuration for the border (optional).
 * @param flex - If true, enables flex layout inside the border wrapper (optional).
 * @param style - Inline styles to apply to the button (optional).
 * @param className - Additional CSS classes for the button (optional).
 * @param props - Other props inherited from the base `Button` component.
 * @returns  A `Button` component with a rainbow border.
 * @group Component
 */
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

/**
 * exactly the same as the `RainbowButton`, only the
 * height props are excluded from the gradient.
 * @see RainbowButton
 * @group Component
 */
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
