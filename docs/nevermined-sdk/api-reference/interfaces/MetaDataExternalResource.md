[@nevermined-io/sdk](../code-reference.md) / MetaDataExternalResource

# Interface: MetaDataExternalResource

## Table of contents

### Properties

- [checksum](MetaDataExternalResource.md#checksum)
- [checksumType](MetaDataExternalResource.md#checksumtype)
- [compression](MetaDataExternalResource.md#compression)
- [contentLength](MetaDataExternalResource.md#contentlength)
- [contentType](MetaDataExternalResource.md#contenttype)
- [encoding](MetaDataExternalResource.md#encoding)
- [encryption](MetaDataExternalResource.md#encryption)
- [index](MetaDataExternalResource.md#index)
- [name](MetaDataExternalResource.md#name)
- [resourceId](MetaDataExternalResource.md#resourceid)
- [resourceType](MetaDataExternalResource.md#resourcetype)
- [url](MetaDataExternalResource.md#url)

## Properties

### checksum

• `Optional` **checksum**: `string`

File checksum.

#### Defined in

[src/types/DDOTypes.ts:148](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L148)

___

### checksumType

• `Optional` **checksumType**: `string`

Checksum hash algorithm.

#### Defined in

[src/types/DDOTypes.ts:153](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L153)

___

### compression

• `Optional` **compression**: `string`

File compression (e.g. no, gzip, bzip2, etc).

**`Example`**

```ts
"zip"
```

#### Defined in

[src/types/DDOTypes.ts:181](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L181)

___

### contentLength

• `Optional` **contentLength**: `string`

File content length.

#### Defined in

[src/types/DDOTypes.ts:158](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L158)

___

### contentType

• **contentType**: `string`

File format, if applicable.

**`Example`**

```ts
"text/csv"
```

#### Defined in

[src/types/DDOTypes.ts:143](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L143)

___

### encoding

• `Optional` **encoding**: `string`

File encoding.

**`Example`**

```ts
"UTF-8"
```

#### Defined in

[src/types/DDOTypes.ts:175](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L175)

___

### encryption

• `Optional` **encryption**: ``"dtp"`` \| ``"dleq"``

Encryption mode used.

**`Remarks`**

If not provided is assumed the files are not encrypted. Currently only `dtp` is implemented.

#### Defined in

[src/types/DDOTypes.ts:189](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L189)

___

### index

• `Optional` **index**: `number`

File index.

#### Defined in

[src/types/DDOTypes.ts:137](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L137)

___

### name

• `Optional` **name**: `string`

File name.

#### Defined in

[src/types/DDOTypes.ts:127](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L127)

___

### resourceId

• `Optional` **resourceId**: `string`

Resource ID (depending on the source). It is used to reference the id of the file in an external source.
For example the `ugcId`

#### Defined in

[src/types/DDOTypes.ts:169](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L169)

___

### resourceType

• `Optional` **resourceType**: [`ExternalResourceFileType`](../enums/ExternalResourceFileType.md)

The type of the external resource file

#### Defined in

[src/types/DDOTypes.ts:163](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L163)

___

### url

• **url**: `string`

File URL.

#### Defined in

[src/types/DDOTypes.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L132)
