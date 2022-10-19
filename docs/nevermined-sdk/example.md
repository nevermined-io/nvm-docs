---
sidebar_position: 3
---

# Example

## Before to start
If you project is using `React` we recommend to use [Catalog](../catalog/intro.md) to make everything much easier, SDK is the low level of it.

## Requirements
Before you start with this demo you require:

* An extension of [Metamask](https://metamask.io/) installed in your browser
* [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) needs to be installed

## Let's start with the app config file
The first file that you need to create is the `config.ts` file which contains all the [options needed](./api-reference/classes/Config.md) to initialize the [Nevermined SDK](./intro.md).

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

## The example file
The example file `src/example/index.tsx` contains all the basic logic to handle a [NFT1155](../architecture/what-can-i-do.md#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales) as a component. It outlines each functionality and component in detail.

### Nevermined Instance
This component will check if [sdk](../nevermined-sdk/getting-started.md) is loaded or not and display the status

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
const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {
  return (
    <>
      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>
        mint
      </UiButton>
    </>
  );
};
```

### loginMetamask
We need a function to login to metamask when it isn't yet

```tsx
const loginMarketplace = async (sdk: Nevermined, account: Account) => {
  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account);
  await sdk.marketplace.login(clientAssertion);
}
```

### BuyAsset
The `BuyAsset` component will display the button `buy` in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset

```tsx
const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      const balance = await sdk.nfts.balance(ddo.id, account);
      const nftBalance =  BigNumber.from(balance).toNumber();
      setOwnNFT1155(nftBalance > 0);
      setOwner(await sdk.assets.owner(ddo.id))
    })();
  }, [account, isBought])


  const onBuy = async () => {
    await loginMarketplace(sdk, account);

    try {
      const agreementId = await sdk.nfts.order(ddo.id, BigNumber.from(1), account);
      const transferResult = await sdk.nfts.transferForDelegate(
        agreementId,
        owner,
        account.getId(),
        BigNumber.from(1),
        1155,
      );
      
      setIsBought(Boolean(transferResult));
    } catch (error) {
      Logger.error(error);
    }
  };

  const onDownload = async () => {
    try {
      await sdk.nfts.access(ddo.id, account);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={onDownload}>
          Download NFT
        </UiButton>
      ) : (
        owner !== account.getId() ?
        <UiButton type='secondary' onClick={onBuy}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};
```

### App
The main component of the example, it pulls the rest of the components and also includes the function `onPublish` with the logic to publish a NFT1155 which is transferred as a parameter to the component [PublisAsset](#publishasset)

```tsx
const App = ({config}: {config: Config }) => {
  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined);
  const [account, setAccount] = useState<Account>(undefined as Account);
  const [ddo, setDDO] = useState<DDO>({} as DDO);
  const [walletAddress, setWalletAddress] = useState('');

  const loginMetamask = async () => {
    const response = await (window as any)?.ethereum?.request?.({
      method: "eth_requestAccounts",
    });
  
    setWalletAddress(ethers.utils.getAddress(response[0]));
  }

  useEffect(() => {
    (window as any)?.ethereum?.on("accountsChanged", (newAccount: string[]) => {
      if (newAccount && newAccount.length > 0) {
          setWalletAddress(
              ethers.utils.getAddress(newAccount[0])
          );
      } else {
          setWalletAddress("");
          console.log("No Account found!");
      }
    });

    (async() => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const accounts = await provider.listAccounts();
      setWalletAddress(
          accounts?.length ? ethers.utils.getAddress(accounts[0]) : ""
      );
    })();
  }, [])

  useEffect(() => {
    if(walletAddress) {
      (async () => {
        try {
          const nvm = await Nevermined.getInstance(config);
          const accounts = await nvm.accounts.list();

          setAccount(accounts[0]);
          setSdk(nvm);
        } catch(error) {
          console.log(error);
        }
      })();
    }
  }, [walletAddress]);

  const publishNFT1155 = async (gatewayAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetRewards: AssetRewards) => {
    const transferNftCondition = sdk.keeper.conditions.transferNftCondition;

    const transferNftConditionContractReceipt = await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, accountWallet);

    Logger.log(`Contract Receipt for approved transfer NFT: ${transferNftConditionContractReceipt}`);

    const gateawayContractReceipt = await sdk.nfts.setApprovalForAll(gatewayAddress, true, accountWallet);

    Logger.log(`Contract Receipt for approved gateway: ${gateawayContractReceipt}`);


    const ddo = await sdk.nfts.createWithRoyalties(
      metadata,
      accountWallet,
      BigNumber.from(100),
      royaltyAttributes,
      assetRewards,
      BigNumber.from(1),
      "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
      true,
    );

    return ddo;
  }

  const onPublish = async () => {
    try {
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, account.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
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

      await loginMarketplace(sdk, account);
      
      const response = await publishNFT1155(config.gatewayAddress, account, metadata, royaltyAttributes, assetRewards);

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <UiLayout>
        {account ? 
          <>
            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
            <UiText>{account.getId()}</UiText>
          </> : 
          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>
        }

        {walletAddress && !ddo.id && (
          <PublishAsset onPublish={onPublish} />
        )}

        {ddo?.id && (
          <>
              <SingleAsset ddo={ddo}/>
              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>
          </>
        )}

      </UiLayout>
    </div>
  );
};

export default App;
```

### Complete example file
Now let's put everything together.

```tsx
import React, {useEffect, useState} from 'react';
import { Nevermined, Account, Config, Logger, DDO, MetaData } from '@nevermined-io/nevermined-sdk-js';
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards';
import { RoyaltyKind, getRoyaltyScheme, RoyaltyAttributes } from '@nevermined-io/nevermined-sdk-js/dist/node/nevermined/Assets';
import { UiLayout, UiText, UiButton, BEM } from '@nevermined-io/styles';
import { ethers } from 'ethers';
import { appConfig } from './config';
import styles from './styles.module.scss';
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber';
const b = BEM('demo', styles);

Logger.setLevel(3);

const loginMarketplace = async (sdk: Nevermined, account: Account) => {
  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account);
  await sdk.marketplace.login(clientAssertion);
}

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

const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {
  return (
    <>
      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>
        mint
      </UiButton>
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

const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      const balance = await sdk.nfts.balance(ddo.id, account);
      const nftBalance =  BigNumber.from(balance).toNumber();
      setOwnNFT1155(nftBalance > 0);
      setOwner(await sdk.assets.owner(ddo.id))
    })();
  }, [account, isBought])


  const onBuy = async () => {
    await loginMarketplace(sdk, account);

    try {
      const agreementId = await sdk.nfts.order(ddo.id, BigNumber.from(1), account);
      const transferResult = await sdk.nfts.transferForDelegate(
        agreementId,
        owner,
        account.getId(),
        BigNumber.from(1),
        1155,
      );
      
      setIsBought(Boolean(transferResult));
    } catch (error) {
      Logger.error(error);
    }
  };

  const onDownload = async () => {
    try {
      await sdk.nfts.access(ddo.id, account);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={onDownload}>
          Download NFT
        </UiButton>
      ) : (
        owner !== account.getId() ?
        <UiButton type='secondary' onClick={onBuy}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};


const App = ({config}: {config: Config }) => {
  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined);
  const [account, setAccount] = useState<Account>(undefined as Account);
  const [ddo, setDDO] = useState<DDO>({} as DDO);
  const [walletAddress, setWalletAddress] = useState('');

  const loginMetamask = async () => {
    const response = await (window as any)?.ethereum?.request?.({
      method: "eth_requestAccounts",
    });
  
    setWalletAddress(ethers.utils.getAddress(response[0]));
  }

  useEffect(() => {
    (window as any)?.ethereum?.on("accountsChanged", (newAccount: string[]) => {
      if (newAccount && newAccount.length > 0) {
          setWalletAddress(
              ethers.utils.getAddress(newAccount[0])
          );
      } else {
          setWalletAddress("");
          console.log("No Account found!");
      }
    });

    (async() => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const accounts = await provider.listAccounts();
      setWalletAddress(
          accounts?.length ? ethers.utils.getAddress(accounts[0]) : ""
      );
    })();
  }, [])

  useEffect(() => {
    if(walletAddress) {
      (async () => {
        try {
          const nvm = await Nevermined.getInstance(config);
          const accounts = await nvm.accounts.list();

          setAccount(accounts[0]);
          setSdk(nvm);
        } catch(error) {
          console.log(error);
        }
      })();
    }
  }, [walletAddress]);

  const publishNFT1155 = async (gatewayAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetRewards: AssetRewards) => {
    const transferNftCondition = sdk.keeper.conditions.transferNftCondition;

    const transferNftConditionContractReceipt = await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, accountWallet);

    Logger.log(`Contract Receipt for approved transfer NFT: ${transferNftConditionContractReceipt}`);

    const gateawayContractReceipt = await sdk.nfts.setApprovalForAll(gatewayAddress, true, accountWallet);

    Logger.log(`Contract Receipt for approved gateway: ${gateawayContractReceipt}`);


    const ddo = await sdk.nfts.createWithRoyalties(
      metadata,
      accountWallet,
      BigNumber.from(100),
      royaltyAttributes,
      assetRewards,
      BigNumber.from(1),
      "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
      true,
    );

    return ddo;
  }

  const onPublish = async () => {
    try {
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, account.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
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

      await loginMarketplace(sdk, account);
      
      const response = await publishNFT1155(config.gatewayAddress, account, metadata, royaltyAttributes, assetRewards);

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <UiLayout>
        {account ? 
          <>
            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
            <UiText>{account.getId()}</UiText>
          </> : 
          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>
        }

        {walletAddress && !ddo.id && (
          <PublishAsset onPublish={onPublish} />
        )}

        {ddo?.id && (
          <>
              <SingleAsset ddo={ddo}/>
              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>
          </>
        )}

      </UiLayout>
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

  &__mint {
    margin-left: 10px;
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
The `src/indes.tsx` file call the `App` component with the configurations set

```tsx
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
import '@nevermined-io/styles/lib/esm/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { appConfig } from './config';
import App from './app';

ReactDOM.render(<App config={appConfig}/>, document.getElementById('root') as HTMLElement);
```
