import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

/**
 * A utility for applying common flex container styles using variant-based class names.
 *
 * This `recipe` generates class names for different flex configurations:
 * - `justify`: horizontal alignment of flex items
 * - `align`: vertical alignment of flex items
 * - `direction`: main axis direction of the flex container
 * - `wrap`: wrapping behavior of flex items
 *
 * @example
 * ```tsx
 * <div className={flexContainer({ justify: 'between', align: 'start' })}>
 *   <Child />
 * </div>
 * ```
 *
 * @variant justify
 * - `start`: justify-content: flex-start
 * - `center`: justify-content: center
 * - `end`: justify-content: flex-end
 * - `between`: justify-content: space-between
 * - `around`: justify-content: space-around
 * - `evenly`: justify-content: space-evenly
 *
 * @variant align
 * - `start`: align-items: flex-start
 * - `center`: align-items: center
 * - `end`: align-items: flex-end
 * - `stretch`: align-items: stretch
 * - `baseline`: align-items: baseline
 *
 * @variant direction
 * - `row`: flex-direction: row
 * - `column`: flex-direction: column
 * - `rowReverse`: flex-direction: row-reverse
 * - `columnReverse`: flex-direction: column-reverse
 *
 * @variant wrap
 * - `noWrap`: flex-wrap: nowrap
 * - `wrap`: flex-wrap: wrap
 * - `wrapReverse`: flex-wrap: wrap-reverse
 *
 * @default
 * ```ts
 * {
 *   justify: 'center',
 *   align: 'center',
 *   direction: 'row',
 *   wrap: 'noWrap'
 * }
 * ```
 */
export const flexContainer = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      rowReverse: { flexDirection: 'row-reverse' },
      columnReverse: { flexDirection: 'column-reverse' },
    },
    wrap: {
      noWrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },
  },
  defaultVariants: {
    justify: 'center',
    align: 'center',
    direction: 'row',
    wrap: 'noWrap',
  },
});

/**
 * Type-safe variant configuration for the `flexContainer` utility.
 *
 * Used when accepting flex configuration as a prop, e.g.:
 *
 * @example
 * ```ts
 * const MyComponent = ({ flex }: TFlexContainerVariants) => (
 *   <div className={flexContainer(flex)} />
 * );
 * ```
 */
export type TFlexContainerVariants = {
  flex: RecipeVariants<typeof flexContainer>;
};
