# Interface: NeverminedProviderContext

Values returns from the main NVM context
Can be consumed after wrapping your project with the catalog(see setup steps)

example:

option 1: const { sdk, sdkError, isLoadingSdk, ...others } = useContext(Catalog.NeverminedContext)
option 2: const { sdk, sdkError, isLoadingSdk, ...others } = Catalog.useNevermined()

## Table of contents

### Properties

- [account](NeverminedProviderContext.md#account)
- [assets](NeverminedProviderContext.md#assets)
- [isLoadingSDK](NeverminedProviderContext.md#isloadingsdk)
- [sdk](NeverminedProviderContext.md#sdk)
- [sdkError](NeverminedProviderContext.md#sdkerror)
- [subscribe](NeverminedProviderContext.md#subscribe)
- [subscription](NeverminedProviderContext.md#subscription)
- [updateSDK](NeverminedProviderContext.md#updatesdk)

## Properties

### account

• **account**: [`AccountModule`](AccountModule.md)

`account` contains all the functionalities to handle authentications and
collections belonged to an account

**`Example`**

Authorization example:
```ts
const Example = (props: ExampleProps) => {
 const { assets, account, isLoadingSDK } = Catalog.useNevermined();
 
 const buy = async () => {
   if (!account.isTokenValid()) {
     await account.generateToken();
   }
 
   (...)
 };
}
```

Check NFT1155 holder example
```ts
const Example = (props: ExampleProps) => {
 const { account, isLoadingSDK } = Catalog.useNevermined();
 const [ownNFT1155, setOwnNFT1155] = useState(false);
 
 useEffect(() => {
   (async () => {
     const response = await account.isNFT1155Holder(ddo.id, walletAddress);
     setOwnNFT1155(response);
   })()
 }, [walletAddress])
 
}
```

#### Defined in

[src/types/index.ts:260](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L260)

___

### assets

• **assets**: [`AssetsModule`](AssetsModule.md)

`assets` contains all the functionalities to handle assets for example get, 
mint, transfer, order or download asset

**`Example`**

Mint an asset example:

```tsx
const Example = () => {
 const { isLoadingSDK, sdk, account, assets } = Catalog.useNevermined();
 const [ddo, setDDO] = useState<DDO>({} as DDO)
 
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
     price: ''
   }
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
 
 const mint = async () => {
   try {
     const publisher = await getCurrentAccount(sdk);
     const rewardsRecipients: any[] = [];
     const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, publisher.getId());
     const assetRewards = new AssetRewards(assetRewardsMap);
     const data: MintNFTInput = {
       metadata,
       publisher,
       cap: 100,
       royalties: 0,
       nftAmount: 1,
       preMint: true,
       erc20TokenAddress: '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e', //usdc token
       //@ts-ignore
       assetRewards
     };
     if (!account.isTokenValid()) {
       await account.generateToken();
     }
     const response = await assets.mint(data);
     setDDO(response);
   } catch (error) {
     console.log('error', error);
   }
 };
 
 return (
   <>
     ...     
   </>
 );
};  
```

#### Defined in

[src/types/index.ts:223](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L223)

___

### isLoadingSDK

• **isLoadingSDK**: `boolean`

True if sdk is loading

#### Defined in

[src/types/index.ts:44](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L44)

___

### sdk

• **sdk**: `Nevermined`

Nevermined sdk instance which has all the core functionalities

#### Defined in

[src/types/index.ts:40](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L40)

___

### sdkError

• **sdkError**: `any`

Error message from sdk

#### Defined in

[src/types/index.ts:42](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L42)

___

### subscribe

• **subscribe**: [`SubscribeModule`](SubscribeModule.md)

`subscribe` contains all the functionalities to handle events

**`Example`**

Subcribe payment event:

```tsx
const Example = () => {
 const { subscribe, subscription, account, isLoadingSDK} = Catalog.useNevermined();
 const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();

 const buy = async () => {
  if (!account.isTokenValid()) {
    await account.generateToken();
  }

  const currentAccount = await getCurrentAccount(sdk);
  const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);
 };

 const stopLog = () => {
   paymentEvent.unsuscribe();
 }

 useEffect(() => {
   if(isLoadingSDK) {
    return;
   }
   (async () => {
     setPaymentEvent(subscribe.paymentEvents((events)=> {
       Logger.log(events)
     }))
   })()
 }, [isLoadingSDK])
 
 return (
   <div>
       <button onClick={buy} disabled={isLoadingSDK}>
         buy
       </button>
       <button onClick={stopLog} disabled={isLoadingSDK}>
         Stop the logs
       </button>
   </div>
 );
}
```

#### Defined in

[src/types/index.ts:124](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L124)

___

### subscription

• **subscription**: [`SubscriptionActions`](SubscriptionActions.md)

`subscription` contains all the functionalities to handle asset subscritions by payment

**`Example`**

Buy subscription example

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
   const response = await subscription.buySubscription(ddo.id, currentAccount, owner, 1, 1155);
   setIsBought(response);
 };
 
 const download = async () => {
   await assets.downloadNFT(ddo.id);
 };
 
 return (
   <div>
     {ownNFT1155 ? (
       <button onClick={download} disabled={isLoadingSDK}>
         Download NFT
       </button>
     ) : (
       owner !== walletAddress ?
       <button onClick={buy} disabled={isLoadingSDK}>
         buy
       </button>
       : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
     )}
   </div>
 );
}
```

#### Defined in

[src/types/index.ts:314](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L314)

___

### updateSDK

• **updateSDK**: (`newConfig`: `Config`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`newConfig`): `Promise`<`boolean`\>

Rebuild Nevermined sdk with new config values

**`Example`**

Update Nevermined sdk again:
```ts
const Example = (props: ExampleProps) => {
 const { updateSDK, isLoadingSDK } = Catalog.useNevermined();

 const reloadSdk = async() => {
    const config = {
        web3Provider: window.ethereum,
        nodeUri: network,
        marketplaceUri,
        gatewayUri,
        faucetUri,
        gatewayAddress,
        secretStoreUri,
        verbose,
        marketplaceAuthToken: Catalog.fetchMarketplaceApiTokenFromLocalStorage().token || '',
        artifactsFolder,
        graphHttpUri: graphUrl
    }

    updateSDK(config)
  } 
} 
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newConfig` | `Config` | Config object to rebuild Nevermined SDK |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/index.ts:75](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L75)
