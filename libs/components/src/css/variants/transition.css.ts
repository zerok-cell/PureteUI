import { styleVariants } from '@vanilla-extract/css';

/**
 * Defines transition speed variants using different `transition-duration` values.
 *
 * Each key represents a level of speed, where:
 * - `1` is the slowest (1s)
 * - `2` is medium (0.5s)
 * - `3` is the fastest (0.1s)
 *
 * Useful for applying consistent animation speeds across components.
 *
 * @example
 * ```tsx
 * <div className={transitionSpeedVariant[2]}>Medium speed transition</div>
 * ```
 *
 * @returns A record of class names keyed by speed level.
 */
export const transitionSpeedVariant = styleVariants({
  1: {
    transitionDuration: '1s',
  },
  2: {
    transitionDuration: '0.5s',
  },
  3: {
    transitionDuration: '0.1s',
  },
});

/**
 * Defines transition timing function variants using different `transition-timing-function` values.
 *
 * Options:
 * - `ease`: default smooth transition
 * - `easeIn`: starts slow and speeds up
 * - `easeOut`: starts fast and slows down
 * - `easeInOut`: slow at start and end
 *
 * Great for adjusting animation feel and easing behavior.
 *
 * @example
 * ```tsx
 * <div className={transitionFunctionVariant.easeInOut}>Smooth ease-in-out</div>
 * ```
 *
 * @returns A record of class names keyed by timing function name.
 */
export const transitionFunctionVariant = styleVariants({
  ease: {
    transitionTimingFunction: 'ease',
  },
  easeIn: {
    transitionTimingFunction: 'ease-in',
  },
  easeOut: {
    transitionTimingFunction: 'ease-out',
  },
  easeInOut: {
    transitionTimingFunction: 'ease-in-out',
  },
});
