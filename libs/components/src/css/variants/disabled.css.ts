import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

/**
 * @description Style from disabled element on page
 */
export const disabled = styleVariants({
  true: {
    background: pureteTheme.colors.active,
    color: pureteTheme.colors.primary,
    border: `solid 2px ${pureteTheme.colors.primary}`,
    cursor: 'not-allowed',
  },
});
