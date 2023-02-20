import React from 'react'
import { WalletProvider, useWallet, Wagmi, ConnectKit } from '@nevermined-io/providers'
import { UiButton, UiText, BEM } from '@nevermined-io/styles'
import styles from './styles.module.scss'
import { ChainsConfig } from '../config'

const b = BEM('providers', styles)

const Login = () => {
  const { login, walletAddress, logout, getConnectors} = useWallet()

  return (
    <div className={b('content')}>
      {!walletAddress ?
        getConnectors().map(c => 
          <UiButton className={b('content', ['connector'])} key={c.name} type='secondary' onClick={() => login(c)}>Connect to {c.name}</UiButton>
        )
        : 
        <>
          <UiText type='p' variants={["detail"]}>{walletAddress}</UiText>
          <UiButton type='secondary' onClick={logout}>Logout</UiButton>
        </>
      }
    </div>
  )
}

const ProvidersApp = () =>{
  const client = Wagmi.createClient(
    ConnectKit.getDefaultClient({
      appName: 'Login',
      chains: ChainsConfig,
      autoConnect: true
    })
  )

  return (
    <WalletProvider
      client={client}
      correctNetworkId={80001}
      connectKitProps={
        {
          theme: 'auto',
          mode: 'dark',
        }
      }
    >
      <Login/>
    </WalletProvider>
)
}

export default ProvidersApp