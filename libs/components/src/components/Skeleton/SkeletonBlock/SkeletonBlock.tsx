import {
  containerColorVariable,
  containerHeight,
  containerWidth,
  glareColorVariable,
  skeletonBlockStyleCss,
} from './skeletonBlockStyle.css';
import { TSkeletonBlock } from '../../../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export const SkeletonBlock: TSkeletonBlock = ({
  children,
  fill,
  height,
  width,
  containerColor,
  style,
  glareColor,
  borderRadius,
  paddingCss,
  transitionFunctionVariant,
  transitionSpeedVariant,
}) => {
  return (
    <div
      style={{
        ...assignInlineVars({
          [containerWidth]: String(width),
          [containerHeight]: String(height),
          [glareColorVariable]: glareColor,
          [containerColorVariable]: containerColor,
        }),
        ...style,
      }}
      className={skeletonBlockStyleCss({
        transitionFunctionVariant,
        transitionSpeedVariant,
        borderRadius,
        paddingCss,
      })}
    >
      {children}
    </div>
  );
};

export default SkeletonBlock;
