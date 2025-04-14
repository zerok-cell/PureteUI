import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';
import { TKeysBreakpoints } from '@purete-ui/types';

export const borderWidth: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.borderWidth,
  (width) => [{ borderWidth: width }]
);

export const borderStyle = styleVariants({
  solid: {
    borderStyle: 'solid',
  },
  dashed: {
    borderStyle: 'dashed',
  },
  dotted: {
    borderStyle: 'dotted',
  },
  double: {
    borderStyle: 'double',
  },
  groove: {
    borderStyle: 'groove',
  },
  ridge: {
    borderStyle: 'ridge',
  },
  inset: {
    borderStyle: 'inset',
  },
  outset: {
    borderStyle: 'outset',
  },
  none: {
    borderStyle: 'none',
  },
  hidden: {
    borderStyle: 'hidden',
  },
});
