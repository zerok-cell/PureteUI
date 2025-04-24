[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/components](../README.md) / flexContainer

# Variable: flexContainer

> `const` **flexContainer**: `RuntimeFn`\<\{ `justify`: \{ `start`: \{ `justifyContent`: `"flex-start"`; \}; `center`: \{ `justifyContent`: `"center"`; \}; `end`: \{ `justifyContent`: `"flex-end"`; \}; `between`: \{ `justifyContent`: `"space-between"`; \}; `around`: \{ `justifyContent`: `"space-around"`; \}; `evenly`: \{ `justifyContent`: `"space-evenly"`; \}; \}; `align`: \{ `start`: \{ `alignItems`: `"flex-start"`; \}; `center`: \{ `alignItems`: `"center"`; \}; `end`: \{ `alignItems`: `"flex-end"`; \}; `stretch`: \{ `alignItems`: `"stretch"`; \}; `baseline`: \{ `alignItems`: `"baseline"`; \}; \}; `direction`: \{ `row`: \{ `flexDirection`: `"row"`; \}; `column`: \{ `flexDirection`: `"column"`; \}; `rowReverse`: \{ `flexDirection`: `"row-reverse"`; \}; `columnReverse`: \{ `flexDirection`: `"column-reverse"`; \}; \}; `wrap`: \{ `noWrap`: \{ `flexWrap`: `"nowrap"`; \}; `wrap`: \{ `flexWrap`: `"wrap"`; \}; `wrapReverse`: \{ `flexWrap`: `"wrap-reverse"`; \}; \}; \}\>

Defined in: [css/variants/flex.css.ts:55](https://github.com/zerok-cell/PureteUI/blob/main/libs/components/src/css/variants/flex.css.ts#L55)

A utility for applying common flex container styles using variant-based class names.

This `recipe` generates class names for different flex configurations:
- `justify`: horizontal alignment of flex items
- `align`: vertical alignment of flex items
- `direction`: main axis direction of the flex container
- `wrap`: wrapping behavior of flex items

## Example

```tsx
<div className={flexContainer({ justify: 'between', align: 'start' })}>
  <Child />
</div>
```

## Variant

justify
- `start`: justify-content: flex-start
- `center`: justify-content: center
- `end`: justify-content: flex-end
- `between`: justify-content: space-between
- `around`: justify-content: space-around
- `evenly`: justify-content: space-evenly

## Variant

align
- `start`: align-items: flex-start
- `center`: align-items: center
- `end`: align-items: flex-end
- `stretch`: align-items: stretch
- `baseline`: align-items: baseline

## Variant

direction
- `row`: flex-direction: row
- `column`: flex-direction: column
- `rowReverse`: flex-direction: row-reverse
- `columnReverse`: flex-direction: column-reverse

## Variant

wrap
- `noWrap`: flex-wrap: nowrap
- `wrap`: flex-wrap: wrap
- `wrapReverse`: flex-wrap: wrap-reverse

## Default

```ts
{
  justify: 'center',
  align: 'center',
  direction: 'row',
  wrap: 'noWrap'
}
```
