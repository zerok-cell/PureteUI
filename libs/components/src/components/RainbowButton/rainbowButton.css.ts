import { recipe } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';

export const rainbowGradient = createVar();
export const gradientAniamtion = keyframes({
  // '0%': { backgroundPosition: '0% 0%' },
  '50%': {
    backgroundPosition: '100% 50%',
  },
});

export const gradientBlur = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '3px',
});
export const gradientHeight = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '30%',
});

export const rainbowButtonStyle = recipe({
  base: {
    vars: {
      [rainbowGradient]: `linear-gradient(60deg,
    hsl(225, 86%, 66%),
    hsl(267, 84%, 67%),
    hsl(316, 85%, 67%),
    hsl(359, 85%, 67%),
    hsl(41, 84%, 67%),
    hsl(97, 85%, 67%),
    hsl(146, 85%, 67%),
    hsl(178, 86%, 66%)
)`,
      [gradientBlur]: '0.7px',
      [gradientHeight]: '50%',
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
        height: gradientHeight,
        position: 'absolute',
        bottom: '-1px',
        left: '0px',
        right: '0px',
        filter: `blur(${gradientBlur})`,
        transition: 'inherit',
        borderRadius: 'inherit',
        backgroundImage: rainbowGradient, // ✅ Теперь цвет должен быть радужным!
        zIndex: '-1',
        animationDuration: '4s',
        animationName: gradientAniamtion,
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
