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

[types/index.ts:347](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L347)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:349](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L349)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:351](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L351)
