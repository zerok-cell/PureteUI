import { styleVariants } from '@vanilla-extract/css';

export const transitionSpeedVariant = styleVariants({
  1: {
    transitionDuration: '1s',
  },
  2: {
    transitionDuration: '0.5s',
  },
  3: {
    transitionDuration: '0.1s',
  },
});

export const transitionFunctionVariant = styleVariants({
  ease: {
    transitionTimingFunction: 'ease',
  },
  easeIn: {
    transitionTimingFunction: 'ease-in',
  },
  easeOut: {
    transitionTimingFunction: 'ease-out',
  },
  easeInOut: {
    transitionTimingFunction: 'ease-in-out',
  },
});
