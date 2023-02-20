---
sidebar_position: 4
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import { DemoCatalog } from '@site/src/components/demo';

# Demo
This demo is based in the code of the [Example](./example.md) section

## Workflow example

The example in the template covers the most commonsly used functionalities to interact with NFT1155.

**Requirements:** The account wallet used for the example must have `Matic` and `USDC`

1. Connect the wallet
2. Click the `Mint` button, approve the transaction and sign the authorization request in the wallet.
3. Once the token is minted the `Mint` button will change to `Download NFT`.
4. Click on `Download NFT` to retrieve the example asset (in this case it is a JSON file)
5. Change the account in the wallet
6. Click on the `Buy` button and approve the transaction and sign the authorization request in the wallet
7. Upon purchasing the token the `Buy` button will change to `Download NFT`
8. Repeat step 4

*Warning:* The data is not static, once the browser is reloaded the workflow example will restart.

## View

<BrowserOnly fallback={<div>Loading demo...</div>}>
 {()=> <DemoCatalog/>}
</BrowserOnly>
