import { isType } from './isType.js';
import { TPlugin } from '../types/builderIf.types.js';
import { TIfCoreKey } from '../types/core/index.js';

/**
 * A function that checks whether the key exists in the object `obj` or not
 * @function
 * @public
 * @param obj The object that needs to be checked
 * @param key The key for checking for existence
 * @group BuilderIfCore
 */
export const ifExistKey: TIfCoreKey<'ifExistKey'> = <T extends object>(
  obj: Partial<T>,
  key: keyof T | string
): ReturnType<TPlugin> => {
  if (!isType(obj, 'object'))
    throw new Error('The first argument must be an object');
  return key in obj;
};
