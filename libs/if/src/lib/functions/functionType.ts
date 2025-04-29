export const functionType = <F extends (...args: Parameters<F>) => unknown>(
  fn: F
): 'arrow' | 'normal' => {
  return Object.prototype.hasOwnProperty.call(fn, 'prototype')
    ? 'normal'
    : 'arrow';
};
