[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / ifExists

# Variable: ifExists

> `const` **ifExists**: `FTOnceParam`

Defined in: [ifCore.ts:24](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/ifCore.ts#L24)

Checks whether a value exists (i.e., is not `null` or `undefined` or any falsy value).

## Remarks

This function is commonly used to ensure that a variable has a meaningful value.
It performs a boolean coercion check using the logical NOT operator twice (`!!value`),
which effectively casts any value to a boolean indicating its existence.

## Example

```ts
ifExists("Hello"); // true
ifExists("");      // false
ifExists(0);       // false
ifExists(undefined); // false
```

## Param

The variable to check for existence.

## Returns

`true` if the variable is truthy, otherwise `false`.
