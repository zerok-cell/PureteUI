import { TKeysBreakpoints } from '@purete-ui/types';
import { styleVariants } from '@vanilla-extract/css';
import { pureteTheme } from '../theme.css';

/**
 * A responsive utility for applying `border-radius` styles based on design tokens.
 *
 * This variant generator uses the `pureteTheme.roundedPx` values to create
 * corresponding CSS class names for each breakpoint key. Each class applies
 * a specific `border-radius` value.
 *
 * Ideal for ensuring consistent rounded corners across breakpoints in your UI.
 *
 * @example
 * ```tsx
 * <div className={borderRadius.sm}>Small rounded corner</div>
 * <div className={borderRadius.lg}>Large rounded corner</div>
 * ```
 *
 * @typeParam TKeysBreakpoints - Set of breakpoint keys such as `sm`, `md`, `lg`, etc.
 *
 * @returns A record of class names keyed by responsive size.
 *
 * @see pureteTheme.roundedPx
 */
export const borderRadius: Record<TKeysBreakpoints, string> = styleVariants(
  pureteTheme.roundedPx,
  (roundedPx) => [{ borderRadius: roundedPx }]
);
