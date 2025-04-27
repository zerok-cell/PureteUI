import { TIfCoreKey } from '../types/core/index.js';
import { TContext } from '../types/builderIf.types.js';
import { contextManager } from '../builder/context/contextManager.js';

/**
 * @function
 * checks whether a variable belongs to a type or not
 * @param variable Your variable
 * @param type Type
 * @see TTypeofType
 * @group BuilderIfCore
 */
export const isType: TIfCoreKey<'isType'> = function (this: TContext, ...args) {
  const [variable, type] = args;
  const manage = contextManager(this);
  return manage.cache(args, () => {
    return typeof variable === type;
  });
};
