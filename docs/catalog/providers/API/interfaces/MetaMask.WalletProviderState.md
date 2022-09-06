# Interface: WalletProviderState

[MetaMask](../modules/MetaMask.md).WalletProviderState

Provider with all the functionalities to manage Metamask wallet

## Table of contents

### Properties

- [checkIsLogged](MetaMask.WalletProviderState.md#checkislogged)
- [getProvider](MetaMask.WalletProviderState.md#getprovider)
- [isAvailable](MetaMask.WalletProviderState.md#isavailable)
- [isChainCorrect](MetaMask.WalletProviderState.md#ischaincorrect)
- [loginMetamask](MetaMask.WalletProviderState.md#loginmetamask)
- [logout](MetaMask.WalletProviderState.md#logout)
- [promptSwitchAccounts](MetaMask.WalletProviderState.md#promptswitchaccounts)
- [switchChainsOrRegisterSupportedChain](MetaMask.WalletProviderState.md#switchchainsorregistersupportedchain)
- [walletAddress](MetaMask.WalletProviderState.md#walletaddress)

## Properties

### checkIsLogged

• **checkIsLogged**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

Check if the user is logged in the Metamask wallet

##### Returns

`Promise`<`boolean`\>

#### Defined in

[metamask.tsx:137](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L137)

___

### getProvider

• **getProvider**: () => [`MetamaskProvider`](../modules/MetaMask.md#metamaskprovider)

#### Type declaration

▸ (): [`MetamaskProvider`](../modules/MetaMask.md#metamaskprovider)

Metamask provider for example web3 or ethers

##### Returns

[`MetamaskProvider`](../modules/MetaMask.md#metamaskprovider)

#### Defined in

[metamask.tsx:133](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L133)

___

### isAvailable

• **isAvailable**: () => `boolean`

#### Type declaration

▸ (): `boolean`

If Metamask wallet is installed and available in the browser

##### Returns

`boolean`

#### Defined in

[metamask.tsx:139](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L139)

___

### isChainCorrect

• **isChainCorrect**: `boolean`

If chain is supported between available networks

#### Defined in

[metamask.tsx:151](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L151)

___

### loginMetamask

• **loginMetamask**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Login in Metamask

##### Returns

`Promise`<`void`\>

#### Defined in

[metamask.tsx:149](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L149)

___

### logout

• **logout**: () => `void`

#### Type declaration

▸ (): `void`

Logout from the wallet

##### Returns

`void`

#### Defined in

[metamask.tsx:135](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L135)

___

### promptSwitchAccounts

• **promptSwitchAccounts**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Switch between Metamask accounts

##### Returns

`Promise`<`void`\>

#### Defined in

[metamask.tsx:141](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L141)

___

### switchChainsOrRegisterSupportedChain

• **switchChainsOrRegisterSupportedChain**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Check if the switched chain is supported
and in case that not it suggests to change to the default chain
also if a chain is not registered in Metamask it ask for register it

##### Returns

`Promise`<`void`\>

#### Defined in

[metamask.tsx:145](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L145)

___

### walletAddress

• **walletAddress**: `string`

The address of the wallet account

#### Defined in

[metamask.tsx:147](https://github.com/nevermined-io/components-catalog/blob/658432b/providers/src/metamask.tsx#L147)
