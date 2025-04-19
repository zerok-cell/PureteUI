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
