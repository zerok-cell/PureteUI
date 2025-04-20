import { recipe } from '@vanilla-extract/recipes';
import { pureteTheme } from '../theme.css';

export const scrollStyle = recipe({
  base: {
    scrollbarWidth: 'thin',
    scrollbarColor: `${pureteTheme.colors.accent} ${pureteTheme.colors.active}`, // Firefox
    scrollbarGutter: 'stable both-edges',
  },
});
