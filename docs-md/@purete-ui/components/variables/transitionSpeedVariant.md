[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / transitionSpeedVariant

# Variable: transitionSpeedVariant

> `const` **transitionSpeedVariant**: `Record`\<`1` \| `2` \| `3`, `string`\>

Defined in: [css/variants/transition.css.ts:20](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/transition.css.ts#L20)

Defines transition speed variants using different `transition-duration` values.

Each key represents a level of speed, where:
- `1` is the slowest (1s)
- `2` is medium (0.5s)
- `3` is the fastest (0.1s)

Useful for applying consistent animation speeds across components.

## Example

```tsx
<div className={transitionSpeedVariant[2]}>Medium speed transition</div>
```

## Returns

A record of class names keyed by speed level.
