type TBreakpoints<TValue = string> = {
  xs: TValue;
  sm: TValue;
  md: TValue;
  lg: TValue;
  xl: TValue;
  xxl: TValue;
};

type TKeysBreakpoints = keyof TBreakpoints;
export type { TBreakpoints, TKeysBreakpoints };
