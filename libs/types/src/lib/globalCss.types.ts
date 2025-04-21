type TBreakpoints<TValue = string> = {
  xs: TValue;
  sm: TValue;
  md: TValue;
  lg: TValue;
  xl: TValue;
  xxl: TValue;
};
/**
 * A set of keys for objects of gradation values in css
 */
type TKeysBreakpoints = keyof TBreakpoints;
export type { TBreakpoints, TKeysBreakpoints };
