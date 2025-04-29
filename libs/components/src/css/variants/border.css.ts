import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';
import { TKeysBreakpoints } from '@purete-ui/types';

/**
 * Responsive border width styles mapped to theme breakpoints.
 *
 * Generates `borderWidth` styles for each breakpoint (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`)
 * using values from the `pureteTheme.borderWidth` theme object.
 *
 * @example
 * ```ts
 * borderWidth.sm // className for border width at small screen
 * ```
 *
 * @see TKeysBreakpoints
 * @see pureteTheme.borderWidth
 */
export const borderWidth: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.borderWidth,
  (width) => [{ borderWidth: width }]
);

/**
 * Border style variants.
 *
 * Provides a set of predefined CSS `border-style` options including:
 * `'solid'`, `'dashed'`, `'dotted'`, `'double'`, `'groove'`, `'ridge'`, `'inset'`, `'outset'`, `'none'`, and `'hidden'`.
 *
 * Can be used to apply consistent border styles across components using vanilla-extract.
 *
 * @example
 * ```ts
 * borderStyle.dashed // className for dashed border
 * ```
 */
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
