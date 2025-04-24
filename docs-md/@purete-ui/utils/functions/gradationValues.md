[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/utils](../README.md) / gradationValues

# Function: gradationValues()

> **gradationValues**\<`TResultValue`\>(`initialValue`, `mutation`, `unit`, `formater`): `TBreakpoints`\<`TResultValue`\>

Defined in: [gradationValues.ts:13](https://github.com/zerok-cell/PureteUI/blob/main/libs/utils/src/lib/gradationValues.ts#L13)

## Type Parameters

### TResultValue

`TResultValue` = `` `${number}px` ``

## Parameters

### initialValue

`number` = `0`

The starting number from which the graduation begins, its value will go to the "xs" key

### mutation

The number with which your value will be graded with each iteration, or a function
that takes the current value and returns a new one

`number` | (`v`) => `number`

### unit

`TUnitsOfMeasurement` = `'px'`

The unit of measurement of your default value is "px"

### formater

(`v`, `u`) => `TResultValue`

the formatter of your key value accepts the value and unit of measurement defined in
"unit" and should return a string

## Returns

`TBreakpoints`\<`TResultValue`\>

## Description

Creates a gradation of values, or a map of values according to your template.
