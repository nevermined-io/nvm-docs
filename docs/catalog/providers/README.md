---
sidebar_position: 1
title: Getting started
---

# Getting started

The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask.

**Note**: Currently `Catalog providers` only support Metamask but more providers will be supported soon.

## Pre-requisites

The Nevermined providers is a package built with React and Typescript.
It requires [Node JS](https://nodejs.org/) v14 or higher. You can find online instructions about [How to install Node JS](https://nodejs.dev/learn/how-to-install-nodejs).

## How to install ?

```
yarn add @nevermined-io/catalog-providers
or
npm install --save @nevermined-io/catalog-providers
```

## How to integrate ?

```typescript
import { MetaMask } from "@nevermined-io/catalog-providers";
import App from "app";
import { Config } from "@nevermined-io/nevermined-sdk-js";

const appConfig: Config = {
    nodeUri,
};

ReactDOM.render(
    <div>
        <MetaMask.WalletProvider
            chainConfig={chainConfig}
            correctNetworkId={correctNetworkId}
            nodeUri={String(appConfig.nodeUri)}
        >
            <App />
        </MetaMask.WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## How to use ?

```typescript
const ConnectToMetaMask = () => {
    const { loginMetamask, walletAddress } = MetaMask.useWallet();

    return (
        <>
            <div> {walletAddress}</div>
            {!walletAddress && (
                <button onClick={loginMetamask}>Connect To MM</button>
            )}
        </>
    );
};
```
