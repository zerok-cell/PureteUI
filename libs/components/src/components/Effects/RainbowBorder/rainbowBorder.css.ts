import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';
import {
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../../../css';

const defaultHeightGradient = '50%';

export const rainbowGradientVariable = createVar();
const gradientAnimation = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 100%' },
  '100%': { backgroundPosition: '0% 100%' },
});

export const gradientBlurVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '3px',
});
export const gradientHeightVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: defaultHeightGradient,
});
export const borderSizeVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '2px',
});
export const rainbowBorderStyle = recipe({
  base: {
    vars: {
      [rainbowGradientVariable]: `linear-gradient(60deg,
    hsl(225, 86%, 66%),
    hsl(267, 84%, 67%),
    hsl(316, 85%, 67%),
    hsl(359, 85%, 67%),
    hsl(41, 84%, 67%),
    hsl(97, 85%, 67%),
    hsl(146, 85%, 67%),
    hsl(178, 86%, 66%)
)`,
      [gradientBlurVariable]: '2px',
      [gradientHeightVariable]: defaultHeightGradient,
      [borderSizeVariable]: '2px',
    },

    position: 'relative',
    padding: borderSizeVariable,
    width: 'max-content',
    height: 'max-content',
    selectors: {
      '&:after': {
        content: '',
        borderRadius: 6,
        filter: `blur(${gradientBlurVariable})`,
        position: 'absolute',
        zIndex: '-1',
        height: gradientHeightVariable,
        backgroundPosition: '0% 0%',
        backgroundSize: '300% 300%',
        animationDuration: '4s',
        animationName: gradientAnimation,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        left: '0px',
        right: '0px',
        backgroundImage: rainbowGradientVariable,
        transition: 'inherit',
      },
    },
  },

  variants: {
    transitionFunctionVariant,
    transitionSpeedVariant,
    staticAnimation: {
      true: {
        selectors: {
          '&:after': {
            animationPlayState: 'paused',
          },
        },
      },
      false: {
        selectors: {
          '&:after': {
            animationPlayState: '',
          },
        },
      },
    },
  },
  defaultVariants: {
    staticAnimation: false,
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },
});

export type TRainbowBorderStyle = {
  rainbowStyle?: RecipeVariants<typeof rainbowBorderStyle>;
};
