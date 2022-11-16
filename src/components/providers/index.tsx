import React from 'react'
import { WalletProvider, getClient, useWallet } from '@nevermined-io/catalog-providers'
import { UiButton, UiText, BEM } from '@nevermined-io/styles'
import styles from './styles.module.scss'

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

const ProvidersApp = () => (
  <WalletProvider
    client={getClient('Login')}
  >
    <Login/>
  </WalletProvider>
)

export default ProvidersApp