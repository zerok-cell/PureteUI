import { TIfCore } from '../types/core/index.js';

/**
 * @public
 * @function
 *
 * Checks whether the variables are equal or not
 * @param operandFirst
 * @param operandSecond
 * @group BuilderIfCore
 */
export const isEq: TIfCore['isEq'] = <
  TOperandFirst extends TOperandSecond,
  TOperandSecond
>(
  operandFirst: TOperandFirst,
  operandSecond: TOperandSecond,
): boolean => operandFirst === operandSecond;

