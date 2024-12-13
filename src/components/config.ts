import { NeverminedOptions } from '@nevermined-io/sdk'
import { Chains, Wagmi } from '@nevermined-io/providers'

export const appConfig = (): NeverminedOptions => ({
  web3ProviderUri:  'https://sepolia-rollup.arbitrum.io/rpc',
  neverminedNodeUri: 'https://node.testing.nevermined.app',
  verbose: 2,
  neverminedNodeAddress: '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc',  
  marketplaceUri:'https://marketplace-api.testing.nevermined.app',
  artifactsFolder: `${location.protocol}//${location.host}/contracts`,
})

export const ChainsConfig: Wagmi.Chain[] = [Chains.polygonMumbai]
