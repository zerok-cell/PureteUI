import { TArgs, TPlugin } from '../lib/types/builderIf.types.js';

export const performanceTest = <F extends TPlugin, A extends TArgs>(
  fn: TPlugin<A>,
  args: A
) => {
  const start = performance.now();
  fn(...args);
  const end = performance.now();

  return end - start;
};

export const iterablePerformance = (value: number) => {
  const testObject: Partial<{
    fn: () => number;
  }> = {};

  return {
    fn: <A extends TArgs>(fn: TPlugin<A>, args: A) => {
      testObject['fn'] = () => performanceTest(fn, args);
      return this;
    },

    start: () => {
      if (testObject.fn) {
        let totalTime = 0;
        for (let i = 0; i < value; i++) {
          totalTime += testObject.fn();
        }
        console.log(
          `Average execution time over ${value} iterations: ${
            totalTime / value
          } ms`
        );
      } else {
        console.error("Function is not set. Call 'fn' first.");
      }
    },
  };
};
export const generateRandomArgs = (): TArgs => {
  return {
    d: Math.floor(Math.random() * 100), // случайное число от 0 до 99
    text: Math.random().toString(36).substring(7), // случайная строка
    flag: Math.random() > 0.5, // случайное булево значение
    items: Array.from({ length: Math.floor(Math.random() * 5) }, () => ({
      id: Math.floor(Math.random() * 1000),
      value: Math.random().toFixed(2),
    })), // случайный массив объектов
  };
};
