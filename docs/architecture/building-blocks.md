---
sidebar_position: 4
description: Nevermined Building Blocks
---

# Building Blocks

Nevermined is a digital ecosystems builder where different entities can share and monetize
their data and make an efficient and secure usage of it even with untrusted parties.

Nevermined packages, automate and augment multiple independent open and private
software components providing a fully functional data ecosystem adapted to the
requirements of the enterprises.

The complete technical solution includes the following components:

![Nevermined components](images/nvm_logical_architecture.png)


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

The Node allows also the encryption and decryption of content via:

* RSA
* ECDSA

Nevermined provides the package and automation of the micro-service allowing an
easy integration and deployment in cloud providers and Kubernetes clusters.


#### Compute Endpoints

The [Nevermined Node](https://github.com/nevermined-io/node) is also in charge of
 orchestrating the execution of compute jobs in the premises of
 the Data/Compute Providers.

 In Nevermined the Data/Compute Providers can publish services saying they offer
  compute capabilities to the network on top of their data under some conditions
   for a given price. The Nevermined Node is in charge of, after run all the
   verifications needed, to manage all the infrastructure to move
   the algorithm where the data is and track the execution of these ephemeral
   environments.

The Nevermined Node exposes a set of endpoints in its REST API, that can plugs
different compute backends. At this point in time, integrates
2 different backends:

* **Kubernetes backend** - It allows the orchestration of Kubernetes clusters
for setting up compute workflows in cloud or on-premise environments.  
* **Federated Learning backend** - It manages the execution of FL jobs in
different federated environments. It starts the coordinator and an aggregator
tasks doing the management of the participants as part of a federated job and
the secure aggregation of the trained models.


### Software Development Kits (SDK's)

SDK's are the software libraries encapsulating the Nevermined business logic. They are used to interact with all the
components & APIs of the system.
Nevermined provides 3 different Open Source implementation of SDK's allowing the integration and implementation of
complex use cases on top of the Nevermined Data Ecosystems.

- [Nevermined SDK JS](https://github.com/nevermined-io/sdk-js) - JavaScript version of the Nevermined SDK to be
  integrated with front-end applications.
- [Nevermined SDK PY](https://github.com/nevermined-io/sdk-py) - Python version of the Nevermined SDK to be
  integrated with back-end applications. The primary users are data scientists.


The libraries are packaged and delivered in the typical formats for each language allowing easy integration:

- [NPM Nevermined SDK JS](https://www.npmjs.com/package/@nevermined-io/sdk-js)
- [NPM Nevermined SDK PY](https://pypi.org/project/nevermined-sdk-py/)



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

## Operational

Are the Nevermined tools (not Open Source) allowing to automate, integrate and
operate the rest of the components of the stack. The main tools available are:

### Contract Tools

[Nevermined Contract Tools](https://github.com/nevermined-io/contract-tools).
The Nevermined Zeppelin OS contract management framework. Deploying and
upgrading Smart Contracts in multiple environments is not an easy thing.

The Nevermined Contract Tools allow to deploy and upgrade smart contracts across
 multiple networks (production or testnet, public or private) mitigating the
 risk loose the control of the Smart Contracts or leave them in a non-functional
  way.


### Development and Integration

The [Nevermined Tools](https://github.com/nevermined-io/tools) allows to
execute all the components included in the stack in a local environment.
Nevermined Tools make use of all the containers of the components and
orchestrate the execution of them having a fully functional solution using the
same software that you can find in a production environment.

This approach allows to:

- Develop and integrate functionalities with a lower risk of issues when you
  move to a staging or production environment
- Automate the integration tests in the CI environments having fully functional
  networks used for testing
- Connect to remote blockchain networks from your local environment


## Dictionary of Terms and Components

### Components

* `Nevermined Node` or `Node`
* `Smart Contracts` or `Contracts`


### Configuration

* `web3ProviderUri` or `web3ProviderUrl` - The JSON-RPC or WS url to the blockchain provider. Typically Infura or Alchemy (localhost on local environments)
 
