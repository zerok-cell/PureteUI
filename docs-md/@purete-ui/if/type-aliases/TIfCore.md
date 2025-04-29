[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / TIfCore

# Type Alias: TIfCore

> **TIfCore** = `object`

Defined in: [types/core/ifCore.types.ts:5](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/core/ifCore.types.ts#L5)

## Properties

### isType

> **isType**: [`FTDoubleParam`](FTDoubleParam.md)\<`TTypeofType`\>

Defined in: [types/core/ifCore.types.ts:6](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/core/ifCore.types.ts#L6)

***

### isEq

> **isEq**: [`TIsEq`](TIsEq.md)

Defined in: [types/core/ifCore.types.ts:7](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/core/ifCore.types.ts#L7)

***

### ifExistKey()

> **ifExistKey**: \<`T`\>(`obj`, `key`) => [`TRPlugin`](TRPlugin.md)

Defined in: [types/core/ifCore.types.ts:8](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/core/ifCore.types.ts#L8)

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### obj

`Partial`\<`T`\>

##### key

keyof `T` | `string`

#### Returns

[`TRPlugin`](TRPlugin.md)

***

### ifEmpty()

> **ifEmpty**: \<`T`\>(`variable`) => [`TRPlugin`](TRPlugin.md)

Defined in: [types/core/ifCore.types.ts:12](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/types/core/ifCore.types.ts#L12)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### variable

`T`

#### Returns

[`TRPlugin`](TRPlugin.md)
