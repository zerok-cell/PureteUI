import { style } from '@vanilla-extract/css';

export const spanStyle = style([
  {
    position: 'relative',
    transition: 'ease 0.2s',
    selectors: {
      '&:active': {
        transform: 'translateY(1px)',
      },
    },
  },
]);
