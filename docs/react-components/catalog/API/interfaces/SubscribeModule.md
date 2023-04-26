# Interface: SubscribeModule

`subscribe` contains all the functionalities to handle events

**`Example`**

Subcribe payment event:

```tsx
const Example = () => {
 const { nfts, subscription, account, isLoadingSDK} = Catalog.useNevermined();
 const { paymentEvent, setPaymentEvent } = useState<ContractEventSubscription>();

 const buy = async () => {
  const currentAccount = await getCurrentAccount(sdk);
  const response = await nfts.access({
     did: ddo.id,
     nftHolder: owner,
     nftAmount: BigNumber.from(1),
     ercType: 1155
  });
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

[types/index.ts:707](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L707)

___

### transferEvents

• **transferEvents**: (`cb`: (`events`: `EventResult`[]) => `void`, `nftType?`: `ERCType`) => `ContractEventSubscription`

#### Type declaration

▸ (`cb`, `nftType?`): `ContractEventSubscription`

Subscribe a `transfer` event and execute callbacks once that this event is listened

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`events`: `EventResult`[]) => `void` | Callback to execute |
| `nftType?` | `ERCType` | - |

##### Returns

`ContractEventSubscription`

return the `transfer` event with a functionality to unsubscribe

#### Defined in

[types/index.ts:714](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L714)
