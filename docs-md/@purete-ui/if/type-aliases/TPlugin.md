[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / TPlugin

# Type Alias: TPlugin()\<Args\>

> **TPlugin**\<`Args`\> = (...`args`) => `boolean`

Defined in: [types/builderIf.types.ts:57](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/builderIf.types.ts#L57)

Represents the function signature of a plugin used in `builderIf`.

This type is used to strongly type plugin functions that are registered
via the `.plugin()` method in the builder.

---
## Description
A plugin is a regular function that:
- Takes one or more arguments (`Args`)
- Returns a `boolean` result
- Is executed with a contextual `this` (of type `TContext`) when called using `s()`

---
## How to use
To define your plugin, provide the argument types via the generic:

```ts
const myPlugin: TPlugin<[string, number]> = (a, b) => a.length === b;
```

To access plugin context (`tmp`, `memory`, etc), use a normal function (not an arrow function):

```ts
builderIf().plugin("withContext", function(this: TContext, value: number) {
  this.tmp.push(value);
  return value > 10;
});
```

---

## Type Parameters

### Args

`Args` *extends* `TArgs` = \[\]

The parameters of your plugin function, in order from left to right.
Use a tuple to define multiple arguments.

## Parameters

### args

...`Args`

## Returns

`boolean`

A boolean value based on plugin logic.

## See

 - TContext
 - builderIf
 - TArgs

## Example

```ts
const equal: TPlugin<[number, number]> = (a, b) => a === b;

const builder = builderIf().plugin("equal", equal);
builder.s("equal", [5, 5]); // true
```
