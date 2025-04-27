import { TArgs, TContext, TContextObject, TPlugin } from '../../types/builderIf.types.js';

/**
 * @module ContextManager
 * @public
 * @description
 * Allows you to initialize a ready-made `this` template for convenient use.
 *
 * @category BuilderIfCore
 */
export class Context {
  private context: TContextObject = {};

  /**
   * Initializes `Context`, protecting the `context` object from modification.
   */
  constructor() {
    Object.defineProperty(this, 'context', {
      writable: false,
      configurable: false,
    });
  }

  /**
   * @function
   * @name closeGate
   * @description
   * This function stops monitoring the external environment,
   * it may be useful if you want to protect or exclude the function
   * from the external context so that it cannot interact with it.
   * @param fn
   */
  public closeGate: FTFunctionCloseGate = (fn) => {
    return (...args) => fn.apply({}, args);
  };

  /**
   * Creates a new context for the specified name.
   *
   * @param name - The name of the context (usually corresponds to a plugin).
   * @typeParam K - The context key type.
   *
   * @example
   * ```ts
   * const ctx = new Context();
   * ctx.createContext('pluginA');
   * ```
   */
  public createContext = <K extends string>(name: K): void => {
    this.context[name] = {
      tmp: [],
      memory: { tmp: [] },
      lastArgs: [],
    };
  };

  /**
   * Retrieves the context by name.
   *
   * @param name - The context name.
   * @returns The context object or an `Error` if it does not exist.
   *
   * @example
   * ```ts
   * const ctx = new Context();
   * ctx.createContext('pluginA');
   * console.log(ctx.getContext('pluginA')); // Outputs the context object
   * ```
   */
  public getContext = <K extends string>(
    name: K
  ): TContextObject[K] | Error => {
    if (name in this.context) {
      return this.context[name];
    }
    throw new Error(`Context with name ${name} does not exist`);
  };

  /**
   * Wraps a function within an execution context, providing `this` within the plugin.
   *
   * @param fn - The plugin function using the context.
   * @param name - The context name to associate with the function execution.
   * @typeParam A - Function arguments.
   *
   * @returns A wrapped function with the execution context.
   *
   * @example
   * ```ts
   * const ctx = new Context();
   * ctx.createContext('pluginA');
   *
   * const wrappedFn = ctx.functionContext(function () {
   *   console.log(this); // Access the 'pluginA' context
   *   return true;
   * }, 'pluginA');
   *
   * wrappedFn();
   * ```
   */
  public functionContext: FTFunctionContext = (fn, name) => {
    if (!(name in this.context))
      throw new Error(`Context with name ${name} does not exist`);

    return (...args) => {
      const result = fn.apply(this.context[name], args);
      this.context[name].tmp = []; // Clears temporary data after execution
      return result;
    };
  };
}

/**
 * @description
 * A type used to create a function within an execution context.
 *
 * @typeParam A - Function arguments.
 *
 * @example
 * ```ts
 * const ctx = new Context();
 * ctx.createContext('pluginA');
 *
 * const wrappedFn = ctx.functionContext(function (msg: string) {
 *   console.log(this.memory);
 *   return msg.toUpperCase();
 * }, 'pluginA');
 *
 * console.log(wrappedFn("hello")); // "HELLO"
 * ```
 */
type FTFunctionContext = <A extends TArgs>(
  fn: (
    this: TContext,
    ...args: Parameters<TPlugin<A>>
  ) => ReturnType<TPlugin<A>>,
  name: string
) => (...args: A) => ReturnType<typeof fn>;
export type TContextClass = InstanceType<typeof Context>;
/**
 * @method
 * @function
 * This function stops monitoring the external environment,
 * it may be useful if you want to protect or exclude the function
 * from the external context so that it cannot interact with it.
 * @param fn
 */
type FTFunctionCloseGate = <A extends TArgs>(
  fn: TPlugin<A>
) => (...args: A) => ReturnType<typeof fn>;
