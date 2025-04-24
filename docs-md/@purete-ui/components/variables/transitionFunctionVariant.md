[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / transitionFunctionVariant

# Variable: transitionFunctionVariant

> `const` **transitionFunctionVariant**: `Record`\<`"ease"` \| `"easeIn"` \| `"easeOut"` \| `"easeInOut"`, `string`\>

Defined in: [css/variants/transition.css.ts:50](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/transition.css.ts#L50)

Defines transition timing function variants using different `transition-timing-function` values.

Options:
- `ease`: default smooth transition
- `easeIn`: starts slow and speeds up
- `easeOut`: starts fast and slows down
- `easeInOut`: slow at start and end

Great for adjusting animation feel and easing behavior.

## Example

```tsx
<div className={transitionFunctionVariant.easeInOut}>Smooth ease-in-out</div>
```

## Returns

A record of class names keyed by timing function name.
