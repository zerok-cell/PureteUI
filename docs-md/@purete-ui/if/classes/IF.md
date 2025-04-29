[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / IF

# Class: IF\<T\>

Defined in: [builder/IF.ts:77](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/IF.ts#L77)

## Version

1.0.2

## Author

zerokqx

## See

 - TPluginObject
 - TConfig
 - TConfigPlugin
 - TArgs
 - TContext

## Type Parameters

### T

`T` *extends* [`TPluginObject`](../type-aliases/TPluginObject.md)

This class provides methods for building and managing plugins in the #context.
It allows you to dynamically add plugins and integrate them with the provided #context.
You can add a plugin function that can optionally access the #context, and the class supports configuration customization.

**Please note that changing the generic type `T` may lead to inaccuracies and typing errors.**

## Properties:
- `plugins`: An object that holds all registered plugins, each mapped by its name.
- `#config`: A configuration object that determines the behavior of the builder.
- `#context`: The #context manager instance that controls plugin #context and state.

## Example

```ts
const builder = new BuilderIf()
  .plugin(
    { name: 'plugin', #context: false },
    function (this: TContext, param: string) {
      console.log(this);  // The #context is not accessible here
      console.log(param);
      return true;
    }
  )
  .fixed();

builder.plugin('parametr');  // Calling the plugin registered with the name 'd'
```

## Constructors

### Constructor

> **new IF**\<`T`\>(`config?`): `IF`\<`T`\>

Defined in: [builder/IF.ts:102](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/IF.ts#L102)

Creates a new `BuilderIf` instance with an optional configuration object.
The configuration will override the default configuration if provided.

#### Parameters

##### config?

[`TConfig`](../type-aliases/TConfig.md) = `DEFAULT_CONFIG`

Optional configuration to customize the behavior of the builder.

#### Returns

`IF`\<`T`\>

## Methods

### plugin()

> `readonly` **plugin**\<`N`, `A`\>(`config?`, `fn?`): `IF`\<[`TDoubleRecord`](../type-aliases/TDoubleRecord.md)\<`T`, `N`, [`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>\>\>

Defined in: [builder/IF.ts:136](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/IF.ts#L136)

Registers a new plugin into the builder. The plugin is a function that is added to the #context
and can be called later through the builder instance.

If `#config.#context` is `true` or `autoAddContext` is enabled, the plugin will have access to the #context.
Otherwise, the plugin will be executed without #context.

## Example:

```ts
builderIf()
  .plugin(
    { name: 'compareValues', #context: true },
    function (this: TContext, a: string, b: string) {
      return a === b;
    }
  );
```

#### Type Parameters

##### N

`N` *extends* `string`

##### A

`A` *extends* [`TArgs`](../type-aliases/TArgs.md)

#### Parameters

##### config?

[`TConfigPlugin`](../type-aliases/TConfigPlugin.md)\<`N`\> = `...`

The plugin configuration object, including options like `name` and `#context`.

##### fn?

[`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>

The plugin function that gets registered. It will be invoked later through the builder.

#### Returns

`IF`\<[`TDoubleRecord`](../type-aliases/TDoubleRecord.md)\<`T`, `N`, [`TPlugin`](../type-aliases/TPlugin.md)\<`A`\>\>\>

- The updated `BuilderIf` instance with the new plugin added.

#### Throws

- If the `fn` is not a function.

***

### fixed()

> `readonly` **fixed**(): `Readonly`\<`T` & [`TIfCore`](../type-aliases/TIfCore.md)\>

Defined in: [builder/IF.ts:158](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/IF.ts#L158)

Freezes the current plugins object, making it immutable, and returns it.
This allows the builder's plugin set to be locked once you are done adding plugins.

#### Returns

`Readonly`\<`T` & [`TIfCore`](../type-aliases/TIfCore.md)\>

- The frozen plugins object, which can no longer be modified.
