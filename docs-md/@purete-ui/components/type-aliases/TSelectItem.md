[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / TSelectItem

# Type Alias: TSelectItem

> **TSelectItem** = \{ `id`: `string`; `value`: \{ `text`: `string`; \}; \} \| \{ `id`: `null`; `value?`: `never`; \}

Defined in: [types/providers/selector.types.ts:13](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/types/providers/selector.types.ts#L13)

Represents an item in the selector dropdown.
Can be either a valid item with `id` and `text`, or a null value.

## Type declaration

\{ `id`: `string`; `value`: \{ `text`: `string`; \}; \}

### id

> **id**: `string`

Unique identifier of the item

### value

> **value**: `object`

Displayed value of the item

#### value.text

> **value.text**: `string`

Text content to be shown in UI

\{ `id`: `null`; `value?`: `never`; \}

### id

> **id**: `null`

Null ID means no item is selected

### value?

> `optional` **value**: `never`

Should never exist if id is null
