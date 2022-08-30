[@nevermined-io/catalog-core](../README.md) / [Exports](../modules.md) / SubscribeModule

# Interface: SubscribeModule

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

## Table of contents

### Properties

- [paymentEvents](SubscribeModule.md#paymentevents)
- [transferEvents](SubscribeModule.md#transferevents)

## Properties

### paymentEvents

• **paymentEvents**: (`cb`: (`events`: [`EventResult`](../modules.md#eventresult)[]) => `void`) => [`ContractEventSubscription`](ContractEventSubscription.md)

#### Type declaration

▸ (`cb`): [`ContractEventSubscription`](ContractEventSubscription.md)

Subscribe a `payment` event and execute callbacks once that this event is listened

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`events`: [`EventResult`](../modules.md#eventresult)[]) => `void` | Callback event |

##### Returns

[`ContractEventSubscription`](ContractEventSubscription.md)

return the `payment` event with a functionality to unsubscribe

#### Defined in

[src/types/index.ts:617](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L617)

___

### transferEvents

• **transferEvents**: (`cb`: (`events`: [`EventResult`](../modules.md#eventresult)[]) => `void`, `nftType?`: [`NftTypes`](../modules.md#nfttypes)) => [`ContractEventSubscription`](ContractEventSubscription.md)

#### Type declaration

▸ (`cb`, `nftType?`): [`ContractEventSubscription`](ContractEventSubscription.md)

Subscribe a `transfer` event and execute callbacks once that this event is listened

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`events`: [`EventResult`](../modules.md#eventresult)[]) => `void` | Callback to execute |
| `nftType?` | [`NftTypes`](../modules.md#nfttypes) | NFT asset type which can be 721 or 1155 |

##### Returns

[`ContractEventSubscription`](ContractEventSubscription.md)

return the `transfer` event with a functionality to unsubscribe

#### Defined in

[src/types/index.ts:624](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L624)
