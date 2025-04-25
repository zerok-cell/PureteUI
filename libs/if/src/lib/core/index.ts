import { ifExists } from './ifExists.js';
import { TIfCore } from '../types/core/index.js';
import { isType } from './isType.js';
import { isEqual } from './isEqual.js';
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
  ifExists,
  isType,
  isEqual,
  ifExistKey,
  ifEmpty,
};
export { ifExists, isType, isEqual, ifExistKey, ifEmpty };
