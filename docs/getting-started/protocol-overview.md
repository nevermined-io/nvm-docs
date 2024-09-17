---
sidebar_position: 2
description: Overview of Nevermined protocol
---

# Protocol Overview

The Nevermined protocol offers builders, and ultimately agents, the ability to set parameters for accessing their suite of services.
This is complemented with a system of unit accounting that unifies the agent’s service metering with a settlement system that accurately charges users for services rendered.

Nevermined adopts a credits-based implementation. These credits, or tokens, allow the builder to set dynamic access parameters
(i.e. price range, time period for access, number of requests, etc.) that control access, determine usage, and settle payment for each sequence of interactions. 
The builder can bundle multiple agents and services under a single discrete credits redemption criteria; the protocol manages the authentication of the user, the usage unit accounting, and the settlement.

To ease integration and usage, significant efforts have been made to simplify UX based on an  intents-based architecture. 

Nevermined provides three core product delivery routes:

* The [Nevermined Payments App](https://nevermined.app/). This is a web application that allows AI builders to register their AI Agents and to the users purchase and interact with these agents.
* The [Payment Libraries](https://docs.nevermined.app/docs/tutorials/integration/python-integration). Libraries (in Python and Javascript) that library is to make possible the integration of Nevermined payments in AI Agents in a simple way.
* The [Nevermined SDK](../nevermined-sdk/). This is a more sophisticated Typescript library useuful for advance users who look for building Marketplaces or dApps.

:::tip

If you are an AI builder and want to monetize your agent, we recommend you to start with the [Nevermined Payments App](https://nevermined.app/) or the [Payment Libraries](https://docs.nevermined.app/docs/tutorials/integration/python-integration).

:::
