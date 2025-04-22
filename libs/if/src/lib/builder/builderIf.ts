// // import {
// //   FTRBuilderIfTypes,
// //   TInternalProperty,
// // } from '../types/builderIf.types.js';
// // import { TPlugin, TPluginBody } from '../types/plugin.types.js';
// //
// // export function builderIf<
// //   T extends Record<string, TPluginBody> | null = null
// // >(): FTRBuilderIfTypes<T> & {
// //   [K in keyof T]: T[K];
// // } {
// //   const internalProperty: TInternalProperty = {
// //     pluginLoad: [],
// //   };
// //   const outsideProperty: FTRBuilderIfTypes<T> = {
// //     plugin: function <TName extends string, TArgs extends unknown[]>(
// //       name: TName,
// //       functionFromExtend: TPluginBody<TArgs>
// //     ): FTRBuilderIfTypes< T & Record<TName, TPluginBody<TArgs>> > & {
// //       [K in keyof (T & Record<TName, TPluginBody<TArgs>>)]:
// //       (T & Record<TName, TPluginBody<TArgs>>)[K]{
// //       if (typeof functionFromExtend === 'function') {
// //         const { name } = functionFromExtend;
// //         if (name) internalProperty.pluginLoad.push(name);
// //         else internalProperty.pluginLoad.push('Unknown plugin');
// //         functionFromExtend(this);
// //         return this as any
// //       } else
// //         throw Error(
// //           'The passed plugin is not a function. Pass the plugin that is the function'
// //         );
// //     },
// //   };
// //
// //   Object.defineProperty(internalProperty, 'pluginLoad', {
// //     writable: false,
// //     configurable: false,
// //   });
// //   Object.defineProperty(outsideProperty, 'plugin', {
// //     writable: false,
// //     configurable: false,
// //   });
// //   return outsideProperty;
// // }
// //
// // const x = builderIf();
// // const testPlug: TPlugin = (ctx) => {
// //   const plugin: TPluginBody<[number, string]> = (d, dw) => {
// //     console.log(1);
// //   };
// //   ctx.newPlugin = () => plugin;
// // };
// // x.plugin(testPlug);
// // x.newPlugin();
//
// import { TPluginBody } from '../types/plugin.types.js';
//
// export function builderIf<
//   TCurrentPlugin extends Record<string, TPluginBody> = {}
// >(): TCurrentPlugin {
//   const ctx: TCurrentPlugin = {};
// }
