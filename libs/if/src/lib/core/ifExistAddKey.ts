export const addIfTrue = <T extends object, K extends keyof T>(
  obj: T,
  variable: unknown,
  key: { [key in K]: T[K] }
): (T & typeof key) | void => {
  if (variable) {
    return Object.assign(obj, key);
  }
  return;
};
