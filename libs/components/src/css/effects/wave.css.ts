import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pureteTheme } from '../theme.css';

const wavePropagation = keyframes({
  '0%': {
    opacity: 1,
    scale: 20,
  },
  '50%': {
    opacity: 0.5,
  },
  '100%': {
    scale: 0,

    opacity: 0,
  },
});

export const waveEffect = recipe({
  base: {
    width: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    height: '10px',
    opacity: 0,
    borderRadius: 200,
    background: pureteTheme.colors.active,
    transition: '.1s ease',
    zIndex: -1,
  },

  variants: {
    click: {
      true: {
        scale: 20,
        animation: `${wavePropagation} 0.5s ease-in-out`,
      },
    },
  },
});
