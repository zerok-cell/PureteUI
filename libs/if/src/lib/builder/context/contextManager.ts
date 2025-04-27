import { TContext } from '../../types/builderIf.types.js';
import * as crypto from 'node:crypto';

export const contextManager = function (ctx: TContext) {
  const clearTmp = () => (ctx.tmp = []);
  const addTmp = (value: TContext['tmp']) => ctx.tmp.push(value);
  /**
   *  @public
   *  @function
   *  Transfers your tmp to memory and remembers it between calls
   *  In the future, you can find your saved tmp in `memory.tmp` this is an
   *  array of your saved `tmp` snapshots
   *  @see TContext
   */
  const saveTmp = (): void => {
    const currentTmp = ctx.tmp;
    if (ctx.memory.tmp) {
      ctx.memory['tmp'].push(currentTmp);
    } else {
      ctx.memory['tmp'] = [];
      ctx.memory['tmp']?.push(currentTmp);
    }
  };
  const getValueCache = <R>(key: string): R | undefined => {
    return undefined;
  };
  const clearMemory = () => (ctx.memory.tmp = []);
  const generateHash = (obj: object): string => {
    return crypto.createHash('MD5').update(JSON.stringify(obj)).digest('hex');
  };
  const weakCache = new Map();
  const cache = <R, T extends object>(obj: T, callback: () => R): R => {
    const key = JSON.stringify(obj); // Создаем строковый ключ

    if (weakCache.has(key)) {
      return Promise.resolve(weakCache.get(key)); // Превращаем синхронное значение в промис
    }

    // Вызываем callback, оборачивая результат в Promise
    const promise = Promise.resolve(callback())
      .then((result) => {
        weakCache.set(key, result);
        return result;
      })
      .catch((err) => {
        weakCache.delete(key); // Удаляем ошибочные значения из кеша
        throw err;
      });

    weakCache.set(key, promise);
    return promise;
  };
  return {
    getValueCache,
    cache,
    clearTmp,
    addTmp,
    saveTmp,
    clearMemory,
    get ctx(): TContext {
      return ctx;
    },
  };
};
