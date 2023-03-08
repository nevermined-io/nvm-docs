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

[types/index.ts:317](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L317)

___

### lastChecksum

• **lastChecksum**: `string`

The last checksum generated to verify the sources

#### Defined in

[types/index.ts:311](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L311)

___

### lastUpdatedBy

• **lastUpdatedBy**: `string`

The modification of the asset

#### Defined in

[types/index.ts:315](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L315)

___

### mintCap

• **mintCap**: `BigNumber`

The amount limit of nft which can be minted

#### Defined in

[types/index.ts:329](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L329)

___

### nftContractAddress

• **nftContractAddress**: `string`

Contract NFT address which was created the NFT asset

#### Defined in

[types/index.ts:323](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L323)

___

### nftInitialized

• **nftInitialized**: `string`

When the NFT asset was initialized

#### Defined in

[types/index.ts:325](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L325)

___

### nftSupply

• **nftSupply**: `BigNumber`

The amount of ntfs that are in circulation

#### Defined in

[types/index.ts:321](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L321)

___

### nftURI

• `Optional` **nftURI**: `string`

Uri of the NFT

#### Defined in

[types/index.ts:327](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L327)

___

### owner

• **owner**: `string`

The owner of the asset

#### Defined in

[types/index.ts:309](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L309)

___

### providers

• **providers**: [`string`]

Which services provide the asset

#### Defined in

[types/index.ts:319](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L319)

___

### royalties

• **royalties**: `number`

The rewards that the owner can get for every sale

#### Defined in

[types/index.ts:331](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L331)

___

### royaltyScheme

• **royaltyScheme**: `RoyaltyKind`

Royalty scheme of the NFT asset

#### Defined in

[types/index.ts:333](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L333)

___

### url

• **url**: `string`

Url where is located the asset

#### Defined in

[types/index.ts:313](https://github.com/nevermined-io/react-components/blob/cbb6826/catalog/src/types/index.ts#L313)
