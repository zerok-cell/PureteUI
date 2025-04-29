[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / paddingCss

# Variable: paddingCss

> `const` **paddingCss**: `Record`\<`TKeysBreakpoints`, `string`\>

Defined in: [css/variants/padding.css.ts:25](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/padding.css.ts#L25)

A responsive utility for generating padding styles based on breakpoints.

This uses the `pureteTheme.padding` map to create a set of class names for each
defined breakpoint. The resulting class names apply the appropriate `padding` values.

It is particularly useful for applying consistent spacing in a responsive design system.

## Example

```ts
<div className={paddingCss.sm}>Content with small padding</div>
<div className={paddingCss.md}>Content with medium padding</div>
```

## Type Param

Union of responsive breakpoint keys like `sm`, `md`, `lg`, etc.

## Returns

Record of class names keyed by breakpoint.

## See

pureteTheme.padding
