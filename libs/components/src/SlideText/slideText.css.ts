import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import {
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../css';
import { createVar } from '@vanilla-extract/css';

const positionVar = createVar();
const startColor = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.primary,
});
const endColor = createVar({
  syntax: '<color>',
  inherits: false,
  initialValue: pureteTheme.colors.accent,
});

export const slideTextStyle = recipe({
  base: {
    vars: {
      [positionVar]: '100%',
      [startColor]: pureteTheme.colors.primary,
      [endColor]: pureteTheme.colors.accent,
    },
    background: `repeating-linear-gradient(to right, ${startColor} 0%, ${startColor} 49%, ${endColor} 50%, ${endColor} 100%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '210% auto',
    backgroundPosition: positionVar,
    transitionBehavior: 'background-position',

    selectors: {
      '&:hover': {
        vars: {
          [positionVar]: '0%',
        },
      },
    },
  },
  variants: {
    transitionSpeedVariant,
    transitionFunctionVariant,
  },
  defaultVariants: {
    transitionSpeedVariant: 2,
    transitionFunctionVariant: 'easeIn',
  },
});
export type TSlideTextStyle = RecipeVariants<typeof slideTextStyle>;
