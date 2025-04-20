# zeroui-utils

This library was generated with [Nx](https://nx.dev).
📘 [Документация](./docs/index.html)

## Documentation

### `conditionReturn`

* **Description** - A function that allows you to flexibly check for the
  existence of a variable, with the possibility of extending the check and
  implementing hooks (pre,post)
* **Type** - `Function`
* **Returns** - Returns either your variable or a backup value.
* **Parameters**

| Name            | Type               | Default                | Description                                                                           | Required |
|-----------------|--------------------|------------------------|---------------------------------------------------------------------------------------|----------|
| variable        | Set using generics | `string`               | The variable we are checking.                                                         | `true`   |
| returnIfFalse   | Set using generics | `string`               | The value to be returned if the variable does not exist or if the checker check fails | `true`   |
| checker         | `Function`         | `undefined`            | A function to check the variable's condition.                                         | `false`  |
| hooks           | `Object`           | `{ softError: false }` | The hook pair object                                                                  | `false`  |
| hooks.preHook   | `Function`         | `undefined`            | Called before calculating the return value                                            | `false`  |
| hooks.postHook  | `Function`         | `undefined`            | Called after deducting the value                                                      | `false`  |
| hooks.softError | `Boolean`          | `false`                | Determines whether an error will be caused or only logged                             | `false`  |
| strict          |                    | `ture`                 | A flag to enable strict type checking                                                 | `false`  |

---

### `generateContract`

* **Description** - makes the object's keys empty or prefixed. Suitable for
  generating contracts in extract-vanilla
* **Type** - `Function`
* **Returns** - Returns the modified object.
* **Parameters**

| Name        | Type                     | Default  | Description                                                                                                                         | Required |
|-------------|--------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| breakpoints | `Record<string, string>` | `object` | They can be the output of the "gradationOfValues" function or your personal object, the object can be ANY with a nesting level of 1 | `true`   |
| prefix      | `string`                 | `string` | The prefix for arranging the values of your keys is created as "prefix+nameKey"                                                     | `false`  |

**Example**

```typescript
import { generateContract } from "@purete-ui/utils"

const test = generateContract({
  one: 'example',
  two: 'example',
  three: 'example',
})
console.log(test)

```

Output:

```
{
  one:'', 
  two:'', 
  three:''
}

```

**Example**

```typescript
import { generateContract } from "@purete-ui/utils"

const test = generateContract({
  one: 'example',
  two: 'example',
  three: 'example',
}, 'var')
console.log(test)

```

Output:

```
{
  one: 'var-one', 
  two:'var-two', 
  three:'var-three'
}
```

---

### `gradationOfValues`

* **Description** - Creates a gradation of values, or a map of values according
  to your template.
* **Type** - `Function`
* **Returns** - Returns a value gradation object
* **Parameters**

| Name         | Type                   | Default    | Description                                                                                                                           | Required |
|--------------|------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------|----------|
| initialValue | `number`               | `0`        | The starting number from which the graduation begins, its value will go to the "xs" key                                               | `false`  |
| mutation     | `number` or `function` | `5`        | The number with which your value will be graded with each iteration, or a function that takes the current value and returns a new one | `false`  |
| unit         | `string`               | `px`       | The unit of measurement of your default value is "px"                                                                                 | `false`  |
| formater     | `Function`             | `Function` | The hook pair object                                                                                                                  | `false`  |

**Example**

```typescript
import { gradationOfValues } from "@purete-ui/utils"

console.log(gradationOfValues(0, 9, 'rem'));
```

Output

```
{
  xs: '0rem',
  sm: '9rem',
  md: '18rem',
  lg: '27rem',
  xl: '36rem',
  xxl: '45rem'
}

```

**Example**

```typescript
import { gradationOfValues } from "@purete-ui/utils"

console.log(gradationOfValues(0, 9, 'rem', (v, u) => `${v + v}${u}${u}`));
```

Output

```
{
  xs: '0remrem',
  sm: '18remrem',
  md: '36remrem',
  lg: '54remrem',
  xl: '72remrem',
  xxl: '90remrem'
}


```

---
