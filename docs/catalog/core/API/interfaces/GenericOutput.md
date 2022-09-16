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

[types/index.ts:346](https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L346)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:348](https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L348)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:350](https://github.com/nevermined-io/components-catalog/blob/c256646/lib/src/types/index.ts#L350)
