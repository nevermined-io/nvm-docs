---
sidebar_position: 1
title: Getting started
description: Nevermined Providers Component API Reference
---

This library was generated with [Nx](https://nx.dev).

# Getting started

The `providers` component exposes a package facilitating the interaction with Web3 providers like Metamask. You can see more about in the [documentation](https://docs.nevermined.io/docs/react-components/intro)

## Providers supported

* Metamask
* WalletConnect
* Coinbase Wallet

## Pre-requisites

The Nevermined providers is a package built with React and Typescript.
It requires [Node JS](https://nodejs.org/) v14 or higher. You can find online instructions about [How to install Node JS](https://nodejs.dev/en/learn/how-to-install-nodejs/).

## How to install ?

```
yarn add @nevermined-io/providers
or
npm install --save @nevermined-io/providers
```

## How to integrate ?

```typescript
import { WalletProvider, getClient, useWallet } from "@nevermined-io/providers";
import App from "app";

ReactDOM.render(
    <div>
        <WalletProvider
            client={getClient()}
            correctNetworkId={80001}
            connectKitProps={
                {
                    theme: 'auto',
                    mode: 'dark',
                }
            }
        >
            <App />
        </WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## How to use ?

```typescript
const ConnectToMetaMask = () => {
    const { login, walletAddress, getConnectors } = useWallet();

    return (
        <>
            <div> {walletAddress}</div>
            {!walletAddress && (
                <button onClick={() => login(getConnectors()[0])}>Connect To MM</button>
            )}
        </>
    );
};
```

You can find [here a example](https://docs.nevermined.io/docs/react-components/example)

## Running unit tests

Run `nx test:unit provider`
