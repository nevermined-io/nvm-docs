---
sidebar_position: 1
---

# What is the Nevermined Catalog?

The Nevermined Catalog is a library of packaged Nevermined functionalities making easier to add web3 capabilities to any existing React application.

Building web3 applications is tough, and building robust scenarios where content providers and final users can interact between them in a secure and trusted way is way more complecated even. Nevermined provides a protocol where they can interact and allow marketplaces or other web applications builders to offer use cases built on top of these capabilities.

To provide this level of interaction in a secure way, there are some level of integration with the different components of Nevermined. To facilitate that part we built this **Nevermined Catalog**

The main intention of this project is provide the building blocks to create these level of robust applications without some of the complication of blockchain.

Some important characteristic of the Nevermined and by extension by the Catalog is you always own your keys/credentials. So with Nevermined you can implement fully functional use cases totally decentralized. This means the use cases that can be built via the Catalog allow the peer to peer interaction between content providers/producers and final users without a central entity.

The Catalog is splitted currently in two modules:

### [Core](./core/README.md)

Includes all the Nevermined functionalities splitted in the `Catalog provider` and `Services`.

### [Providers](./providers/README.md)

The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask.

## React Framework

Nevermined is framework agnostic, but we created this catalog on top of React to facilitate the integration of Nevermined to React builders. The same level of use cases/applications can be delivered in any other framework using the [Nevermined SDK](https://docs.nevermined.io/docs/nevermined-sdk/).

import DocCardList from '@site/src/components/docCard/docCardList';

<DocCardList />
