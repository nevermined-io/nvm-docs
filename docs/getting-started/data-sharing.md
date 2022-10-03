---
sidebar_position: 5
description: Nevermined allows data sharing between untrusted parties
sidebar_custom_props:
  iconStaticFolderPath: nevermined/doc-card-data-sharing.svg
---

# Data Sharing

In the upcoming evolution of the Internet of Things (IoT) towards Web3, it is anticipated that billions of devices, networks and ecosystems will be connected to the Internet. Many of these 
are capable of collecting information from individual users and their physical surroundings. They are also capable of taking smart actions, which are usually from a backend cloud server in the IoT system. While web3 aims toward a more connected and smarter world, this pervasive large-scale data collection, storage, sharing, and analysis raise many privacy concerns.

In the current web2 ecosystem, service providers have full control of the collected user data. While the original intended use of such data is primarily for smart IoT systems and device control, the data is often used for other purposes not explicitly consented to by the users.

Nevermined proposes a novel data sharing and storage framework that aims to empower users with full privacy control of their data. Our framework seamlessly integrates smart contracts, Data In Situ Computation, Federated Learning and Provenance based data integrity checking and verification in cloud environments for the use of Service Execution Agreements (SEAs) between parties. 

The main actors in the ecosystem of Nevermined are:

* **PUBLISHERS** - Provide access to assets and/or services
* **CONSUMERS** - Want to get access to assets and/or services
* **MARKETPLACES** - Facilitate the trading between Publishers and Consumers

By offering new mechanisms for sharing and securing data access and usage with smart contracts, Nevermined can allow data owners to control who can have what access to their data, and be able to maintain a trustworthy record of their data usage. Using remote attestation and Digital Asset registration and decentralized discovery (via DID), Nevermined ensures that data is only used for the intended purposes approved by the data owner. Our approach represents a significant departure from traditional privacy protections which often rely on cryptography and pure software-based secure computation techniques. Addressing the fundamental problem of data us- age control, Data In Situ Computation will become the cornerstone for the decentralized market of private information.

The data owner should not only be able to control who can have what access to his/her data, but also be ensured that the data is used only for the intended purposes. To realize the envisioned functionality of Nevermined, there are several key requirements:

* Users shall be able to define their data access policy concerning who they share data with at what time for what purpose and at what price. The framework shall also support rich encoding of different data utilization conditions.

* There shall be strict enforcement of the data policy set forth by the data owner. Each usage of the user data shall have verified proof that it is compliant with the policy and data content is well protected during the utilization.

* Each data usage shall be recorded on a platform that offers non-repudiation and transparency.

Nevermined proposes a solution for data ecosystems with an alternative for tracking, managing and especially enforcing data sharing using smart contracts and W3C Provenance. We design a framework that generates smart contracts from parameters based on data-sharing agreements. Combining NFTs with integrity proofs, smart contracts and the W3C Provenance standard creates an unparalleled level of transparency in tracking assets and agreements through the supply chain.

## How this works?

Most of the interactions between users of Nevermined requires the management of access control to digital assets. Simply put, this means that for something I own, I want to give you some permissions to do something under some circumstances. These are all parameters of which I control.

This conceptually is very abstract but is extremely flexible at the same time. It means that depending on the problem I want to articulate and manage, different access control possibilities can be supported support across any use case, including the following:

:::info Data Sharing
I have data, and I want to allow anyone paying me X amount to get access to my data.
:::

Or:

:::info Access to Exclusive Content
I’m an artist, and for all my customers buying my art, I’m going to issue a Non-Fungible Token, or NFT that allows them to get access to new and exclusive content.
:::

For example, in the drug shipping use case, the manufacturer may allow certain freight forwarders to access the manufacturer’s temperature gauge data embedded in the drug shipment. 

In this case, access control would allow for accepted freight forwarders to access the data remotely to determine if the shipment’s temperature has gone above a certain threshold during the course of shipping.

### Provenance

Provenance allows us to understand the context in which “something” was created, how it is used and by whom, and how ownership is transferred or delegated. 

Nevermined implements internally a provenance track record that records all the
relevant interactions happening around digital assets. Things like:

* A digital asset is regitered into Nevermined by a user
* NFTs attached to a digital asset are minted or burned
* Service agreements are created and or executed
* Assets or NFTs are accessed or used
* etc

W3C Provenance specification defines, in a use case-independent way, how provenance can be registered and used. This, combined with the utilization of a blockchain network, provides a transparent and unique source of truth for data ecosystems.

For example, in the drug shipping use case, combining NFTs with integrity proofs, plus the W3C Provenance standard, creates an unparalleled level of transparency in tracking the shipment through the supply chain.
