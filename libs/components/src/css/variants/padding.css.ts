import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';
import { TKeysBreakpoints } from '@purete-ui/types';

export const paddingCss: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.padding,
  (padding) => [{ padding: padding }]
);
