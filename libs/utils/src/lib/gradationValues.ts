import { TBreakpoints, TUnitsOfMeasurement } from '@zero-ui/types';

type TKeysFromResult<TValue> = Record<keyof TBreakpoints, TValue>;
/**
 * @description Creates a gradation of values, or a map of values according to your template.
 * @param initialValue The starting number from which the graduation begins, its value will go to the "xs" key
 * @param mutation The number with which your value will be graded with each iteration, or a function
 * that takes the current value and returns a new one
 * @param unit The unit of measurement of your default value is "px"
 * @param formater the formatter of your key value accepts the value and unit of measurement defined in
 * "unit" and should return a string
 */

const gradationOfValues = <TResult = `${number}${TUnitsOfMeasurement}`>(
  initialValue = 0,
  mutation: number | ((v: typeof initialValue) => number) = 5,
  unit: TUnitsOfMeasurement = 'px',
  formater: (v: typeof initialValue, u: typeof unit) => TResult = (v, u) =>
    `${v}${u}` as TResult
): Partial<TKeysFromResult<TResult>> => {
  const result: Partial<TKeysFromResult<TResult>> = {
    xs: formater(initialValue, unit),
  };
  const keys: (keyof TBreakpoints)[] = ['sm', 'md', 'lg', 'xl', 'xxl'];
  keys.forEach((key) => {
    if (typeof mutation === 'function') initialValue = mutation(initialValue);
    else initialValue += mutation;
    result[key] = formater(initialValue, unit);
  });
  return result;
};

export default gradationOfValues;
