[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / TFlexContainerVariants

# Type Alias: TFlexContainerVariants

> **TFlexContainerVariants** = `object`

Defined in: [css/variants/flex.css.ts:107](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/flex.css.ts#L107)

Type-safe variant configuration for the `flexContainer` utility.

Used when accepting flex configuration as a prop, e.g.:

## Example

```ts
const MyComponent = ({ flex }: TFlexContainerVariants) => (
  <div className={flexContainer(flex)} />
);
```

## Properties

### flex

> **flex**: `RecipeVariants`\<*typeof* [`flexContainer`](../variables/flexContainer.md)\>

Defined in: [css/variants/flex.css.ts:108](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/flex.css.ts#L108)
