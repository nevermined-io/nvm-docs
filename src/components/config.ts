import { ethers } from 'ethers';
import {AuthToken} from '@nevermined-io/catalog-core';

export const appConfig = () => ({
  web3Provider: typeof window !== 'undefined' ? (window as any).ethereum :
    new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com'),
  nodeUri: 'https://matic-mumbai.chainstacklabs.com',
  gatewayUri: 'https://defi.v2.gateway.mumbai.nevermined.rocks',
  faucetUri: 'https://faucet.rinkeby.nevermined.rocks',
  verbose: true,
  gatewayAddress: "0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",
  graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/common',
  marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
  marketplaceUri: 'https://defi.v2.marketplace-api.mumbai.nevermined.rocks',
  artifactsFolder: `${location.protocol}//${location.host}/contracts`
});