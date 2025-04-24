[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / TContext

# Type Alias: TContext

> **TContext** = `object`

Defined in: [types/builderIf.types.ts:71](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L71)

## Properties

### tmp

> **tmp**: `unknown`[]

Defined in: [types/builderIf.types.ts:72](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L72)

Allows you to store arbitrary data in a tmp array.
It is automatically cleared when the plugin is shut down.

***

### memory

> **memory**: `Record`\<`string`, `unknown`\>

Defined in: [types/builderIf.types.ts:73](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L73)

An object in which you can store permanent data for
your plugin, it can be from comparison configs, data, to a cache of
time-consuming operations.

***

### lastArgs

> **lastArgs**: `TArgs`

Defined in: [types/builderIf.types.ts:74](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L74)

Stores the latest plugin parameters, can be used in
conjunction with memory to implement the 'lru cache`
