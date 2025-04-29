import { TIfCore } from '../types/core/index.js';
import { isType } from './isType.js';
import { isEq } from './isEq.js';
import { ifExistKey } from './ifExistKey.js';
import { ifEmpty } from './isEmpty.js';

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
  isType,
  isEq,
  ifExistKey,
  ifEmpty,
};
export { isType, isEq, ifExistKey, ifEmpty };
