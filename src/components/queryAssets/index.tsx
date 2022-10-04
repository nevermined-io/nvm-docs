import React, { useEffect, useState } from 'react';
import { AssetsModule, Catalog, DDO, AuthToken } from '@nevermined-io/catalog-core';
import { UiForm, UiFormInput, UiText, UiLayout, UiDivider, UiButton } from '@nevermined-io/styles';
import { ethers } from 'ethers';

interface SearchAssets {
  name?: boolean;
  additionalInformation?: boolean;
  priceRange?: boolean;
  short?: boolean;
}

const QuerySearchByName = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([]);

  const onSearchByName = async(value: string) => {
    if(value.length < 3) {
      return;
    }

    const response = await assetsModule.query({
      query: {
        "query_string": {
          query: `*${value}*`,
          fields: ["service.attributes.main.name"]
        }
      },
    });
    console.log(response);
    setDdos(response.results || []);
    
  };

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with Aave)'
          onChange={(e) => onSearchByName(e.target.value)}/>
      </UiForm>

      {ddos.map(ddo =>
        <>
        <UiDivider line={true}/>
        <UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
        </>
      )}
    </>


  )
}

const QuerySearch = (searchAssets: SearchAssets) => {
  const { assets, isLoadingSDK } = Catalog.useNevermined();

  return (
    <>
      {searchAssets.name && !isLoadingSDK && <QuerySearchByName assetsModule={assets}/>}
    </>
  )
}

const QueryAssets = (searchAssets: SearchAssets ) => {
  const appConfig = {
    web3Provider: typeof window !== 'undefined' ? (window as any).ethereum : new ethers.providers.JsonRpcProvider(),
    gatewayUri: 'https://defi.v2.gateway.mumbai.nevermined.rocks',
    faucetUri: 'https://faucet.rinkeby.nevermined.rocks',
    verbose: true,
    gatewayAddress: "0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",
    graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/common',
    marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
    marketplaceUri: 'https://defi.v2.marketplace-api.mumbai.nevermined.rocks',
    artifactsFolder: `${location.protocol}//${location.host}/contracts`
  };

  return(
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <QuerySearch name={searchAssets.name}/>
    </Catalog.NeverminedProvider>
  )
};

export default QueryAssets;