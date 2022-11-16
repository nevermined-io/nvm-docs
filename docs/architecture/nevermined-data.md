---
sidebar_position: 4
description: What information is available in Nevermined, and how to find it
---

# Information available in Nevermined

Nevermined allows the creation of networks where multiple use cases can be built. The modular architecture of Nevermined allows that using the deployment of Smart Contracts, to have independent "domains" or "applications" using the same contracts.


:::info SEARCH

You can find some examples about how to query Nevermined data in the [Searching Information Tutorial](../tutorials/searching-information.md).

:::

## Off-chain information: Metadata

For each of this "domains" (Marketplaces, Catalogs or any other web or mobile applications) normally the best approach is to have an independent metadata repository (via the [Marketplace API](../architecture/marketplace-api/)). It allows to these use cases to "customize" the metadata stored of the assets registered in each application.

For example, a music marketplace could require to store metadata information about the duration of a song, if belongs to an album, etc. For a carbon credits application, that information is not relevant but it can require some other metadata like some details of the carbon credit issuer, conditions of the carbon credit, etc.

Because of that, it's always recomended to have different metadata instances (so independent marketplace-api's) sharing the main part of the metadata schema (specified in the [Metadata Spec](../architecture/specs/Spec-METADATA.md)) but with some specific "domain" specific metadata.

In Nevermined to facilitate an efficient search and discovery of assets, the assets metadata provided by the content creators is stored in the different Marketplace API instances.

And the Nevermined components (SDK, Catalog, CLI) allow to build complex queries to discover all the assets registered in the Marketplace API.

Some examples of this are:

* Search by asset name
* Search by additional information (like categories or bespoke attributes)
* Search by price range
* Sorting and paginating
* etc

The Marketplace API uses `Elastic Search` as storage. Elastic is a search engine that exposes all the capabilities to search and discover data using their very rich query language.

## On-chain information: Smart Contracts

The most relevant transactions that happen in Nevermined are managed by the Smart Contracts. They work as a decentralized entity allowing content providers and final users to interact. When any relevant transacion happens in a Nevermined Smart Contract, it emits an event that can be fetched by a third-party application to understand there was a change in state stored by the contracts.

Smart Contracts are good as a trustless transactional system but are not good for search of information. To allow search and discovery over the events happening in the Nevermined Smart Contract we provide an integration with [The Graph](https://thegraph.com/). In simple words, the Graph allow the indexing of events happening on Smart Contracts and expose a `GraphQL` that facilitates to run complex queries on top of the information emitted by the events.

Some examples of information that can be fetched from the events are:

* Assets published for a user
* Assets downloaded or purchased by a user
* Transactions associated to an asset, like how many times an asset was purchased and by who
