import { borderOpacityVariable, glassTailStyleCss } from './glassTailStyle.css';
import { TGlassTail } from '../../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export const GlassTail: TGlassTail = ({
  children,
  paddingCss,
  borderWidth,
  borderStyle,
  borderRadius,
  borderOpacity,
  style,
  width,
  height,
  className,
  borderColor,
  ...props
}) => {
  return (
    <div
      style={{
        borderColor,
        width,
        height,
        ...assignInlineVars({
          [borderOpacityVariable]: borderOpacity,
        }),
        ...style,
      }}
      className={`${glassTailStyleCss({
        paddingCss,
        borderWidth,
        borderStyle,
        borderRadius,
      })} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
