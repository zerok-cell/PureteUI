[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / TBuilder

# Type Alias: TBuilder\<T\>

> **TBuilder**\<`T`\> = `object` & `T` & *typeof* `core`

Defined in: [types/builderIf.types.ts:140](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L140)

Represents the full shape of the builder context returned from `builderIf()`.

This type allows you to register plugins dynamically and call them using `s()`.
It extends your plugin map `T` and merges it with shared core utilities from `core`.

---
## Description
The builder:
- Stores registered plugins
- Provides the `plugin` method to register new ones
- Exposes the `s` function (summon) to call any registered plugin with arguments
- Includes any helpers from the internal `core` object

---
## Plugin Registration
Use the `plugin` method to add a new plugin to the builder.

```ts
const builder = builderIf().plugin("equal", (a: number, b: number) => a === b);
```

---
## Plugin Execution
Use `s()` to call a registered plugin by its name:

```ts
builder.s("equal", [5, 5]); // true
```

---
## Notes
- `plugin()` returns a **new builder instance** with extended types, so type safety stays intact.
- `s()` automatically provides access to the plugin’s context (`this: TContext`) if needed.

---

## Type declaration

### plugin()

> **plugin**: \<`N`, `A`\>(`name`, `fn`) => `TBuilder`\<[`TDoubleRecord`](TDoubleRecord.md)\<`T`, `N`, [`TPlugin`](TPlugin.md)\<`A`\>\>\>

#### Type Parameters

##### N

`N` *extends* `string`

##### A

`A` *extends* `TArgs`

#### Parameters

##### name

`N`

##### fn

[`TPlugin`](TPlugin.md)\<`A`\>

#### Returns

`TBuilder`\<[`TDoubleRecord`](TDoubleRecord.md)\<`T`, `N`, [`TPlugin`](TPlugin.md)\<`A`\>\>\>

### s()

> **s**: \<`K`\>(`name`, `args`) => `void`

#### Type Parameters

##### K

`K` *extends* keyof `T`

#### Parameters

##### name

`K`

##### args

`Parameters`\<`T`\[`K`\]\>

#### Returns

`void`

## Type Parameters

### T

`T` *extends* `Record`\<`string`, [`TPlugin`](TPlugin.md)\>

The map of plugin names to plugin functions. This grows as plugins are registered.

## Type Param

The name of the new plugin.

## Type Param

The tuple of arguments the plugin accepts.

## Returns

A new builder context with the extended plugin.

## Type Param

The name of an existing plugin (must exist in `T`).

## Param

The key of the plugin to invoke.

## Param

The arguments for the plugin.

## See

 - builderIf
 - TPlugin
 - TDoubleRecord
 - core

## Example

```ts
const builder = builderIf()
  .plugin("greaterThan", (a: number, b: number) => a > b)
  .plugin("equal", (a: string, b: string) => a === b);

const result = builder.s("greaterThan", [10, 5]); // true
```
