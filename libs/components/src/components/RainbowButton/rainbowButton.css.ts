import { recipe } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';

export const rainbowGradientVariable = createVar();
export const gradientAnimation = keyframes({
  // '0%': { backgroundPosition: '0% 0%' },
  '50%': {
    backgroundPosition: '100% 50%',
  },
});

export const gradientBlurVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '3px',
});
export const gradientHeightVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '30%',
});

export const rainbowButtonStyle = recipe({
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
      [gradientBlurVariable]: '0.7px',
      [gradientHeightVariable]: '50%',
    },
    position: 'inherit',
    transition: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
      '&:after': {
        backgroundPosition: '0% 50%',
        backgroundSize: '300% 300%',
        content: '',
        height: gradientHeightVariable,
        position: 'absolute',
        bottom: '-1px',
        left: '0px',
        right: '0px',
        filter: `blur(${gradientBlurVariable})`,
        transition: 'inherit',
        borderRadius: 'inherit',
        backgroundImage: rainbowGradientVariable, // ✅ Теперь цвет должен быть радужным!
        zIndex: '-1',
        animationDuration: '4s',
        animationName: gradientAnimation,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      },
      '&:active:after': {
        height: '100%',
        animationDuration: '1s',
      },
    },
  },
});
