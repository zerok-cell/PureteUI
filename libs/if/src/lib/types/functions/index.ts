export type TFFunction = <F extends (...args: Parameters<F>) => unknown>(
  fn: F
) => 'arrow' | 'normal';

export type TFunctionCore = {
  functionType: TFFunction;
};
