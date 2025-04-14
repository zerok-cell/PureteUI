import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';

export const brightRed = createVar();
export const brightYellow = createVar();
export const brightGreen = createVar();
export const brightBlue = createVar();
export const brightPurple = createVar();
export const brightOrange = createVar();
export const rainbowGradient = createVar();
export const rainbowButtonStyle = recipe({
  base: {
    vars: {
      [brightRed]: '#ff0000',
      [brightYellow]: '#ffff00',
      [brightGreen]: '#00ff00',
      [brightBlue]: '#0000ff',
      [brightPurple]: '#8000ff',
      [brightOrange]: '#ff8000',
      [rainbowGradient]: `linear-gradient(90deg, rgba(0,0,0,0), ${brightYellow}, ${brightGreen}, ${brightBlue}, ${brightPurple}, ${brightRed})`,
    },
    position: 'relative',
    selectors: {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-2px',
        bottom: '-2px',
        left: '-2px',
        right: '-2px',
        borderRadius: 'inherit',
        background: rainbowGradient, // ✅ Теперь цвет должен быть радужным!
        zIndex: -1,
      },
    },
  },
});
