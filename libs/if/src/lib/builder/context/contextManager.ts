import { TContext } from '../../types/context/index.js';

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
      ctx.memory['tmp'].push(currentTmp);
    }
  };
  const saveMemory = (key: string, value: unknown) => {
    if (key in ctx.memory) throw Error('Memory key is exists');
    ctx.memory[key] = value;
  };
  const getValueCache = <R>(key: string): R | undefined => {
    return undefined;
  };
  const clearMemory = () => (ctx.memory.tmp = []);
  return {
    saveMemory,
    getValueCache,
    clearTmp,
    addTmp,
    saveTmp,
    clearMemory,
    get ctx(): TContext {
      return ctx;
    },
  };
};
