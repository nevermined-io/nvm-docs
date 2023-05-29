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

[types/index.ts:333](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L333)

___

### lastChecksum

• **lastChecksum**: `string`

The last checksum generated to verify the sources

#### Defined in

[types/index.ts:327](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L327)

___

### lastUpdatedBy

• **lastUpdatedBy**: `string`

The modification of the asset

#### Defined in

[types/index.ts:331](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L331)

___

### mintCap

• **mintCap**: `BigNumber`

The amount limit of nft which can be minted

#### Defined in

[types/index.ts:345](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L345)

___

### nftContractAddress

• **nftContractAddress**: `string`

Contract NFT address which was created the NFT asset

#### Defined in

[types/index.ts:339](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L339)

___

### nftInitialized

• **nftInitialized**: `string`

When the NFT asset was initialized

#### Defined in

[types/index.ts:341](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L341)

___

### nftSupply

• **nftSupply**: `BigNumber`

The amount of ntfs that are in circulation

#### Defined in

[types/index.ts:337](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L337)

___

### nftURI

• `Optional` **nftURI**: `string`

Uri of the NFT

#### Defined in

[types/index.ts:343](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L343)

___

### owner

• **owner**: `string`

The owner of the asset

#### Defined in

[types/index.ts:325](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L325)

___

### providers

• **providers**: [`string`]

Which services provide the asset

#### Defined in

[types/index.ts:335](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L335)

___

### royalties

• **royalties**: `number`

The rewards that the owner can get for every sale

#### Defined in

[types/index.ts:347](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L347)

___

### royaltyScheme

• **royaltyScheme**: `RoyaltyKind`

Royalty scheme of the NFT asset

#### Defined in

[types/index.ts:349](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L349)

___

### url

• **url**: `string`

Url where is located the asset

#### Defined in

[types/index.ts:329](https://github.com/nevermined-io/react-components/blob/5437523/catalog/src/types/index.ts#L329)
