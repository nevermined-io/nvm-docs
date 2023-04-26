# Namespace: EventService

## Table of contents

### Functions

- [getAssetRegisterEvent](EventService.md#getassetregisterevent)
- [getTransfers](EventService.md#gettransfers)
- [getUserFulfilledEvents](EventService.md#getuserfulfilledevents)
- [getUserRegisterEvents](EventService.md#getuserregisterevents)

## Functions

### getAssetRegisterEvent

▸ **getAssetRegisterEvent**(`sdk`, `did`): `Promise`<[`RegisterEvent`](../interfaces/RegisterEvent.md)[]\>

Get asset registering event

**`Example`**

```tsx
import { Catalog, EventService } from "@nevermined-io/catalog";
import { useState } from "react";

const MyComponent = () => {
 const [events, setEvents] = useState<Transfer[]>([]);
 const { sdk } = Catalog.useNevermined();

 useEffect(() => {
     const handler = async () => {
          const t: Transfer[] = await EventService.getAssetRegisterEvent(sdk, receiverAddress)
          setTransfers(t)
     }
 }, [setEvents, sdk]);

 return (
  <>
     {events.map((p) => {
         return (
             <div>
                 <div>{p._did}</div>
                 <div>{p._owner}</div>
                 <div>{p._lastUpdatedBy}</div>
                 <div>{p._blockNumberUpdated}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Nevermined instance |
| `did` | `string` | assets did |

#### Returns

`Promise`<[`RegisterEvent`](../interfaces/RegisterEvent.md)[]\>

#### Defined in

[services/event.ts:261](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/event.ts#L261)

___

### getTransfers

▸ **getTransfers**(`sdk`, `receiver`, `nftType?`): `Promise`<[`Transfer`](../interfaces/Transfer.md)[]\>

Get recieved transfers by address and nft type

**`Example`**

```tsx
import { Catalog, EventService } from "@nevermined-io/catalog";
import { useState } from "react";

const MyComponent = () => {
 const [transfers, setTransfers] = useState<Transfer[]>([]);
 const { sdk } = Catalog.useNevermined();

 useEffect(() => {
     const handler = async () => {
          const t: Transfer[] = await EventService.getTransfers(sdk, receiverAddress)
          setTransfers(t)
     }
 }, [receiverAddress, sdk]);

 return (
  <>
     {transfers.map((p) => {
         return (
             <div>
                 <div>{p.id}</div>
                 <div>{p._did}</div>
                 <div>{p._agreementId}</div>
                 <div>{p._receiver}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sdk` | `Nevermined` | `undefined` | Nevermined instance |
| `receiver` | `string` | `undefined` | Transfers receiver address |
| `nftType` | `ERCType` | `1155` | Choose the NFT type. Default value 1155 |

#### Returns

`Promise`<[`Transfer`](../interfaces/Transfer.md)[]\>

#### Defined in

[services/event.ts:49](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/event.ts#L49)

___

### getUserFulfilledEvents

▸ **getUserFulfilledEvents**(`sdk`, `account`): `Promise`<[`FulfilledOrders`](../interfaces/FulfilledOrders.md)[]\>

Get fullfilled nft transfer events by user address

**`Example`**

```tsx
import Catalog from "@nevermined-io/catalog";
import { useState } from "react";

const MyComponent = () => {
 const [events, setEvents] = useState<Transfer[]>([]);
 const { getUserFulfilledEvents } = Catalog;
 const { sdk } = Catalog.useNevermined();

 useEffect(() => {
     const handler = async () => {
          const t: Transfer[] = await getUserFulfilledEvents(sdk, receiverAddress)
          setTransfers(t)
     }
 }, [setEvents, sdk]);

 return (
  <>
     {events.map((p) => {
         return (
             <div>
                 <div>{p.id}</div>
                 <div>{p._documentId}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Nevermined instance |
| `account` | `string` | user address |

#### Returns

`Promise`<[`FulfilledOrders`](../interfaces/FulfilledOrders.md)[]\>

#### Defined in

[services/event.ts:121](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/event.ts#L121)

___

### getUserRegisterEvents

▸ **getUserRegisterEvents**(`sdk`, `owner`): `Promise`<[`RegisterEvent`](../interfaces/RegisterEvent.md)[]\>

Get nft creating events registered by user

**`Example`**

```tsx
import { Catalog, EventService } from "@nevermined-io/catalog";
import { useState } from "react";

const MyComponent = () => {
 const [events, setEvents] = useState<Transfer[]>([]);
 const { sdk } = Catalog.useNevermined();

 useEffect(() => {
     const handler = async () => {
          const t: Transfer[] = await EventService.getUserRegisterEvents(sdk, receiverAddress)
          setTransfers(t)
     }
 }, [setEvents, sdk]);

 return (
  <>
     {events.map((p) => {
         return (
             <div>
                 <div>{p.id}</div>
                 <div>{p._did}</div>
                 <div>{p._owner}</div>
                 <div>{p._lastUpdatedBy}</div>
                 <div>{p._blockNumberUpdated}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Nevermined instance |
| `owner` | `string` | user address of events publisher |

#### Returns

`Promise`<[`RegisterEvent`](../interfaces/RegisterEvent.md)[]\>

#### Defined in

[services/event.ts:190](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/event.ts#L190)
