import { TIfCoreKey } from '../types/core/index.js';
import { TContext } from '../types/context/index.js';

/**
 * @function
 * checks whether a variable belongs to a type or not
 * @param variable Your variable
 * @param type Type
 * @see TTypeofType
 * @group BuilderIfCore
 */
export const isType: TIfCoreKey<'isType'> = function (
  this: TContext,
  variable,
  type
) {
  return typeof variable === type;
};
