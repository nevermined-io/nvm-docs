[@nevermined-io/catalog-core](../README.md) / [Exports](../modules.md) / GenericOutput

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

[src/types/index.ts:334](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L334)

___

### error

• **error**: `E`

If the promise throw an error

#### Defined in

[src/types/index.ts:336](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L336)

___

### success

• **success**: `boolean`

If the promise resolve was success

#### Defined in

[src/types/index.ts:338](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L338)
