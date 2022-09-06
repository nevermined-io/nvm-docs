---
sidebar_position: 5
description: Nevermined allows data sharing between untrusted parties
---

# Data Sharing

Most of the interactions between users of Nevermined requires the management 
of access control to digital assets. Simply put, this means that for something 
I own, I want to give you some permissions to do something under some circumstances. 
These are all parameters of which I control.

This conceptually is very abstract but is extremely flexible at the same time. 
It means that depending on the problem I want to articulate and manage, 
different access control possibilities can be supported support across any use case, 
including the following:

```
I have data, and I want to allow anyone paying me X amount to get access to my data.
```

Or:

```
I’m an artist, and for all my customers buying my art, I’m going to issue a 
Non-Fungible Token, or NFT that allows them to get access to new and exclusive content.
```

For example, in the drug shipping use case, the manufacturer may allow certain 
freight forwarders to access the manufacturer’s temperature gauge data embedded 
in the drug shipment. 
In this case, access control would allow for accepted freight forwarders to 
access the data remotely to determine if the shipment’s temperature has gone above 
a certain threshold during the course of shipping.

### Provenance

Provenance allows us to understand the context in which “something” was created, 
how it is used and by whom, and how ownership is transferred or delegated. 

Nevermined implements internally a provenance track record that records all the
relevant interactions happening around digital assets. Things like:

* A digital asset is regitered into Nevermined by a user
* NFTs attached to a digital asset are minted or burned
* Service agreements are created and or executed
* Assets or NFTs are accessed or used
* etc

W3C Provenance specification defines, in a use case-independent way, 
how provenance can be registered and used. This, combined with the utilization of 
a blockchain network, provides a transparent and unique source of truth for data ecosystems.

For example, in the drug shipping use case, combining NFTs with integrity proofs, 
plus the W3C Provenance standard, creates an unparalleled level of transparency 
in tracking the shipment through the supply chain.