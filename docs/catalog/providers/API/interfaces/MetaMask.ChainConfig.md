# Interface: ChainConfig

[MetaMask](../modules/MetaMask.md).ChainConfig

Config with all the networks which can be connect by the dapp

**`Example`**

Config example:
```ts
import { zeroX } from '@nevermined-io/catalog-providers';
import { acceptedChainId } from 'config';

const acceptedChainIdHex = zeroX((+acceptedChainId).toString(16));
const spreeChainId = zeroX((8996).toString(16));
const polygonLocalnetChainId = zeroX((8997).toString(16));
export const mumbaiChainId = zeroX((80001).toString(16));
const mainnetChainId = zeroX((137).toString(16));

const ChainConfig = {
  development: {
    chainId: acceptedChainIdHex === spreeChainId ? spreeChainId : polygonLocalnetChainId,
    chainName: 'Localhost development',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['http://localhost:8545'],
    blockExplorerUrls: [''],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  mumbai: {
    chainId: mumbaiChainId,
    chainName: 'Polygon Testnet Mumbai',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-endpoints.superfluid.dev/mumbai'
    ],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  mainnet: {
    chainId: mainnetChainId,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  returnConfig: (chainIdHex: string) => {
    if (chainIdHex === spreeChainId || chainIdHex === polygonLocalnetChainId) {
      return ChainConfig.development;
    }
    if (chainIdHex === mumbaiChainId) {
      return ChainConfig.mumbai;
    }
    if (chainIdHex === mainnetChainId) {
      return ChainConfig.mainnet;
    }
    return ChainConfig.development;
  }
};
```

## Indexable

▪ [network: `string`]: `ChainNetwork` \| (`chainIdHex`: `string`) => `ChainNetwork`

## Table of contents

### Properties

- [returnConfig](MetaMask.ChainConfig.md#returnconfig)

## Properties

### returnConfig

• **returnConfig**: (`chainIdHex`: `string`) => `ChainNetwork`

#### Type declaration

▸ (`chainIdHex`): `ChainNetwork`

Return the network confing by giving chain Id in Hexadecimal

##### Parameters

| Name | Type |
| :------ | :------ |
| `chainIdHex` | `string` |

##### Returns

`ChainNetwork`

#### Defined in

[metamask.tsx:125](https://github.com/nevermined-io/components-catalog/blob/dda3469/providers/src/metamask.tsx#L125)
