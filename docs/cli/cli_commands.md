---
sidebar_position: 4
---

# Commands  Reference

The Nevermined CLI (aka `ncli`) offers multiple options to facilitate the interaction with the Nevermined network.


## CLI General Options

This are the optional parameters that apply to all `ncli` commands:

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **verbose** | `boolean` |  |  `false`  | Run with verbose logging |
| **network** | `string` |  |  `appTesting`  | The network to use |
| **accountIndex** | `string` |  |  `0`  | The index in the derivation path related with the account to use |
| **json** | `boolean` |  |  `false`  | If provided all the output will be in JSON format |




## Module: network
Retrieve information about Nevermined deployments<br/>

**Usage**: $0 network &lt;command&gt; parameters [options]<br/>

Commands:

### list
List all the pre-configured Nevermined networks<br/>

The `ncli` has a pre-configured list of Nevermined environments in different networks. This command lists basic information about all available Nevermined environments.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **hideInternal** | `string` |  &#x2612;  |  `true`  | If true it doesn&#39;t show internal Nevermined networks |


#### Example/s


```bash
ncli network list
```



### status
List all the information about a Nevermined deployment<br/>

If the `ncli` is connected to a Nevermined network correctly this command will return information about that specific network. This will include data about the contracts (version, addresses, etc), Nevermined Node, Marketplace API.<br/>



#### Example/s


```bash
ncli network status
```



### get-config
Get all the Governance configuration about a Nevermined environment<br/>

If the `ncli` is connected to a Nevermined network correctly this command will return information about all the governance parameters related to a Nevermined deployment.<br/>



#### Example/s


```bash
ncli network get-config
```



### set-config [parameter] [newValue]
Allows the governor account to modify the configuration of a running Nevermined blockchain environment. The fees need to be applied with 4 decimal numbers, where 25000 represents a 2.5% fee<br/>

If the `ncli` is connected to a Nevermined network correctly this command will modify the on-chain configuration of a deployment. This function can only be executed by a `governor` account.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **parameter** | `string` |  |    | the name of the governance parameter to configure. Existing options: &#39;fees&#39; OR &#39;governor&#39; |
| **newValue** | `string` |  &#x2611;  |    | the new value to set |



#### Example/s


```bash
ncli network set-config governor 0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c
```


```bash
ncli network set-config fees 10000,0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c
```






## Module: accounts
Management of accounts and the funds associated to them<br/>

**Usage**: $0 accounts &lt;command&gt; parameters [options]<br/>

Commands:

### new
Creates a new account locally<br/>

Nevermined interacts with EVM compatible blockchain networks. To interact with them a user needs to have compatible local credentials (BIP-44). This command creates a local wallet that is Etherum compatible and can be used to interact with Nevermined contracts.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **destination** | `string` |  |  `./account.json`  | The json encrypted file destination. By default ./account.json |
| **password** | `string` |  |    | Password to encrypt the new wallet |


#### Example/s


```bash
ncli accounts new
```



### export
Export the account to a private key file<br/>

Nevermined interacts with EVM compatible blockchain networks. To interact with them a user needs to have compatible local credentials (BIP-44). This command creates a local wallet that is Etherum compatible and can be used to interact with Nevermined contracts.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **destination** | `string` |  |  `./account.json`  | The json encrypted file destination. By default ./account.json |
| **password** | `string` |  |    | Password to encrypt the new wallet |


#### Example/s


```bash
ncli accounts export
```



### list
List all accounts related with your credentials.<br/>

To work prorperly the `ncli` needs to use a wallet to interact with the blockchain network where the Nevermined Smart Contracts are deployed. This wallet is given to the `ncli` with the **seed phrase** exported into the `SEED_WORDS` environment variable. This command list some of the accounts derived from the seed words given by the user.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftTokenAddress** | `string` |  |    | Load NFT (ERC-721) inventory as well |


#### Example/s


```bash
ncli accounts list
```



### balance [address]
Get the balance of a specific address<br/>

Given the public address of an account, this command gets the balance of the Native token where the `ncli` is connected. This is typically `ETH` in Ethereum networks, `MATIC` in Polygon networks, etc.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **address** | `string` |  |    | The address of the account to retrieve the balance |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftTokenAddress** | `string` |  |    | Load NFT (ERC-721) inventory as well |


#### Example/s


```bash
ncli accounts balance 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260
```



### fund [addressToFund]
Funds an account with ERC20 tokens on a testnet<br/>

In the test environments all tokens lack real value. Typically in Nevermined you need to use different type of tokens. The Native token (`ETH`, `MATIC`, etc) to pay for the gas resulting to write into a blockchain network, and optionally with a `ERC20` token to do some payments. This command allows to get some funds in a testnet environment allowing to a user to run different processes on a testnet. This command will not work in production environments where the tokens have actual value.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **addressToFund** | `string` |  |    | The account address to fund |



#### Example/s


```bash
ncli accounts fund 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260
```






## Module: assets
Allows to register and manage assets in a Nevermined network<br/>

**Usage**: $0 assets &lt;command&gt; parameters [options]<br/>

Commands:

### register-asset
Register a new asset<br/>

This command registers a new asset on the Nevermined network. This registered asset is attached to an access service, allowing paying users to access the files attached to the asset.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  &#x2611;  |    | The asset name |
| **author** | `string` |  &#x2611;  |    | The author of the asset |
| **dateCreated** | `string` |  |    | When the asset was created |
| **tags** | `string` |  &#x2612;  |    | Comma separated list of tags |
| **access** | `string` |  |  `direct`  | The type of access control associated to the asset. If `direct` the asset will allow direct payment, if `susbcription` it will allow access via NFT susbcription, if both it will configure both methods. |
| **price** | `number` |  |  `0`  | The asset price |
| **urls** | `array` |  &#x2611;  |    | The asset urls. It can be a comma separated list of urls for multiple files |
| **contentType** | `string` |  &#x2611;  |    | Files content type. Example: application/csv |
| **license** | `string` |  |  `undefined`  | The asset license |
| **password** | `string` |  |    | The password for encrypted files |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **assetType** | `string` |  |  `dataset`  | The type of the asset to register |
| **subscriptionNFT** | `string` |  |    | The address of the subscription NFT used to protect the access to the asset |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli assets register-asset --name &quot;My cool artwork&quot; --author &quot;John Doe&quot; --price &quot;1&quot; --urls https://www.diarioel9dejulio.com.ar/wp-content/uploads/2014/03/Francisco_de_Goya_Saturno_devorando_a_su_hijo_1819-1823.jpg --contentType text/plain
```



### register-algorithm
Register a new algorithm<br/>

This command registers a new algorithm on the Nevermined network. The algorithm can be the representation of a Notebook, python script, etc. This registered asset is attached to an access service, allowing paying users to access the files attached to the asset.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  &#x2611;  |    | The asset name |
| **author** | `string` |  &#x2611;  |    | The author of the asset |
| **dateCreated** | `string` |  |    | When the asset was created |
| **tags** | `string` |  &#x2612;  |    | Comma separated list of tags |
| **access** | `string` |  |  `direct`  | The type of access control associated to the asset. If `direct` the asset will allow direct payment, if `susbcription` it will allow access via NFT susbcription, if both it will configure both methods. |
| **price** | `number` |  |  `0`  | The asset price |
| **urls** | `array` |  &#x2611;  |    | The asset urls. It can be a comma separated list of urls for multiple files |
| **contentType** | `string` |  &#x2611;  |    | Files content type. Example: application/csv |
| **license** | `string` |  |  `undefined`  | The asset license |
| **language** | `string` |  &#x2611;  |    | The programing language of the algorithm |
| **entrypoint** | `string` |  &#x2611;  |    | The entrypoint for running the algorithm. Example: python word_count.py |
| **container** | `string` |  &#x2611;  |    | The docker container where the algorithm can be executed. Example: python:3.8-alpine |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **assetType** | `string` |  |  `algorithm`  | The type of the asset to register |
| **subscriptionNFT** | `string` |  |    | The address of the subscription NFT used to protect the access to the asset |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli assets register-algorithm --name &quot;Test Algorithm&quot; --author &quot;John Doe&quot; --price 0 --language python --entrypoint &quot;python word_count.py&quot; --container python:3.8-alpine --urls https://www.apache.org/licenses/LICENSE-2.0 --contentType text/plain
```



### register-service
Register a new web service<br/>

This command registers a new web service on the Nevermined network. The service can be the representation of any regular Web Service (REST, JSON-RPC, etc).<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  &#x2611;  |    | The asset name |
| **author** | `string` |  &#x2611;  |    | The author of the asset |
| **dateCreated** | `string` |  |    | When the asset was created |
| **tags** | `string` |  &#x2612;  |    | Comma separated list of tags |
| **access** | `string` |  |  `subscription`  | The type of access control associated to the asset. If `direct` the asset will allow direct payment, if `susbcription` it will allow access via NFT susbcription, if both it will configure both methods. |
| **price** | `number` |  |  `0`  | The asset price |
| **urls** | `array` |  &#x2611;  |    | The asset urls. It can be a comma separated list of urls for multiple files |
| **authToken** | `string` |  &#x2612;  |    | Authorization token of the service |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **assetType** | `string` |  |  `service`  | The type of the asset to register |
| **subscriptionNFT** | `string` |  |    | The address of the subscription NFT used to protect the access to the asset |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli assets  --name &quot;My Open AI&quot; --author &quot;John Doe&quot; --subscriptionNFT 0x736DCC96D89cB2F9E2316cD826668f4E1c4861B0 --urls https://api.openai.com/v1/completions --authToken sk-xxxxxx
```



### import [metadata]
Import an asset using the metadata in JSON format<br/>

An asset in the Nevermined network can be described by different level of metadata (title, description, tags, etc). This command registers a new asset importing all this metadata from a JSON file, instead of adding all the information in the command line.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **metadata** | `string` |  |    | The path to the JSON file including the asset metadata |
| **price** | `number` |  &#x2611;  |    | The asset price |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **encrypt** | `boolean` |  |  `false`  | Use encrypted service endpoint |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **access** | `string` |  |  `direct`  | The type of access control associated to the asset. If `direct` the asset will allow direct payment, if `susbcription` it will allow access via NFT susbcription, if both it will configure both methods. |


#### Example/s


```bash
ncli assets import --metadata ./my_artwork_metadata.json
```



### search [query]
Searching for assets in a Nevermined environment<br/>

All user metadata for registering assets in Nevermined can be searched and indexed later. Typically different assets can be organized in independent Marketplaces grouped by topic or domain. This command allows to query one of the Marketplace environments searching for data using a query provided by the user.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **query** | `string` |  |    | The search query |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **offset** | `number` |  |  `10`  | The number of elements to obtain from the search query |
| **page** | `number` |  |  `1`  | The page to show |
| **onlyMetadata** | `boolean` |  |  `false`  | True if we only want to get metadata |


#### Example/s


```bash
ncli assets search &quot;some text&quot;
```



### query [query]
Searching for assets in a Nevermined environment using Elasticsearch query<br/>

All user metadata for registering assets in Nevermined can be searched and indexed later. Typically different assets can be organized in independent Marketplaces grouped by topic or domain. This command allows to query one of the Marketplace environments searching for data using a query provided by the user.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **query** | `string` |  |    | The search query |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **offset** | `number` |  |  `10`  | The number of elements to obtain from the search query |
| **page** | `number` |  |  `1`  | The page to show |
| **onlyMetadata** | `boolean` |  |  `false`  | True if we only want to get metadata |


#### Example/s


```bash
ncli assets query {query}
```



### download [did]
Download an asset owned by me<br/>

When a user publishes content on Nevermined this command downloads the files attached to that asset without going through the service agreements (payment).<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **fileIndex** | `number` |  |  `-1`  | The index of the file to retrieve in the DDO |
| **destination** | `string` |  |  `.`  | Local path where the asset files will be downloaded |


#### Example/s


```bash
ncli assets download  did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f --destination /tmp
```



### order [did]
Order an asset given a DID<br/>

This method makes the payment and retrieve a serviceAgreementId that can be used later or to download the files attached to the asset<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **password** | `string` |  |    | Password for receiving encrypted files |


#### Example/s


```bash
ncli assets order did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f
```



### get-providers [did]
Gets the list of provider addresses granted to an asset<br/>

This method gest the complete list of providers granted to an asset<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |



#### Example/s


```bash
ncli assets get-providers did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f
```



### grant-provider [did] [providerAddress]
Grant an address as provider of an asset<br/>

This method adds an address as provider of an asset<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |
| **providerAddress** | `string` |  |    | The provider address |



#### Example/s


```bash
ncli assets grant-provider did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f 0x736DCC96D89cB2F9E2316cD826668f4E1c4861B0
```



### revoke-provider [did] [providerAddress]
Revokes an address as provider of an asset<br/>

This method revokes an address as provider of an asset<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |
| **providerAddress** | `string` |  |    | The provider address |



#### Example/s


```bash
ncli assets revoke-provider did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f 0x736DCC96D89cB2F9E2316cD826668f4E1c4861B0
```



### get [did]
Order &amp; download or download directly a previously purchased asset<br/>

This commands is the best entry point to access the files attached to a Nevermined asset. Depending on the parameters provided, it allows to order and download the files of an asset, or if this was already purchased, provides the service agreement to download them.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | Agreement Id of a previously purchased asset. If not given a new purchase will be executed |
| **fileIndex** | `number` |  |  `-1`  | The index of the file to retrieve in the DDO |
| **password** | `string` |  |    | Password for receiving encrypted files |
| **destination** | `string` |  |  `.`  | Local path where the asset files will be downloaded |


#### Example/s


```bash
ncli assets get did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f --destination /tmp
```


```bash
ncli assets get did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f --agreementId 0x412dceaa0c5506095daa6b221be93c680e8a49bfd5b63ce54522d85d2b0e1384 --destination /tmp
```



### resolve [did]
Resolve an asset metadata using a given DID<br/>

An asset registered in Nevermined is represented by 2 parts. Metadata stored in a Marketplace and the reference in the Smart Contract. The key to resolve this metadata in a specific marketplace is a unique Decentralize Identifier (DID) for the asset. This command uses that DID to resolve the Metadata in a Marketplace associated to the asset.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |



#### Example/s


```bash
ncli assets resolve did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f
```



### retire [did]
Retire an asset using a given DID<br/>

This command allows to retire an asset from a Marketplace. Only the owner of the asset has the permissions to execute this sucessfully.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |



#### Example/s


```bash
ncli assets retire did:nv:912e7a547bcd675ffbc5d2063ef770e15744029f048f706f6bb0281df4f4700f
```






## Module: agreements
Get information about the Service Execution Agreements<br/>

**Usage**: $0 agreements &lt;command&gt; parameters [options]<br/>

Commands:

### list [did]
Lists all agreements for given DID<br/>

For an asset published in Nevermined, this command returns all agreements created as a result of different users interacting with the asset. Typically this will include purchases made by users.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to list the agreements for |



#### Example/s


```bash
ncli agreements list did:nv:0cb9c5c66266af85b7fd9af4e14dd95f3a6edc11e503d11e15b189a35ae7ad06
```



### show [agreementId]
Shows details about an agreement<br/>

An agreement in Nevermined keeps track of the state of the different conditions that need to be fulfilled in order to facilitate some service (access, download, computation, etc). Given a `serviceAgreementId` this command returns all the on-chain information referring to the state of that agreement. The conditions associated with it and their status.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The agreement id |



#### Example/s


```bash
ncli agreements show 0xf29bebaeacf865b4f57373aeb84635cc68c7719761607aec2802f1ad87213777
```



### abort [agreementId]
Abort an agreement that is timed out<br/>

An agreement in Nevermined keeps track of the state of the different conditions that need to be fulfilled in order to facilitate some service (access, download, computation, etc). Given a `serviceAgreementId` this command aborts an expired agreement on-chain. When the agreement is aborted this command will release any payment locked as part of the agreement.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The agreement id |



#### Example/s


```bash
ncli agreements abort 0xf29bebaeacf865b4f57373aeb84635cc68c7719761607aec2802f1ad87213777
```






## Module: provenance
Get information about the provenance information stored into Nevermined<br/>

**Usage**: $0 provenance &lt;command&gt; parameters [options]<br/>

Commands:

### register [did]
Registers a provenance event associated to a DID<br/>

The Nevermined provenance record keeps track of all the individual events happening in the assets registered in the Nevermined network. This command registers a new event in that record.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The asset DID |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **method** | `string` |  &#x2611;  |    | The W3C Provenance event to report (wasGeneratedBy, used, wasDerivedFrom, wasAssociatedWith, ActedOnBehalf) |
| **agentId** | `string` |  |    | The address of the agent doing the action/activity |
| **activityId** | `string` |  |    | The identifier of the activity to register |
| **relatedDid** | `string` |  |    | The additional DID related with the activity (if any) |
| **agentInvolved** | `string` |  |    | The address of the additional agent (if any) involved with the activity |
| **signature** | `string` |  |  `0x`  | The signature associated to the provenance event |
| **attributes** | `string` |  |    | Additional attributes to register associated with the activity |


#### Example/s


```bash
ncli provenance register did:nv:020283aed6525d815a4bc3f4b5970a7aaa03752d1e3755d7604185ecbc5f7aa5 --accountIndex 0 --method used --agentId 0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e --activityId 73492af5abe94333a648dd42e1f1675c9cad5ba4f0614f1283093448cd03d300
```



### history [did]
Given a DID it gets all the provenance history for that asset<br/>

An asset can be associated with multiple provenance events. This relates to how that asset was used and by whom in a Nevermined network. This command fetches that information from the on-chain provenance track record.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to list the provenance events |



#### Example/s


```bash
ncli provenance history did:nv:020283aed6525d815a4bc3f4b5970a7aaa03752d1e3755d7604185ecbc5f7aa5
```



### inspect [provenanceId]
It fetches the on-chain information regarding a Provenance Id event<br/>

A `provenanceId` represents a unique event referring to a DID. This command obtain all the existing information of that event.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **provenanceId** | `string` |  |    | The provenance identifier |



#### Example/s


```bash
ncli provenance inspect 4770be8cb69d4a06bbf5dbf442d1c9afcad1bd82130349faaa56572c0773761f
```






## Module: nfts721
Create and manage NFTs (ERC-721) attached to Nevermined assets<br/>

**Usage**: $0 nfts721 &lt;command&gt; parameters [options]<br/>

Commands:

### deploy [abiPath]
It deploys a new NFT (ERC-721) contract<br/>

A Smart Contract is represented by an ABI file that includes the definition of it interfaces and the bytecode of the contract. Having that file, this command allows to deploy a new instance of a ERC-721 contract in the network where the `ncli` is connected. As a result the `ncli` will return the address where the contract was deployed allowing further interaction with it.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **abiPath** | `string` |  |    | The path to the ABI representing the ERC-721 contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  |  `NVM NFT`  | The nft contract name |
| **symbol** | `string` |  |  `NVM`  | The nft contract symbol |
| **uri** | `string` |  |    | The nft metadata uri |
| **cap** | `number` |  |  `0`  | The max number of tokens created in this NFT contract. If 0 means unlimitted |
| **approve** | `array` |  |    | A list of addresses to be approved to manage the NFT contract |
| **addOperator** | `boolean` |  |  `true`  | If true adds the Nevermined Transfer condition with permissions to mint NFTs |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 deploy test/resources/nfts/TestNFT721.json
```


```bash
ncli nfts721 deploy test/resources/nfts/NFT721SubscriptionUpgradeable.json --params &quot;Token Name&quot; --params &quot;SYMBOL&quot;
```



### clone [nftAddress]
It clones an existing NFT (ERC-721) contract<br/>

Nevermined Smart Contracts are deployed in a blockchain, with this command it&#39;s possible to clone the implementation of an already deployed Smart Contract. The new contract cloned will be owned by the user doing that clonning action.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of an already deployed ERC-721 NFT contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  |  `NVM ERC-721`  | The nft contract name |
| **symbol** | `string` |  |  `NVM`  | The nft contract symbol |
| **uri** | `string` |  |    | The nft metadata uri |
| **cap** | `number` |  |  `0`  | The max number of tokens created in this NFT contract. If 0 means unlimitted |
| **operators** | `array` |  |    | A list of addresses to be approved to operate the NFT contract |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 clone 0x37BB53e3d293494DE59fBe1FF78500423dcFd43B --params &quot;Token Name&quot; --params &quot;SYMBOL&quot;
```



### create [nftAddress]
Registers a new asset and associates a ERC-721 NFT to it<br/>

Having a previously deployed ERC-721 NFT contract, this command registers a new asset that allows the publisher to provide access to some exclusive contents when users purchase the NFT.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **metadata** | `string` |  |    | The path to the json file describing the NFT metadata |
| **nftMetadata** | `string` |  |    | The url (HTTP, IPFS, etc) including the NFT Metadata required by some marketplaces like OpenSea&#39; |
| **name** | `string` |  |    | The asset name |
| **author** | `string` |  |    | The author of the file/s |
| **urls** | `array` |  |    | The asset urls. It can be a comma separated list of urls for multiple files. |
| **providers** | `array` |  |    | Public addresses of Node providers that user delegates some permissions. |
| **services** | `array` |  |    | The list of services attached to the asset |
| **license** | `string` |  |    | The asset license (Creative Commons, etc) |
| **price** | `number` |  |  `0`  | The NFT price |
| **preMint** | `boolean` |  |  `false`  | If true the NFTs will be minted during creation |
| **type** | `string` |  |  `dataset`  | The type of asset to register (dataset, algorithm, workflow, container, subscription) |
| **transfer** | `boolean` |  |  `true`  | It allows to transfer a NFT when purchased or mint |
| **duration** | `number` |  |  `0`  | If the asset refers to a subscription, this parameter define the duration of that subscription in blocks |
| **royalties** | `number` |  |  `0`  | The royalties (between 0 and 100%) to reward to the original creator in the secondary market. |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 create 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041 --name &quot;My NFT&quot; --author &quot;John Doe&quot; --price 1 --urls https://www.apache.org/licenses/LICENSE-2.0 --contentType text/plain
```


```bash
ncli nfts721 create 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041 --metadata test/resources/metadata-subscription.json
```



### show [did]
Retrieves information about a NFT<br/>

For a given DID and NFT (ERC-721) this command displays some information about it <br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID associated with the NFT |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |
| **abiPath** | `string` |  |    | The path to the ABI representing the ERC-721 contract |
| **is721** | `boolean` |  |  `true`  | Is a ERC-721 NFT |
| **show1155** | `boolean` |  |  `false`  | Show if there are any NFT ERC-1155 attached to the DID |


#### Example/s


```bash
ncli nfts721 show did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --nftAddress 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041
```



### hold [did]
It checks if an address is a holder of the NFT<br/>

This command allows to check if an address is a holder of a specific NFT wrapped by a Nevermined DID<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to mint |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **address** | `string` |  |    | The address of the account to validate as holder |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 hold did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### balance [nftAddress]
It gets the balance of a NFT<br/>

This command allows to check if an address is a holder of a specific NFT wrapped by a Nevermined DID<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The NFT contract address |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **address** | `string` |  |    | The address of the account to get the balance |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 hold did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### mint [did]
Mints a ERC-721 NFT<br/>

This command allows to the owner of an asset to mint a ERC-721 based NFT<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to mint |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |
| **uri** | `string` |  |    | The token uri for the Asset Metadata |
| **receiver** | `string` |  |    | The address of the receiver of the NFT, if not given will be the minter address |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 mint did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041 --uri http://nevermined.io/mynft.json
```



### mint-subscription [nftAddress]
Mints a ERC-721 Subscription NFT<br/>

This command allows to the owner of an asset to mint a ERC-721 Subscription NFT<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **tokenId** | `string` |  |    | The token id to mint |
| **receiver** | `string` |  |    | The address of the receiver of the NFT, if not given will be the minter address |
| **abiPath** | `string` |  |    | The subscription NFT Abi path |
| **duration** | `string` |  |  `0`  | The duration of the subscription in blocks |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 mint-subscription 0xaaa6F10d641BC9d8039365B27f4DF2C5F5eebbbb --receiver 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041 --tokenId 1
```



### burn [did] [nftAddress]
It Burns a ERC-721 NFT<br/>

It allows to a ERC-721 NFT owner to burn it<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The identifier of the asset |
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **tokenId** | `string` |  |    | The token Id to burn |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 burn did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041
```



### order [did]
Orders an NFT (ERC-721) by paying for it to the escrow<br/>

When a user orders an asset attached to a NFT, this command purchases that NFT and transfers it to the wallet completing that purchase. This will allow later on to get access to the exclusive contents attached to the asset demonstrating the possesion of that NFT.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to order |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 order did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### claim [agreementId]
It allows to claim a NFT (ERC-721) to the account of the buyer<br/>

This command requires a valid `serviceAgreementId` and the `sellerAddress` that demonstrates that an asset was bought. The asset is then transferred to the buyer&#39;s account.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The identifier of the agreement created by the buyer |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **sellerAddress** | `string` |  |    | The address of the seller (0x123..) |
| **buyerAddress** | `string` |  |    | The address of the account who will receive the NFT |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 claim 0x44dba17d62dd4004c109921cb976ac7c5ec6e4c07d24cc82182b0c49c6381869
```



### access [did]
It allows to download the contents associated to a NFT if the user is a holder<br/>

Providing a `DID` this command will allow to download the file contents associated to a DID that has a NFT (ERC-721) as access control mechanism. If the account of the user executing this command hold the NFT, it will be able to download the files.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID of the asset |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The identifier of the agreement created by the buyer |
| **seller** | `string` |  |    | The address of the seller (0x123..) |
| **destination** | `string` |  &#x2611;  |    | The destination of the files downloaded |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 access did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e 0xb716555c3b40bd01836826e114607d65b1ebb04e8a051977e6d902eca2df750b --destination /tmp/nevemined/ 
```


```bash
ncli nfts721 access did:nv:04c50282c7e297c019cea5368c3d7b9e757dfa5d6e28b3d666dd710572669586 0xf988eca804ed9af51653de290e71564dfbbf40afd0dd0a28b25fc95b18476c77  --destination /tmp/ --accountIndex 1
```



### download [did]
As NFT holder this allows to download the files associated to a NFT<br/>

This command will allow to download the file contents associated to a DID that has a NFT (ERC-721) as access control mechanism. If the account of the user executing this command holds the NFT, it will download the files.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID asset identifier that works as tokenId for the NFT |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **destination** | `string` |  &#x2611;  |    | The destination of the files |
| **nftType** | `number` |  |  `721`  | The NFT type |


#### Example/s


```bash
ncli nfts721 download  did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --destination /tmp/nevemined/
```



### get-jwt [did]
It returns a JWT access token related with a subscription NFT<br/>

This command allows to get a JWT token that gives access through the proxy to certain services that only can be accessed via subscription NFT<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID of the service to be accessed |



#### Example/s


```bash
ncli nfts721 get-jwt did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```






## Module: nfts1155
Create and manage NFTs (ERC-1155) attached to Nevermined assets<br/>

**Usage**: $0 nfts1155 &lt;command&gt; parameters [options]<br/>

Commands:

### deploy [abiPath]
It deploys a new NFT (ERC-1155) contract<br/>

A Smart Contract is represented by an ABI file that includes the definition of it interfaces and the bytecode of the contract. Having that file, this command allows to deploy a new instance of a ERC-721 contract in the network where the `ncli` is connected. As a result the `ncli` will return the address where the contract was deployed allowing further interaction with it.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **abiPath** | `string` |  |    | The path to the ABI representing the ERC-1155 contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  |  `NVM NFT`  | The nft contract name |
| **symbol** | `string` |  |  `NVM`  | The nft contract symbol |
| **uri** | `string` |  |    | The nft metadata uri |
| **approve** | `array` |  |    | A list of addresses to be approved to manage the NFT contract |
| **addOperator** | `boolean` |  |  `true`  | If true adds the Nevermined Transfer condition with permissions to mint NFTs |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 deploy NFT1155.json
```


```bash
ncli nfts1155 deploy test/resources/nfts/NFT1155.json --params &quot;Token Name&quot; --params &quot;SYMBOL&quot;
```



### clone [nftAddress]
It clones an existing NFT (ERC-1155) contract<br/>

Nevermined Smart Contracts are deployed in a blockchain, with this command it&#39;s possible to clone the implementation of an already deployed Smart Contract. The new contract cloned will be owned by the user doing that clonning action.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of an already deployed ERC-1155 NFT contract |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **name** | `string` |  |  `NVM ERC-721`  | The nft contract name |
| **symbol** | `string` |  |  `NVM`  | The nft contract symbol |
| **uri** | `string` |  |    | The nft metadata uri |
| **operators** | `array` |  |    | A list of addresses to be approved to operate the NFT contract |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 clone 0x37BB53e3d293494DE59fBe1FF78500423dcFd43B --params &quot;Token Name&quot; --params &quot;SYMBOL&quot;
```



### create
Registers a new asset and associates a NFT (ERC-1155) to it<br/>

This command registers a new asset that allows the publisher to provide access to some exclusive contents when users purchase the price of that NFT.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **metadata** | `string` |  |    | The path to the json file describing the NFT metadata |
| **nftMetadata** | `string` |  |    | The url (HTTP, IPFS, etc) including the NFT Metadata required by some marketplaces like OpenSea&#39; |
| **name** | `string` |  |    | The asset name |
| **author** | `string` |  |    | The author of the file/s |
| **urls** | `array` |  |    | The asset urls. It can be a comma separated list of urls for multiple files. |
| **providers** | `array` |  |    | Public addresses of Node providers that user delegates some permissions. |
| **services** | `array` |  |    | The list of services attached to the asset |
| **type** | `string` |  |  `dataset`  | The type of asset to register (dataset, algorithm, workflow, container, subscription) |
| **license** | `string` |  |    | The asset license (Creative Commons, etc) |
| **price** | `number` |  |    | The NFT price |
| **cap** | `number` |  |  `0`  | The NFT minting cap (0 means uncapped) |
| **preMint** | `boolean` |  |  `false`  | If true the NFTs will be minted during creation |
| **transfer** | `boolean` |  |  `true`  | It allows to transfer a NFT when purchased or mint |
| **royalties** | `number` |  |  `0`  | The royalties (between 0 and 100%) to reward to the original creator in the secondary market |
| **publishMetadata** | `string` |  |  `metadata-api`  | Allows to store the metadata in the Metadata API only (metadata-api) or in IPFS too (passing ipfs as value here). |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 create 0xDef6F10d641BC9d8039365B27f4DF2C5F5eeb041 --name &quot;My NFT 1155&quot; --author &quot;John Doe&quot; --price 1 --urls https://www.apache.org/licenses/LICENSE-2.0 --contentType text/plain --cap 10 --royalties 5 --nftMetadata cid://QmVT3wfySvZJqAvkBCyxoz3EvD3yeLqf3cvAssFDpFFXNm
```



### show [did]
Retrieves information about a NFT<br/>

For a given DID and NFT (ERC-1155) this command displays some information about it <br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID associated with the NFT (tokenId) |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT (ERC-721) contract |
| **show1155** | `boolean` |  |  `false`  | Show if there are any NFT ERC-1155 attached to the DID |


#### Example/s


```bash
ncli nfts1155 show did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### hold [did]
It checks if an address is a holder of the NFT<br/>

This command allows to check if an address is a holder of a specific NFT wrapped by a Nevermined DID<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to mint |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **address** | `string` |  |    | The address of the account to validate as holder |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 hold did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### balance [nftAddress] [did]
It gets the balance of a NFT<br/>

This command allows to check if an address is a holder of a specific NFT wrapped by a Nevermined DID<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The NFT contract address |
| **did** | `string` |  |    | The asset DID |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **address** | `string` |  |    | The address of the account to get the balance |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 balance 0xF841Ff2C8abF1751A83923755EbD2F66bBAa5BFE did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e
```



### mint [did]
Mints a ERC-1155 NFT<br/>

This command allows to the owner of an asset to mint a ERC-1155 based NFT<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to mint |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **amount** | `number` |  |  `1`  | The number of NFTs (ERC-1155) to mint |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 mint did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --amount 10
```



### burn [did]
It Burns a ERC-1155 NFT<br/>

It allows to a ERC-1155 NFT owner to burn it<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to burn |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **amount** | `number` |  |  `1`  | The number of NFTs (ERC-1155) to burn |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 burn did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --amount 2
```



### order [did]
Orders an NFT (ERC-1155) by paying for it to the escrow<br/>

When a user orders an asset attached to a NFT, this command purchases that NFT and get it transferred to the wallet completing that purchase. This will allow later on to get access to the exclusive contents attached to the asset demonstrating the possesion of that NFT.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to order |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **amount** | `number` |  |  `1`  | The number of NFTs (ERC-1155) to burn |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 order did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --amount 1
```



### claim [agreementId]
It allows to claim a NFT (ERC-1155) to the account of the buyer<br/>

This command requires a valid `serviceAgreementId` created by the `buyerAccount` that demonstrates that an asset was payed. Having that this command will allow to transfer the asset to the buyer account.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The identifier of the agreement created by the buyer |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **sellerAddress** | `string` |  |    | The address of the seller (0x123..) |
| **buyerAddress** | `string` |  |    | The address of the account who will receive the NFT |
| **amount** | `number` |  |  `1`  | The number of NFTs (ERC-1155) to claim |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 claim 0x44dba17d62dd4004c109921cb976ac7c5ec6e4c07d24cc82182b0c49c6381869 --amount 1 --buyerAddress 0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e
```



### access [did]
Having a serviceAgreementId, it downloads the data associated to a ERC-1155 NFT<br/>

Providing a `serviceAgreementId` this command will allow to download the file contents associated to a DID that has a NFT (ERC-721) as access control mechanism. If the account of the user executing this command hold the NFT, it will be able to download the files.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID of the asset |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **agreementId** | `string` |  |    | The identifier of the agreement created by the buyer |
| **destination** | `string` |  &#x2611;  |    | The destination of the files downloaded |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 access did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e 0xb716555c3b40bd01836826e114607d65b1ebb04e8a051977e6d902eca2df750b --destination /tmp/nevemined/ --seller 0xe2DD09d719Da89e5a3D0F2549c7E24566e947260
```



### download [did]
As NFT holder this allows to download the files associated to a NFT<br/>

This command will allow to purchase a NFT and download the file contents associated to a DID that has a NFT (ERC-721) as access control mechanism. If the account of the user executing this command hold the NFT, it will be able to download the files.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID asset identifier that works as tokenId for the NFT |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **destination** | `string` |  &#x2611;  |    | The destination of the files |
| **nftType** | `number` |  |  `1155`  | The NFT type |


#### Example/s


```bash
ncli nfts1155 download did:nv:afd733c23c41af948be7ec039c3fb2048d437e082a69ea3f336cdf452a49be7e --destination /tmp/nevemined/
```






## Module: utils
Utility commands to faciliate files management, encryption, etc<br/>

**Usage**: $0 utils &lt;command&gt; parameters [options]<br/>

Commands:

### upload [file]
Upload file to IPFS or Filecoin<br/>

It uploads a local file to the decentralized storage network like IPFS or Filecoin. It returns a `CID` identifying that file into the storage network. If the `--password` flag is provided, it will encrypts the file before uploading it and will return the password used.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **file** | `string` |  |    | The path to the file to upload |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **where** | `string` |  |  `ipfs`  | The network where upload the file (ipfs or filecoin). |
| **encrypt** | `boolean` |  |  `false`  | If given it encrypts the file with AES and return password |


#### Example/s


```bash
ncli utils upload README.md
```



### decrypt [file]
Decrypt a file<br/>

It decrypts a previously encrypted file using the password provided.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **file** | `string` |  |    | The path to the file to decrypt |
| **password** | `string` |  |    | The password to be used to decrypt the file |



#### Example/s


```bash
ncli utils decrypt README.md --password 12345678
```



### encrypt [file]
Encrypt a file<br/>

It encrypts a file using the password provided.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **file** | `string` |  |    | The path to the file to encrypt |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **password** | `string` |  |    | The password to be used to encrypt the file. If empty, a new password will be generated |


#### Example/s


```bash
ncli utils encrypt README.md --password 12345678
```



### publish-nft-metadata
It publish the metadata associated to a NFT into external storage<br/>

The NFTs use some basic metadata allowing to some external Marketplaces to discover them and provide some additional information. This command allows to publish NFT metadata in the regular format supported by most popular marketplaces.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **image** | `string` |  &#x2611;  |    | URL to the image of the item |
| **name** | `string` |  &#x2611;  |    | Name/title of the item |
| **description** | `string` |  |    | Description of the item. Markdown is supported |
| **externalUrl** | `string` |  |    | URL to the asset in a Nevermined ecosystem |
| **animationUrl** | `string` |  |    | A URL to a multi-media attachment for the item |
| **youtubeUrl** | `string` |  |    | A URL to a YouTube video |
| **royalties** | `number` |  |    | Royalties for selling the NFT through a marketplace out of Nevermined (i.e OpenSea) |
| **royaltiesReceiver** | `string` |  |    | Address of the user receiving the royalties |


#### Example/s


```bash
ncli utils publish-nft-metadata --image https://www.artribune.com/wp-content/uploads/2013/09/2_Francisco-Goya-Saturno-devorando-a-su-hijos-1819-1823.jpg --name &quot;Saturn NFTs&quot; --description &quot;Sturn eating his son&quot; --externalUrl https://www.franciscogoya.com/saturn-devouring-his-son.jsp --animationUrl &quot;https://i1.wp.com/hyperallergic.com/wp-content/uploads/2016/04/goya-saturn-pigeons.gif?resize=470%2C470&amp;quality=100&quot; --royalties 1 --royaltiesReceiver 0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0
```



### get-nft-metadata [did]
Downloads the metadata associated to NFT<br/>

The NFT Metadata is associated to the DID during the publication. This command allows to retrieve the url of that metadata and the content of it.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID of the asset |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **nftAddress** | `string` |  |    | The address of the NFT contract |


#### Example/s


```bash
ncli utils get-nft-metadata did:nv:3fc08573160370d81ee075c80b800ae90d87eb5dd458b96febd11a0dac02baf5
```



### download-artifacts [contractsVersion]
Downloads the Nevermined Contracts artifacts<br/>

Nevermined exposes the Smart Contracts artifacts with their definition. Also Nevermined record all the different versions of these contracts deployed in different networks ready to be downloaded. Depending on the parameters provided, this command allows to download them.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **contractsVersion** | `string` |  &#x2611;  |    | Version of the artifacts to download. For example 2.0.0 |


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **networkId** | `string` |  |    | The networkId of the network where Nevermined contracts are deployed and we want to download the artifacts. For example &#39;mumbai&#39; is 80001 |
| **tag** | `string` |  |  `public`  | The tag name of the contracts artifacts to download |
| **destination** | `string` |  &#x2612;  |    | The destination folder for the artifacts to download. For example /tmp |


#### Example/s


```bash
ncli utils download-artifacts 2.0.0 --networkId 80001 --destination /tmp
```


```bash
ncli utils download-artifacts 2.0.0 --networkId 8001 --tag public --destination /tmp
```



### clean-artifacts
Removes all the previously downloaded and cached artifacts<br/>

The CLI stores a local copy of the Smart Contracts artifacts into a local folder. This command deletes this cached copy.<br/>


#### Optional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **path** | `string` |  &#x2612;  |    | The folder where are the artifacts to clean. For example /tmp |


#### Example/s


```bash
ncli utils clean-artifacts
```


```bash
ncli utils clean-artifacts --path /tmp
```



### encode-did [did]
Encode a DID in base36 format<br/>

This command allows to encode a DID in base36 format. That format is used to shorten the DID, specially for web services.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **did** | `string` |  |    | The DID to encode |



#### Example/s


```bash
ncli utils encode-did did:nv:3fc08573160370d81ee075c80b800ae90d87eb5dd458b96febd11a0dac02baf5
```



### decode-did [encoded]
Decoded a DID previosly encoded in base36 format<br/>

This command allows to decode a DID that is encoded in base36 format.<br/>

#### Positional Arguments

| Name of the Argument | Type | Is required? | Default value | Description |
|----------------------|------|-------------:|--------------:|-------------|
| **encoded** | `string` |  |    | The encoded DID in base36 format |



#### Example/s


```bash
ncli utils decode-did nhf7kkweh295qelv1zuy8lc1fre7ojla0nuuhrg4wqp9zuo89
```




