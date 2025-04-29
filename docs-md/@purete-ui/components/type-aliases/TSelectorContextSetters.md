[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / TSelectorContextSetters

# Type Alias: TSelectorContextSetters

> **TSelectorContextSetters** = `object`

Defined in: [types/providers/selector.types.ts:33](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/types/providers/selector.types.ts#L33)

Setters used for updating selector context state.

## Properties

### setSelect

> **setSelect**: `Dispatch`\<`SetStateAction`\<[`TSelectorContext`](TSelectorContext.md)\[`"select"`\]\>\>

Defined in: [types/providers/selector.types.ts:38](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/types/providers/selector.types.ts#L38)

Updates the selected item.

#### Param

New selected item

***

### setActivate

> **setActivate**: `Dispatch`\<`SetStateAction`\<[`TSelectorContext`](TSelectorContext.md)\[`"active"`\]\>\>

Defined in: [types/providers/selector.types.ts:44](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/types/providers/selector.types.ts#L44)

Updates the active/open state.

#### Param

New active state (true/false)
