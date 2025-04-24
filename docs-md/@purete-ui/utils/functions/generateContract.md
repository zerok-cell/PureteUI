[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/utils](../README.md) / generateContract

# Function: generateContract()

> **generateContract**(`breakpoints`, `prefix?`): `Record`\<`string`, `string`\>

Defined in: [generateContract.ts:8](https://github.com/zerok-cell/PureteUI/blob/main/libs/utils/src/lib/generateContract.ts#L8)

## Parameters

### breakpoints

`Record`\<`string`, `string`\>

They can be the output of the "gradationOfValues" function or your personal object, the object
can be ANY with a nesting level of 1

### prefix?

`string`

The prefix for arranging the values of your keys is created as "prefix+nameKey"

## Returns

`Record`\<`string`, `string`\>

## Description

makes the object's keys empty or prefixed. Suitable for generating contracts in extract-vanilla

## See

gradationOfValues
