[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / borderRadius

# Variable: borderRadius

> `const` **borderRadius**: `Record`\<`TKeysBreakpoints`, `string`\>

Defined in: [css/variants/rounded.css.ts:26](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/rounded.css.ts#L26)

A responsive utility for applying `border-radius` styles based on design tokens.

This variant generator uses the `pureteTheme.roundedPx` values to create
corresponding CSS class names for each breakpoint key. Each class applies
a specific `border-radius` value.

Ideal for ensuring consistent rounded corners across breakpoints in your UI.

## Example

```tsx
<div className={borderRadius.sm}>Small rounded corner</div>
<div className={borderRadius.lg}>Large rounded corner</div>
```

## Type Param

Set of breakpoint keys such as `sm`, `md`, `lg`, etc.

## Returns

A record of class names keyed by responsive size.

## See

pureteTheme.roundedPx
