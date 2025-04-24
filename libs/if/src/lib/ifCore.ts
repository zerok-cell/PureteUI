import { TIfCore } from './types/ifCore.types.js';
import { FTOnceParam } from './types/functions.types.js';

/**
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
 * @returns `true` if the variable is truthy, otherwise `false`.
 */
export const ifExists: FTOnceParam = (variable) => !!variable;
/**
 * Default plugin core containing pre-defined conditional utility functions.
 *
 * @remarks
 * Preset functions do not use the `s` context.
 * @private
 * @example
 * ```ts
 * const builder = builderIf();
 * builder.s("ifExists", ["someValue"]); // executes core.ifExists
 * ```
 */
export const core: TIfCore = {
  ifExists,
};
