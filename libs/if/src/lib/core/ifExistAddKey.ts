import { ifExists } from './ifExists.js';

const addIfTrue = <T extends object, K extends keyof T>(
  obj: T,
  variable: unknown,
  key: { [key in K]: T[K] }
): (T & typeof key) | void => {
  if (ifExists(variable, true)) {
    console.log(1);
    return Object.assign(obj, key);
  }
  return;
};

const flag = true;
const o: {
  d: number;
  w: number;
  x?: string;
} = {
  d: 1,
  w: 2,
};
addIfTrue(o, flag, { x: 's' });
console.log(o);
