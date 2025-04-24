[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / bIf

# Function: bIf()

> **bIf**(): `object`

Defined in: [builder/builderIf.ts:191](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/builderIf.ts#L191)

## Description
It is just a wrapper over the `builderIf'.It is needed to automatically
transfer an empty context for the types to work correctly.

## Returns

### s()

> **s**: \<`K`\>(`name`, `args`) => `boolean`

**`Function`**

A useful feature that allows you to use a certain context in your
computational actions.
- `s` from `summon` to call the plugin

#### Type Parameters

##### K

`K` *extends* `never`

#### Parameters

##### name

`K`

The name of the plugin, autocomplete should automatically prompt you.

##### args

`Parameters`\<`object`\[`K`\]\>

your parameters for your plugin, similarly, the autocomplete should prompt.

#### Returns

`boolean`

#### See

TContext

---
# Context
- tmp - Allows you to store arbitrary data in a tmp array.
It is automatically cleared when the plugin is shut down.
- memory - An object in which you can store permanent data for
your plugin, it can be from comparison configs, data, to a cache of
time-consuming operations.
- lastArgs - Stores the latest plugin parameters, can be used in
conjunction with memory to implement the 'lru cache`

---

#### Remarks

The context is available only in the normal function
`function', not in the arrow keys.

### plugin()

> **plugin**: \<`N`, `A`\>(`name`, `fn`) => [`TBuilder`](../type-aliases/TBuilder.md)\<`Record`\<`N`, [`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>\>\>

## Documentation

#### Type Parameters

##### N

`N` *extends* `string`

Function name

##### A

`A` *extends* `TArgs`

Your Args for the default function are `TArgs`

#### Parameters

##### name

`N`

The name of the function that you will use to call your plugin in the future

##### fn

[`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>

The plugin function itself it is a type of `TPlugin`

---

## Professional
The extension is due to the extension of the `T` type
`TBuilder<TDoubleRecord<T, N, TPlugin<A>>>`  The function automatically
reads your `args` and reads their types for subsequent hints.
The `plugin` function does not return a new context object,
it returns a call to `builderIf` with an extended context and type
---

#### Returns

[`TBuilder`](../type-aliases/TBuilder.md)\<`Record`\<`N`, [`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>\>\>

#### See

 - TArgs
 - TBuilder
 - TPlugin

### ifExists

> **ifExists**: `FTOnceParam`

## See

builderIf

## Remarks

Does not add new functionality
