[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / useToggle

# Function: useToggle()

> **useToggle**(`initial?`): [`FTRUseToggle`](../type-aliases/FTRUseToggle.md)

Defined in: [hooks/Interactive/useToggle.ts:27](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/hooks/Interactive/useToggle.ts#L27)

A simple toggle hook that manages a boolean state.

## Parameters

### initial?

`boolean`

Optional initial state. Defaults to false.
               (Note: Avoid relying on this too much for controlled logic)

## Returns

[`FTRUseToggle`](../type-aliases/FTRUseToggle.md)

An object with:
- toggle: boolean - current state
- swap: () => void - toggles the state

## Examples

```ts
const { toggle, swap } = useToggle();
console.log(toggle); // false
swap();              // toggle becomes true
```

```ts
const { toggle, swap } = useToggle(true);
console.log(toggle); // true
swap();              // toggle becomes false
```
