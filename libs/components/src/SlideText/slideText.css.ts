import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import {
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../css';
import { createVar } from '@vanilla-extract/css';

const positionVar = createVar();
export const startColor = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.primary,
});
export const endColor = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.accent,
});

export const slideTextStyle = recipe({
  base: {
    vars: {
      [positionVar]: '100%',
    },
    background: `repeating-linear-gradient(to right, ${startColor} 0%, ${startColor} 49%, ${endColor} 50%, ${endColor} 100%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '210% auto',
    backgroundPosition: positionVar,

    selectors: {
      '&:hover': {
        vars: {
          [positionVar]: '0%',
        },
      },
    },
  },
  variants: {
    reverse: {
      true: {
        vars: {
          [startColor]: pureteTheme.colors.accent,
          [endColor]: pureteTheme.colors.primary,
        },
      },
    },
    transitionSpeedVariant,
    transitionFunctionVariant,
  },
  defaultVariants: {
    reverse: false,
    transitionSpeedVariant: 2,
    transitionFunctionVariant: 'ease',
  },
});
export type TSlideTextStyle = RecipeVariants<typeof slideTextStyle>;
