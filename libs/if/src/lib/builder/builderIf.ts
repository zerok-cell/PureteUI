import { TArgs, TBuilder, TContext, TDoubleRecord, TPlugin } from '../types/builderIf.types.js';
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
 * This utility type automatically infers the return type as `boolean` and types the plugin parameters accordingly.
 *
 * 3) Use the `bIf` wrapper instead of using builderIf
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
 * @typeParam T Current loads plugins
 * @see bIf
 */

export const builderIf = <T extends Record<string, TPlugin>>(
  ctx: T = {} as T
) => {
  type TGeneralContext = Record<keyof T, TContext>;
  const generalContext = {} as TGeneralContext;
  const plugin = <N extends string, A extends TArgs>(
    name: N,
    fn: TPlugin<A>
  ): TBuilder<TDoubleRecord<T, N, TPlugin<A>>> => {
    if (typeof fn !== 'function') throw Error('Not a function');
    const nextCtx = {
      ...ctx,
      [name]: fn,
    };
    return builderIf(nextCtx);
  };
  const clearContext = <K extends keyof T>(name: K): void => {
    if (!ctx[name])
      throw new Error(
        'The function does not exist, so the contest was not created earlier.'
      );
    if (generalContext[name]) {
      generalContext[name].tmp = [];
    }
  };
  const createContext = <K extends keyof T>(name: K): TGeneralContext[K] => {
    if (!ctx[name]) throw new Error('No such function.');
    if (generalContext[name]) return generalContext[name];
    generalContext[name] = {
      tmp: [],
      memory: {},
      lastArgs: [],
    } as TContext;
    return generalContext[name];
  };

  const s = <K extends keyof T>(name: K, args: Parameters<T[K]>) => {
    const fn = ctx[name];
    if (!fn) throw new Error(`Plugin "${String(name)}" not found`);
    const context = createContext(name);
    context.lastArgs = [...args];
    fn.call(context, ...args);
    clearContext(name);
  };
  return {
    ...core,
    s,
    plugin,
    ...ctx,
  };
};

/**
 * ## Description
 * It is just a wrapper over the `builderIf'.It is needed to automatically
 * transfer an empty context for the types to work correctly.
 * @see builderIf
 *
 * @remarks Does not add new functionality
 */
export const bIf = () => builderIf({});
