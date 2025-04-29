[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / useClipboard

# Function: useClipboard()

> **useClipboard**(): `FTRUseClipboard`

Defined in: [hooks/Interactive/useClipboard.ts:33](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/hooks/Interactive/useClipboard.ts#L33)

A hook for declarative clipboard management.

Automatically checks whether clipboard interaction is available in the current environment.
Provides methods to read from and write to the clipboard.

 useClipboard

## Returns

`FTRUseClipboard`

An object containing `write` and `read` methods:
- `write`: (text: string) => Promise<void> — writes text to the clipboard.
- `read`: () => Promise<string> — reads text from the clipboard.

## Throws

Error throw an error if clipboard API is unavailable.

## Example

```tsx
const { write, read } = useClipboard();

const copy = () => write('Hello from clipboard!');
const paste = async () => {
  const text = await read();
  console.log(text);
};
```

## See

https://developer.mozilla.org/en-US/docs/Web/API/Clipboard

## Since

1.0.0
