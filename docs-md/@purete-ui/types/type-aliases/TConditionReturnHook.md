[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/types](../README.md) / TConditionReturnHook

# Type Alias: TConditionReturnHook\<TVariable, TReturn\>

> **TConditionReturnHook**\<`TVariable`, `TReturn`\> = `object`

Defined in: [hooks.types.ts:1](https://github.com/zerok-cell/PureteUI/blob/main/libs/types/src/lib/hooks.types.ts#L1)

## Type Parameters

### TVariable

`TVariable`

### TReturn

`TReturn`

## Properties

### preHook()?

> `optional` **preHook**: (`v`) => `void`

Defined in: [hooks.types.ts:2](https://github.com/zerok-cell/PureteUI/blob/main/libs/types/src/lib/hooks.types.ts#L2)

#### Parameters

##### v

`TVariable`

#### Returns

`void`

***

### postHook()?

> `optional` **postHook**: (`v`, `conditionResult`) => `void`

Defined in: [hooks.types.ts:3](https://github.com/zerok-cell/PureteUI/blob/main/libs/types/src/lib/hooks.types.ts#L3)

#### Parameters

##### v

`TVariable`

##### conditionResult

`TVariable` | `TReturn`

#### Returns

`void`

***

### softError

> **softError**: `boolean`

Defined in: [hooks.types.ts:4](https://github.com/zerok-cell/PureteUI/blob/main/libs/types/src/lib/hooks.types.ts#L4)
