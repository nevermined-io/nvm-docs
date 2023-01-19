---
sidebar_position: 9
description: Data transfer proofs
---

# Data transfer proofs

```text
shortname:      KEYTRANSFER
name:           Data transfer proofs
type:           Standard
status:         Valid
version:        0.1
editor:         Sami Mäkelä <sami@nevermined.io>
contributors:   Aitor Argomaniz <aitor@nevermined.io>
```

This SPEC describes an addition to [ACCESS SPEC](https://docs.nevermined.io/docs/architecture/specs/Spec-ACCESS), introducing new flows with improved guarantees about data transfer.
This enables using public file storage for encrypted assets and data.

## Motivation

Nevermined manages access control over digital assets. The core of the protocol is to authenticate and authorize Asset Consumers to get access to assets created and registered into an ecosystem by an Asset Publisher.
When this access control needs to be implemented on top of storage solutions with some authorization mechanism (like Amazon S3 or similar) it's easy. The Nevermined node ensures that only authorized users can get access.
But when you want to use a storage solution without any access control capabilities (like in IPFS or Filecoin), it's more complicated. Whoever has access to the URL can get access to the file, bypassing any access control mechanism that Nevermined provides.

In this kind of scenario, the only way to protect this content is to encrypt it and only allow decryption when the user meets certain conditions. This SPEC is about the defition of the Nevermined solution, which allows to build robust and scalable access control on top of publicly available data.

### Main ideas

If the unencrypted asset is described by its hash, there are at least two use cases for being able to prove that the access to the asset with given hash is transferred:

* A third party might have reviewed the data and can confirm its properties. Additionally it will show that each recipient gets the same data.
* If compute attestation is available, for it to work both participants need access to data.

To save resources, instead of showing that all the data is transferred, we assume that there is publicly available encrypted data and only the symmetric key will be transferred (the hash of symmetric key is known by all participants). This does not impact the above use cases:

* The third party can instead validate the combination of the key and encrypted data.
* The compute attestation will use the encrypted data hash and the key instead of plain data hash as starting point. Note that with interactive proofs it would be enough for the sender to send the decrypted key signed with their ECDSA or similar key. An advantage is that the keys can be used multiple times when using snarks.

## Actors and Technical Components

* PUBLISHERS - Provide access to assets and/or services
* CONSUMERS - Want to get access to assets and/or services
* PROVIDER - When the publisher is not 100% 'online', they can delegate some responsibilities to a provider for making data available on behalf of the publisher

## Flows

### Publishing Assets

To set up the asset metadata:

The first file represents the key and `url` attribute, containing the plain text key (probably have to change).
These metadata are encrypted so they won't show up publicly when querying the node.

The public parts that have to be added to `additionalInformation` are

* `poseidonHash`: Poseidon hash of the key.
* `providerKey.x` and `providerKey.y`: The Babyjubjub public key of the Provider.

When the asset files are encrypted, the DDO will include under `main` the attribute `encryption` with the possible values of:

* `dtp` - It means the file/s are encrypted via Data Transfer Proofs
* `none` - The files are not encrypted. This is the default behavior if the parameter is not defined

### Access Service agreement

For the access service agreement, the following data are needed:

* Address of Provider and Consumer.
* Asset ID.
* Poseidon hash of the data.
* Babyjubjub keys of the Provider and Consumer.
* Payment information.

Before entering into the agreement, the Consumer should already have downloaded the publicly available encrypted data.

Other parts of the flow are the same as a normal access flow, but the final execution of the transfer on-chain is different.

The Provider first has to compute a shared secret using ECDH from his private key and the Consumer's public key. This secret is used to encrypt the key using MiMC. The encrypted key is then sent onchain with the SNARK proof of correctness.

Similarly, the Consumer first has to compute a shared secret using ECDH from his private key and the Provider's public key. The encrypted key is read from chain and then decrypted using MiMC. The hash of the result will be the same as was given beforehand.

Here is the complete flow including the different actors:

![Data Transfer Proofs Deal Flow](images/dtp/data-transfer-proof-deal-flow.png)

The flow below describes how to manage a dispute resolution, in case there's an issue.

![Data Transfer Proofs Deal Flow](images/dtp/data-transfer-proof-dispute-resolution.png)

### Accessing from node

In this scenario, the node acts as a PROVIDER. This is useful when the PUBLISHER doesn't want to be on-line running a service for responding to CONSUMER requests.
This means the PUBLISHER delegates the ability of releasing the decryption key to the CONSUMER when the conditions are fulfilled to the PROVIDER.

Accessing documents using the node mostly works the same way as in a normal flow, but the Consumer has to send his Babyjubjub public key too. The data must be checked so that the node won't send invalid proofs to the net (it's possible to get the key from the calldata of the fulfill method if they have the corresponding key).
Additionally we can check that the Eth-address corresponds to the Babyjubjub public key. This isn't absolutely necessary, but is needed if we want the node to return the data transfer key (or perhaps the data as plain text).

![Data Transfer Proofs Deal Flow](images/dtp/data-transfer-proof-gateway-uploader.png)

### NFT Sales with access agreement

If an NFT is used for accessing an asset, it is safest to grant access when making the NFT sale. In this case, the access is granted when
the payment is made. The NFT Sales with access agreement is the same as normal NFT sales flow, but there is an additional condition for granting
the access.

To handle this flow with node, `nft-sales-proof` endpoint has to be used instead of `nft-sales`. The `nft-sales` endpoint can be used to make sales,
but then access has to be granted with another agreement.
