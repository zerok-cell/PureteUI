[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / useMergeFunction

# Function: useMergeFunction()

> **useMergeFunction**\<`TEvent`\>(`firstFunction`, `secondFunction`): (`e`) => `void`

Defined in: [hooks/useMergeFunction.ts:13](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/hooks/useMergeFunction.ts#L13)

## Type Parameters

### TEvent

`TEvent` *extends* `SyntheticEvent`\<`Element`, `Event`\> = `MouseEvent`\<`HTMLButtonElement`, `MouseEvent`\>

## Parameters

### firstFunction

`FTEvent`\<`TEvent`\>

The first function to be called

### secondFunction

The following function can be an array of functions that or that will be called

`FTEvent`\<`TEvent`\> | `FTEvent`\<`TEvent`\>[]

## Returns

> (`e`): `void`

### Parameters

#### e

`TEvent`

### Returns

`void`

## Description

Hook for merge function and infer one function
