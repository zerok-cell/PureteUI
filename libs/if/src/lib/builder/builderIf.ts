import { Builder, TArgs, TContext, TCtx, TPluginBody } from '../types/builderIf.types.js';

/**
 * ## General documentation
 * Initializer of the "IF" context
 * The modularity of `builderIf` allows you to flexibly load checks into the
 * context, and you can also interact with the context's service context
 * variables.
 * @function
 * @param ctx The context with which the current builder is initialized.
 * Context values are functions. The keys are strings and the values are
 * functions of type `TPluginBody'. This parameter is intended for internal
 * use and accepts only functions without parameters, it will be fixed in
 * future versions.
 * @returns
 * - plugins A function to expand the "IF" context
 * Accepts "name" as input: the name of the function and the next parameter of the function itself.
 * - s A function that provides a context for the plugin.
 * - Your other added plugins
 * @throws Error
 * - Error of a non-existent plugin in the `s` function
 * - Error in the `plugin` function when you pass in place of the `fn`
 * parameter not a function as expected, but something else
 *
 * ## Guides
 * 1) In order to type the context in the plugin for the `s` function, you
 * need to use the `TContext` type.
 * ```ts
 * const builder = builderIf().plugin("fnFirst",function(this:TContext){
 *
 * })
 * ```
 * 2) Use the type `TPluginBody` to type the plugin. It accepts a `Generic`
 * array of types for your `args`
 * ```ts
 * const youPlug:TPluginBody<[string,number]> = (arg1,arg2)=>{ // arg1:string, arg2:number
 *   return false
 * }
 * const x = builderIf().plugin('youPlug',youPlug)
 * ```
 * This type automatically types the plugin to return `boolean`
 *
 * ## Example
 * ```ts
 * builderIf().plugin(
 *   'compareValues',
 *   function (this: TContext, a: string, b: string) {
 *     return a === b;
 *   }
 * );
 * ```
 */
export const builderIf = <
  T extends Record<string, TPluginBody> = Record<string, TPluginBody>
>(
  ctx: T = {} as T
): Builder<T> => {
  const plugin = <K extends string, Args extends TArgs>(
    name: K,
    fn: TPluginBody<Args>
  ): Builder<TCtx<T, K, Args>> => {
    if (typeof fn !== 'function')
      throw Error('The passed function is not a function');
    const nextCtx: TCtx<T, K, Args> = {
      ...ctx,
      [name]: fn,
    };
    return builderIf(nextCtx);
  };
  const s = <K extends keyof T>(name: K, args: Parameters<T[K]>) => {
    const pluginFn = ctx[name];
    const context: TContext = {
      tmp: ['dwd'],
    };
    if (!pluginFn) {
      throw new Error(
        `The plugin named "${String(name)}" does not exist, check the context`
      );
    }

    pluginFn.call(context, ...args);
  };
  return {
    s,
    plugin,
    ...ctx,
  } as Builder<T>;
};
builderIf().plugin(
  'compareValues',
  function (this: TContext, a: string, b: string) {
    return a === b;
  }
);
