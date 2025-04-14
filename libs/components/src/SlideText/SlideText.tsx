import { endColor, slideTextStyle, startColor } from './slideText.css';
import { TSlideText } from '../types/slidetext/slideText.types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { pureteTheme } from '../css';

export const SlideText: TSlideText = ({
  transitionSpeedVariant,
  transitionFunctionVariant,
  children,
  reverse,
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
        reverse,
      })}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SlideText;
