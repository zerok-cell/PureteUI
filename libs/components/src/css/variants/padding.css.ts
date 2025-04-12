import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

export const paddingCss = styleVariants(pureteTheme.padding, (padding) => [
  { padding: padding },
]);
