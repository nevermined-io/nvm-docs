# Namespace: Catalog

## Table of contents

### Variables

- [NeverminedContext](Catalog.md#neverminedcontext)

### Functions

- [NeverminedProvider](Catalog.md#neverminedprovider)
- [initializeNevermined](Catalog.md#initializenevermined)
- [useNevermined](Catalog.md#usenevermined)

## Variables

### NeverminedContext

• `Const` **NeverminedContext**: `Context`<[`NeverminedProviderContext`](../interfaces/NeverminedProviderContext.md)\>

#### Defined in

[src/catalog.tsx:560](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/catalog.tsx#L560)

## Functions

### NeverminedProvider

▸ **NeverminedProvider**(`__namedParameters`): `Element`

Nevermined Provider to get the core Catalog functionalities as context

**`Example`**

Initialize NeverminedProvider:
```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from 'test-catalog-core';
import { appConfig } from './config';
import Example from 'examples';
import { MetaMask } from '@nevermined-io/catalog-providers';
import chainConfig, { mumbaiChainId } from './chain_config';

ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <MetaMask.WalletProvider
        externalChainConfig={chainConfig}
        correctNetworkId={mumbaiChainId}
        nodeUri={String(appConfig.nodeUri)}
      >
        <Example />
      </MetaMask.WalletProvider>
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
```
Once it is intialized then we can execute the hook inside components

```ts
const SDKInstance = () => {
 const { sdk, isLoadingSDK } = Catalog.useNevermined();

 return (
   <>
     <div>Is Loading SDK</div>
     <div>{isLoadingSDK ? 'Yes' : 'No'}</div>
     <div>Is SDK Avaialable:</div>
     <div>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</div>
   </>
 );
};
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`NeverminedProviderProps`](../interfaces/NeverminedProviderProps.md) |

#### Returns

`Element`

#### Defined in

[src/catalog.tsx:121](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/catalog.tsx#L121)

___

### initializeNevermined

▸ **initializeNevermined**(`config`): `Promise`<[`GenericOutput`](../interfaces/GenericOutput.md)<`Nevermined`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Returns

`Promise`<[`GenericOutput`](../interfaces/GenericOutput.md)<`Nevermined`, `any`\>\>

#### Defined in

[src/catalog.tsx:54](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/catalog.tsx#L54)

___

### useNevermined

▸ **useNevermined**(): [`NeverminedProviderContext`](../interfaces/NeverminedProviderContext.md)

#### Returns

[`NeverminedProviderContext`](../interfaces/NeverminedProviderContext.md)

#### Defined in

[src/catalog.tsx:562](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/catalog.tsx#L562)
