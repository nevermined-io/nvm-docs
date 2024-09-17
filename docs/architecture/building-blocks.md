---
sidebar_position: 4
description: Nevermined Building Blocks
---

# Building Blocks

Nevermined protocol allows to build builder where different entities can share and monetize
their data and make an efficient and secure usage of it even with untrusted parties.

Nevermined packages, automate and augment multiple independent open and private
software components providing a fully functional data ecosystem adapted to the
requirements of the enterprises.

The complete technical solution includes the following components:

![Nevermined components](images/layers_and_blocks.png)

## Smart Contracts

[Nevermined Smart Contracts](https://github.com/nevermined-io/contracts/)
provide the core of the Data Ecosystem. Using an Ethereum network and
implemented in Solidity, the Smart Contracts allow the creation of complex interaction between parties around digital assets.

## Decentralized Autonomous Organization framework (DAOs framework)

The control of the Smart Contracts (deployment, upgrade) is typically a
responsibility of the Governance committee of the Digital Ecosystem.
The team responsible for the definition, deployment and maintenance of the whole
 system.

 A typical user of the ecosystem doesn’t need to know anything about the
 underlying Smart Contracts or Blockchain. All the business logic is
 encapsulated in the client libraries so typically there is no direct
 integration between the users and the Smart Contracts.  

Nevermined provides a [DAOs contracts framework](https://github.com/nevermined-io/governance-contracts)
that allows the governance of a digital ecosystem.

## Marketplace API

The [Nevermined Marketplace API](https://github.com/nevermined-io/marketplace-api)
is an Open Source micro-service that allows to store Assets metadata in an
off-chain repository. It provides a plugins system allowing to persist the
Metadata in ElasticSearch. The Marketplace API exposes the functionality
 for searching metadata using multiple filters and parameters.

The Marketplace API is typically the backend used for Data Marketplaces or Data
Catalogs for storing all the Metadata of a specific domain related to a
Marketplace or Catalog. It also provide the management of typical capabilities
you can find in a Marketplace (user profiles, bookmarks, etc).

Nevermined provides the package and automation of the micro-service allowing an
easy integration and deployment in cloud providers and Kubernetes clusters.

### Nevermined Node

The [Nevermined Node](https://github.com/nevermined-io/node) is an
Open Source micro-service in the Nevermined ecosystem. The Node is the
technical component executed by Data/Compute Providers allowing them to provide
extended data services (e.g. storage and compute). The Nevermined Node, as
part of the Publisher ecosystem, includes the credentials to interact with the
infrastructure (initially cloud, but could be on-premise).

Nevermined provides the package and automation of the micro-service allowing an
easy integration and deployment in cloud providers and Kubernetes clusters.

#### Nevermined Proxy

The Nevermined Proxy implements a HTTP proxy that protect access to AI Agents and
 upstream HTTP services. With the integration of the Proxy, the AI Agents can
 protect the access to their endpoints and only the users with the proper credentials
 (via payment plan purchase) can access to the services.

:::info
Differently to other integrations, the Proxy doesn't require any software modification in the AI Agent or service protected.
:::

### Software Development Kits (SDK's)

SDK's are the software libraries encapsulating the Nevermined business logic. They are used to interact with all the
components & APIs of the system.
Nevermined provides 3 different Open Source implementation of SDK's allowing the integration and implementation of
complex use cases on top of the Nevermined Data Ecosystems.

- [Python Payments Library]((https://pypi.org/project/payments-py/)) - Library oriented to Python AI Builders to facilitate the
  integration of the Payments, Registration, Access and Discovery functionalities in their AI Agents.
  [See an integration tutorial](https://docs.nevermined.app/docs/tutorials/integration/python-integration).
- [Javascript Payments Library](https://github.com/nevermined-io/payments) - Library oriented to AI Builders (using Typescript/Javascript) to facilitate the
  integration of the Payments, Registration, Access and Discovery functionalities in their AI Agents.
  [See an integration tutorial](https://docs.nevermined.app/docs/tutorials/integration/nextjs-react-payments).  
- [Nevermined SDK JS](https://github.com/nevermined-io/sdk-js) - JavaScript version of the Nevermined SDK to be
  integrated with front-end applications. This library is oriented to build complex applications like Marketplaces, dApps, etc. The [Nevermined App](https://nevermined.app/) is an example of a complex application built using the SDK.

:::info
Libraries are Open Source and available in NPM and PyPi repositories.
:::


### Command Line Interface (CLI) tool

The [Nevermined CLI](https://github.com/nevermined-io/cli) tool enables to connect to the Nevermined Data Ecosystem
and interact with it using the command line interface. It orchestrates all the underlaying components allowing to:

- Publish assets
- Minting NFTs
- Get access to assets
- Search and discovery
- Running remote compute jobs
- Checking the state of Service Agreements
- Review Nevermined deployments
- Manage accounts/wallets
- Some additional functionalities
