import React, {useEffect, useState} from 'react';
import { Nevermined, Account, Config, Logger, DDO, MetaData } from '@nevermined-io/nevermined-sdk-js';
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards';
import { RoyaltyKind, getRoyaltyScheme, RoyaltyAttributes } from '@nevermined-io/nevermined-sdk-js/dist/node/nevermined/Assets';
import { UiLayout, UiText, UiButton, BEM } from '@nevermined-io/styles';
import { ethers } from 'ethers';
import { appConfig } from '../config';
import styles from './styles.module.scss';
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber';
const b = BEM('demo', styles);

Logger.setLevel(3);

const loginMarketplace = async (sdk: Nevermined, account: Account) => {
  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account);
  await sdk.marketplace.login(clientAssertion);
}

const constructRewardMap = (
  recipientsData: any[],
  priceWithoutFee: number,
  ownerWalletAddress: string
): Map<string, BigNumber> => {
  const rewardMap: Map<string, BigNumber> = new Map();
  let recipients: any = [];
  if (recipientsData.length === 1 && recipientsData[0].split === 0) {
    recipients = [
      {
        name: ownerWalletAddress,
        split: 100,
        walletAddress: ownerWalletAddress
      }
    ];
  }
  let totalWithoutUser = 0;

  recipients.forEach((recipient: any) => {
    if (recipient.split && recipient.split > 0) {
      const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();
      rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));
      totalWithoutUser += recipient.split;
    }
  });

  if (!rewardMap.has(ownerWalletAddress)) {
    const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();
    rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));
  }

  return rewardMap;
};

const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {
  return (
    <>
      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>
        mint
      </UiButton>
    </>
  );
};

const SingleAsset = ({ddo}: {ddo: DDO}) => {
  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  );
};

const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      const balance = await sdk.nfts.balance(ddo.id, account);
      const nftBalance =  BigNumber.from(balance).toNumber();
      setOwnNFT1155(nftBalance > 0);
      setOwner(await sdk.assets.owner(ddo.id))
    })();
  }, [account, isBought])


  const onBuy = async () => {
    await loginMarketplace(sdk, account);

    try {
      const agreementId = await sdk.nfts.order(ddo.id, BigNumber.from(1), account);
      const transferResult = await sdk.nfts.transferForDelegate(
        agreementId,
        owner,
        account.getId(),
        BigNumber.from(1),
        1155,
      );
      
      setIsBought(Boolean(transferResult));
    } catch (error) {
      Logger.error(error);
    }
  };

  const onDownload = async () => {
    try {
      await sdk.nfts.access(ddo.id, account);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={onDownload}>
          Download NFT
        </UiButton>
      ) : (
        owner !== account.getId() ?
        <UiButton type='secondary' onClick={onBuy}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};


const App = ({config}: {config: Config }) => {
  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined);
  const [account, setAccount] = useState<Account>(undefined as Account);
  const [ddo, setDDO] = useState<DDO>({} as DDO);
  const [walletAddress, setWalletAddress] = useState('');

  const loginMetamask = async () => {
    const response = await (window as any)?.ethereum?.request?.({
      method: "eth_requestAccounts",
    });
  
    setWalletAddress(ethers.utils.getAddress(response[0]));
  }

  useEffect(() => {
    (window as any)?.ethereum?.on("accountsChanged", (newAccount: string[]) => {
      if (newAccount && newAccount.length > 0) {
          setWalletAddress(
              ethers.utils.getAddress(newAccount[0])
          );
      } else {
          setWalletAddress("");
          console.log("No Account found!");
      }
    });

    (async() => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const accounts = await provider.listAccounts();
      setWalletAddress(
          accounts?.length ? ethers.utils.getAddress(accounts[0]) : ""
      );
    })();
  }, [])

  useEffect(() => {
    if(walletAddress) {
      (async () => {
        try {
          const nvm = await Nevermined.getInstance(config);
          const accounts = await nvm.accounts.list();

          setAccount(accounts[0]);
          setSdk(nvm);
        } catch(error) {
          console.log(error);
        }
      })();
    }
  }, [walletAddress]);

  const publishNFT1155 = async (gatewayAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetRewards: AssetRewards) => {
    const transferNftCondition = sdk.keeper.conditions.transferNftCondition;

    const transferNftConditionContractReceipt = await sdk.nfts.setApprovalForAll(transferNftCondition.address, true, accountWallet);

    Logger.log(`Contract Receipt for approved transfer NFT: ${transferNftConditionContractReceipt}`);

    const gateawayContractReceipt = await sdk.nfts.setApprovalForAll(gatewayAddress, true, accountWallet);

    Logger.log(`Contract Receipt for approved gateway: ${gateawayContractReceipt}`);


    const ddo = await sdk.nfts.createWithRoyalties(
      metadata,
      accountWallet,
      BigNumber.from(100),
      royaltyAttributes,
      assetRewards,
      BigNumber.from(1),
      "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
      true,
    );

    return ddo;
  }

  const onPublish = async () => {
    try {
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, account.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      };

      const metadata: MetaData = {
        main: {
          name: '',
          files: [{
            index: 0,
            contentType: 'application/json',
            url: 'https://github.com/nevermined-io/docs-legacy/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'
          }],
          type: 'dataset',
          author: '',
          license: '',
          dateCreated: new Date().toISOString(),
        }
      };

      await loginMarketplace(sdk, account);
      
      const response = await publishNFT1155(config.gatewayAddress, account, metadata, royaltyAttributes, assetRewards);

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <UiLayout>
        {account ? 
          <>
            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
            <UiText>{account.getId()}</UiText>
          </> : 
          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>
        }

        {walletAddress && !ddo.id && (
          <PublishAsset onPublish={onPublish} />
        )}

        {ddo?.id && (
          <>
              <SingleAsset ddo={ddo}/>
              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>
          </>
        )}

      </UiLayout>
    </div>
  );
};


export const DemoSDK = () => {
  const config: Config = appConfig();
  config.web3Provider = typeof window !== 'undefined'
  ? (window as any)?.ethereum
  : new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');

  return (
    <>  
      <App config={config}/>
    </>
  )
}
