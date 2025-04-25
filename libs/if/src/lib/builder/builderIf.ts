/**
 * @module BuilderIF
 * The main library module
 */
import { TArgs, TBuilder, TConfig, TContext, TDoubleRecord, TFixed, TPlugin } from '../types/builderIf.types.js';
import { core, isType } from '../core/index.js';

/**
 * ## General documentation
 * Initializes the "IF" context.
 *
 * The modularity of `builderIf` allows you to flexibly load checks (plugins) into
 * the context and interact with internal service context variables.
 *
 * @function
 * @group BuilderIfCore
 * @param config Configuration for builderIf look {@link TConfig}
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
 * ---
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
 * 2) Use the `TPlugin` type to define the plugin. It accepts a tuple of argument types as a generic.
 *
 * ```ts
 * const myPlugin: TPlugin<[string, number]> = (str, num) => {
 *   return str.length === num;
 * };
 * const x = builderIf().plugin('myPlugin', myPlugin);
 * ```
 * This utility type automatically infers the return type as `boolean` and types the plugin parameters accordingly.
 *
 * 3) Use the `bIf` wrapper instead of using builderIf
 *
 * ---
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
 *
 * ---
 * ## Config
 * The configuration applies to the entire facility and is permanent.
 * You can find the configuration type in {@link TConfig}
 * The configuration is optional and has default values. Please read this
 * documentation before changing anything in it.
 * Description of the configuration keys:
 * - `autoAddContext` - If `true` is set, then EACH added plugin can interact
 * with the context, this parameter eliminates the need to use `s' if you need
 * context. Activate it if you don't want to bother with the `s` and brevity
 * and conciseness are important to you.
 *
 * @typeParam T Current downloaded plugins via the `plugin` function
 * @see bIf
 * @see TContext
 * @see TConfig
 * @see TPlugin
 */

export const builderIf = <T extends Record<string, TPlugin>>(
  config: TConfig = {
    autoAddContext: false,
  },
  ctx: T = {} as T
) => {
  type TGeneralContext = Record<keyof T, TContext>;
  const generalContext = {} as TGeneralContext;

  /**
   * ## Documentation
   * @param name The name of the function that you will use to call your plugin in the future
   * @param fn The plugin function itself it is a type of `TPlugin`
   *
   * ---
   *
   * ## Professional
   * The extension is due to the extension of the `T` type
   * `TBuilder<TDoubleRecord<T, N, TPlugin<A>>>`  The function automatically
   * reads your `args` and reads their types for subsequent hints.
   * The `plugin` function does not return a new context object,
   * it returns a call to `builderIf` with an extended context and type
   * ---
   *
   * @typeParam N Function name
   * @typeParam A Your Args for the default function are `TArgs`
   * @see TArgs
   * @see TBuilder
   * @see TPlugin
   */
  const plugin = <N extends string, A extends TArgs>(
    name: N,
    fn: TPlugin<A>
  ): TBuilder<TDoubleRecord<T, N, TPlugin<A>>> => {
    if (!isType(fn, 'function')) throw Error('Not a function');
    const wrapper = (): TPlugin<A> => {
      if (config.autoAddContext) {
        const context = createContext(name);
        return (args: Parameters<TPlugin<A>>) => fn.apply(context, args);
      }
      return fn;
    };
    const nextCtx = {
      ...ctx,
      [name]: fn,
    };
    return builderIf(nextCtx);
  };
  /**
   * @internal
   * @function
   * @private Clears some context fields
   * @param name The name of the function by which its context is determined
   * @typeParam K The name of the current plug-in keys from `T`
   */
  const clearContext = <K extends keyof T>(name: K): void => {
    if (!ctx[name])
      throw new Error(
        'The function does not exist, so the contest was not created earlier.'
      );
    if (generalContext[name]) {
      generalContext[name].tmp = [];
    }
  };
  /**
   * Creates a context in the context variable `generalConetxt`
   * @internal
   * @param name Name function plugin
   * @typeParam K The name of the current plug-in keys from `T`
   * @returns TGeneralContext[K] - Returns a context object with keys corresponding to the type `TContext`
   */
  const createContext = <K extends keyof T>(name: K): TGeneralContext[K] => {
    // if (!ctx[name]) throw new Error('No such function.');
    if (generalContext[name]) return generalContext[name];
    generalContext[name] = {
      tmp: [],
      memory: {},
      lastArgs: [],
    } as TContext;
    return generalContext[name];
  };

  /**
   * A useful feature that allows you to use a certain context in your
   * computational actions.
   * - `s` from `summon` to call the plugin
   * @public
   * @function
   * @param name The name of the plugin, autocomplete should automatically prompt you.
   * @param args your parameters for your plugin, similarly, the autocomplete should prompt.
   * @see TContext
   *
   * ---
   * # Context
   * - tmp - Allows you to store arbitrary data in a tmp array.
   * It is automatically cleared when the plugin is shut down.
   * - memory - An object in which you can store permanent data for
   * your plugin, it can be from comparison configs, data, to a cache of
   * time-consuming operations.
   * - lastArgs - Stores the latest plugin parameters, can be used in
   * conjunction with memory to implement the 'lru cache`
   *
   * ---
   *
   * @remarks The context is available only in the normal function
   * `function', not in the arrow keys.
   */
  const s = <K extends keyof T>(name: K, args: Parameters<T[K]>) => {
    const fn = ctx[name];
    if (!fn) throw new Error(`Plugin "${String(name)}" not found`);
    const context = createContext(name);
    context.lastArgs = [...args];
    const result = fn.call(context, ...args);
    clearContext(name);
    return result;
  };

  const fixed = (): TFixed<T> => {
    return {
      s,
      ...ctx,
      ...core,
    } as TFixed<T>;
  };
  return {
    s,
    plugin,
    fixed,
  };
};

/**
 * @function
 * ## Description
 * It is just a wrapper over the `builderIf'.It is needed to automatically
 * transfer an empty context for the types to work correctly.
 * @see builderIf
 * @remarks Does not add new functionality
 * @group BuilderIfCore
 */
export const bIf = (config?: TConfig) => {
  return builderIf<T>({});
};
const x = bIf({})
  .plugin('dd', (d: string) => {
    console.log(1);
    return true;
  })
  .plugin('ddd', (d: string) => {
    return true;
  });
