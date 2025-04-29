[**PureteUI**](../../../README.md)

***

[PureteUI](../../../packages.md) / [@purete-ui/if](../README.md) / contextManager

# Function: contextManager()

> **contextManager**(`ctx`): `object`

Defined in: [builder/context/contextManager.ts:3](https://github.com/zerok-cell/PureteUI/blob/main/libs/if/src/lib/builder/context/contextManager.ts#L3)

## Parameters

### ctx

[`TContext`](../type-aliases/TContext.md)

## Returns

### getFirstTmp()

> **getFirstTmp**: \<`R`\>() => `R`

#### Type Parameters

##### R

`R` *extends* `unknown`[]

#### Returns

`R`

### getLastTmp()

> **getLastTmp**: \<`R`\>() => `R`

#### Type Parameters

##### R

`R` *extends* `unknown`[]

#### Returns

`R`

### saveMemory()

> **saveMemory**: (`key`, `value`) => `void`

#### Parameters

##### key

`string`

##### value

`unknown`

#### Returns

`void`

### clearTmp()

> **clearTmp**: () => `any`[]

#### Returns

`any`[]

### addTmp()

> **addTmp**: \<`E`\>(`value`) => `number`

#### Type Parameters

##### E

`E` *extends* keyof `unknown`[]

#### Parameters

##### value

`unknown`[]\[`E`\]

#### Returns

`number`

### saveTmp()

> **saveTmp**: () => `void`

**`Function`**

Transfers your tmp to memory and remembers it between calls
 In the future, you can find your saved tmp in `memory.tmp` this is an
 array of your saved `tmp` snapshots

#### Returns

`void`

#### See

TContext

### clearMemory()

> **clearMemory**: () => `any`[]

#### Returns

`any`[]

### ctx

#### Get Signature

> **get** **ctx**(): [`TContext`](../type-aliases/TContext.md)

##### Returns

[`TContext`](../type-aliases/TContext.md)
