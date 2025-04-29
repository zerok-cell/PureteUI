import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';
import { transitionFunctionVariant, transitionSpeedVariant } from '../../css';

const size = createVar({
  syntax: '<number>',
  initialValue: '20px',
  inherits: true,
});

export const arrowStyle = recipe({
  base: {
    vars: {
      [size]: '20px',
    },
    height: size,
  },
  variants: {
    transitionFunctionVariant,
    transitionSpeedVariant,
    active: {
      true: {
        rotate: '180deg',
      },
    },
  },
  defaultVariants: {
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },
});
