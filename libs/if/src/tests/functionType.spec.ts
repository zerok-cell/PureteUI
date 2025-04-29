import { describe } from 'vitest';
import { functionType } from '../lib/functions/index.js';

describe('Тестирование на тип функции', () => {
  it('Нормальная функция', () => {
    expect(
      functionType(function () {
        console.log('Normal');
      })
    ).toBe('normal');
  });
  it('Стрелочная функция', () => {
    expect(
      functionType(() => {
        console.log('Arrow');
      })
    ).toBe('arrow');
  });
});
