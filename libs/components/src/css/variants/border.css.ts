import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

export const borderWidth = styleVariants(pureteTheme.borderWidth, (width) => [
  { borderWidth: width },
]);
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
