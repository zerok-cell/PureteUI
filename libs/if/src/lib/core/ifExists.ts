import { TIfCoreKey } from '../types/core/index.js';

/**
 * @function
 * @public
 * Checks whether a value exists (i.e., is not `null` or `undefined` or any falsy value).
 *
 * @remarks
 * This function is commonly used to ensure that a variable has a meaningful value.
 * It performs a boolean coercion check using the logical NOT operator twice (`!!value`),
 * which effectively casts any value to a boolean indicating its existence.
 *
 * @example
 * ```ts
 * ifExists("Hello"); // true
 * ifExists("");      // false
 * ifExists(0);       // false
 * ifExists(undefined); // false
 * ```
 *
 * @param variable - The variable to check for existence.
 * @param [i] - `i` or `invert' is responsible for switching the negation of `!`
 * or `!!'. By default, the double negation `!!` is used.
 * @returns `true` if the variable is truthy, otherwise `false`.
 * @group BuilderIfCore
 */
export const ifExists: TIfCoreKey<'ifExists'> = (variable, i = false) =>
  i ? !!variable : !variable;
