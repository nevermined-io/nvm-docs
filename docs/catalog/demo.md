---
sidebar_position: 4
---

import Demo from '@site/src/components/demo'

# Demo
This demo is based in the code of the [Example](./example.md) section

## Workflow example

The example included in the template covers the most used functionalities to work with NFT1155.

**Requirements:** The accounts wallet used for the example need to have `Matic` and `USDC`

1. Connect the wallet
2. Click `Mint` button and approve transactions and sign authorization in the wallet.
3. As an owner once the token is minted the `Mint` button will change to `Download NFT`.
4. Click in `Download NFT` to get the example asset (in this case is a JSON file example)
5. Change the account in the wallet
6. Click in `Buy` button and approve transactions and sign authorization in the wallet
7. As a buyer once the token is bought the `Buy` button will change to `Download NFT`
8. Repeat the step 4

*Warning:* The data is not persistent, once that the browser is reloaded the workflow example starts
from the beginning again

## View

<Demo/>