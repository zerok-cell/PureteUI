[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / useAdvancedToggle

# Function: useAdvancedToggle()

> **useAdvancedToggle**(...`args`): [`FTRUseAdvancedToggle`](../type-aliases/FTRUseAdvancedToggle.md)

Defined in: [hooks/Interactive/useAdvancedToggle.ts:32](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/hooks/Interactive/useAdvancedToggle.ts#L32)

Custom hook that provides advanced toggle functionality with multiple actions: toggle, open, and close.

## Parameters

### args

...\[`boolean`\]

## Returns

[`FTRUseAdvancedToggle`](../type-aliases/FTRUseAdvancedToggle.md)

An object containing:
  - `toggle`: The current state of the toggle (boolean).
  - `swap`: A function to toggle the state between `true` and `false`.
  - `open`: A function to set the toggle state to `true`.
  - `close`: A function to set the toggle state to `false`.

## Example

```ts
const MyComponent = () => {
  const { toggle, swap, open, close } = useAdvancedToggle(false);

  return (
    <div>
      <p>The current state is {toggle ? "Open" : "Closed"}</p>
      <button onClick={swap}>Toggle</button>
      <button onClick={open}>Open</button>
      <button onClick={close}>Close</button>
    </div>
  );
};
```
