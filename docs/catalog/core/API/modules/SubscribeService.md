# Namespace: SubscribeService

## Table of contents

### Functions

- [useSubscribeToPaymentEvents](SubscribeService.md#usesubscribetopaymentevents)
- [useSubscribeToTransferEvents](SubscribeService.md#usesubscribetotransferevents)

## Functions

### useSubscribeToPaymentEvents

▸ **useSubscribeToPaymentEvents**(): `Object`

Subscribe to payment events

**`Example`**

```typescript
const MyComponent = () => {
 const { paymentEvents } = SubscribeService.useSubscribeToPaymentEvents();

 return (
  <>
     {paymentEvents.map((p) => {
         return (
             <div>
                 <div>{p.id}</div>
                 <div>{p._did}</div>
                 <div>{p._agreementId}</div>
                 <div>{p._receivers}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Returns

`Object`

Array of events with method `unsubscribe` in order to stop listening specific event

| Name | Type |
| :------ | :------ |
| `paymentEvents` | `EventResult`[] |

#### Defined in

[services/subscribe.ts:35](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/subscribe.ts#L35)

___

### useSubscribeToTransferEvents

▸ **useSubscribeToTransferEvents**(`nftType?`): `Object`

Subscribe to nft transfer events

**`Example`**

```tsx
const MyComponent = () => {
 const { transferEvents } = SubscribeService.useSubscribeToTransferEvents();

 return (
  <>
     {transferEvents.map((p) => {
         return (
             <div>
                 <div>{p.id}</div>
                 <div>{p._did}</div>
                 <div>{p._agreementId}</div>
                 <div>{p._receivers}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nftType` | `ERCType` | `1155` |

#### Returns

`Object`

Array of events with method `unsubscribe` in order to stop listening specific event

| Name | Type |
| :------ | :------ |
| `transferEvents` | `EventResult`[] |

#### Defined in

[services/subscribe.ts:93](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/subscribe.ts#L93)
