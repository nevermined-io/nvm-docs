---
sidebar_position: 2
description: Nevermined Production Environments
---

# Production environments

## Network Fee

The usage of a Nevermined environment requires to pay a fee when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the [Network Fees section](network-fees.mdx).

:::info

The network fee in Nevermined production environments is **1%** and the receiver of that fee is the **0x35aFA2408BB4f479996fafb2bB3A183ec064C265** address.

:::

## Public Polygon environment

- *`public-v2-mumbai`*: Public environment in Polygon. Use this if you want to integrate with Nevermined in Polygon for production.


### Version 2.1.0

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-matic | Polygon Matic | 2.1.0 | public | Node | https://node.matic.public.nevermined.network | |
| public-nvm-v2-matic | Polygon Matic | 2.1.0 | public | Marketplace API | https://marketplace-api.matic.public.nevermined.network | |

All the contract events are exposed via [The Graph](https://thegraph.com/). You can find all the `Polygon Matic` Nevermined Subgraphs here (search by Nevermined):

https://thegraph.com/hosted-service

For example for Nevermined Polygon Matic:

https://thegraph.com/hosted-service/subgraph/nevermined-io/publicmaticv2neverminedtoken


### Version 2.0.5

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-v2-mumbai | Mumbai | 2.0.5 | public | Node | https://node.public.nevermined.network | |
| public-v2-mumbai | Mumbai | 2.0.5 | public | Marketplace API | https://marketplace-api.public.nevermined.network | |
| public-v2-mumbai | Mumbai | 2.0.5 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |
