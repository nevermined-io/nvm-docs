---
sidebar_position: 1
description: The API allowing to manage Marketplace common functionalities
---

# Marketplace API

The Nevermined Marketplace API is an **Open Source** micro-service that allows to manage all the typical metadata required to build a marketplace or application requiring to store data about assets, their users and some of their interactions.

The Marketplace API is an off-chain repository having the main responsibility of manage digital assets Metadata.

The Marketplace API stores all the data in ElasticSearch. And exposes the functionality for searching any data stored via a HTTP REST API using multiple filters and parameters.

The Metadata API is typically the backend used for Data Marketplaces for storing all the Metadata of a specific Marketplace.

## Data managed by the API

The Marketplace API has different indexes to store information about different topics.

### Assets Metadata

The **main** objective of the Marketplace API has been traditionally to manage all the off-chain information related with digital assets. This digital assets are registered in a Nevermined ecosystem via the Smart Contracts, and in the Marketplace API is stored metadata like title, description, tags, price, etc.

The Metadata ontology used in Nevermined and stored in the service is specified in the [Metadata Spec](../specs/Spec-METADATA.md).

Regarding assets metadata the Marketplace API allows to:

* Create assets metadata
* Update assets metatada by the creator
* Delete assets metatada by the creator
* Search metadata using different filters and sorting options

:::info

You can find more information about the [data stored in the Marketplace API](../nevermined-data.md) and how to query this data in the [search tutorial](../../tutorials/searching-information.md).

:::

### Bookmarks

Users in Marketplaces normally want to save some of their favorite elements in the marketplace. This allows saving NFTs, assets, reviews, etc. This module of the API provides the endpoints to manage this kind of bookmark actions in a generic way.

Regarding bookmarks the Marketplace API allows to:

* Create a bookmark
* Get the bookmarks of a user
* Delete a bookmark from the creator of the bookmark
* Update the bookmark


### User Profiles

Users in Marketplaces most of the times require some level of authorization and store of metadata about the user owning an account. This can include things like name, email and some other personal information. This module of the API provides the endpoints to manage user profiles information in a generic way.

Regarding user profiles the Marketplace API allows to:

* Create a user profile
* Get the user profile of a user
* Delete a user profile
* Update the user profile
* Get the user profile associated to an address

### Permissions

The Marketplace API includes a generic module to manage Marketplace permissions. Regarding permissions the Marketplace API allows to:

* Create a permission entry
* Get the permissions of a user
* Delete permissions
* Update user permissions
* Get a permission entry filter by id and/or type

### Services

The Marketplace API includes a generic module to manage services permissions. This is used for managing things like Secondary Markets metadata. Regarding services the Marketplace API allows to:

* Create a service
* Get the service details associated to a service agreement id
* Delete a service
* Update service information
* Search for services entries depending on different parameters

