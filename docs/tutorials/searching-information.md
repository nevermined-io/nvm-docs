---
sidebar_position: 15
description: What information is available in Nevermined, and how to find it
---

# Searching information in Data Marketplaces

Nevermined allows the creation of networks where multiple use cases can be built. The modular architecture of Nevermined allows that using the deployment of Smart Contracts, to have independent "domains" or "applications" using the same contracts.

As we detailed in the [Nevermined Data page](../architecture/nevermined-data.md) there is different kind of information generated in a Nevermined about the assets metadata and all the transactions happening in the Smart Contracts.

This information can be provided by the Marketplace API (off-chain Metadata) or the Graph (events emitted by Nevermined Contracts).

Here you can find a list of the most relevant search queries you can run:

## Off-chain information: Metadata

The [Marketplace API](../architecture/marketplace-api/) uses [Elastic Search](https://elastic.co/) to store the assets Metadata and some other Marketplace information (like bookmarks, user profiles, etc). The Marketplace API exposes an interface that allows to send complex queries using the Elastic search native format.

:::tip

You can find a full reference of the Elastic Search search options in their [search documentation](https://www.elastic.co/guide/en/elasticsearch/reference/7.13/search-search.html).

:::

All the Metadata search queries can be sent using `HTTP POST` to the endpoint: `http://marketplace-api/api/v1/metadata/assets/ddo/query`

The following queries can be sent to the [Marketplace API](../architecture/marketplace-api/):

### Search by asset name

The [main metadata attributes](../architecture/specs/Spec-METADATA#main-attributes) (like name, author, description, etc) are under the `service.attributes.main` object in the DDO/Metadata object. So for searching all the assets with a certain name you can run a query like this:

```json
{
    "query_string": { 
        "query": "*My Search Query*", 
        "fields": ["service.attributes.main.name"] 
    }
}
```

### Search by additional information

The [Additional Information](../architecture/specs/Spec-METADATA.md#additional-attributes) section is an entry into the DDO/Metadata document where users can specify a free range of attributes. They can be domain specific, and the the marketplace can be used to search accross them. Things like `categories`:

```json
{
    "match": {
      "service.attributes.additionalInformation.categories": "general"
    }
}
```

### Search by price range

The price is an attribute that is included in each of the services exposed in an asset. It is included as part of the `service.attributes.main` object. So to run a search using a range of prices could be something like this:

```json
{
    "range": {
        "service.attributes.main.price": {
            "gte": "0",
            "lte": "500"
        }
    }
}
```

### Sorting and paginating

All the search queries can include sorting and pagination attributes:

```json
{
    "query_string": { 
        "query": "*My Search Query*", 
        "fields": ["service.attributes.main.name"] 
    },
    "offset": "100",
    "page": "1",
    "sort": {
        "created": "asc"
    }
```

## On-chain information: Smart Contracts

The Nevermined Smart Contracts emit events when something is happening (typically a change of internal state). We developed some [Nevermined Subgraphs](https://github.com/nevermined-io/subgraph/) that integrated with the [The Graph Protocol](https://thegraph.com/) allows the indexing of them for further searching. The different Nevermined Subgraphs are deployed in all the Nevermined public deployments. The Nevermined Subgraps expose a GraphQL interface that allows to send complex queries to fetch any information about what's happening in the Smart Contracts side.

:::tip

You can find a full reference of the The Graph search options in their [search documentation](https://thegraph.com/docs/en/querying/querying-from-an-application/).

:::

Here you can find a list of the most relevant queries you can send to the Nevermined subgraphs:

### On-chain information of an asset published

Here you can see the **AssetRegistered query** about all the on-chain data emitted when an asset is registered:

```graphql
query AssetRegistered {  
  didattributeRegistereds(
    where: {
      _did: "0xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5"
    }
  ){    
      id
      _did
      _owner
      _checksum,
      _value
      _lastUpdatedBy,
      _blockNumberUpdated    
  }
}
```

### Assets published for a user

In **UserPublishedAssets query** you can see all the information of assets published by a user:

```graphql
query UserPublishedAssets {  
  didattributeRegistereds(
    where: {
      _owner: "0x322718d8defb7a58eddab138dededc582efa617f"
    }
  ){    
      id
      _did
      _owner
      _checksum,
      _value
      _lastUpdatedBy,
      _blockNumberUpdated    
  }
}
```

### Assets purchased by a user

In **UserPurchasedAssets query** you can see all the information of assets purchased by a user:

```graphql
query UserPurchasedAssets {  
  fulfilleds(
    where: {
      _grantee: "0x827c6546ca48ee9a33efee3342292e61c6ea6507"
    }
  ){    
      id
    	_agreementId
    	_documentId
    	_grantee
    	_conditionId
  }
}
```

### Downloads from a user

In **UserDownloads query** you can see all the assets downloaded for a specific user:

```graphql
query UserDownloads {  
  useds(
    where: {
      _agentId: "0x827c6546ca48ee9a33efee3342292e61c6ea6507"
    }
  ){    
      id
      _did
      _agentId
      _activityId
      provId
      _attributes
      _blockNumberUpdated    
  }
}
```

### Transactions associated to an asset

In **AssetProvenance query** you can get all the events associated with an asset:

```graphql
query AssetProvenance {  
  provenanceAttributeRegistereds(
    where: {
      _did: "0xefdaacb570370f87f9a850c3e91e106e3ec17acee582bbba47cc03e7554616e5"
    }
  ){    
      id
      _did
      _agentId
      _activityId
      _attributes
      _blockNumberUpdated    
  }
}
```
