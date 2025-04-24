[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / pureteTheme

# Variable: pureteTheme

> `const` **pureteTheme**: `MapLeafNodes`\<\{ `colors`: \{ `primary`: `string`; `accent`: `string`; `active`: `string`; \}; `roundedPx`: `any`; `breakPoints`: `any`; `margin`: `any`; `padding`: `any`; `borderWidth`: `any`; \}, `CSSVarFunction`\>

Defined in: [css/theme.css.ts:41](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/theme.css.ts#L41)

## Description

Contract theme for theme. If you want to create own theme from Vanilla Extract, use this contract.

## Example

```ts
import { varsGlobalTheme } from '@zeroui/zeroui'
createGlobalTheme(":root",varsGlobalTheme,{
    colors: {
        primary: "#10110C",
        accent: "#FAFAFA",
        active: "#1E1E1E",
    },
    roundedPx: {
        sm: "12px",
        md: "26px",
        lg:"150px"
    }
})
```

## Contract
