import { cloneElement, isValidElement, useEffect, useState } from 'react';
import {
  borderSizeVariable,
  gradientBlurVariable,
  gradientHeightVariable,
  rainbowBorderStyle,
  rainbowGradientVariable,
} from './rainbowBorder.css';
import { flexContainer } from '../../../css/variants/flex.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { TRainbowBorder } from '../../../types';

/**
 * @description A component that implements a functional rainbow container
 * that positions children in the center, creating a visual outline. It can
 * be used as a regular block.
 * @param children React element
 * @param className Class name prop
 * @param rainbowStyle some kind of props directly for the outline itself
 * @param style Styles from border
 * @param flex Style flex
 * @param gradient Styles that directly affect the rainbow
 * @param props Other props
 * @constructor
 * @see TGradient
 * @see TRainbowBorder
 * @see TRainbowBorderStyle
 * @see TFlexContainerVariants
 * @returns JSX.Element
 * @group Component
 */
export const RainbowBorder: TRainbowBorder = ({
  children,
  className,
  rainbowStyle,
  style,
  flex,
  gradient,
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
          [rainbowGradientVariable]: gradient?.rainbowGradient,
          [gradientBlurVariable]: gradient?.gradientBlur,
          [borderSizeVariable]: gradient?.borderSize,
          [gradientHeightVariable]: gradient?.gradientHeight,
        }),
        ...style,
      }}
      className={`
        ${flexContainer({ ...flex })}

        ${rainbowBorderStyle({
          ...rainbowStyle,
        })}
        ${className} `}
      {...props}
    >
      {component}
    </div>
  );
};

export default RainbowBorder;
