---
sidebar_position: 3
---

# Example

## Requirements
Before you start with this demo you require:

* An extension of [Metamask](https://metamask.io/) installed in your browser
* [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) needs to be installed

## How to get the source of this example?
You can install the example in your local machine and run it without installing anything. Information for how to do this can be found here [here](https://github.com/nevermined-io/create-nevermined-react)

## Let's start with the app config file
The first file that you need to create is the `config.ts` file which contains all the [options needed](../nevermined-sdk/api-reference/classes/Config.md) to initialize the [Catalog core](./core/README.md).

```ts
import { Config } from '@nevermined-io/nevermined-sdk-js';
import { AuthToken } from '@nevermined-io/catalog-core';
import { ethers } from 'ethers';

export const gatewayAddress =
  process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc';
export const gatewayUri =
  process.env.REACT_APP_GATEWAY_URI || 'https://defi.v2.gateway.mumbai.nevermined.rocks';
export const faucetUri =
  process.env.REACT_APP_FAUCET_URI || 'https://faucet.rinkeby.nevermined.rocks';
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001'; // for Mumbai
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445';
export const marketplaceUri = 'https://defi.v2.marketplace-api.mumbai.nevermined.rocks';
const graphHttpUri = process.env.GRAPH_HTTP_URI ||  'https://api.thegraph.com/subgraphs/name/nevermined-io/common';
export const erc20TokenAddress = process.env.ERC20_TOKEN_ADDRESS || '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e';

export const appConfig: Config = {
  //@ts-ignore
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  gatewayUri,
  faucetUri,
  verbose: true,
  gatewayAddress,
  graphHttpUri,
  marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`
};
```

## Setting the networks for web3 providers
The next step is setting differents networks for the dapp [polygon](https://polygon.technology/) which does not require this file. However, we have included it in the example as it contains the networks settings for web3 providers.

```ts
import { zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';
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

export default ChainConfig;
```

## The example file
The example file `src/example/index.tsx` contains all the basic logic to handle a [NFT1155](../architecture/what-can-i-do.md#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales) as a component. It outlines each functionality and component in detail.

### SDKInstance
This component will check if [sdk](../nevermined-sdk/getting-started.mdx) is loaded or not and display the status

```tsx
const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined();

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  );
};
```

### SingleAsset
It shows the content of the ddo object published

```tsx
const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  );
};
```

### constructRewardMap
This function builds the logic of the rewards which the owner will receive after selling the NFT1155

```tsx
const constructRewardMap = (
  recipientsData: any[],
  priceWithoutFee: number,
  ownerWalletAddress: string
): Map<string, BigNumber> => {
  const rewardMap: Map<string, BigNumber> = new Map();
  let recipients: any = [];
  if (recipientsData.length === 1 && recipientsData[0].split === 0) {
    recipients = [
      {
        name: ownerWalletAddress,
        split: 100,
        walletAddress: ownerWalletAddress
      }
    ];
  }
  let totalWithoutUser = 0;

  recipients.forEach((recipient: any) => {
    if (recipient.split && recipient.split > 0) {
      const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();
      rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));
      totalWithoutUser += recipient.split;
    }
  });

  if (!rewardMap.has(ownerWalletAddress)) {
    const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();
    rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));
  }

  return rewardMap;
};
```

### PublishAsset
It renders a button used to publish a new [NFT](../architecture/specs/Spec-NFT.md)

```tsx
const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined();

  return (
    <>
      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  );
};
```

### BuyAsset
The `BuyAsset` component will display the button `buy` in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset

```tsx
const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();
  const { walletAddress } = MetaMask.useWallet();
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

  const buy = async () => {
    if (!account.isTokenValid()) {
      await account.generateToken();
    }

    const currentAccount = await getCurrentAccount(sdk);
    const response = await subscription.buySubscription(ddo.id, currentAccount, owner, BigNumber.from(1), 1155);
    setIsBought(Boolean(response));
  };

  const download = async () => {
    await assets.downloadNFT(ddo.id);
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};
```

### MMWallet
An important component for connecting to the wallet. Upon connecting, the app will display the address account. Otherwise it will render a button to connect to it.

```tsx
  const { loginMetamask, walletAddress } = MetaMask.useWallet();
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton onClick={loginMetamask}>Connect To MM</UiButton>}
    </UiLayout>
  );
};
```


### App
The main component of the example, it pulls the rest of the components and also includes the function `onPublish` with the logic to publish a NFT1155 which is transferred as a parameter to the component [PublisAsset](#publishasset)

```tsx
const App = () => {
  const { isLoadingSDK, sdk, account } = Catalog.useNevermined();
  const { publishNFT1155 } = AssetService.useAssetPublish();
  const { walletAddress } = MetaMask.useWallet();
  const [ddo, setDDO] = useState<DDO>({} as DDO);
  const royaltyAttributes = {
    royaltyKind: RoyaltyKind.Standard,
    scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
    amount: 0,
  };

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString(),
    }
  };

  const onPublish = async () => {
    try {
      const publisher = await getCurrentAccount(sdk);
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, BigNumber.from(100), publisher.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      };

      if (!account.isTokenValid()) {
        await account.generateToken();
      }
      const response = await publishNFT1155({
        gatewayAddress: String(appConfig.gatewayAddress),
        assetRewards,
        metadata,
        nftAmount: BigNumber.from(1),
        preMint: true,
        cap: BigNumber.from(100),
        royaltyAttributes,
        erc20TokenAddress,
      });

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  );
};

export default App;
```

### Complete example file
Now let's put everything together.

```tsx
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards';
import React, { useEffect, useState } from 'react';
import { MetaData, Logger, DDO } from '@nevermined-io/nevermined-sdk-js';
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber';
import { Catalog, AssetService, RoyaltyKind } from '@nevermined-io/catalog-core';
import { getCurrentAccount } from '@nevermined-io/catalog-core'
import { MetaMask } from '@nevermined-io/catalog-providers';
import { UiText, UiLayout, BEM, UiButton } from '@nevermined-io/styles';
import styles from './example.module.scss'
import { appConfig, erc20TokenAddress } from 'config';

const b = BEM('example', styles);

const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined();

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  );
};

const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  );
};

const constructRewardMap = (
  recipientsData: any[],
  priceWithoutFee: number,
  ownerWalletAddress: string
): Map<string, BigNumber> => {
  const rewardMap: Map<string, BigNumber> = new Map();
  let recipients: any = [];
  if (recipientsData.length === 1 && recipientsData[0].split === 0) {
    recipients = [
      {
        name: ownerWalletAddress,
        split: 100,
        walletAddress: ownerWalletAddress
      }
    ];
  }
  let totalWithoutUser = 0;

  recipients.forEach((recipient: any) => {
    if (recipient.split && recipient.split > 0) {
      const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();
      rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));
      totalWithoutUser += recipient.split;
    }
  });

  if (!rewardMap.has(ownerWalletAddress)) {
    const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();
    rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));
  }

  return rewardMap;
};

const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined();

  return (
    <>
      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  );
};

const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();
  const { walletAddress } = MetaMask.useWallet();
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

  const buy = async () => {
    if (!account.isTokenValid()) {
      await account.generateToken();
    }

    const currentAccount = await getCurrentAccount(sdk);
    const response = await subscription.buySubscription(ddo.id, currentAccount, owner, BigNumber.from(1), 1155);
    setIsBought(Boolean(response));
  };

  const download = async () => {
    await assets.downloadNFT(ddo.id);
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};

const MMWallet = () => {
  const { loginMetamask, walletAddress } = MetaMask.useWallet();
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton onClick={loginMetamask}>Connect To MM</UiButton>}
    </UiLayout>
  );
};

const App = () => {
  const { isLoadingSDK, sdk, account } = Catalog.useNevermined();
  const { publishNFT1155 } = AssetService.useAssetPublish();
  const { walletAddress } = MetaMask.useWallet();
  const [ddo, setDDO] = useState<DDO>({} as DDO);
  const royaltyAttributes = {
    royaltyKind: RoyaltyKind.Standard,
    scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
    amount: 0,
  };

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString(),
    }
  };

  const onPublish = async () => {
    try {
      const publisher = await getCurrentAccount(sdk);
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, BigNumber.from(100), publisher.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      };

      if (!account.isTokenValid()) {
        await account.generateToken();
      }
      const response = await publishNFT1155({
        gatewayAddress: String(appConfig.gatewayAddress),
        assetRewards,
        metadata,
        nftAmount: BigNumber.from(1),
        preMint: true,
        cap: BigNumber.from(100),
        royaltyAttributes,
        erc20TokenAddress,
      });

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  );
};

export default App;
```

## Styling
In the path `src/examples/example.module.scss` you will find some styles to improve the UI of the app.

```scss
@import '~@nevermined-io/styles/lib/cjs/styles/index.scss';

.example {
  @include component;

  &__container {
    padding: 25px 0 0 25px;
  }

  &__detail {
    margin-right: 5px;
  }

  &__ddo {
    line-height: 16px;
  }

  &__buy {
    margin-top: 20px;
  }
}
```

## The index file
The `src/indes.tsx` file call Catalog core, Catalog providers and the exemple component with the configurations set

```tsx
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
import '@nevermined-io/styles/lib/esm/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, AssetService } from '@nevermined-io/catalog-core';
import { appConfig } from './config';
import Example from 'examples';
import { MetaMask } from '@nevermined-io/catalog-providers';
import chainConfig, { mumbaiChainId } from './chain_config';


ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <AssetService.AssetPublishProvider>
        <MetaMask.WalletProvider
          externalChainConfig={chainConfig}
          correctNetworkId={mumbaiChainId}
          nodeUri={String(appConfig.nodeUri)}
        >
          <Example />
        </MetaMask.WalletProvider>
      </AssetService.AssetPublishProvider>
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
```

