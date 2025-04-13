import { TKeysBreakpoints } from '@purete-ui/types';
import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

export const borderRadius: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.roundedPx,
  (roundedPx) => [{ borderRadius: roundedPx }]
);
