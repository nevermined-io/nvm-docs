---
sidebar_position: 1
---

# What are Nevermined React Components?

The Nevermined React Components is a library of packaged Nevermined functions, tools and commands making easier to add web3 capabilities to any existing React application.

Building web3 applications is a challenging and multi-layer process. Building robust scenarios where content and service providers and end users can interact  in a secure and trusted way adds another layer of complexity. Nevermined provides a protocol where they can interact and generate value around digital assets, allowing marketplaces or web applications builders to create new use cases built on top of these capabilities.

To provide this level of interaction in a secure and trustless way, there are some levels of integration with the different components of Nevermined. The  **Nevermined React Components** outlines this process, covering all basic steps and requirements. 

Ultimately, the main goal of Nevermined is to provide the building blocks to create these level of robust applications while eliminating some of the complexity of blockchain.

One of Nevermined's and the React components's key characteristics is that we are non-custodial. Users retain full ownership of their private keys and credentials. This allows us to achieve complete decentralization, enabling the design and deployment of use cases via the Catalog that support peer to peer interaction between content providers/producers and end users without a central entity.

The React components consists of two modules:

### [Catalog](./catalog/README.md)

All the Nevermined functionalities split in the `Catalog provider` and `Services`.

### [Providers](./providers/README.md)

A package facilitating the interaction with Web3 providers like Metamask.

## React Framework

Nevermined is framework-agnostic, but we created this catalog on top of React to facilitate the integration for React builders. The same level of use cases/applications can be delivered in any other framework using the [Nevermined SDK](https://docs.nevermined.io/docs/nevermined-sdk/).

import DocCardList from '@site/src/components/docCard/docCardList';

<DocCardList />
