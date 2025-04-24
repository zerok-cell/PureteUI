import { core } from '../ifCore.js';

/**
 * @internal
 * @group BuilderIfCore
 */
export type TArgs<T = unknown> = T[];

/**
 *
 *
 * Represents the function signature of a plugin used in `builderIf`.
 *
 * This type is used to strongly type plugin functions that are registered
 * via the `.plugin()` method in the builder.
 *
 * ---
 * ## Description
 * A plugin is a regular function that:
 * - Takes one or more arguments (`Args`)
 * - Returns a `boolean` result
 * - Is executed with a contextual `this` (of type `TContext`) when called using `s()`
 *
 * ---
 * ## How to use
 * To define your plugin, provide the argument types via the generic:
 *
 * ```ts
 * const myPlugin: TPlugin<[string, number]> = (a, b) => a.length === b;
 * ```
 *
 * To access plugin context (`tmp`, `memory`, etc), use a normal function (not an arrow function):
 *
 * ```ts
 * builderIf().plugin("withContext", function(this: TContext, value: number) {
 *   this.tmp.push(value);
 *   return value > 10;
 * });
 * ```
 *
 * ---
 * @typeParam Args - The parameters of your plugin function, in order from left to right.
 * Use a tuple to define multiple arguments.
 *
 * @returns A boolean value based on plugin logic.
 *
 * @see TContext
 * @see builderIf
 * @see TArgs
 * @example
 * const equal: TPlugin<[number, number]> = (a, b) => a === b;
 *
 * const builder = builderIf().plugin("equal", equal);
 * builder.s("equal", [5, 5]); // true
 * @group BuilderIfCore
 */
export type TPlugin<Args extends TArgs = []> = (...args: Args) => boolean;

/**
 *
 *
 * @property tmp - Allows you to store arbitrary data in a tmp array.
 * It is automatically cleared when the plugin is shut down.
 * @property memory - An object in which you can store permanent data for
 * your plugin, it can be from comparison configs, data, to a cache of
 * time-consuming operations.
 * @property lastArgs - Stores the latest plugin parameters, can be used in
 * conjunction with memory to implement the 'lru cache`
 * @group BuilderIfCore
 */
export type TContext = {
  tmp: Array<unknown>;
  memory: Record<string, unknown>;
  lastArgs: TArgs;
};

/**
 *
 *
 * Represents the full shape of the builder context returned from `builderIf()`.
 *
 * This type allows you to register plugins dynamically and call them using `s()`.
 * It extends your plugin map `T` and merges it with shared core utilities from `core`.
 *
 * ---
 * ## Description
 * The builder:
 * - Stores registered plugins
 * - Provides the `plugin` method to register new ones
 * - Exposes the `s` function (summon) to call any registered plugin with arguments
 * - Includes any helpers from the internal `core` object
 *
 * ---
 * ## Plugin Registration
 * Use the `plugin` method to add a new plugin to the builder.
 *
 * ```ts
 * const builder = builderIf().plugin("equal", (a: number, b: number) => a === b);
 * ```
 *
 * ---
 * ## Plugin Execution
 * Use `s()` to call a registered plugin by its name:
 *
 * ```ts
 * builder.s("equal", [5, 5]); // true
 * ```
 *
 * ---
 * ## Notes
 * - `plugin()` returns a **new builder instance** with extended types, so type safety stays intact.
 * - `s()` automatically provides access to the plugin’s context (`this: TContext`) if needed.
 *
 * ---
 * @typeParam T - The map of plugin names to plugin functions. This grows as plugins are registered.
 *
 * @property plugin - Adds a new plugin to the current builder context.
 * @typeParam N - The name of the new plugin.
 * @typeParam A - The tuple of arguments the plugin accepts.
 * @returns A new builder context with the extended plugin.
 *
 * @property s - Calls an existing plugin by name, passing its arguments.
 * @typeParam K - The name of an existing plugin (must exist in `T`).
 * @param name - The key of the plugin to invoke.
 * @param args - The arguments for the plugin.
 *
 * @see builderIf
 * @see TPlugin
 * @see TDoubleRecord
 * @see core
 *
 * @example
 * const builder = builderIf()
 *   .plugin("greaterThan", (a: number, b: number) => a > b)
 *   .plugin("equal", (a: string, b: string) => a === b);
 *
 * const result = builder.s("greaterThan", [10, 5]); // true
 * @group BuilderIfCore
 */
export type TBuilder<T extends Record<string, TPlugin>> = {
  plugin: <N extends string, A extends TArgs>(
    name: N,
    fn: TPlugin<A>
  ) => TBuilder<TDoubleRecord<T, N, TPlugin<A>>>;
  s: <K extends keyof T>(name: K, args: Parameters<T[K]>) => void;
} & T &
  typeof core;

/**
 * A utilitarian type that extends `T` `Record` from `N` and `A`
 * @typeParam A The object that needs to be expanded
 * @typeParam B The string that will serve as the key for `Record`
 * @typeParam C Value type for `Record`
 * @see Record
 * @group BuilderIfCore
 */
export type TDoubleRecord<A extends object, B extends string, C> = A &
  Record<B, C>;
