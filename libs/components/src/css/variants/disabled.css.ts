import { style } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

/**
 * @description Style from disabled element on page
 */
export const disabled = style({
  selectors: {
    '&:disabled': {
      backgroundColor: pureteTheme.colors.active,
      color: pureteTheme.colors.primary,
      borderColor: pureteTheme.colors.primary,
      cursor: 'not-allowed',
    },
  },
});
