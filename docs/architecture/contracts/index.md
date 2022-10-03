---
sidebar_position: 1
description: Nevermined Smart Contracts
---

# Smart Contracts

Nevermined Smart Contracts implement the main business logic of all the Nevermined use cases that allow the trustless interaction between users for building digital assets ecosystems.

:::info Open Source

The Smart Contracts are Open Source software built in Solidity, allowing to be deployed in any EVM compatible network.

:::

## Main functionality

The Smart Contracts provide the following functionality:

- **DID Registry** - Nevermined uses W3C Decentralized Identifiers (DID) to identify and register assets in the platform. The DID Registry allows the registering and resolving capabilities of assets across multiple Metadata providers.
- **Service Execution Agreements (SEAs)** - The core engine of the platform. They allow us to define on-chain condition pipelines enabling the users to define complex use cases. The SEAs orchestrate the execution of the Data Access and Data Computation use cases of Nevermined.
- **Conditions** - Small modules that can be plugged into the SEAs allowing to add validations logic
- **Contract Templates** - Pre-defined contract templates implementing some basic use cases
- **ERC20 Token** - Utility token used within the platform allowing to build all the payment mechanisms used across the system.
- **Configuration interface** - Allowing to configure dynamically some of the internal parameters of Nevermined (for example via a DAO)
- **Dispenser** - Contract that allows to dispense token under request
- **Libraries** - Utility libraries used across the contracts

All the previous contracts are Open Source software and provide the core of the Nevermined network.

import DocCardList from '@site/src/components/docCard/docCardList';

<DocCardList />
