import { expect, test } from 'vitest';
import gradationOfValues from '../lib/gradationValues';
import generateContract from '../lib/generateContract';

test('Correct value', () => {
  expect(gradationOfValues(0, 5, 'px')).toEqual({
    xs: '0px',
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    xxl: '25px',
  });
});

test('Correct mutation', () => {
  expect(gradationOfValues(2, (v) => v * 2, 'px')).toEqual({
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    xxl: '64px',
  });
});

test('Gradation and Contract join', () => {
  const testCase = gradationOfValues(2, (v) => v * 2, 'px');
  expect(testCase).toEqual({
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    xxl: '64px',
  });
  const contractCase = generateContract(testCase, 'width');
  expect(contractCase).toEqual({
    lg: 'width-lg',
    md: 'width-md',
    sm: 'width-sm',
    xl: 'width-xl',
    xs: 'width-xs',
    xxl: 'width-xxl',
  });
});
