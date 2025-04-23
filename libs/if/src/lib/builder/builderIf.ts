import { Builder, TArgs, TContext, TCtx, TPluginBody } from '../types/builderIf.types.js';
import { core } from '../ifCore.js';

/**
 * ## General documentation
 * Initializes the "IF" context.
 *
 * The modularity of `builderIf` allows you to flexibly load checks (plugins) into
 * the context and interact with internal service context variables.
 *
 * @function
 *
 * @param ctx - The context with which the current builder is initialized.
 * It must be an object where the keys are string names of plugins, and the values are functions of type `TPluginBody`.
 * This parameter is used internally. For now, it only supports functions without parameters (to be improved in future versions).
 *
 * @returns An extended context builder with the following:
 * - `plugin` — A method to expand the context by registering a new plugin. Takes the plugin name and the plugin function.
 * - `s` — A service function to call a plugin with arguments.
 * - Any other previously added plugins.
 *
 * @throws Error If the requested plugin does not exist in the `s` function.
 * @throws Error If the `plugin` function receives a value that is not a function.
 *
 * ## Guides
 * 1) To type `this` in the plugin function used by `s`, use the `TContext` type.
 *
 * ```ts
 * const builder = builderIf().plugin("fnFirst", function(this: TContext) {
 *   // you can use `this.tmp` inside
 * });
 * ```
 *
 * 2) Use the `TPluginBody` type to define the plugin. It accepts a tuple of argument types as a generic.
 *
 * ```ts
 * const myPlugin: TPluginBody<[string, number]> = (str, num) => {
 *   return str.length === num;
 * };
 * const x = builderIf().plugin('myPlugin', myPlugin);
 * ```
 *
 * This utility type automatically infers the return type as `boolean` and types the plugin parameters accordingly.
 *
 * ## Example
 * ```ts
 * builderIf().plugin(
 *   'compareValues',
 *   function(this: TContext, a: string, b: string) {
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
    ...core,
    s,
    plugin,
    ...ctx,
  } as Builder<T>;
};
const x = builderIf();
