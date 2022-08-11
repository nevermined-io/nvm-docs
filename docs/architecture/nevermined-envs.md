---
sidebar_position: 6
---

# Nevermined Public Environments

This section provides links and information regarding the different public environments where Nevermined is deployed and can be used.

## About the tags

Tags are different contract deployments for the same network&version. Each tag is independant from the others. Generically we use two different tags:

- `public`: This tag/contracts instane is meant to be used for new integrations, public integrations, etc... It expected to have the latest versions and/or configurations. This is a *shared* environment.

- `common`: This tag/contracts instane is used by more "stable" applications. Each application has its own nevermined stack (`gateway` + `markeplace-api`).

## Testnet environments

Testnet environments are public nevermined environments deployed in public EVM-compatible testnet networks. Typically we use Polygon Mumbai.
Use [Alchemy's Mumbai Faucet](https://mumbaifaucet.com/) or [Polygon's Mumbai faucet](https://faucet.polygon.technology/) for requesting MATIC.

### Public Mumbai (Shared enviromnet)

- *`public-nvm-v2-mumbai`*: Public environment in Mumbai. Using `public` contract tag. Use this if you want to integrate with Nevermined in Mumbai/Testnet.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Gateway | https://gateway.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Marketplace API | https://marketplace-api.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Faucet | https://faucet.mumbai.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |

### DefiMarketplace Mumbai (Application environment)

- *`defi-marketplace-v2-mumbai`*: DefiMarketplace developlment environment for Autonomies. Using `common` contract tag.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| autonomies-v2-mumbai | Mumbai | 2.0.5 | common | Gateway | https://defi.v2.gateway.mumbai.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.5 | common | Marketplace API | https://defi.v2.marketplace-api.mumbai.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.5 | common | Marketplace frontend | https://defi.v2.portal.mumbai.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.5 | common | Marketplace bundler | https://defi.v2.bundler.mumbai.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.5 | common | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/common | Use with sdk >= 0.21.0 |

### Autonomies testing Mumbai (Application environment)

- *`autonomies-v2-mumbai`*: Test(dev) environment for Autonomies. Using `common` contract tag.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | Gateway | https://gateway.autonomies.test.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | Marketplace API | https://marketplace-api.autonomies.test.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | Autonomies frontend | https://portal.autonomies.test.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | Autonomies backend | https://backend.autonomies.test.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | Autonomies profile service | https://auto-profile-service.autonomies.test.nevermined.rocks | |
| autonomies-v2-mumbai | Mumbai | 2.0.0 | common | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/common | Use with sdk >= 0.21.0 |

### Autonomies Pre Mumbai (Application environment)

- *`autonomies-v2-mumbai-pre`*: Preproduction(QA) environment for Autonomies. Using `common` contract tag.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | Gateway | https://gateway.autonomies.pre.nevermined.rocks | |
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | Marketplace API | https://marketplace-api.autonomies.pre.nevermined.rocks | |
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | Autonomies frontend | https://portal.autonomies.pre.nevermined.rocks | |
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | Autonomies backend | https://backend.autonomies.pre.nevermined.rocks | |
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | Autonomies profile service | https://auto-profile-service.autonomies.pre.nevermined.rocks | |
| autonomies-v2-mumbai-pre | Mumbai | 2.0.0 | common | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/common | Use with sdk >= 0.21.0 |

## Production environments

### Public Polygon environment

- *`public-nvm-v2-mumbai`*: Public environment in Polygon. Use this if you want to integrate with Nevermined in Polygon for production.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Gateway | https://gateway.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | Marketplace API | https://marketplace-api.public.nevermined.rocks | |
| public-nvm-v2-mumbai | Mumbai | 2.0.5 | public | GraphNode | https://api.thegraph.com/subgraphs/name/nevermined-io/public | Use with sdk >= 0.21.0 |
