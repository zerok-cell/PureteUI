[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/utils](../README.md) / conditionReturn

# Function: conditionReturn()

> **conditionReturn**\<`TVariable`, `TReturn`\>(`options`): `TVariable` \| `TReturn`

Defined in: [conditionReturn.ts:18](https://github.com/zerok-cell/PureteUI/blob/main/libs/utils/src/lib/conditionReturn.ts#L18)

## Type Parameters

### TVariable

`TVariable` = `string`

### TReturn

`TReturn` = `string`

## Parameters

### options

Object containing the following properties:
- `variable`: The variable we are checking.
- `returnIfFalse`: The value to be returned if the variable does not exist.
- `checker`: A function to check the variable's condition.
- `hooks`: The hook pair object.
  - `preHook`: Called before calculating the return value.
  - `postHook`: Called after deducting the value.
  - `softError`: Determines whether an error will be caused or only logged.
- `strict`: A flag to enable strict type checking.

#### variable

`TVariable`

#### returnIfFalse

`TReturn`

#### hooks?

`TConditionReturnHook`\<`TVariable`, `TReturn`\> = `...`

#### checker?

(`v`) => `boolean`

#### strict?

`boolean` = `true`

## Returns

`TVariable` \| `TReturn`

## Description

mini utility from return value if it exists or return two param
`returnInFalse`.
