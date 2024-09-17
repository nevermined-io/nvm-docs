---
sidebar_position: 1
description: Why an AI Payments Protocol??
---

# Why a Payments Protocol?

In Nevermined we identify payments as a process, and distinguish the final stage of settlement of a payments process from the wider overall workflow. 

Settlement can be seen as the manifestation of a payments transaction (its final state) once accounted for through a record keeping mechanism, historically a database, now a publicly verifiable blockchain. Whereas payments is the wider process, settlement is only the final stage of that process. 

Clarifying this difference - the payments workflow versus its settlement -  motivates an interest in understanding the process in the context of AI payments. 
The primary responsibility of the payments protocol is to:

1. Meter usage of an agent, or underlying assets, services and models
2. Calculate a respective charge
3. Settle this charge


The current paradigm is a DIY approach where builders predominately - for ease of implementation - opt for a time-based approach. 
A fixed payment for access for a period of time. This is valid for some very specific use cases but highly inefficient for others because it is difficult to cater for different patterns of use and variation in cost. The result is margin volatility or risk of financial loss. 
An obvious improvement is a ‘pay per play’ model. Real time usage-based pricing can flex and more accurately map underlying cost.

To achieve scale, Nevermined not only operate in real time, but also be able to tolerate volumes of micro transactions. 
The blockchain shall, at a minimum, serve as the system of settlement, but may not be required or best suited to orchestrate the wider set of activities. 
Fully on-chain payments would incur a number of dependencies such as oraclization, and suffer inefficiencies such as latency and gas fees. 
In order to achieve maximum efficiency, Nevermined adopts a hybrid approach, where periods of usage are metered and aggregated off-chain and batch-settled on-chain. 
As long as access, permissioning and settlement remain on-chain, we argue that payments are sufficiently decentralized and the protocol appropriately mitigates the choke point inherent with the point of transaction. 

Frequency and volume are not the only limiting factors in our process. Accurate real-time pricing is in effect only achievable ex-post once usage is concluded and true cost is known. Thus there must be some mechanic to net or adjust pricing after the event.

