# Interface: GenericOutput<T, E\>

Used as a result data schema of a resolved promise

## Type parameters

| Name |
| :------ |
| `T` |
| `E` |

## Table of contents

### Properties

- [data](GenericOutput.md#data)
- [error](GenericOutput.md#error)
- [success](GenericOutput.md#success)

## Properties

### data

• **data**: `T`

Data from the promise

#### Defined in

[types/index.ts:339](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L339)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:341](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L341)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:343](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L343)
