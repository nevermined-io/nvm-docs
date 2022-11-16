import React, { useEffect, useState } from 'react'
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards'
import { MetaData, Logger, DDO } from '@nevermined-io/nevermined-sdk-js'
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber'
import { Catalog, AssetService, RoyaltyKind, getRoyaltyScheme, Config } from '@nevermined-io/catalog-core'
import { WalletProvider, useWallet, getClient } from '@nevermined-io/catalog-providers'
import { UiText, UiLayout, BEM, UiButton } from '@nevermined-io/styles'
import { ethers } from 'ethers'
import styles from './styles.module.scss'
import { appConfig } from '../config'

const ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

const b = BEM('demo', styles)

const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined()

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText className={b('detail')}>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText className={b('detail')}>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  )
}

const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  )
}

const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined()

  return (
    <>
      <UiButton type='secondary' onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  )
}

const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()
  const { walletAddress } = useWallet()
  const [ownNFT1155, setOwnNFT1155] = useState(false)
  const [isBought, setIsBought] = useState(false)
  const [owner, setOwner] = useState('')
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

  const buy = async () => {
    const response = await nfts.access(ddo.id, owner, BigNumber.from(1), 1155)
    setIsBought(Boolean(response))
  }

  const download = async () => {
    console.log(ddo.id)
    await assets.downloadNFT(ddo.id)
  }

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton type='secondary' onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  )
}

const MMWallet = () => {
  const { login, walletAddress, getConnectors } = useWallet()
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton type='secondary' onClick={() => login(getConnectors()[0])}>Connect To MM</UiButton>}
    </UiLayout>
  )
}

const App = ({ config }: {config: Config}) => {
  const { isLoadingSDK, sdk } = Catalog.useNevermined()
  const { publishNFT1155 } = AssetService.useAssetPublish()
  const { walletAddress } = useWallet()
  const [ddo, setDDO] = useState<DDO>({} as DDO)
  Logger.setLevel(3)

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString()
    }
  }

  const onPublish = async () => {
    try {
      const assetRewardsMap = new Map([
        [walletAddress, BigNumber.from(1)]
      ])
  
      const assetRewards = new AssetRewards(assetRewardsMap)
      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()

      assetRewards.addNetworkFees(feeReceiver, BigNumber.from(networkFee))

      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      }

      const response = await publishNFT1155({
        gatewayAddress: config.gatewayAddress,
        assetRewards,
        metadata,
        nftAmount: BigNumber.from(1),
        preMint: true,
        cap: BigNumber.from(100),
        royaltyAttributes,
        erc20TokenAddress: ERC_TOKEN,
      })

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  )
}

export const DemoCatalog = () => {
  const config: Config = appConfig()
  config.web3Provider = typeof window !== 'undefined'
  // eslint-disable-next-line
    ? (window as any)?.ethereum
    : new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com')

  return(
    <Catalog.NeverminedProvider config={config} verbose={true}>
      <AssetService.AssetPublishProvider>
        <WalletProvider
          client={getClient()}
        >
          <App config={ config }/>
        </WalletProvider>
      </AssetService.AssetPublishProvider>
    </Catalog.NeverminedProvider>
  )
}
