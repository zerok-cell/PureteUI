import { TContext } from '../../types/builderIf.types.js';

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
  const getValueCache = <T extends Record<string, unknown>>(args: T) => {
    if (!ctx.memory.cache) {
      return null;
    }
    return ctx.memory.cache[String(args)];
  };
  const clearMemory = () => (ctx.memory = {});

  const cache = (obj: IArguments, result: string) => {
    const argsStr = String(obj);
    const resStr = String(result);
    ctx.lastArgs.push(obj);
    if (ctx.memory.cache) {
      ctx.memory.cache[argsStr] = resStr;
    } else {
      ctx.memory.cache = {};
      ctx.memory.cache[argsStr] = resStr;
    }
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
