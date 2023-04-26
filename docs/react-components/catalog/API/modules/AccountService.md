# Namespace: AccountService

## Table of contents

### Functions

- [useAccountCollection](AccountService.md#useaccountcollection)
- [useAccountReleases](AccountService.md#useaccountreleases)
- [useIsAssetHolder](AccountService.md#useisassetholder)
- [useIsNFT1155Holder](AccountService.md#useisnft1155holder)
- [useIsNFT721Holder](AccountService.md#useisnft721holder)
- [useUserProfile](AccountService.md#useuserprofile)

## Functions

### useAccountCollection

▸ **useAccountCollection**(`walletAddress`): `Object`

Get account owned nfts

**`Example`**

```typescript
const MyComponent = () => {
 const { isLoading, accountCollection  } = AccountService.useAccountCollection(userAddr);

 return (
  <>
     {accountCollection.map((a) => {
         return (
             <div>
                 <div>{a}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | user address |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountCollection` | `string`[] | All the nfts owned by the account |
| `isLoading` | `boolean` | If the nfts are still loading |

#### Defined in

[services/account.ts:76](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L76)

___

### useAccountReleases

▸ **useAccountReleases**(`walletAddress`): `Object`

Get account releases(mints)

**`Example`**

```typescript
const MyComponent = () => {
 const { isLoading, accountReleases  } = AccountService.useAccountReleases();

 return (
  <>
     {accountReleases.map((a) => {
         return (
             <div>
                 <div>{a}</div>
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | user address |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountReleases` | `string`[] |
| `isLoading` | `boolean` |

#### Defined in

[services/account.ts:32](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L32)

___

### useIsAssetHolder

▸ **useIsAssetHolder**(`did`, `walletAddress`): `Object`

This method validates if an user is an asset holder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `walletAddress` | `string` | The public address of the user |

#### Returns

`Object`

true if the user owns at least one edition of the NFT

| Name | Type |
| :------ | :------ |
| `ownAsset` | `boolean` |

#### Defined in

[services/account.ts:495](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L495)

___

### useIsNFT1155Holder

▸ **useIsNFT1155Holder**(`did`, `walletAddress`): `Object`

This method validates if a user is a NFT (ERC-1155 based) holder for a specific `tokenId`.
For ERC-1155 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the NFT within a NFT ERC-1155 contract |
| `walletAddress` | `string` | The public address of the user |

#### Returns

`Object`

true if the user owns at least one edition of the NFT

| Name | Type |
| :------ | :------ |
| `ownNFT1155` | `boolean` |

#### Defined in

[services/account.ts:530](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L530)

___

### useIsNFT721Holder

▸ **useIsNFT721Holder**(`nftAddress`, `walletAddress`): `Object`

This method validates if a user is a NFT (ERC-721 based) holder for a specific NFT contract address.
For ERC-1155 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftAddress` | `string` | The contract address of the ERC-721 NFT contract |
| `walletAddress` | `string` | The public address of the user |

#### Returns

`Object`

true if the user holds the NFT

| Name | Type |
| :------ | :------ |
| `ownNFT721` | `boolean` |

#### Defined in

[services/account.ts:566](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L566)

___

### useUserProfile

▸ **useUserProfile**(`walletAddress`): `Object`

Custom hook to handle User Profile: login, profile description, add new accounts, etc...

**`Example`**

Profile dashboard example:
```tsx
import React, { useEffect, useRef } from 'react'
import { AccountService } from '@nevermined-io/catalog'
import { MetaMask } from '@nevermined-io/providers'
import {
  UiForm,
  UiFormGroup,
  UiFormInput,
  UiFormItem,
  Orientation,
  UiButton,
  UiLayout,
  UiText,
  UiDivider,
  UiPopupHandlers,
  NotificationPopup,
  BEM
} from '@nevermined-io/styles'
import { NextPage } from 'next'
import styles from './user-profile.module.scss'

const b = BEM('user-profile', styles)

interface AdditionalInformation {
  linkedinProfile: string
}

export const UserProfile: NextPage = () => {
  const { walletAddress } = MetaMask.useWallet()
  const {
    errorMessage,
    successMessage,
    inputError,
    isUpdated,
    isAddressAdded,
    setUserProfile,
    userProfile,
    addresses,
    newAddress,
    submitUserProfile,
    addAddress
  } = AccountService.useUserProfile(walletAddress)

  const popupRef = useRef<UiPopupHandlers>()

  const closePopup = (event: any) => {
    popupRef.current?.close()
    event.preventDefault()
  }

  useEffect(() => {
    if (errorMessage) {
      popupRef.current?.open()
    }
  }, [errorMessage])

  return (
    <UiLayout type="container">
      <NotificationPopup closePopup={closePopup} message={errorMessage} popupRef={popupRef} />
      <UiLayout type="container">
        <UiText wrapper="h1" type="h1" variants={['heading']}>
          User Profile account
        </UiText>
        <UiText type="h2" wrapper="h2">
          Update your profile
        </UiText>
      </UiLayout>
      <UiDivider />
      <UiLayout type="container">
        <div className={b('profile-horizontal-line')} />
        <UiForm>
          <UiFormGroup orientation={Orientation.Vertical}>
            <UiFormInput
              className={b('profile-form-input')}
              label="Nickname *"
              inputError={inputError}
              value={userProfile.nickname}
              onChange={(e) => setUserProfile({ ...userProfile, nickname: e.target.value })}
              placeholder="Type your nickname"
            />
          </UiFormGroup>
          <UiFormGroup orientation={Orientation.Vertical}>
            <UiFormInput
              className={b('profile-form-input')}
              label="Name"
              value={userProfile.name}
              onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
              placeholder="Type your name"
            />
          </UiFormGroup>
          <UiFormGroup orientation={Orientation.Vertical}>
            <UiFormInput
              className={b('profile-form-input')}
              label="Email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
              placeholder="Type your email"
            />
          </UiFormGroup>
          <UiFormGroup orientation={Orientation.Vertical}>
            <UiFormInput
              className={b('profile-form-input')}
              label="Link Profile"
              placeholder="Type your link profile"
              value={(userProfile.additionalInformation as AdditionalInformation)?.linkedinProfile}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  additionalInformation: {
                    linkedinProfile: e.target.value
                  }
                })
              }
            />
          </UiFormGroup>
          <div className={b('profile-submit-container')}>
            <div className={b('profile-submit-container', ['updated-message'])}>
              {isUpdated ? (
                <UiText type="h3" wrapper="h3" variants={['success']}>
                  {successMessage}
                </UiText>
              ) : null}
            </div>
            <div className={b('profile-submit-container', ['submit'])}>
              <UiButton onClick={submitUserProfile}>Update Profile</UiButton>
            </div>
          </div>
        </UiForm>
      </UiLayout>
      <UiLayout type="container" className={b('profile-addresses')}>
        <UiText type="h2" wrapper="h2">
          Addresses
        </UiText>
        <div className={b('profile-horizontal-line')} />
        <UiForm>
          <div>
            <UiText type="h3">Current Addresses</UiText>
          </div>
          <div>
            <UiText variants={['detail']}>
              Change your wallet account to add more address to your profile
            </UiText>
          </div>

          <div className={b('profile-current-addresses-container')}>
            {addresses.map((a) => (
              <div key={a} className={b('profile-current-address')}>
                {a}
              </div>
            ))}
          </div>

          {newAddress && (
            <UiFormGroup orientation={Orientation.Vertical} className={b('profile-add-address')}>
              <UiFormItem
                label="Add new address"
                value={newAddress}
                onClick={addAddress}
                disabled={true}
              />
            </UiFormGroup>
          )}

          <div className={b('profile-submit-container')}>
            <div className={b('profile-submit-container', ['updated-message'])}>
              {isAddressAdded ? (
                <UiText type="h3" wrapper="h3" variants={['success']}>
                  {successMessage}
                </UiText>
              ) : null}
            </div>
          </div>
        </UiForm>
      </UiLayout>
    </UiLayout>
  )
}
```

**`See`**

[https://github.com/nevermined-io/defi-marketplace/blob/main/client/src/%2Bassets/user-profile.tsx](https://github.com/nevermined-io/defi-marketplace/blob/main/client/src/%2Bassets/user-profile.tsx)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `walletAddress` | `string` | Address of the wallet account |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `addAddress` | () => `Promise`<`void`\> | Add new address |
| `addresses` | `string`[] | Addresses wallet accounts included in the user profile |
| `errorMessage` | `string` | Error messages that come from sdk |
| `inputError` | `string` | Input error message |
| `isAddressAdded` | `boolean` | If new address is added |
| `isTokenGenerated` | `boolean` | If token has been generated |
| `isUpdated` | `boolean` | If profile is updated |
| `newAddress` | `string` | New address to add in the user profile |
| `reloadUserProfile` | () => `void` | Reload current user profile |
| `setUserProfile` | `Dispatch`<`SetStateAction`<`Partial`<[`UserProfileParams`](../interfaces/UserProfileParams.md)\>\>\> | Set parameters to user profile |
| `submitUserProfile` | () => `Promise`<`void`\> | Submit user profile |
| `successMessage` | `string` | Success messages |
| `userProfile` | `Partial`<[`UserProfileParams`](../interfaces/UserProfileParams.md)\> | User profile parameters |
| `userProfileLoadingStatus` | ``null`` \| ``"loading"`` \| ``"loaded"`` \| ``"failed"`` | Indicates current user profile loading status |

#### Defined in

[services/account.ts:288](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/services/account.ts#L288)
