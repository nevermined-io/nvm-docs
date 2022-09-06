---
sidebar_position: 4
description: Tokeninization of digital assets via NFTs
---

# Assets tokenization via NFTs

Nevermined is a platform where digital and physical assets can be represented 
and traded between users openly, but keeping security, integrity, provenance 
and content creators attribution.

Via the NFTs engine, content creators can register digital assets in a 
Nevermined ecosystem and define how this assets can be splitted in multiple
NFTs representing the digital owerniship of the content. In addition to this
the NFTs engine allows content creators to define:

* If each of these NFTs can be traded in a marketplace and what are the conditions
  to get access to them (price, token to make the payment, etc).
* Define exclusive contents that can be accessed by NFT holders
* Royalties to be received when NFTs are sold in the secondary market


## New scenarios around digital assets

The Nevermined NFTs or tokenization engine is built around the Nevermined 
Service Execution Agreements. This is a core part of Nevermined that allows 
us to articulate scenarios via Smart Contracts where different parties can 
interact with each other via the completion and validation of conditions.

For example, a typical Nevermined contract can be translated to: 

```text
As an asset owner I let you purchase 1 NFT representing this asset if 
you pay me 10 ETH.
```

In the above example, Nevermined enforces that if the buyer pays `10 ETH` 
for a NFT representing a specific asset, the buyer will receive this NFT and
the seller or asset owner will receive the payment.

This is a very simple scenario but the NFTs engine allows more complex scenarios
where the content creators can offer access to exclusive contents to their 
community of users. This allows things like this:

```text
If you own one of my NFTs I will give you exclusive access to this artwork
```

This scenario makes the NFT more attractive because beyond the representation
of owernership of a digital asset, converts this NFT in an access token
that allows the user to access something is unique and exclusive. This 
facilitates a richer and more direct communication between content creators 
and their users.  

When a user purchases a NFT, at some point could need to re-sell this NFT
to someone else in a secondary market. Nevermined allows also this kind of
trading between users:

```text
I am not the creator but I own one NFT of this digital asset. I want to sell
it for 20 ETH.
```

The re-selling of this NFT transfer also the capabilities to access to any 
exclusive content attached to the NFT from the seller to the buyer. This
means that as soon as the transaction is confirmed, the seller won't hold the 
NFT and by extension won't have access to the exclusive content. This will
be granted to the buyer as new NFT holder.

Nevermined NFTs engine enforces the payment of royalties to original creators.
When a digital asset is register by the content creator into Nevermined, it is 
necessary to define what are the royalties attached to the digital asset:

```
As a creator of this asset, I want to receive 10% royalties over any future sale
of the NFTs in the secondary market.
```

Obviously, the lower that royalties are the more attractive that is the NFT for 
the potential buyers.

The amount of royalties and the original creator of the asset are recorded in 
the Nevermined Smart Contracts and can not be changed afterwards. This protection
avoids that a content creator increases the royalties to receive for assets that
were already sold, reducing the intrinsic value afterwards.

In addition to this, Nevermined allows to content creator to setup the scarcity 
of the NFTs associated to a digital asset. 

```
As a content creator I'm gonna register an asset with a limited serie of 5 NFTs
```

Or:
```
As a content creator I'm gonna register an asset without limit in the number of NFTs
that can be attached to it (uncapped).
```

The more scarce that is the asset the more valuable this asset is. To avoid adulterate
assets value afterwards, these parameters can not be modified once are defined.
