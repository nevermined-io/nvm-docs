---
sidebar_position: 4
---


# Release Process

## Build a new version

The steps to build a new version are the following:

- Create a new local feature branch, e.g. `git checkout -b release/v0.2.5`
- Use the `bumpversion.sh` script to bump the project version. You can execute the script using {major|minor|patch} as first argument to bump the version accordingly:
  - To bump the patch version: `./bumpversion.sh patch`
  - To bump the minor version: `./bumpversion.sh minor`
  - To bump the major version: `./bumpversion.sh major`
- assuming we are on version `v0.2.4` and the desired version is `v0.2.5` `./bumpversion.sh patch` has to be run.

## Interact with networks

### Roles

We define four roles:

- `deployer`: represented as `accounts[0]`
- `upgrader`: represented as `accounts[1]`
- `upgraderWallet`: represented as the `upgrader` from `wallets.json`
- `ownerWallet`: represented as the `owner` from `wallets.json`
- `governorWallet`: represented as the `governor` from `wallets.json`

### Flags

- `--testnet` Deploys the Dispenser, the NeverminedToken and the contracts from `contracts.json`
- `--with-token` Deploys the NeverminedToken and the contracts from `contracts.json`

### Nevermined Configuration

The set of Nevermined contracts can be deployed in different networks and interact with several use cases.
Each of these different scenarios could require different configurations so to facilitate that Nevermined provides an
on-chain configuration mechanism allowing the governance (via DAO or similar) of a Nevermined deployment.
To see all the available possibilities please see the `INeverminedConfig` interface.

During the deployment of Nevermined all of these parameters can be specified allowing a bespoke environment configuration.
This can be done via the definition of the following environment variables:

* `NVM_MARKETPLACE_FEE`. It refers to the fee charged by Nevermined for using the Service Agreements. It uses an integer number representing a 2 decimal number. It means 1450 means 14.50% fee. The value must be beteen 0 and 10000 (100%). See `marketplaceFee` variable.
* `NVM_RECEIVER_FEE`. It refers to the address that will receive the fee charged by Nevermined per transaction. See `feeReceiver` variable

#### Deployer

Can be any account. It is used for deploying the initial proxy contracts and the logic contracts.

#### Upgrader

Has to be an `owner` of the `upgrader` multi sig wallet. It is used for issuing upgrade requests against the `upgrader` multi sig wallet.

#### UpgraderWallet

One instance of the multi sig wallet, defined as `upgrader`. This wallet will be assigned as zos admin and is required to do upgrades.

#### OwnerWallet

One instance of the multi sig wallet, defined as `owner`. This wallet will be assigned as the `owner` of all the contracts. It can be used to call specific functions in the contracts ie. change the configuration.

### Deploy & Upgrade

- run `yarn clean` to clean the work dir.
- run `yarn compile` to compile the contracts.

#### Rinkeby (Testnet)

- Copy the wallet file for `rinkeby`
  - `cp wallets_rinkeby.json wallets.json`
- run `export MNEMONIC=<your rinkeby mnemonic>`. You will find them in the password manager.

##### Deploy the whole application

- To deploy all contracts run `yarn deploy:rinkeby`

##### Deploy a single contracts

- To deploy a single contract you need to specify the contracts to deploy as a parameter to the deploy script: ie. `yarn deploy:rinkeby -- NeverminedToken Dispenser`will deploy `NeverminedToken` and `Dispenser`.

##### Upgrade the whole application

- To upgrade all contracts run `yarn upgrade:rinkeby`

##### Upgrade a single contract

- To upgrade a single contract run `yarn upgrade:rinkeby -- NeverminedToken`. For upgrading the `NeverminedToken` contract.

##### Persist artifacts

- Commit all changes in `artifacts/*.rinkeby.json`

#### Mumbai (PolygonTestnet)

- Copy the wallet file for `mumbai`
    - `cp wallets_mumbai.json wallets.json`
- run `export MNEMONIC=<your mumbai mnemonic>`. You will find them in the password manager.

##### Deploy the whole application

- To deploy all contracts run `yarn deploy:mumbai`

##### Deploy a single contracts

- To deploy a single contract you need to specify the contracts to deploy as a parameter to the deploy script: ie. `yarn deploy:mumbai -- NeverminedToken Dispenser`will deploy `NeverminedToken` and `Dispenser`.

##### Upgrade the whole application

- To upgrade all contracts run `yarn upgrade:mumbai`

##### Upgrade a single contract

- To upgrade a single contract run `yarn upgrade:mumbai -- NeverminedToken`. For upgrading the `NeverminedToken` contract.

##### Persist artifacts

- Commit all changes in `artifacts/*.mumbai.json`


#### Kovan (Testnet)

- Copy the wallet file for `kovan` > `cp wallets_kovan.json wallets.json`
- run `export MNEMONIC=<your kovan mnemonic>`. You will find them in the password manager.
- run `export INFURA_TOKEN=<your infura token>`. You will get it from `infura`.

##### Deploy the whole application

- To deploy all the contracts run `yarn deploy:kovan`

##### Deploy a single contracts

- To deploy a single contracts you need to specify the contracts to deploy as a parameter to the deploy script: ie. `yarn deploy:kovan -- NeverminedToken Dispenser` will deploy `NeverminedToken` and `Dispenser`.

##### Upgrade the whole application

- To upgrade all contracts run `yarn upgrade:kovan`

##### Upgrade a single contract

- To upgrade a single contract run `yarn upgrade:kovan -- NeverminedToken`. For upgrading the `NeverminedToken` contract.

##### Persist artifacts

- Commit all changes in `artifacts/*.kovan.json`

#### Approve upgrades

All upgrades of the contracts have to be approved by the `upgrader` wallet configured in the `wallets.json` file.

- go to https://wallet.gnosis.pm
- Load `upgrader` wallet
- Select an Ethereum Account that is an `owner` of the multi sig wallet, but not the one who issued the upgrade request. This can be done in the following ways:
  - Connect to a local Blockchain node that holds the private key.
  - Connect to MetaMask and select the owner account from the multi sig wallet.
  - Connect a hardware wallet like ledger or trezor.
- Select the transaction you want to confirm (the upgrade script will tell you which transactions have to be approved in which wallets)
- Click Confirm

## Upload the artifacts (abis/contracts) to Contract Repository

Once the contracts are deployed to a public network or a new contract version whose contract abis has to been uploaded, use `scripts/upload_artifacts_s3.sh` to upload
the contracts or artifacts to repository https://artifacts-nevermined-rocks.s3.amazonaws.com.

*Your environment has to be configured and authorized to use aws cli to upload files to `artifacts-nevermined-rocks` bucketi*.

The script has the next variables:

- `branch` is the branch from where the workflow and artifacts will be used.
- `asset` can be `abis`/`contracts`. Use abis if you want to upload the contract ABIs that not contain deployment information. Contracts for uploading abis with deployment information to `network`.
- `network` refers to network name, based on filename/hardhat config. Not used if `abis` is selected.
- `tag` refers to deployment tag. Defaults to common. Not used if `abis` is selected.

This workflows uses the script `scripts/upload_artifacts_s3.sh` that can be used using the next syntax:

```bash
./scripts/upload_artifacts_s3.sh abis
./scripts/upload_artifacts_s3.sh contracts mumbai awesome_tag
```

## Document

### Contracts documentation

- Update the contracts documentation
- run `yarn doc:contracts`
- Commit the changes in `docs/contracts` folder

## Trigger CI

- Commit the missing changes to the feature branch.
- Tag the last commit with the new version number ie. `v0.2.5`
- Push the feature branch to GitHub.
- Make a pull request from the just-pushed branch to `develop` branch.
- Wait for all the tests to pass!
- Merge the pull request into the `develop` branch.

## Release and packages

The release itself is done by `github actions` based on the tagged commit.

It will deploy the following components:

- [npm](https://www.npmjs.com/package/@nevermined-io/contracts)
- [pypi](https://pypi.org/project/nevermined-contracts/)
- [maven](https://search.maven.org/artifact/io.keyko.nevermined/contracts)
- [docker](https://hub.docker.com/r/neverminedio/contracts)

The npm, pypi and maven packages contain the contract artifacts for the contracts already deployed in different networks
(such as `Production`, `Rinkeby`, `Mumbai`, `Testing`, or `Spree`).
The docker image generated contains the contracts and script ready to be used to deploy the contracts to a network.
It is used for deploying the contracts in the local network `Spree` in [nevermined-io/tools](https://github.com/nevermined-io/tools)

Once the new version is tagged and released, you can edit the `Releases` section of GitHub with the information and
changes about the new version (in the future, these will come from the changelog):

## Audit

To check or document that all transactions have been approved in the multi sig wallet you can run `yarn audit:rinkeby`
to get a list of all the current transactions and their current status.

```text
 Wallet: 0x24EB26D4042a2AB576E7E39b87c3f33f276AeF92

 Transaction ID: 64
 Destination: 0xfA16d26e9F4fffC6e40963B281a0bB08C31ed40C
 Contract: EscrowAccessSecretStoreTemplate
 Data is `upgradeTo` call: true
 Confirmed from: 0x7A13E1aD23546c9b804aDFd13e9AcB184EfCAF58
 Executed: false
```
