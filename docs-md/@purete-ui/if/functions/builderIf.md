[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / builderIf

# Function: builderIf()

> **builderIf**\<`T`\>(`ctx`): `object` & `T`

Defined in: [builder/builderIf.ts:69](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/builderIf.ts#L69)

## General documentation
Initializes the "IF" context.

The modularity of `builderIf` allows you to flexibly load checks (plugins) into
the context and interact with internal service context variables.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, [`TPlugin`](../type-aliases/TPlugin.md)\>

Current downloaded plugins via the `plugin` function

## Parameters

### ctx

`T` = `...`

The context with which the current builder is initialized.
It must be an object where the keys are string names of plugins, and the values are functions of type `TPluginBody`.
This parameter is used internally. For now, it only supports functions without parameters (to be improved in future versions).

## Returns

An extended context builder with the following:
- `plugin` — A method to expand the context by registering a new plugin. Takes the plugin name and the plugin function.
- `s` — A service function to call a plugin with arguments.
- Any other previously added plugins.

## Throws

Error If the requested plugin does not exist in the `s` function.

## Throws

Error If the `plugin` function receives a value that is not a function.

---

## Guides
1) To type `this` in the plugin function used by `s`, use the `TContext` type.

```ts
const builder = builderIf().plugin("fnFirst", function(this: TContext) {
  // you can use `this.tmp` inside
});
```

2) Use the `TPlugin` type to define the plugin. It accepts a tuple of argument types as a generic.

```ts
const myPlugin: TPlugin<[string, number]> = (str, num) => {
  return str.length === num;
};
const x = builderIf().plugin('myPlugin', myPlugin);
```
This utility type automatically infers the return type as `boolean` and types the plugin parameters accordingly.

3) Use the `bIf` wrapper instead of using builderIf

---

## Example
```ts
builderIf().plugin(
  'compareValues',
  function(this: TContext, a: string, b: string) {
    return a === b;
  }
);
```

## See

 - bIf
 - TContext
 - TPlugin
