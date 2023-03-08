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

[types/index.ts:294](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L294)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[types/index.ts:296](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L296)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[types/index.ts:298](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L298)
