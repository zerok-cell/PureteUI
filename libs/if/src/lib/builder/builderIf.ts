'use strict';

import {
  TArgs,
  TConfig,
  TConfigPlugin,
  TDoubleRecord,
  TPlugin,
  TPluginObject,
} from '../types/builderIf.types.js';
import { isType } from '../core/index.js';
import { Context, TContextClass } from './context/index.js';

const DEFAULT_CONFIG: Readonly<TConfig> = {
  autoAddContext: false,
};

const DEFAULT_CONFIG_PLUGIN: Readonly<TConfigPlugin<string>> = {
  context: false,
  name: 'Plugin',
};

/**
 * @template T
 * This class provides methods for building and managing plugins in the context.
 * It allows you to dynamically add plugins and integrate them with the provided context.
 * You can add a plugin function that can optionally access the context, and the class supports configuration customization.
 *
 * **Please note that changing the generic type `T` may lead to inaccuracies and typing errors.**
 *
 * ## Properties:
 * - `plugins`: An object that holds all registered plugins, each mapped by its name.
 * - `config`: A configuration object that determines the behavior of the builder.
 * - `context`: The context manager instance that controls plugin context and state.
 *
 * ## Example
 *
 * ```ts
 * const builder = new BuilderIf()
 *   .plugin(
 *     { name: 'plugin', context: false },
 *     function (this: TContext, param: string) {
 *       console.log(this);  // The context is not accessible here
 *       console.log(param);
 *       return true;
 *     }
 *   )
 *   .fixed();
 *
 * builder.plugin('parametr');  // Calling the plugin registered with the name 'd'
 * ```
 * @version 1.0.2
 * @author zerokqx
 * @see TPluginObject
 * @see TConfig
 * @see TConfigPlugin
 * @see TArgs
 * @see TContext
 *
 * @property {Record<string, TPlugin>} plugins - A function for adding a new plugin to the stack
 * @property {TConfig} config - The configuration object for the builder, including settings such as `autoAddContext`.
 * @property {TContextClass} context - The context manager that handles interactions with plugins.
 */
export class BuilderIf<T extends TPluginObject> {
  /**
   * Holds all the registered plugins in the builder.
   * The keys are plugin names, and the values are the plugin functions encapsulated with context (if enabled).
   */
  private plugins: TPluginObject = {};

  /**
   * The configuration object that defines the builder's behavior.
   * By default, `autoAddContext` is set to false, meaning plugins don't have access to context unless specified.
   */
  private readonly config: TConfig = DEFAULT_CONFIG;

  /**
   * The context manager that handles the internal context for plugins.
   * This class helps manage and inject context into plugins if required.
   */
  private context: TContextClass = new Context();

  /**
   * Creates a new `BuilderIf` instance with an optional configuration object.
   * The configuration will override the default configuration if provided.
   *
   * @param {TConfig} [config] - Optional configuration to customize the behavior of the builder.
   */
  constructor(config?: TConfig) {
    if (config) this.config = config;
  }

  /**
   * Registers a new plugin into the builder. The plugin is a function that is added to the context
   * and can be called later through the builder instance.
   *
   * If `config.context` is `true` or `autoAddContext` is enabled, the plugin will have access to the context.
   * Otherwise, the plugin will be executed without context.
   *
   * ## Example:
   *
   * ```ts
   * builderIf()
   *   .plugin(
   *     { name: 'compareValues', context: true },
   *     function (this: TContext, a: string, b: string) {
   *       return a === b;
   *     }
   *   );
   * ```
   *
   * @param {TConfigPlugin<N>} [config] - The plugin configuration object, including options like `name` and `context`.
   * @param {TPlugin<A>} fn - The plugin function that gets registered. It will be invoked later through the builder.
   * @returns {BuilderIf<TDoubleRecord<T, N, TPlugin<A>>>} - The updated `BuilderIf` instance with the new plugin added.
   *
   * @throws {Error} - If the `fn` is not a function.
   */
  plugin = <N extends string, A extends TArgs>(
    config: TConfigPlugin<N> = DEFAULT_CONFIG_PLUGIN as TConfigPlugin<N>,
    fn: TPlugin<A>
  ): BuilderIf<TDoubleRecord<T, N, TPlugin<A>>> => {
    if (!isType(fn, 'function')) throw Error('Not a function');
    const { context, name } = config;

    /**
     * The function used to encapsulate the plugin, allowing it to interact with the context if needed.
     */
    const encapsulation = (): TPlugin<A> => {
      if (this.gConf().autoAddContext || context) {
        this.context.createContext(name);
        return this.context.functionContext(fn, name);
      }
      return this.context.closeGate(fn);
    };

    this.plugins[name] = encapsulation();
    return this;
  };

  /**
   * Freezes the current plugins object, making it immutable, and returns it.
   * This allows the builder's plugin set to be locked once you are done adding plugins.
   *
   * @returns {Readonly<T>} - The frozen plugins object, which can no longer be modified.
   */
  fixed = (): Readonly<T> => {
    return Object.freeze({
      ...this.plugins,
    }) as Readonly<T>;
  };

  /**
   * Retrieves the current configuration settings of the builder.
   *
   * @returns {TConfig} - The configuration object for the builder.
   */
  private gConf = (): TConfig => {
    return this.config;
  };
}

/**
 * Example of creating a `BuilderIf` instance and adding a plugin:
 *
 * ```ts
 * const builder = new BuilderIf()
 *   .plugin(
 *     { name: 'plugin', context: false },
 *     function (this: TContext, param: string) {
 *       console.log(this);  // The context is not accessible here
 *       console.log(param);
 *       return true;
 *     }
 *   )
 *   .fixed();
 *
 * builder.plugin('parametr');  // Calling the plugin registered with the name 'd'
 * ```
 */
