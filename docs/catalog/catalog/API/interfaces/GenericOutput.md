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

[types/index.ts:292](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L292)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:294](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L294)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:296](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L296)
