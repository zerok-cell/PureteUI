import { borderOpacityVariable, glassTailStyleCss } from './glassTailStyle.css';
import { TGlassTail } from '../../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 *
 * @param children
 * @param [paddingCss] Padding property from css
 * @param [borderWidth] Border-width property from css
 * @param [borderStyle] Style borderline, maybe dashed, solid and other
 * @param [borderRadius] Border radius property css
 * @param [borderOpacity] Opacity border
 * @param style
 * @param width Width container
 * @param height Height container
 * @param className
 * @param borderColor Color border
 * @param props
 * @returns JSX.Element
 * @constructor
 * @see paddingCss
 * @see borderWidth
 * @see borderStyle
 * @see borderRadius
 * @see borderOpacity
 * @see borderColor
 * @group Component
 */
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
