import { Nevermined, NeverminedOptions } from '@nevermined-io/sdk'

const main = async () => {
  const config: NeverminedOptions = {
    // The web3 endpoint of the blockchain network to connect to, could be an Infura endpoint, Quicknode, or any other web3 provider
    web3ProviderUri: 'https://goerli-rollup.arbitrum.io/rpc',
    // The url of the marketplace api if you connect to one. It could be your own service if you run a Marketplace API
    marketplaceUri: 'https://marketplace-api.goerli.nevermined.app',
    // The url to a Nevermined node. It could be your own if you run a Nevermined Node
    neverminedNodeUri: 'https://node.goerli.nevermined.app',
    // The public address of the above Node
    neverminedNodeAddress: '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc',
    // The url to access the nevermined subgraphs required to query for on-chain events
    graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/public',
    // Folder where are copied the ABIs of the Nevermined Smart Contracts
    artifactsFolder: './artifacts',
  }

  const sdk = await Nevermined.getInstance(config)
  console.log(await sdk.utils.versions.get())
}

main().then(() => process.exit(0))
