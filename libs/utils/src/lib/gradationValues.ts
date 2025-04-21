import { TBreakpoints, TKeysBreakpoints, TUnitsOfMeasurement } from '@zero-ui/types';

/**
 * @description Creates a gradation of values, or a map of values according to your template.
 * @param initialValue The starting number from which the graduation begins, its value will go to the "xs" key
 * @param mutation The number with which your value will be graded with each iteration, or a function
 * that takes the current value and returns a new one
 * @param unit The unit of measurement of your default value is "px"
 * @param formater the formatter of your key value accepts the value and unit of measurement defined in
 * "unit" and should return a string
 */

const gradationOfValues = <TResultValue = `${number}px`>(
  initialValue = 0,
  mutation: number | ((v: typeof initialValue) => number) = 5,
  unit: TUnitsOfMeasurement = 'px',
  formater: (v: typeof initialValue, u: typeof unit) => TResultValue = (v, u) =>
    `${v}${u}` as TResultValue
): TBreakpoints<TResultValue> => {
  const keys: Exclude<TKeysBreakpoints, 'xs'>[] = [
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ];
  const initialResult = keys.reduce((acc, cur) => {
    acc[cur] = undefined;
    return acc;
  }, {} as Record<Exclude<TKeysBreakpoints, 'xs'>, undefined>);
  const result: TBreakpoints<TResultValue | undefined> = {
    xs: formater(initialValue, unit),
    ...initialResult,
  };

  keys.forEach((key) => {
    if (typeof mutation === 'function') initialValue = mutation(initialValue);
    else initialValue += mutation;
    result[key] = formater(initialValue, unit);
  });
  return result as TBreakpoints<TResultValue>;
};

export default gradationOfValues;
