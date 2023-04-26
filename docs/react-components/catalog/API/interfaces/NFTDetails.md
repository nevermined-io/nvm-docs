# Interface: NFTDetails

Details of the NFT asset agreement

## Table of contents

### Properties

- [blockNumberUpdated](NFTDetails.md#blocknumberupdated)
- [lastChecksum](NFTDetails.md#lastchecksum)
- [lastUpdatedBy](NFTDetails.md#lastupdatedby)
- [mintCap](NFTDetails.md#mintcap)
- [nftContractAddress](NFTDetails.md#nftcontractaddress)
- [nftInitialized](NFTDetails.md#nftinitialized)
- [nftSupply](NFTDetails.md#nftsupply)
- [nftURI](NFTDetails.md#nfturi)
- [owner](NFTDetails.md#owner)
- [providers](NFTDetails.md#providers)
- [royalties](NFTDetails.md#royalties)
- [royaltyScheme](NFTDetails.md#royaltyscheme)
- [url](NFTDetails.md#url)

## Properties

### blockNumberUpdated

• **blockNumberUpdated**: `number`

The block number from blockchain where the asset was updated

#### Defined in

[types/index.ts:332](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L332)

___

### lastChecksum

• **lastChecksum**: `string`

The last checksum generated to verify the sources

#### Defined in

[types/index.ts:326](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L326)

___

### lastUpdatedBy

• **lastUpdatedBy**: `string`

The modification of the asset

#### Defined in

[types/index.ts:330](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L330)

___

### mintCap

• **mintCap**: `BigNumber`

The amount limit of nft which can be minted

#### Defined in

[types/index.ts:344](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L344)

___

### nftContractAddress

• **nftContractAddress**: `string`

Contract NFT address which was created the NFT asset

#### Defined in

[types/index.ts:338](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L338)

___

### nftInitialized

• **nftInitialized**: `string`

When the NFT asset was initialized

#### Defined in

[types/index.ts:340](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L340)

___

### nftSupply

• **nftSupply**: `BigNumber`

The amount of ntfs that are in circulation

#### Defined in

[types/index.ts:336](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L336)

___

### nftURI

• `Optional` **nftURI**: `string`

Uri of the NFT

#### Defined in

[types/index.ts:342](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L342)

___

### owner

• **owner**: `string`

The owner of the asset

#### Defined in

[types/index.ts:324](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L324)

___

### providers

• **providers**: [`string`]

Which services provide the asset

#### Defined in

[types/index.ts:334](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L334)

___

### royalties

• **royalties**: `number`

The rewards that the owner can get for every sale

#### Defined in

[types/index.ts:346](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L346)

___

### royaltyScheme

• **royaltyScheme**: `RoyaltyKind`

Royalty scheme of the NFT asset

#### Defined in

[types/index.ts:348](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L348)

___

### url

• **url**: `string`

Url where is located the asset

#### Defined in

[types/index.ts:328](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L328)
