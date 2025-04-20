import {
  containerColorVariable,
  containerHeight,
  containerWidth,
  glareColorVariable,
  skeletonBlockStyleCss,
} from './skeletonBlockStyle.css';
import { TSkeletonBlock } from '../../../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';

/**
 *
 * @param children
 * @param height
 * @param width
 * @param containerColor Color skeleton
 * @param style
 * @param glareColor The color of the periodic glare in `Skeleton`
 * @param borderRadius
 * @param paddingCss
 * @param transitionFunctionVariant
 * @param transitionSpeedVariant
 * @group Component
 * @returns JSX.Element
 * @constructor
 */
export const SkeletonBlock: TSkeletonBlock = ({
  children,
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
