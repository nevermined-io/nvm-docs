---
sidebar_position: 2
description: Rationalization for credits-based settlement
---

# Credits based settlement

## Consolidating component services

One of Nevermined’s architectural advantages is its ability to consolidate AI services under a single unit of engagement: **credits**. 

Alternative solutions often require license keys and individual logins for each discrete service.
For example, using an agent built using one model stack requires its own API key. Combining that capability with vector database technology from a different vendor would require another API key. Introducing a workflow tool again requires an additional API key. This design pattern is burdensome to both builders and their users, as it requires one or the other to acquire and maintain individual access to each underlying service.

Combining each necessary service required to construct an agent under a single credits system is an optimal design pattern. The principal of this idea is as follows: an agent is the sum of its parts, i.e. the model, the vector embeddings, the routing, the workflow management, etc. Each of these services has an associated cost. Charging users for these services independently increases the complexity when interacting with the agent. Additionally, bundling these services under a one-price-fits-all model makes it difficult for the builder to monetize competitively. Neither option is optimal.

Instead, Nevermined advocates using credits as the singular redemption mechanism for a collection of AI services that are bundled together to construct an agent. These redemptions represent a series of aggregated compensations for each service invoked from the user request. Doing this simplifies the user experience as they only need to have one unit of engagement, the credits, while also maintaining a high degree of legibility on how much of each underlying service was used, and what the compensation for that usage should be.

## Unlocking AI Commerce

Bringing the system of unit accounting on-chain via credits is an elegant solution, in representing a direct on-chain claim to an agent’s aggregated service mix. 
This claim is technically asset backed by the underlying agent’s computational power. Being on-chain allows these claims to be freely tradeable between agents, essentially achieving commoditization of this computational capacity. Additionally, these claims - credits - present a store of value to which market forces can assign value, thus bootstrapping a network of value of agentic computational power. We see this as the emergence of AI Commerce.