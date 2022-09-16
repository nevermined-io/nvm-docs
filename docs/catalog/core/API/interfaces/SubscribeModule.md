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

• **paymentEvents**: (`cb`: (`events`: `EventResult`[]) => `void`) => `ContractEventSubscription`

#### Type declaration

▸ (`cb`): `ContractEventSubscription`

Subscribe a `payment` event and execute callbacks once that this event is listened

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`events`: `EventResult`[]) => `void` | Callback event |

##### Returns

`ContractEventSubscription`

return the `payment` event with a functionality to unsubscribe

#### Defined in

[types/index.ts:617](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L617)

___

### transferEvents

• **transferEvents**: (`cb`: (`events`: `EventResult`[]) => `void`, `nftType?`: `NftTypes`) => `ContractEventSubscription`

#### Type declaration

▸ (`cb`, `nftType?`): `ContractEventSubscription`

Subscribe a `transfer` event and execute callbacks once that this event is listened

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`events`: `EventResult`[]) => `void` | Callback to execute |
| `nftType?` | `NftTypes` | NFT asset type which can be 721 or 1155 |

##### Returns

`ContractEventSubscription`

return the `transfer` event with a functionality to unsubscribe

#### Defined in

[types/index.ts:624](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L624)
