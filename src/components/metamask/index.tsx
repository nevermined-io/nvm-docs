import React from 'react'
import { MetaMask } from '@nevermined-io/catalog-providers'
import { UiButton, UiText, BEM } from '@nevermined-io/styles'
import styles from './styles.module.scss'

const b = BEM('metamask', styles)

const NODE_URI="https://rpc-mumbai.matic.today"

const LoginMetamask = () => {
    const { loginMetamask, walletAddress, logout} = MetaMask.useWallet()

    return (
        <div className={b('content')}>
            {!walletAddress ?
              <UiButton type='secondary' onClick={loginMetamask}>Connect to Metamask</UiButton>
              : 
              <>
                <UiText type='p' variants={["detail"]}>{walletAddress}</UiText>
                <UiButton type='secondary' onClick={logout}>Logout</UiButton>
              </>
            }
        </div>
    )
}

const MetamaskApp = () => (
  <MetaMask.WalletProvider
    correctNetworkId="0x13881"
    nodeUri={NODE_URI}
  >
    <LoginMetamask/>
  </MetaMask.WalletProvider>
)

export default MetamaskApp