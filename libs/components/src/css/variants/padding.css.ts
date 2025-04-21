import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';
import { TKeysBreakpoints } from '@purete-ui/types';

/**
 * A responsive utility for generating padding styles based on breakpoints.
 *
 * This uses the `pureteTheme.padding` map to create a set of class names for each
 * defined breakpoint. The resulting class names apply the appropriate `padding` values.
 *
 * It is particularly useful for applying consistent spacing in a responsive design system.
 *
 * @example
 * ```ts
 * <div className={paddingCss.sm}>Content with small padding</div>
 * <div className={paddingCss.md}>Content with medium padding</div>
 * ```
 *
 * @typeParam TKeysBreakpoints - Union of responsive breakpoint keys like `sm`, `md`, `lg`, etc.
 *
 * @returns Record of class names keyed by breakpoint.
 *
 * @see pureteTheme.padding
 */
export const paddingCss: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.padding,
  (padding) => [{ padding: padding }]
);
