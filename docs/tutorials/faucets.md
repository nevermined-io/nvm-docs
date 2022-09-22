---
sidebar_position: 6
description: What faucets can you use to start playing with Nevermined environments
---

# Getting tokens from faucets in `testnet` environments

## Native tokens

To interact with a blockchain network you need to have balance in the tokens related with the transaction you need to do. For example if you want write anything on-chain as a result of calling a Smart Contract, you need to pay for that in the specific network native token (`ETH`, `MATIC`, etc). In a testnet, it's possible to get some of them using a public faucet. For example https://faucet.polygon.technology/ or https://faucets.chain.link/. You just need to specify the address of your account and wait to get the funds.

:::info

If you just created your account with the CLI, remember the command told us our account address: `Wallet address: 0x37434d6673ff106446c9224884D54201e5Ae46A4`

:::

## ERC20

If you want to interact with a Nevermined network where the assets published have a price in a ERC20 token (like **USDC**), you need to have balance in that token to purchase these assets. In a testnet you can get some of them in a Faucet too. For example this is the USDC Faucet in `mumbai`:

https://calibration-faucet.filswan.com/#/dashboard

And then you just need to wait a couple of minutes and see if you got balance:

```bash
ncli -n testnet accounts balance

CustomToken with address 0xe11A86849d99F524cAC3E7A0Ec1241828e332C62
===== Account 0x37434d6673ff106446c9224884D54201e5Ae46A4 =====
MATIC Balance: 1.25
Token Balance: 180000000000000000000 USDC
Etherscan Url: https://mumbai.polygonscan.com/address/0x37434d6673ff106446c9224884D54201e5Ae46A4
NFT Balance: 0

```
