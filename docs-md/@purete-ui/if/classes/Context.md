[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / Context

# Class: Context\<T\>

Defined in: [builder/context/Context.ts:12](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L12)

## Type Parameters

### T

`T` *extends* `string`

## Constructors

### Constructor

> **new Context**\<`T`\>(): `Context`\<`T`\>

Defined in: [builder/context/Context.ts:18](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L18)

Initializes `Context`, protecting the `context` object from modification.

#### Returns

`Context`\<`T`\>

## Properties

### closeGate

> **closeGate**: `FTFunctionCloseGate`

Defined in: [builder/context/Context.ts:49](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L49)

**`Function`**

#### Name

closeGate

#### Description

This function stops monitoring the external environment,
it may be useful if you want to protect or exclude the function
from the external context so that it cannot interact with it.

#### Param

## Methods

### clearTmp()

> **clearTmp**\<`N`\>(`name`): `boolean`

Defined in: [builder/context/Context.ts:33](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L33)

**`Function`**

#### Type Parameters

##### N

`N` *extends* `string`

The name of the context that you specified in the `createContext`

#### Parameters

##### name

`N`

#### Returns

`boolean`

#### Description

this function is used to clear the `tmp` key in your context.
This function is used in the effect after calling the plugin, the next
call to this plugin will get a clean `tmp`

***

### createContext()

> **createContext**\<`K`\>(`name`): `void`

Defined in: [builder/context/Context.ts:65](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L65)

Creates a new context for the specified name.

#### Type Parameters

##### K

`K` *extends* `string`

The context key type.

#### Parameters

##### name

`K`

The name of the context (usually corresponds to a plugin).

#### Returns

`void`

#### Example

```ts
const ctx = new Context();
ctx.createContext('pluginA');
```

***

### getContext()

> **getContext**\<`K`\>(`name`): `Error` \| [`TContextObject`](../type-aliases/TContextObject.md)\<`T`\>\[`K`\]

Defined in: [builder/context/Context.ts:90](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L90)

Retrieves the context by name.

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### name

`K`

The context name.

#### Returns

`Error` \| [`TContextObject`](../type-aliases/TContextObject.md)\<`T`\>\[`K`\]

The context object or an `Error` if it does not exist.

#### Example

```ts
const ctx = new Context();
ctx.createContext('pluginA');
console.log(ctx.getContext('pluginA')); // Outputs the context object
```

***

### functionContext()

> **functionContext**\<`A`, `N`\>(`fn`, `name`): (...`args`) => `boolean`

Defined in: [builder/context/Context.ts:121](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/Context.ts#L121)

Wraps a function within an execution context, providing `this` within the plugin.

#### Type Parameters

##### A

`A` *extends* [`TArgs`](../type-aliases/TArgs.md)

Function arguments.

##### N

`N` *extends* `string`

#### Parameters

##### fn

[`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>

The plugin function using the context.

##### name

`N`

The context name to associate with the function execution.

#### Returns

A wrapped function with the execution context.

> (...`args`): `boolean`

##### Parameters

###### args

...`A`

##### Returns

`boolean`

#### Example

```ts
const ctx = new Context();
ctx.createContext('pluginA');

const wrappedFn = ctx.functionContext(function () {
  console.log(this); // Access the 'pluginA' context
  return true;
}, 'pluginA');

wrappedFn();
```
