import {
  cloneElement,
  ComponentProps,
  FC,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import {
  borderSizeVariable,
  gradientBlurVariable,
  gradientHeightVariable,
  rainbowBorderStyle,
  rainbowGradientVariable,
  TRainbowBorderStyle,
} from './rainbowBorder.css';
import {
  flexContainer,
  TFlexContainerVariants,
} from '../../../css/variants/flex.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type TPropsState = string | null | undefined;

type TRainbowBorderProps = {
  borderSize?: TPropsState;
  gradientHeight?: TPropsState;
  gradientBlur?: TPropsState;
  rainbowGradient: TPropsState;
} & ComponentProps<'div'> &
  TRainbowBorderStyle &
  TFlexContainerVariants;

type TRainbowBorder = FC<TRainbowBorderProps>;

export const RainbowBorder: TRainbowBorder = ({
  children,
  className,
  staticAnimation,
  style,
  justify,
  align,
  direction,
  borderSize,
  wrap,
  rainbowGradient,
  gradientBlur,
  gradientHeight,
  transitionFunctionVariant,
  transitionSpeedVariant,
  ...props
}) => {
  const [component, setComponent] = useState<ReturnType<typeof cloneElement>>();
  useEffect(() => {
    if (isValidElement(children)) {
      setComponent(cloneElement(children));
    }
  }, [children]);

  return (
    <div
      style={{
        ...assignInlineVars({
          [rainbowGradientVariable]: rainbowGradient,
          [gradientBlurVariable]: gradientBlur,
          [borderSizeVariable]: borderSize,
          [gradientHeightVariable]: gradientHeight,
        }),
      }}
      className={`
        ${flexContainer({
          justify,
          align,
          direction,
          wrap,
        })}
        ${rainbowBorderStyle({
          transitionFunctionVariant,
          transitionSpeedVariant,
          staticAnimation,
        })}
        ${className} `}
    >
      {component}
    </div>
  );
};

export default RainbowBorder;
