import { BigNumber, Account, Config } from '@nevermined-io/catalog-core'
import { ethers, Contract } from 'ethers'

export const getFeesFromBigNumber = (fees: BigNumber): string => {
  return (fees.toNumber() / 10000).toPrecision(2).toString()
}

export const loadNeverminedConfigContract = async (config: Config, account: Account): Promise<Contract> => {
  const abiNvmConfig = `${config.artifactsFolder}/NeverminedConfig.mumbai.json`
  const contractFetched = await fetch(abiNvmConfig)
  const nvmConfigAbi = await contractFetched.json()

  return new ethers.Contract(
    nvmConfigAbi.address,
    nvmConfigAbi.abi,
    await account.findSigner(nvmConfigAbi.address),
  )
}