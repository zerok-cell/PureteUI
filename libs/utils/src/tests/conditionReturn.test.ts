import { expect, test } from 'vitest';
import conditionReturn from '../lib/conditionReturn';

test('Check exist var', () => {
  const successValue = [1, 2, 3, 4, 5, 6, '2', 'Vari', 'const', true];
  const failValue = [0, false, NaN, '', undefined, null];
  successValue.forEach((value) => {
    expect(conditionReturn<typeof value, string>(value, '1')).toBe(value);
  });
  failValue.forEach((value) => {
    expect(conditionReturn<typeof value, string>(value, '1')).toBe('1');
  });
});

test('Check checker', () => {
  expect(
    conditionReturn<number | string, string>(
      1,
      '1',
      (v) => typeof v === 'number' && true
    )
  ).toBe(1);
  expect(
    conditionReturn<number | string, string>(
      1,
      '1',
      (v) => typeof v === 'string' && true
    )
  ).toBe('1');
  expect(
    conditionReturn<number, string>(10, 'fallback', (v) => v > 5 && v < 15)
  ).toBe(10);
  expect(
    conditionReturn<number, string>(20, 'fallback', (v) => v > 5 && v < 15)
  ).toBe('fallback');
});
