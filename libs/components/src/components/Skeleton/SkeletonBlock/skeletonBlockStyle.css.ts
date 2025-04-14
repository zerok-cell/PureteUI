import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';
import {
  borderRadius,
  paddingCss,
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../../../css';
import { calc } from '@vanilla-extract/css-utils';

export const glareColorVariable = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.accent,
});
export const containerColorVariable = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.primary,
});
export const containerWidth = createVar();
export const containerHeight = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: '0',
});
const glareOpacity = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '0.1',
});
const glareWidth = createVar({
  syntax: '<length>',
  inherits: false,
  initialValue: calc.multiply(containerWidth, 0.2),
});
const glareAnimationSlide = keyframes({
  '0%': {
    transform: `translateX(0)`,
    opacity: glareOpacity,
  },
  '49%': {
    transform: `translateX(${calc.add(containerWidth, glareWidth)})`,
    opacity: glareOpacity,
  },
  '50%': {
    opacity: '0',
  },
  '100%': {
    opacity: '0',
  },
});

export const skeletonBlockStyleCss = recipe({
  base: {
    vars: {
      [containerColorVariable]: pureteTheme.colors.primary,
      [glareColorVariable]: pureteTheme.colors.accent,
      [glareWidth]: calc.multiply(containerWidth, 0.2),
    },
    backgroundColor: containerColorVariable,
    overflow: 'hidden',
    position: 'relative',
    width: containerWidth,
    height: containerHeight,
    selectors: {
      '&:before': {
        backgroundColor: glareColorVariable,
        content: "' '",
        width: glareWidth,
        opacity: glareOpacity,
        height: '100%',
        filter: `blur(${calc.multiply(containerWidth, 0.1)})`,
        position: 'absolute',

        animationName: glareAnimationSlide,
        animationDuration: '2s',
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite',
      },
    },
  },
  variants: {
    transitionSpeedVariant,
    transitionFunctionVariant,
    paddingCss,
    borderRadius,
  },
});

export type TSkeletonBlockStyleCss = RecipeVariants<
  typeof skeletonBlockStyleCss
>;
