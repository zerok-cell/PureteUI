import { TIfCoreKey } from '../types/core/index.js';
import { TContext } from '../types/context/index.js';

/**
 * @function
 * @public
 * @description
 * Determines whether a given variable is "empty" based on its type.
 *
 * For numbers and strings, this function returns `true` if the value is falsy (e.g., `0`, `''`).
 * For objects, it returns `true` if the object is `null` or has no enumerable properties.
 * For all other types, it falls back to checking if the value is falsy using {@link ifExists}.
 *
 * @remarks
 * This utility can be useful for general-purpose validations where "emptiness" must be defined across various types.
 *
 * @example
 * ```ts
 * ifEmpty(0);           // true
 * ifEmpty("");          // true
 * ifEmpty("hello");     // false
 * ifEmpty({});          // true
 * ifEmpty({ a: 1 });    // false
 * ifEmpty(null);        // true
 * ifEmpty(undefined);   // true
 * ifEmpty([1, 2]);      // false
 * ifEmpty([]);          // true
 * ```
 *
 * @typeParam T - The type of the variable being evaluated.
 * @param variable - The variable to check for emptiness.
 * @returns `true` if the variable is considered empty, otherwise `false`.
 * @group BuilderIfCore
 */
export const ifEmpty: TIfCoreKey<'ifEmpty'> = function <T = unknown>(
  this: TContext,
  variable: T
): boolean {
  switch (typeof variable) {
    case 'number':
      return !variable;
    case 'string':
      return !variable;
    case 'object':
      if (variable === null) return true;
      return Object.keys(variable as object).length === 0;
    default:
      return !variable;
  }
};
