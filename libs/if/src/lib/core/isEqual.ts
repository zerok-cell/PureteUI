import { TIfCoreKey } from '../types/core/index.js';

/**
 * @public
 * @function
 *
 * Checks whether the variables are equal or not
 * @param operandFirst
 * @param operandSecond
 * @group BuilderIfCore
 */
export const isEqual: TIfCoreKey<'isEqual'> = (operandFirst, operandSecond) =>
  operandFirst === operandSecond;
