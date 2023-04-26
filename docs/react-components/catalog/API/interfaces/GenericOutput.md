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

[types/index.ts:295](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L295)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:297](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L297)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:299](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L299)
