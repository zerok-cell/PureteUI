import { endColor, slideTextStyle, startColor } from './slideText.css';
import { TSlideText } from '../../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { pureteTheme } from '../../css';

/**
 *
 * @param transitionSpeedVariant
 * @param transitionFunctionVariant
 * @param children
 * @param style
 * @param endColorCustom Second color
 * @param startColorCustom Main color
 * @param props
 * @constructor
 * @group Component
 */
export const SlideText: TSlideText = ({
  transitionSpeedVariant,
  transitionFunctionVariant,
  children,
  style,
  endColorCustom,
  startColorCustom,
  ...props
}) => {
  return (
    <h1
      style={{
        ...style,
        ...assignInlineVars({
          [endColor]: endColorCustom || pureteTheme.colors.primary,
          [startColor]: startColorCustom || pureteTheme.colors.accent,
        }),
      }}
      className={slideTextStyle({
        transitionFunctionVariant,
        transitionSpeedVariant,
      })}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SlideText;
