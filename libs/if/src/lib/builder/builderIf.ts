'use strict';

import {
  TArgs,
  TConfig,
  TConfigPlugin,
  TContext,
  TDoubleRecord,
  TPlugin,
  TPluginObject,
} from '../types/builderIf.types.js';
import { isType } from '../core/index.js';
import { Context, TContextClass } from './context/Context.js';

const DEFAULT_CONFIG: Readonly<TConfig> = {
  autoAddContext: false,
};

const DEFAULT_CONFIG_PLUGIN: Readonly<TConfigPlugin> = {
  context: false,
};

/**
 * @template T It is the current object of the downloaded plugins.
 * **Please note that changing it may lead to inaccuracies and typing errors.**
 * @description
 * This class provides methods for building your validator or "comparator" as
 * you like.
 * @property plugin Dw
 * @version 1.0.2
 * @author zerokqx
 * @see TPluginObject
 * @see TConfig
 *
 */
class BuilderIf<T extends TPluginObject> {
  private plugins: TPluginObject = {};
  private readonly config: TConfig = DEFAULT_CONFIG;
  private context: TContextClass = new Context();

  /**dwd
   * @constructor
   * @param config
   */
  constructor(config?: TConfig) {
    if (config) this.config = config;
  }

  plugin = <N extends string, A extends TArgs>(
    config: TConfigPlugin<N> = DEFAULT_CONFIG_PLUGIN,
    fn: TPlugin<A>
  ): BuilderIf<TDoubleRecord<T, N, TPlugin<A>>> => {
    if (!isType(fn, 'function')) throw Error('Not a function');
    const { context, name } = config;

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

  fixed = (): Readonly<T> => {
    return Object.freeze({
      ...this.plugins,
    }) as Readonly<T>;
  };

  private gConf = (): TConfig => {
    return this.config;
  };
}

const bw = new BuilderIf()
  .plugin(
    {
      name: 'd',
      context: false,
    },
    function (this: TContext, d: string) {
      console.log(this);
      console.log(d);
      return true;
    }
  )
  .fixed();

bw.d('d');
