---
sidebar_position: 2
---

# Solidity API

## TestDisputeManager

### accept

```solidity
mapping(bytes32 => bool) accept
```

### accepted

```solidity
function accepted(address provider, address buyer, bytes32 orig, bytes32 crypted) public view returns (bool)
```

### setAccepted

```solidity
function setAccepted(bytes32 orig, bytes32 crypted, address provider, address buyer) public
```

## Common

### getCurrentBlockNumber

```solidity
function getCurrentBlockNumber() external view returns (uint256)
```

getCurrentBlockNumber get block number

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the current block number |

### isContract

```solidity
function isContract(address addr) public view returns (bool)
```

_isContract detect whether the address is 
         is a contract address or externally owned account_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if it is a contract address |

### provenanceSignatureIsCorrect

```solidity
function provenanceSignatureIsCorrect(address _agentId, bytes32 _hash, bytes _signature) public pure returns (bool)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agentId | address | The address of the agent |
| _hash | bytes32 | bytes32 message, the hash is the signed message. What is recovered is the signer address. |
| _signature | bytes | Signatures provided by the agent |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the signature correspond to the agent address |

### calculateTotalAmount

```solidity
function calculateTotalAmount(uint256[] _amounts) public pure returns (uint256)
```

_Sum the total amount given an uint array_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the total amount |

### addressToBytes32

```solidity
function addressToBytes32(address _addr) public pure returns (bytes32)
```

### bytes32ToAddress

```solidity
function bytes32ToAddress(bytes32 _b32) public pure returns (address)
```

## Dispenser

### tokenRequests

```solidity
mapping(address => uint256) tokenRequests
```

### totalMintAmount

```solidity
uint256 totalMintAmount
```

### maxAmount

```solidity
uint256 maxAmount
```

### maxMintAmount

```solidity
uint256 maxMintAmount
```

### minPeriod

```solidity
uint256 minPeriod
```

### scale

```solidity
uint256 scale
```

### token

```solidity
contract NeverminedToken token
```

### RequestFrequencyExceeded

```solidity
event RequestFrequencyExceeded(address requester, uint256 minPeriod)
```

### RequestLimitExceeded

```solidity
event RequestLimitExceeded(address requester, uint256 amount, uint256 maxAmount)
```

### isValidAddress

```solidity
modifier isValidAddress(address _address)
```

### initialize

```solidity
function initialize(address _tokenAddress, address _owner) external
```

_Dispenser Initializer_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenAddress | address | The deployed contract address of an ERC20 |
| _owner | address | The owner of the Dispenser Runs only on initial contract creation. |

### requestTokens

```solidity
function requestTokens(uint256 amount) external returns (bool tokensTransferred)
```

_user can request some tokens for testing_

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the amount of tokens to be requested |

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokensTransferred | bool | Boolean indication of tokens are requested |

### setMinPeriod

```solidity
function setMinPeriod(uint256 period) external
```

_the Owner can set the min period for token requests_

| Name | Type | Description |
| ---- | ---- | ----------- |
| period | uint256 | the min amount of time before next request |

### setMaxAmount

```solidity
function setMaxAmount(uint256 amount) external
```

_the Owner can set the max amount for token requests_

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the max amount of tokens that can be requested |

### setMaxMintAmount

```solidity
function setMaxMintAmount(uint256 amount) external
```

_the Owner can set the max amount for token requests_

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the max amount of tokens that can be requested |

## HashLists

_Hash lists contract is a sample list contract in which uses 
     HashListLibrary.sol in order to store, retrieve, remove, and 
     update bytes32 values in hash lists.
     This is a reference implementation for IList interface. It is 
     used for whitelisting condition. Any entity can have its own 
     implementation of the interface in which could be used for the
     same condition._

### lists

```solidity
mapping(bytes32 => struct HashListLibrary.List) lists
```

### initialize

```solidity
function initialize(address _owner) public
```

_HashLists Initializer_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The owner of the hash list Runs only upon contract creation. |

### hash

```solidity
function hash(address account) public pure returns (bytes32)
```

_hash ethereum accounts_

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Ethereum address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of the account |

### add

```solidity
function add(bytes32[] values) external returns (bool)
```

_put an array of elements without indexing
     this meant to save gas in case of large arrays_

| Name | Type | Description |
| ---- | ---- | ----------- |
| values | bytes32[] | is an array of elements value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if values are added successfully |

### add

```solidity
function add(bytes32 value) external returns (bool)
```

_add indexes an element then adds it to a list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is a bytes32 value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is added successfully |

### update

```solidity
function update(bytes32 oldValue, bytes32 newValue) external returns (bool)
```

_update the value with a new value and maintain indices_

| Name | Type | Description |
| ---- | ---- | ----------- |
| oldValue | bytes32 | is an element value in a list |
| newValue | bytes32 | new value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is updated successfully |

### index

```solidity
function index(uint256 from, uint256 to) external returns (bool)
```

_index is used to map each element value to its index on the list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | index is where to 'from' indexing in the list |
| to | uint256 | index is where to stop indexing |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the sub list is indexed |

### has

```solidity
function has(bytes32 id, bytes32 value) external view returns (bool)
```

_has checks whether a value is exist_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| value | bytes32 | is element value in list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

_has checks whether a value is exist_

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is element value in list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### remove

```solidity
function remove(bytes32 value) external returns (bool)
```

_remove value from a list, updates indices, and list size_

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is an element value in a list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is removed successfully |

### get

```solidity
function get(bytes32 id, uint256 _index) external view returns (bytes32)
```

_has value by index_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| _index | uint256 | is where is value is stored in the list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the value if exists |

### size

```solidity
function size(bytes32 id) external view returns (uint256)
```

_size gets the list size_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | total length of the list |

### all

```solidity
function all(bytes32 id) external view returns (bytes32[])
```

_all returns all list elements_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32[] | all list elements |

### indexOf

```solidity
function indexOf(bytes32 id, bytes32 value) external view returns (uint256)
```

_indexOf gets the index of a value in a list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| value | bytes32 | is element value in list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | value index in list |

### ownedBy

```solidity
function ownedBy(bytes32 id) external view returns (address)
```

_ownedBy gets the list owner_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | list owner |

### isIndexed

```solidity
function isIndexed(bytes32 id) external view returns (bool)
```

_isIndexed checks if the list is indexed_

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the list is indexed |

## NeverminedToken

_Implementation of a Test Token.
     Test Token is an ERC20 token only for testing purposes_

### initialize

```solidity
function initialize(address _owner, address payable _initialMinter) public
```

_NeverminedToken Initializer
     Runs only on initial contract creation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |
| _initialMinter | address payable | is the first token minter added |

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 amount) internal
```

_See {ERC20-_beforeTokenTransfer}.

Requirements:

- minted tokens must not cause the total supply to go over the cap._

### mint

```solidity
function mint(address account, uint256 amount) external returns (bool)
```

_Creates `amount` tokens and assigns them to `account`, increasing
the total supply.

Emits a {Transfer} event with `from` set to the zero address.

Requirements:

- `to` cannot be the zero address._

## AgreementStoreLibrary

_Implementation of the Agreement Store Library.
     The agreement store library holds the business logic
     in which manages the life cycle of SEA agreement, each 
     agreement is linked to the DID of an asset, template, and
     condition IDs._

### Agreement

```solidity
struct Agreement {
  bytes32 did;
  address templateId;
  bytes32[] conditionIds;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
}
```

### AgreementList

```solidity
struct AgreementList {
  mapping(bytes32 &#x3D;&gt; struct AgreementStoreLibrary.Agreement) agreements;
  mapping(bytes32 &#x3D;&gt; bytes32[]) didToAgreementIds;
  mapping(address &#x3D;&gt; bytes32[]) templateIdToAgreementIds;
  bytes32[] agreementIds;
}
```

### create

```solidity
function create(struct AgreementStoreLibrary.AgreementList _self, bytes32 _id, bytes32, address _templateId, bytes32[]) internal
```

_create new agreement
     checks whether the agreement Id exists, creates new agreement 
     instance, including the template, conditions and DID._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct AgreementStoreLibrary.AgreementList | is AgreementList storage pointer |
| _id | bytes32 | agreement identifier |
|  | bytes32 |  |
| _templateId | address | template identifier |
|  | bytes32[] |  |

## Template

### getConditionTypes

```solidity
function getConditionTypes() external view returns (address[])
```

## AgreementStoreManager

_Implementation of the Agreement Store.

     The agreement store generates conditions for an agreement template.
     Agreement templates must to be approved in the Template Store
     Each agreement is linked to the DID of an asset._

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### agreementList

```solidity
struct AgreementStoreLibrary.AgreementList agreementList
```

_state storage for the agreements_

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### templateStoreManager

```solidity
contract TemplateStoreManager templateStoreManager
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _templateStoreManagerAddress, address _didRegistryAddress) public
```

_initialize AgreementStoreManager Initializer
     Initializes Ownable. Only on contract creation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |
| _conditionStoreManagerAddress | address | is the address of the connected condition store |
| _templateStoreManagerAddress | address | is the address of the connected template store |
| _didRegistryAddress | address | is the address of the connected DID Registry |

### fullConditionId

```solidity
function fullConditionId(bytes32 _agreementId, address _condType, bytes32 _valueHash) public pure returns (bytes32)
```

### agreementId

```solidity
function agreementId(bytes32 _agreementId, address _creator) public pure returns (bytes32)
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, address[] _conditionTypes, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts) public
```

_Create a new agreement.
     The agreement will create conditions of conditionType with conditionId.
     Only "approved" templates can access this function._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | is the ID of the new agreement. Must be unique. |
| _did | bytes32 | is the bytes32 DID of the asset. The DID must be registered beforehand. |
| _conditionTypes | address[] | is a list of addresses that point to Condition contracts. |
| _conditionIds | bytes32[] | is a list of bytes32 content-addressed Condition IDs |
| _timeLocks | uint256[] | is a list of uint time lock values associated to each Condition |
| _timeOuts | uint256[] | is a list of uint time out values associated to each Condition |

### CreateAgreementArgs

```solidity
struct CreateAgreementArgs {
  bytes32 _id;
  bytes32 _did;
  address[] _conditionTypes;
  bytes32[] _conditionIds;
  uint256[] _timeLocks;
  uint256[] _timeOuts;
  address _creator;
  uint256 _idx;
  address payable _rewardAddress;
  address _tokenAddress;
  uint256[] _amounts;
  address[] _receivers;
}
```

### createAgreementAndPay

```solidity
function createAgreementAndPay(struct AgreementStoreManager.CreateAgreementArgs args) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, address[] _conditionTypes, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address[] _account, uint256[] _idx, bytes[] params) public payable
```

### getAgreementTemplate

```solidity
function getAgreementTemplate(bytes32 _id) external view returns (address)
```

### getDIDRegistryAddress

```solidity
function getDIDRegistryAddress() public view virtual returns (address)
```

_getDIDRegistryAddress utility function 
used by other contracts or any EOA._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the DIDRegistry address |

## AccessCondition

_Implementation of the Access Condition

     Access Secret Store Condition is special condition
     where a client or Parity secret store can encrypt/decrypt documents 
     based on the on-chain granted permissions. For a given DID 
     document, and agreement ID, the owner/provider of the DID 
     will fulfill the condition. Consequently secret store 
     will check whether the permission is granted for the consumer
     in order to encrypt/decrypt the document._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### DocumentPermission

```solidity
struct DocumentPermission {
  bytes32 agreementIdDeprecated;
  mapping(address &#x3D;&gt; bool) permission;
}
```

### documentPermissions

```solidity
mapping(bytes32 => struct AccessCondition.DocumentPermission) documentPermissions
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _documentId, address _grantee, bytes32 _conditionId)
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _documentId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |

### reinitialize

```solidity
function reinitialize() external
```

Should be called when the contract has been upgraded.

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill access secret store condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### grantPermission

```solidity
function grantPermission(address _grantee, bytes32 _documentId) public
```

grantPermission is called only by DID owner or provider

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### renouncePermission

```solidity
function renouncePermission(address _grantee, bytes32 _documentId) public
```

renouncePermission is called only by DID owner or provider

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### checkPermissions

```solidity
function checkPermissions(address _grantee, bytes32 _documentId) external view returns (bool permissionGranted)
```

checkPermissions is called by Parity secret store

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

| Name | Type | Description |
| ---- | ---- | ----------- |
| permissionGranted | bool | true if the access was granted |

## IDisputeManager

### verifyProof

```solidity
function verifyProof(bytes proof, uint256[] pubSignals) external view returns (bool)
```

## AccessProofCondition

_Implementation of the Access Condition with transfer proof.
The idea is that the hash of the decryption key is known before hand, and the key matching this hash
is passed from data provider to the buyer using this smart contract. Using ZK proof the key is kept
hidden from outsiders. For the protocol to work, both the provider and buyer need to have public keys
in the babyjub curve. To initiate the deal, buyer will pass the key hash and the public keys of participants.
The provider needs to pass the cipher text encrypted using MIMC (symmetric encryption). The secret key for MIMC
is computed using ECDH (requires one public key and one secret key for the curve). The hash function that is
used is Poseidon._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### disputeManager

```solidity
contract IDisputeManager disputeManager
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, uint256 _origHash, uint256[2] _buyer, uint256[2] _provider, uint256[2] _cipher, bytes _proof, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress, address _disputeManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |
| _disputeManagerAddress | address | dispute manager address |

### changeDisputeManager

```solidity
function changeDisputeManager(address _disputeManagerAddress) external
```

### hashValues

```solidity
function hashValues(uint256 _origHash, uint256[2] _buyer, uint256[2] _provider) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _origHash | uint256 | is the hash of the key |
| _buyer | uint256[2] | buyer public key |
| _provider | uint256[2] | provider public key |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, uint256 _origHash, uint256[2] _buyer, uint256[2] _provider, uint256[2] _cipher, bytes _proof) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill key transfer

_The key with hash _origHash is transferred to the _buyer from _provider._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | associated agreement |
| _origHash | uint256 | is the hash of data to access |
| _buyer | uint256[2] | buyer public key |
| _provider | uint256[2] | provider public key |
| _cipher | uint256[2] | encrypted version of the key |
| _proof | bytes | SNARK proof that the cipher text can be decrypted by buyer to give the key with hash _origHash |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## ComputeExecutionCondition

_Implementation of the Compute Execution Condition
     This condition is meant to be a signal in which triggers
     the execution of a compute service. The compute service is fully described
     in the associated DID document. The provider of the compute service will
     send this signal to its workers by fulfilling the condition where
     they are listening to the fulfilled event._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### computeExecutionStatus

```solidity
mapping(bytes32 => mapping(address => bool)) computeExecutionStatus
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _computeConsumer, bytes32 _conditionId)
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _did)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _computeConsumer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the consumer's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _computeConsumer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill compute execution condition

_only the compute provider can fulfill this condition. By fulfilling this 
condition the compute provider will trigger the execution of 
the offered job/compute. The compute service is described in a DID document._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the consumer's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### wasComputeTriggered

```solidity
function wasComputeTriggered(bytes32 _did, address _computeConsumer) public view returns (bool)
```

wasComputeTriggered checks whether the compute is triggered or not.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the compute consumer's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the compute is triggered |

## Condition

_Implementation of the Condition

     Each condition has a validation function that returns either FULFILLED, 
     ABORTED or UNFULFILLED. When a condition is successfully solved, we call 
     it FULFILLED. If a condition cannot be FULFILLED anymore due to a timeout 
     or other types of counter-proofs, the condition is ABORTED. UNFULFILLED 
     values imply that a condition has not been provably FULFILLED or ABORTED. 
     All initialized conditions start out as UNFULFILLED._

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### generateId

```solidity
function generateId(bytes32 _agreementId, bytes32 _valueHash) public view returns (bytes32)
```

generateId condition Id from the following 
      parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement ID |
| _valueHash | bytes32 | hash of all the condition input values |

### fulfill

```solidity
function fulfill(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) internal returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill set the condition state to Fulfill | Abort

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState | new condition state (Fulfill/Abort) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the updated condition state |

### abortByTimeOut

```solidity
function abortByTimeOut(bytes32 _id) external returns (enum ConditionStoreLibrary.ConditionState)
```

abortByTimeOut set condition state to Aborted 
        if the condition is timed out

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the updated condition state |

## ConditionStoreLibrary

_Implementation of the Condition Store Library.
     
     Condition is a key component in the service execution agreement. 
     This library holds the logic for creating and updating condition 
     Any Condition has only four state transitions starts with Uninitialized,
     Unfulfilled, Fulfilled, and Aborted. Condition state transition goes only 
     forward from Unintialized -> Unfulfilled -> {Fulfilled || Aborted}_

### ConditionState

```solidity
enum ConditionState {
  Uninitialized,
  Unfulfilled,
  Fulfilled,
  Aborted
}
```

### Condition

```solidity
struct Condition {
  address typeRef;
  enum ConditionStoreLibrary.ConditionState state;
  address createdBy;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
}
```

### ConditionList

```solidity
struct ConditionList {
  mapping(bytes32 &#x3D;&gt; struct ConditionStoreLibrary.Condition) conditions;
  mapping(bytes32 &#x3D;&gt; mapping(bytes32 &#x3D;&gt; bytes32)) map;
  bytes32[] conditionIds;
}
```

### create

```solidity
function create(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, address _typeRef) internal
```

create new condition

_check whether the condition exists, assigns 
      condition type, condition state, last updated by, 
      and update at (which is the current block number)_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct ConditionStoreLibrary.ConditionList | is the ConditionList storage pointer |
| _id | bytes32 | valid condition identifier |
| _typeRef | address | condition contract address |

### updateState

```solidity
function updateState(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) internal
```

updateState update the condition state

_check whether the condition state transition is right,
      assign the new state, update last updated by and
      updated at._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct ConditionStoreLibrary.ConditionList | is the ConditionList storage pointer |
| _id | bytes32 | condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState | the new state of the condition |

### updateKeyValue

```solidity
function updateKeyValue(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, bytes32 _key, bytes32 _value) internal
```

## ConditionStoreManager

_Implementation of the Condition Store Manager.

     Condition store manager is responsible for enforcing the 
     the business logic behind creating/updating the condition state
     based on the assigned role to each party. Only specific type of
     contracts are allowed to call this contract, therefore there are 
     two types of roles, create role that in which is able to create conditions.
     The second role is the update role, which is can update the condition state.
     Also, it support delegating the roles to other contract(s)/account(s)._

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### RoleType

```solidity
enum RoleType {
  Create,
  Update
}
```

### createRole

```solidity
address createRole
```

### conditionList

```solidity
struct ConditionStoreLibrary.ConditionList conditionList
```

### epochList

```solidity
struct EpochLibrary.EpochList epochList
```

### nvmConfigAddress

```solidity
address nvmConfigAddress
```

### ConditionCreated

```solidity
event ConditionCreated(bytes32 _id, address _typeRef, address _who)
```

### ConditionUpdated

```solidity
event ConditionUpdated(bytes32 _id, address _typeRef, enum ConditionStoreLibrary.ConditionState _state, address _who)
```

### onlyCreateRole

```solidity
modifier onlyCreateRole()
```

### onlyUpdateRole

```solidity
modifier onlyUpdateRole(bytes32 _id)
```

### onlyValidType

```solidity
modifier onlyValidType(address typeRef)
```

### initialize

```solidity
function initialize(address _creator, address _owner, address _nvmConfigAddress) public
```

_initialize ConditionStoreManager Initializer
     Initialize Ownable. Only on contract creation,_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _creator | address | refers to the creator of the contract |
| _owner | address | refers to the owner of the contract |
| _nvmConfigAddress | address | refers to the contract address of `NeverminedConfig` |

### getCreateRole

```solidity
function getCreateRole() external view returns (address)
```

_getCreateRole get the address of contract
     which has the create role_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | create condition role address |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() external view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

### delegateCreateRole

```solidity
function delegateCreateRole(address delegatee) external
```

_delegateCreateRole only owner can delegate the 
     create condition role to a different address_

| Name | Type | Description |
| ---- | ---- | ----------- |
| delegatee | address | delegatee address |

### delegateUpdateRole

```solidity
function delegateUpdateRole(bytes32 _id, address delegatee) external
```

_delegateUpdateRole only owner can delegate 
     the update role to a different address for 
     specific condition Id which has the create role_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 |  |
| delegatee | address | delegatee address |

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### createCondition

```solidity
function createCondition(bytes32 _id, address _typeRef) external
```

_createCondition only called by create role address 
     the condition should use a valid condition contract 
     address, valid time lock and timeout. Moreover, it 
     enforce the condition state transition from 
     Uninitialized to Unfulfilled._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _typeRef | address | condition contract address |

### createCondition2

```solidity
function createCondition2(bytes32 _id, address _typeRef) external
```

### createCondition

```solidity
function createCondition(bytes32 _id, address _typeRef, uint256 _timeLock, uint256 _timeOut) public
```

_createCondition only called by create role address 
     the condition should use a valid condition contract 
     address, valid time lock and timeout. Moreover, it 
     enforce the condition state transition from 
     Uninitialized to Unfulfilled._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _typeRef | address | condition contract address |
| _timeLock | uint256 | start of the time window |
| _timeOut | uint256 | end of the time window |

### updateConditionState

```solidity
function updateConditionState(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) external returns (enum ConditionStoreLibrary.ConditionState)
```

_updateConditionState only called by update role address. 
     It enforce the condition state transition to either 
     Fulfill or Aborted state_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the current condition state |

### updateConditionMapping

```solidity
function updateConditionMapping(bytes32 _id, bytes32 _key, bytes32 _value) external
```

### updateConditionMappingProxy

```solidity
function updateConditionMappingProxy(bytes32 _id, bytes32 _key, bytes32 _value) external
```

### getCondition

```solidity
function getCondition(bytes32 _id) external view returns (address typeRef, enum ConditionStoreLibrary.ConditionState state, uint256 timeLock, uint256 timeOut, uint256 blockNumber)
```

_getCondition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| typeRef | address | the type reference |
| state | enum ConditionStoreLibrary.ConditionState | condition state |
| timeLock | uint256 | the time lock |
| timeOut | uint256 | time out |
| blockNumber | uint256 | block number |

### getConditionState

```solidity
function getConditionState(bytes32 _id) external view virtual returns (enum ConditionStoreLibrary.ConditionState)
```

_getConditionState_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### getConditionTypeRef

```solidity
function getConditionTypeRef(bytes32 _id) external view virtual returns (address)
```

_getConditionTypeRef_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | condition typeRef |

### getMappingValue

```solidity
function getMappingValue(bytes32 _id, bytes32 _key) external view virtual returns (bytes32)
```

_getConditionState_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | condition state |

### isConditionTimeLocked

```solidity
function isConditionTimeLocked(bytes32 _id) public view returns (bool)
```

_isConditionTimeLocked_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | whether the condition is timedLock ended |

### isConditionTimedOut

```solidity
function isConditionTimedOut(bytes32 _id) public view returns (bool)
```

_isConditionTimedOut_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | whether the condition is timed out |

## HashLockCondition

_Implementation of the Hash Lock Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(uint256 _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | uint256 | refers uint value of the hash pre-image. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(string _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | string | refers string value of the hash pre-image. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | bytes32 | refers bytes32 value of the hash pre-image. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, uint256 _preimage) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image uint value

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | uint256 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, string _preimage) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image string value

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | string |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _preimage) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image bytes32 value

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | bytes32 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### _fulfill

```solidity
function _fulfill(bytes32 _generatedId) private returns (enum ConditionStoreLibrary.ConditionState)
```

_fulfill calls super fulfil method

| Name | Type | Description |
| ---- | ---- | ----------- |
| _generatedId | bytes32 | SEA agreement identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## ICondition

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes params) external payable
```

## ILockPayment

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId, address _rewardAddress, address _tokenAddress, address[] _receivers, uint256[] _amounts)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires valid token transfer in order 
          to lock the amount of tokens based on the SEA

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment. |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## LockPaymentCondition

_Implementation of the Lock Payment Condition
This condition allows to lock payment for multiple receivers taking
into account the royalties to be paid to the original creators in a secondary market._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nvmConfig

```solidity
contract INVMConfig nvmConfig
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### KEY_ASSET_RECEIVER

```solidity
bytes32 KEY_ASSET_RECEIVER
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### ALLOWED_EXTERNAL_CONTRACT_ROLE

```solidity
bytes32 ALLOWED_EXTERNAL_CONTRACT_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### grantExternalContractRole

```solidity
function grantExternalContractRole(address _address) public
```

### revokeExternalContractRole

```solidity
function revokeExternalContractRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |

### reinitialize

```solidity
function reinitialize() external
```

Should be called when the contract has been upgraded.

### hashValues

```solidity
function hashValues(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires valid token transfer in order 
          to lock the amount of tokens based on the SEA

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment. |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfillExternal

```solidity
function fulfillExternal(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _externalContract, bytes32 _remoteId, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill lock condition using the funds locked in an external contract 
         (auction, bonding curve, lottery, etc)

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _externalContract | address | the address of the contract with the lock funds are locked |
| _remoteId | bytes32 | the id used to identify into the external contract |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### encodeParams

```solidity
function encodeParams(bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external pure returns (bytes)
```

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes params) external payable
```

### _transferERC20Proxy

```solidity
function _transferERC20Proxy(address _senderAddress, address _rewardAddress, address _tokenAddress, uint256 _amount) internal
```

_transferERC20Proxy transfer ERC20 tokens

_Will throw if transfer fails_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _senderAddress | address | the address to send the tokens from |
| _rewardAddress | address | the address to receive the tokens |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _amount | uint256 | token amount to be locked/released |

### _transferETH

```solidity
function _transferETH(address payable _rewardAddress, uint256 _amount) internal
```

_transferETH transfer ETH

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardAddress | address payable | the address to receive the ETH |
| _amount | uint256 | ETH amount to be locked/released |

### allowedExternalContract

```solidity
modifier allowedExternalContract(address _externalContractAddress)
```

### areMarketplaceFeesIncluded

```solidity
function areMarketplaceFeesIncluded(uint256[] _amounts, address[] _receivers) internal view returns (bool)
```

## DistributeNFTCollateralCondition

_Implementation of a condition allowing to transfer a NFT
     to an account or another depending on the final state of a lock condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### _lockConditionAddress

```solidity
address _lockConditionAddress
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, bytes32 _conditionId, address _contract)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _lockNFTConditionAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _lockNFTConditionAddress | address | Lock NFT Condition address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _vaultAddress | address | The contract address of the vault |
| _nftContractAddress | address | NFT contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _vaultAddress | address | The contract address of the vault |
| _nftContractAddress | address | NFT contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTAccess

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _documentId, address _grantee, bytes32 _conditionId)
```

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee, address _contractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access conditions

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTHolder

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _address, bytes32 _conditionId, uint256 _amount)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## INFTLock

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _lockAddress, bytes32 _conditionId, uint256 _amount, address _receiver, address _nftContractAddress)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the NFTs locked |
| _nftContractAddress | address | Is the address of the NFT (ERC-721, ERC-1155) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) external pure returns (bytes32)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

## ITransferNFT

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, uint256 _amount, bytes32 _conditionId, address _contract)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _contract, bool _transfer) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _contract | address |  |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _contract | address |  |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

## NFT721HolderCondition

_Implementation of the Nft Holder Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## NFT721LockCondition

_Implementation of the NFT Lock Condition for ERC-721 based NFTs_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the  contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public pure returns (bytes32)
```

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method lock a NFT into the `_lockAddress`._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens (1) |
| _receiver | address |  |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) public virtual returns (bytes4)
```

Always returns `IERC721Receiver.onERC721Received.selector`.

## NFTAccessCondition

_Implementation of the Access Condition specific for NFTs

     NFT Access Condition is special condition used to give access 
     to a specific NFT related to a DID._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### DocumentPermission

```solidity
struct DocumentPermission {
  bytes32 agreementIdDeprecated;
  mapping(address &#x3D;&gt; bool) permission;
}
```

### nftPermissions

```solidity
mapping(bytes32 => struct NFTAccessCondition.DocumentPermission) nftPermissions
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _documentId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID registry address |

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee, address _contractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | is the contract address of the NFT implementation (ERC-1155 or ERC-721) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### grantPermission

```solidity
function grantPermission(address _grantee, bytes32 _documentId) public
```

grantPermission is called only by DID owner or provider

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### checkPermissions

```solidity
function checkPermissions(address _grantee, bytes32 _documentId) external view returns (bool permissionGranted)
```

checkPermissions is called to validate the permissions of user related to the NFT attached to an asset

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID |

| Name | Type | Description |
| ---- | ---- | ----------- |
| permissionGranted | bool | true if the access was granted |

## NFTHolderCondition

_Implementation of the Nft Holder Condition_

### erc1155

```solidity
contract ERC1155BurnableUpgradeable erc1155
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _ercAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _ercAddress | address | Nevermined ERC-1155 address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## NFTLockCondition

_Implementation of the NFT Lock Condition_

### erc1155

```solidity
contract IERC1155Upgradeable erc1155
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### ERC1155_ACCEPTED

```solidity
bytes4 ERC1155_ACCEPTED
```

### ERC1155_BATCH_ACCEPTED

```solidity
bytes4 ERC1155_BATCH_ACCEPTED
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _ercAddress) external
```

initialize init the  contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _ercAddress | address | Nevermined ERC-1155 address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-1155) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public pure returns (bytes32)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nft) public returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _receiver | address |  |
| _nftContractAddress | address | Is the address of the NFT (ERC-1155) contract to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external pure returns (bytes4)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## TransferNFT721Condition

_Implementation of condition allowing to transfer an NFT
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### MARKET_ROLE

```solidity
bytes32 MARKET_ROLE
```

### erc721

```solidity
contract NFT721Upgradeable erc721
```

### _lockConditionAddress

```solidity
address _lockConditionAddress
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress, address _ercAddress, address _lockNFTConditionAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |
| _ercAddress | address | Nevermined ERC-721 address |
| _lockNFTConditionAddress | address |  |

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _contract, bool _transfer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _contract | address | NFT contract to use |
| _transfer | bool |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### encodeParams

```solidity
function encodeParams(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) external pure returns (bytes)
```

Encodes/serialize all the parameters received

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the NFT contract to use |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | the encoded parameters |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _contract | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes _params) external payable
```

fulfill the transfer NFT condition by a proxy

_Fulfill method transfer a certain amount of NFTs_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | NFT Holder |
| _agreementId | bytes32 | agreement identifier |
| _params | bytes | encoded parameters |

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer, uint256 _expirationBlock) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer, address _nftContractAddress, uint256 _expirationBlock) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |
| _nftContractAddress | address | the address of the ERC-721 NFT contract |
| _expirationBlock | uint256 | in which block the nft expires, if 0 it doesn't expire |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## TransferNFTCondition

_Implementation of condition allowing to transfer an NFT
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### MARKET_ROLE

```solidity
bytes32 MARKET_ROLE
```

### erc1155

```solidity
contract NFTUpgradeable erc1155
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress, address _ercAddress, address _nftContractAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |
| _ercAddress | address | Nevermined ERC-1155 address |
| _nftContractAddress | address | Market address |

### grantMarketRole

```solidity
function grantMarketRole(address _nftContractAddress) public
```

### revokeMarketRole

```solidity
function revokeMarketRole(address _nftContractAddress) public
```

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _nftContractAddress, bool _transfer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _nftContractAddress | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition) public returns (enum ConditionStoreLibrary.ConditionState)
```

### encodeParams

```solidity
function encodeParams(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) external pure returns (bytes)
```

Encodes/serialize all the parameters received

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the NFT contract to use |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | the encoded parameters |

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes _params) external payable
```

fulfill the transfer NFT condition by a proxy

_Fulfill method transfer a certain amount of NFTs_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | NFT Holder |
| _agreementId | bytes32 | agreement identifier |
| _params | bytes | encoded parameters |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the address of the ERC-721 NFT contract |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## SignCondition

_Implementation of the Sign Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _message, address _publicKey) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _message | bytes32 | the message to be signed |
| _publicKey | address | the public key of the signing address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _message, address _publicKey, bytes _signature) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill validate the signed message and fulfill the condition

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _message | bytes32 | the message to be signed |
| _publicKey | address | the public key of the signing address |
| _signature | bytes | signature of the signed message using the public key |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## ThresholdCondition

_Implementation of the Threshold Condition

     Threshold condition acts as a filter for a set of input condition(s) in which sends 
     a signal whether to complete the flow execution or abort it. This type of conditions 
     works as intermediary conditions where they wire SEA conditions in order to support  
     more complex scenarios._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32[] inputConditions, uint256 threshold) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32[] _inputConditions, uint256 threshold) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill threshold condition

_the fulfill method check whether input conditions are
      fulfilled or not._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### canFulfill

```solidity
function canFulfill(bytes32[] _inputConditions, uint256 threshold) private view returns (bool _fulfill)
```

canFulfill check if condition can be fulfilled

| Name | Type | Description |
| ---- | ---- | ----------- |
| _inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

| Name | Type | Description |
| ---- | ---- | ----------- |
| _fulfill | bool | true if can fulfill |

## TransferDIDOwnershipCondition

_Implementation of condition allowing to transfer the ownership
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _receiver) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _receiver | address | is the address of the granted user or the DID provider |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _receiver) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer DID ownership condition

_only DID owner or DID provider can call this
      method. Fulfill method transfer full ownership permissions 
      to to _receiver address. 
      When true then fulfill the condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _receiver | address | is the address of the granted user |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## WhitelistingCondition

_Implementation of the Whitelisting Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(address _listAddress, bytes32 _item) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _listAddress | address | list contract address |
| _item | bytes32 | item in the list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, address _listAddress, bytes32 _item) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill check whether address is whitelisted
in order to fulfill the condition. This method will be 
called by any one in this whitelist.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _listAddress | address | list contract address |
| _item | bytes32 | item in the list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## AaveBorrowCondition

_Implementation of the Aave Borrow Credit Condition_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _assetToBorrow, uint256 _amount, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToBorrow | address | the address of the asset to borrow (i.e DAI) |
| _amount | uint256 | the amount of the ERC-20 the assets to borrow (i.e 50 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _assetToBorrow, uint256 _amount, uint256 _interestRateMode) external returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to borrow the asset deposited by the lender

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToBorrow | address | the address of the asset to borrow (i.e DAI) |
| _amount | uint256 | the amount of the ERC-20 the assets to borrow (i.e 50 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCollateralDepositCondition

_Implementation of the Aave Collateral Deposit Condition
This condition allows a Lender to deposit the collateral that 
into account the royalties to be paid to the original creators in a secondary market._

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _collateralAsset, uint256 _collateralAmount, address _delegatedAsset, uint256 _delegatedAmount, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the ERC-20 that will be used as collateral (i.e WETH) |
| _collateralAmount | uint256 | the amount of the ERC-20 that will be used as collateral (i.e 10 WETH) |
| _delegatedAsset | address | the address of the ERC-20 that will be delegated to the borrower (i.e DAI) |
| _delegatedAmount | uint256 | the amount of the ERC-20 that will be delegated to the borrower (i.e 500 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _collateralAsset, uint256 _collateralAmount, address _delegatedAsset, uint256 _delegatedAmount, uint256 _interestRateMode) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

It fulfills the condition if the collateral can be deposited into the vault

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the ERC-20 that will be used as collateral (i.e WETH) |
| _collateralAmount | uint256 | the amount of the ERC-20 that will be used as collateral (i.e 10 WETH) |
| _delegatedAsset | address | the address of the ERC-20 that will be delegated to the borrower (i.e DAI) |
| _delegatedAmount | uint256 | the amount of the ERC-20 that will be delegated to the borrower (i.e 500 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCollateralWithdrawCondition

_Implementation of the Collateral Withdraw Condition
This condition allows to credit delegator withdraw the collateral and fees
after the agreement expiration_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _collateralAsset) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the asset used as collateral (i.e DAI) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _collateralAsset) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to repay the loan

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the asset used as collateral (i.e DAI) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCreditVault

### lendingPool

```solidity
contract ILendingPool lendingPool
```

### dataProvider

```solidity
contract IProtocolDataProvider dataProvider
```

### weth

```solidity
contract IWETHGateway weth
```

### addressProvider

```solidity
contract ILendingPoolAddressesProvider addressProvider
```

### priceOracle

```solidity
contract IPriceOracleGetter priceOracle
```

### borrowedAsset

```solidity
address borrowedAsset
```

### borrowedAmount

```solidity
uint256 borrowedAmount
```

### nvmFee

```solidity
uint256 nvmFee
```

### agreementFee

```solidity
uint256 agreementFee
```

### FEE_BASE

```solidity
uint256 FEE_BASE
```

### treasuryAddress

```solidity
address treasuryAddress
```

### borrower

```solidity
address borrower
```

### lender

```solidity
address lender
```

### repayConditionId

```solidity
bytes32 repayConditionId
```

### nftId

```solidity
uint256 nftId
```

### nftAddress

```solidity
address nftAddress
```

### BORROWER_ROLE

```solidity
bytes32 BORROWER_ROLE
```

### LENDER_ROLE

```solidity
bytes32 LENDER_ROLE
```

### CONDITION_ROLE

```solidity
bytes32 CONDITION_ROLE
```

### initialize

```solidity
function initialize(address _lendingPool, address _dataProvider, address _weth, uint256 _nvmFee, uint256 _agreementFee, address _treasuryAddress, address _borrower, address _lender, address[] _conditions) public
```

Vault constructor, creates a unique vault for each agreement

| Name | Type | Description |
| ---- | ---- | ----------- |
| _lendingPool | address | Aave lending pool address |
| _dataProvider | address | Aave data provider address |
| _weth | address | WETH address |
| _nvmFee | uint256 | Nevermined fee that will apply to this agreeement |
| _agreementFee | uint256 | Agreement fee that lender will receive on agreement maturity |
| _treasuryAddress | address | Address of nevermined contract to store fees |
| _borrower | address |  |
| _lender | address |  |
| _conditions | address[] |  |

### isLender

```solidity
function isLender(address _address) public view returns (bool)
```

### isBorrower

```solidity
function isBorrower(address _address) public view returns (bool)
```

### deposit

```solidity
function deposit(address _collateralAsset, uint256 _amount) public payable
```

Deposit function. Receives the funds from the delegator and deposits the funds
in the Aave contracts

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collateralAsset | address | collateral asset that will be deposit on Aave |
| _amount | uint256 | Amount of collateral to deposit |

### approveBorrower

```solidity
function approveBorrower(address _borrower, uint256 _amount, address _asset, uint256 _interestRateMode) public
```

Appproves delegatee to borrow funds from Aave on behalf of delegator

| Name | Type | Description |
| ---- | ---- | ----------- |
| _borrower | address | delegatee that will borrow the funds |
| _amount | uint256 | Amount of funds to delegate |
| _asset | address | Asset to delegate the borrow |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### delegatedAmount

```solidity
function delegatedAmount(address _borrower, address _asset, uint256 _interestRateMode) public view returns (uint256)
```

Return the actual delegated amount for the borrower in the specific asset

| Name | Type | Description |
| ---- | ---- | ----------- |
| _borrower | address | The borrower of the funds (i.e. delgatee) |
| _asset | address | The asset they are allowed to borrow |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### borrow

```solidity
function borrow(address _assetToBorrow, uint256 _amount, address _delgatee, uint256 _interestRateMode) public
```

Borrower can call this function to borrow the delegated funds

| Name | Type | Description |
| ---- | ---- | ----------- |
| _assetToBorrow | address | The asset they are allowed to borrow |
| _amount | uint256 | Amount to borrow |
| _delgatee | address | Address where the funds will be transfered |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### repay

```solidity
function repay(address _asset, uint256 _interestRateMode, bytes32 _repayConditionId) public
```

Repay an uncollaterised loan

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The asset to be repaid |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |
| _repayConditionId | bytes32 | identifier of the condition id working as lock for other vault methods |

### setRepayConditionId

```solidity
function setRepayConditionId(bytes32 _repayConditionId) public
```

### getBorrowedAmount

```solidity
function getBorrowedAmount() public view returns (uint256)
```

Returns the borrowed amount from the delegatee on this agreement

### getAssetPrice

```solidity
function getAssetPrice(address _asset) public view returns (uint256)
```

Returns the priceof the asset in the Aave oracles

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The asset to get the actual price |

### getCreditAssetDebt

```solidity
function getCreditAssetDebt() public view returns (uint256)
```

Returns the total debt of the credit in the Aave protocol expressed in token units

### getActualCreditDebt

```solidity
function getActualCreditDebt() public view returns (uint256)
```

Returns the total debt of the credit in the Aave protocol expressed in ETH units

### getTotalActualDebt

```solidity
function getTotalActualDebt() public view returns (uint256)
```

Returns the total actual debt of the agreement credit + fees in token units

### withdrawCollateral

```solidity
function withdrawCollateral(address _asset, address _delegator) public
```

Withdraw all of a collateral as the underlying asset, if no outstanding loans delegated

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The underlying asset to withdraw |
| _delegator | address | Delegator address that deposited the collateral |

### transferNFT

```solidity
function transferNFT(uint256 _tokenId, address _receiver) public
```

Transfer a NFT (ERC-721) locked into the vault to a receiver address

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | the token id |
| _receiver | address | the receiver adddress |

### _transferERC20

```solidity
function _transferERC20(address _collateralAsset, uint256 _amount) internal
```

Transfers the ERC20 token deposited to the Aave contracts

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collateralAsset | address | collateral asset that will be deposit on Aave |
| _amount | uint256 | Amount of collateral to deposit |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256 _tokenId, bytes) public virtual returns (bytes4)
```

Handle the receipt of an NFT

_The ERC721 smart contract calls this function on the recipient
after a {IERC721-safeTransferFrom}. This function MUST return the function selector,
otherwise the caller will revert the transaction. 

Note: the ERC721 contract address is always the message sender.
(param not used): operator The address which called `safeTransferFrom` function
(param not used): from The address which previously owned the token_

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | The NFT identifier which is being transferred (param not used): data Additional data with no specified format |
|  | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))` |

## AaveRepayCondition

_Implementation of the Aave Repay Condition
This condition allows to a borrower to repay a credit as part of a credit template_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _assetToRepay, uint256 _amountToRepay, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToRepay | address | the address of the asset to repay (i.e DAI) |
| _amountToRepay | uint256 | Amount to repay |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _assetToRepay, uint256 _amountToRepay, uint256 _interestRateMode) external returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to repay the loan

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToRepay | address | the address of the asset to repay (i.e DAI) |
| _amountToRepay | uint256 | Amount to repay |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## EscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### USED_PAYMENT_ID

```solidity
bytes32 USED_PAYMENT_ID
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, address _tokenAddress, address[] _receivers, bytes32 _conditionId, uint256[] _amounts)
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValuesMulti

```solidity
function hashValuesMulti(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### encodeParams

```solidity
function encodeParams(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes)
```

### hashValues

```solidity
function hashValues(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32 _releaseCondition) public pure returns (bytes32)
```

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfillMulti

```solidity
function fulfillMulti(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256[] _amounts;
  address[] _receivers;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct EscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32 _releaseCondition) external returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillERC20

```solidity
function _transferAndFulfillERC20(bytes32 _id, address _tokenAddress, address[] _receivers, uint256[] _amounts) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receivers | address[] | receiver's address |
| _amounts | uint256[] | token amount to be locked/released |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### _transferAndFulfillETH

```solidity
function _transferAndFulfillETH(bytes32 _id, address[] _receivers, uint256[] _amounts) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ETH and 
      fulfill the condition

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _receivers | address[] | receiver's address |
| _amounts | uint256[] | token amount to be locked/released |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTEscrow

_Common interface for ERC-721 and ERC-1155_

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, address _tokenAddress, bytes32 _did, address _receivers, bytes32 _conditionId, uint256 _amounts)
```

## NFT721EscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, uint256 _amounts, address _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256 | token amounts to be locked/released |
| _receivers | address | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _lockAddress, address _nftContractAddress, uint256 _amount, address _receiver) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _lockAddress | address | the contract address where the reward is locked |
| _nftContractAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256 _amount, address _receiver, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256 _amount;
  address _receiver;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct NFT721EscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillNFT

```solidity
function _transferAndFulfillNFT(bytes32 _agreementId, bytes32 _id, bytes32 _did, address _tokenAddress, address _receiver, uint256 _amount) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 |  |
| _id | bytes32 | condition identifier |
| _did | bytes32 |  |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receiver | address | receiver's address |
| _amount | uint256 | token amount to be locked/released |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) public virtual returns (bytes4)
```

## NFTEscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### LOCK_CONDITION_TYPE

```solidity
bytes32 LOCK_CONDITION_TYPE
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, uint256 _amounts, address _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256 | token amounts to be locked/released |
| _receivers | address | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _lockAddress, address _nftContractAddress, uint256 _amount, address _receiver) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _lockAddress | address | the contract address where the reward is locked |
| _nftContractAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's addresses |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256 _amount, address _receiver, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256 _amount;
  address _receiver;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct NFTEscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillNFT

```solidity
function _transferAndFulfillNFT(bytes32 _agreementId, bytes32 _id, bytes32 _did, address _tokenAddress, address _receiver, uint256 _amount) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 |  |
| _id | bytes32 | condition identifier |
| _did | bytes32 |  |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receiver | address | receiver's address |
| _amount | uint256 | token amount to be locked/released |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### ERC1155_ACCEPTED

```solidity
bytes4 ERC1155_ACCEPTED
```

### ERC1155_BATCH_ACCEPTED

```solidity
bytes4 ERC1155_BATCH_ACCEPTED
```

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external pure returns (bytes4)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## Reward

_Implementation of the Reward.

     Generic reward condition_

## INVMConfig

### GOVERNOR_ROLE

```solidity
bytes32 GOVERNOR_ROLE
```

### NeverminedConfigChange

```solidity
event NeverminedConfigChange(address _whoChanged, bytes32 _parameter)
```

Event that is emitted when a parameter is changed

| Name | Type | Description |
| ---- | ---- | ----------- |
| _whoChanged | address | the address of the governor changing the parameter |
| _parameter | bytes32 | the hash of the name of the parameter changed |

### initialize

```solidity
function initialize(address _owner, address _governor) external virtual
```

Used to initialize the contract during delegator constructor

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The owner of the contract |
| _governor | address | The address to be granted with the `GOVERNOR_ROLE` |

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver) external virtual
```

The governor can update the Nevermined Marketplace fees

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketplaceFee | uint256 | new marketplace fee |
| _feeReceiver | address | The address receiving the fee |

### isGovernor

```solidity
function isGovernor(address _address) external view virtual returns (bool)
```

Indicates if an address is a having the GOVERNOR role

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | The address to validate |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if is a governor |

### getMarketplaceFee

```solidity
function getMarketplaceFee() external view virtual returns (uint256)
```

Returns the marketplace fee

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the marketplace fee |

### getFeeReceiver

```solidity
function getFeeReceiver() external view virtual returns (address)
```

Returns the receiver address of the marketplace fee

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the receiver address |

## NeverminedConfig

### marketplaceFee

```solidity
uint256 marketplaceFee
```

### feeReceiver

```solidity
address feeReceiver
```

### initialize

```solidity
function initialize(address _owner, address _governor) public
```

Used to initialize the contract during delegator constructor

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The owner of the contract |
| _governor | address | The address to be granted with the `GOVERNOR_ROLE` |

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver) external virtual
```

The governor can update the Nevermined Marketplace fees

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketplaceFee | uint256 | new marketplace fee |
| _feeReceiver | address | The address receiving the fee |

### setGovernor

```solidity
function setGovernor(address _address) external
```

### isGovernor

```solidity
function isGovernor(address _address) external view returns (bool)
```

Indicates if an address is a having the GOVERNOR role

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | The address to validate |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if is a governor |

### getMarketplaceFee

```solidity
function getMarketplaceFee() external view returns (uint256)
```

Returns the marketplace fee

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the marketplace fee |

### getFeeReceiver

```solidity
function getFeeReceiver() external view returns (address)
```

Returns the receiver address of the marketplace fee

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the receiver address |

### onlyGovernor

```solidity
modifier onlyGovernor(address _address)
```

## IERC20

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Returns the amount of tokens in existence._

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_Returns the amount of tokens owned by `account`._

### transfer

```solidity
function transfer(address recipient, uint256 amount) external returns (bool)
```

_Moves `amount` tokens from the caller's account to `recipient`.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_Returns the remaining number of tokens that `spender` will be
allowed to spend on behalf of `owner` through {transferFrom}. This is
zero by default.

This value changes when {approve} or {transferFrom} are called._

### approve

```solidity
function approve(address spender, uint256 amount) external returns (bool)
```

_Sets `amount` as the allowance of `spender` over the caller's tokens.

Returns a boolean value indicating whether the operation succeeded.

IMPORTANT: Beware that changing an allowance with this method brings the risk
that someone may use both the old and the new allowance by unfortunate
transaction ordering. One possible solution to mitigate this race
condition is to first reduce the spender's allowance to 0 and set the
desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729

Emits an {Approval} event._

### transferFrom

```solidity
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)
```

_Moves `amount` tokens from `sender` to `recipient` using the
allowance mechanism. `amount` is then deducted from the caller's
allowance.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

_Emitted when `value` tokens are moved from one account (`from`) to
another (`to`).

Note that `value` may be zero._

### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

_Emitted when the allowance of a `spender` for an `owner` is set by
a call to {approve}. `value` is the new allowance._

## IPriceOracleGetter

Interface for the Aave price oracle.

### getAssetPrice

```solidity
function getAssetPrice(address asset) external view returns (uint256)
```

_returns the asset price in ETH_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | the address of the asset |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the ETH price of the asset |

## IProtocolDataProvider

### TokenData

```solidity
struct TokenData {
  string symbol;
  address tokenAddress;
}
```

### ADDRESSES_PROVIDER

```solidity
function ADDRESSES_PROVIDER() external view returns (contract ILendingPoolAddressesProvider)
```

### getAllReservesTokens

```solidity
function getAllReservesTokens() external view returns (struct IProtocolDataProvider.TokenData[])
```

### getAllATokens

```solidity
function getAllATokens() external view returns (struct IProtocolDataProvider.TokenData[])
```

### getReserveConfigurationData

```solidity
function getReserveConfigurationData(address asset) external view returns (uint256 decimals, uint256 ltv, uint256 liquidationThreshold, uint256 liquidationBonus, uint256 reserveFactor, bool usageAsCollateralEnabled, bool borrowingEnabled, bool stableBorrowRateEnabled, bool isActive, bool isFrozen)
```

### getReserveData

```solidity
function getReserveData(address asset) external view returns (uint256 availableLiquidity, uint256 totalStableDebt, uint256 totalVariableDebt, uint256 liquidityRate, uint256 variableBorrowRate, uint256 stableBorrowRate, uint256 averageStableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex, uint40 lastUpdateTimestamp)
```

### getUserReserveData

```solidity
function getUserReserveData(address asset, address user) external view returns (uint256 currentATokenBalance, uint256 currentStableDebt, uint256 currentVariableDebt, uint256 principalStableDebt, uint256 scaledVariableDebt, uint256 stableBorrowRate, uint256 liquidityRate, uint40 stableRateLastUpdated, bool usageAsCollateralEnabled)
```

### getReserveTokensAddresses

```solidity
function getReserveTokensAddresses(address asset) external view returns (address aTokenAddress, address stableDebtTokenAddress, address variableDebtTokenAddress)
```

## ILendingPoolAddressesProvider

### MarketIdSet

```solidity
event MarketIdSet(string newMarketId)
```

### LendingPoolUpdated

```solidity
event LendingPoolUpdated(address newAddress)
```

### ConfigurationAdminUpdated

```solidity
event ConfigurationAdminUpdated(address newAddress)
```

### EmergencyAdminUpdated

```solidity
event EmergencyAdminUpdated(address newAddress)
```

### LendingPoolConfiguratorUpdated

```solidity
event LendingPoolConfiguratorUpdated(address newAddress)
```

### LendingPoolCollateralManagerUpdated

```solidity
event LendingPoolCollateralManagerUpdated(address newAddress)
```

### PriceOracleUpdated

```solidity
event PriceOracleUpdated(address newAddress)
```

### LendingRateOracleUpdated

```solidity
event LendingRateOracleUpdated(address newAddress)
```

### ProxyCreated

```solidity
event ProxyCreated(bytes32 id, address newAddress)
```

### AddressSet

```solidity
event AddressSet(bytes32 id, address newAddress, bool hasProxy)
```

### getMarketId

```solidity
function getMarketId() external view returns (string)
```

### setMarketId

```solidity
function setMarketId(string marketId) external
```

### setAddress

```solidity
function setAddress(bytes32 id, address newAddress) external
```

### setAddressAsProxy

```solidity
function setAddressAsProxy(bytes32 id, address impl) external
```

### getAddress

```solidity
function getAddress(bytes32 id) external view returns (address)
```

### getLendingPool

```solidity
function getLendingPool() external view returns (address)
```

### setLendingPoolImpl

```solidity
function setLendingPoolImpl(address pool) external
```

### getLendingPoolConfigurator

```solidity
function getLendingPoolConfigurator() external view returns (address)
```

### setLendingPoolConfiguratorImpl

```solidity
function setLendingPoolConfiguratorImpl(address configurator) external
```

### getLendingPoolCollateralManager

```solidity
function getLendingPoolCollateralManager() external view returns (address)
```

### setLendingPoolCollateralManager

```solidity
function setLendingPoolCollateralManager(address manager) external
```

### getPoolAdmin

```solidity
function getPoolAdmin() external view returns (address)
```

### setPoolAdmin

```solidity
function setPoolAdmin(address admin) external
```

### getEmergencyAdmin

```solidity
function getEmergencyAdmin() external view returns (address)
```

### setEmergencyAdmin

```solidity
function setEmergencyAdmin(address admin) external
```

### getPriceOracle

```solidity
function getPriceOracle() external view returns (address)
```

### setPriceOracle

```solidity
function setPriceOracle(address priceOracle) external
```

### getLendingRateOracle

```solidity
function getLendingRateOracle() external view returns (address)
```

### setLendingRateOracle

```solidity
function setLendingRateOracle(address lendingRateOracle) external
```

## ILendingPool

### Deposit

```solidity
event Deposit(address reserve, address user, address onBehalfOf, uint256 amount, uint16 referral)
```

_Emitted on deposit()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address initiating the deposit |
| onBehalfOf | address | The beneficiary of the deposit, receiving the aTokens |
| amount | uint256 | The amount deposited |
| referral | uint16 | The referral code used |

### Withdraw

```solidity
event Withdraw(address reserve, address user, address to, uint256 amount)
```

_Emitted on withdraw()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlyng asset being withdrawn |
| user | address | The address initiating the withdrawal, owner of aTokens |
| to | address | Address that will receive the underlying |
| amount | uint256 | The amount to be withdrawn |

### Borrow

```solidity
event Borrow(address reserve, address user, address onBehalfOf, uint256 amount, uint256 borrowRateMode, uint256 borrowRate, uint16 referral)
```

_Emitted on borrow() and flashLoan() when debt needs to be opened_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset being borrowed |
| user | address | The address of the user initiating the borrow(), receiving the funds on borrow() or just initiator of the transaction on flashLoan() |
| onBehalfOf | address | The address that will be getting the debt |
| amount | uint256 | The amount borrowed out |
| borrowRateMode | uint256 | The rate mode: 1 for Stable, 2 for Variable |
| borrowRate | uint256 | The numeric rate at which the user has borrowed |
| referral | uint16 | The referral code used |

### Repay

```solidity
event Repay(address reserve, address user, address repayer, uint256 amount)
```

_Emitted on repay()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The beneficiary of the repayment, getting his debt reduced |
| repayer | address | The address of the user initiating the repay(), providing the funds |
| amount | uint256 | The amount repaid |

### Swap

```solidity
event Swap(address reserve, address user, uint256 rateMode)
```

_Emitted on swapBorrowRateMode()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user swapping his rate mode |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### ReserveUsedAsCollateralEnabled

```solidity
event ReserveUsedAsCollateralEnabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### ReserveUsedAsCollateralDisabled

```solidity
event ReserveUsedAsCollateralDisabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### RebalanceStableBorrowRate

```solidity
event RebalanceStableBorrowRate(address reserve, address user)
```

_Emitted on rebalanceStableBorrowRate()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user for which the rebalance has been executed |

### FlashLoan

```solidity
event FlashLoan(address target, address initiator, address asset, uint256 amount, uint256 premium, uint16 referralCode)
```

_Emitted on flashLoan()_

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | address | The address of the flash loan receiver contract |
| initiator | address | The address initiating the flash loan |
| asset | address | The address of the asset being flash borrowed |
| amount | uint256 | The amount flash borrowed |
| premium | uint256 | The fee flash borrowed |
| referralCode | uint16 | The referral code used |

### Paused

```solidity
event Paused()
```

_Emitted when the pause is triggered._

### Unpaused

```solidity
event Unpaused()
```

_Emitted when the pause is lifted._

### LiquidationCall

```solidity
event LiquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, uint256 liquidatedCollateralAmount, address liquidator, bool receiveAToken)
```

_Emitted when a borrower is liquidated. This event is emitted by the LendingPool via
LendingPoolCollateral manager using a DELEGATECALL
This allows to have the events in the generated ABI for LendingPool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| liquidatedCollateralAmount | uint256 | The amount of collateral received by the liiquidator |
| liquidator | address | The address of the liquidator |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### ReserveDataUpdated

```solidity
event ReserveDataUpdated(address reserve, uint256 liquidityRate, uint256 stableBorrowRate, uint256 variableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex)
```

_Emitted when the state of a reserve is updated. NOTE: This event is actually declared
in the ReserveLogic library and emitted in the updateInterestRates() function. Since the function is internal,
the event will actually be fired by the LendingPool contract. The event is therefore replicated here so it
gets added to the LendingPool ABI_

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| liquidityRate | uint256 | The new liquidity rate |
| stableBorrowRate | uint256 | The new stable borrow rate |
| variableBorrowRate | uint256 | The new variable borrow rate |
| liquidityIndex | uint256 | The new liquidity index |
| variableBorrowIndex | uint256 | The new variable borrow index |

### deposit

```solidity
function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external
```

_Deposits an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.
- E.g. User deposits 100 USDC and gets in return 100 aUSDC_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to deposit |
| amount | uint256 | The amount to be deposited |
| onBehalfOf | address | The address that will receive the aTokens, same as msg.sender if the user   wants to receive them on his own wallet, or a different address if the beneficiary of aTokens   is a different wallet |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### withdraw

```solidity
function withdraw(address asset, uint256 amount, address to) external returns (uint256)
```

_Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned
E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to withdraw |
| amount | uint256 | The underlying amount to be withdrawn   - Send the value type(uint256).max in order to withdraw the whole aToken balance |
| to | address | Address that will receive the underlying, same as msg.sender if the user   wants to receive it on his own wallet, or a different address if the beneficiary is a   different wallet |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount withdrawn |

### borrow

```solidity
function borrow(address asset, uint256 amount, uint256 interestRateMode, uint16 referralCode, address onBehalfOf) external
```

_Allows users to borrow a specific `amount` of the reserve underlying asset, provided that the borrower
already deposited enough collateral, or he was given enough allowance by a credit delegator on the
corresponding debt token (StableDebtToken or VariableDebtToken)
- E.g. User borrows 100 USDC passing as `onBehalfOf` his own address, receiving the 100 USDC in his wallet
  and 100 stable/variable debt tokens, depending on the `interestRateMode`_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to borrow |
| amount | uint256 | The amount to be borrowed |
| interestRateMode | uint256 | The interest rate mode at which the user wants to borrow: 1 for Stable, 2 for Variable |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |
| onBehalfOf | address | Address of the user who will receive the debt. Should be the address of the borrower itself calling the function if he wants to borrow against his own collateral, or the address of the credit delegator if he has been given credit delegation allowance |

### repay

```solidity
function repay(address asset, uint256 amount, uint256 rateMode, address onBehalfOf) external returns (uint256)
```

Repays a borrowed `amount` on a specific reserve, burning the equivalent debt tokens owned
- E.g. User repays 100 USDC, burning 100 variable/stable debt tokens of the `onBehalfOf` address

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the borrowed underlying asset previously borrowed |
| amount | uint256 | The amount to repay - Send the value type(uint256).max in order to repay the whole debt for `asset` on the specific `debtMode` |
| rateMode | uint256 | The interest rate mode at of the debt the user wants to repay: 1 for Stable, 2 for Variable |
| onBehalfOf | address | Address of the user who will get his debt reduced/removed. Should be the address of the user calling the function if he wants to reduce/remove his own debt, or the address of any other other borrower whose debt should be removed |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount repaid |

### swapBorrowRateMode

```solidity
function swapBorrowRateMode(address asset, uint256 rateMode) external
```

_Allows a borrower to swap his debt between stable and variable mode, or viceversa_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### rebalanceStableBorrowRate

```solidity
function rebalanceStableBorrowRate(address asset, address user) external
```

_Rebalances the stable interest rate of a user to the current stable rate defined on the reserve.
- Users can be rebalanced if the following conditions are satisfied:
    1. Usage ratio is above 95%
    2. the current deposit APY is below REBALANCE_UP_THRESHOLD * maxVariableBorrowRate, which means that too much has been
       borrowed at a stable rate and depositors are not earning enough_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| user | address | The address of the user to be rebalanced |

### setUserUseReserveAsCollateral

```solidity
function setUserUseReserveAsCollateral(address asset, bool useAsCollateral) external
```

_Allows depositors to enable/disable a specific deposited asset as collateral_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset deposited |
| useAsCollateral | bool | `true` if the user wants to use the deposit as collateral, `false` otherwise |

### liquidationCall

```solidity
function liquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, bool receiveAToken) external
```

_Function to liquidate a non-healthy position collateral-wise, with Health Factor below 1
- The caller (liquidator) covers `debtToCover` amount of debt of the user getting liquidated, and receives
  a proportionally amount of the `collateralAsset` plus a bonus to cover market risk_

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### flashLoan

```solidity
function flashLoan(address receiverAddress, address[] assets, uint256[] amounts, uint256[] modes, address onBehalfOf, bytes params, uint16 referralCode) external
```

_Allows smartcontracts to access the liquidity of the pool within one transaction,
as long as the amount taken plus a fee is returned.
IMPORTANT There are security concerns for developers of flashloan receiver contracts that must be kept into consideration.
For further details please visit https://developers.aave.com_

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiverAddress | address | The address of the contract receiving the funds, implementing the IFlashLoanReceiver interface |
| assets | address[] | The addresses of the assets being flash-borrowed |
| amounts | uint256[] | The amounts amounts being flash-borrowed |
| modes | uint256[] | Types of the debt to open if the flash loan is not returned:   0 -> Don't open any debt, just revert if funds can't be transferred from the receiver   1 -> Open debt at stable rate for the value of the amount flash-borrowed to the `onBehalfOf` address   2 -> Open debt at variable rate for the value of the amount flash-borrowed to the `onBehalfOf` address |
| onBehalfOf | address | The address  that will receive the debt in the case of using on `modes` 1 or 2 |
| params | bytes | Variadic packed params to pass to the receiver as extra information |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### getUserAccountData

```solidity
function getUserAccountData(address user) external view returns (uint256 totalCollateralETH, uint256 totalDebtETH, uint256 availableBorrowsETH, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)
```

_Returns the user account data across all the reserves_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |

| Name | Type | Description |
| ---- | ---- | ----------- |
| totalCollateralETH | uint256 | the total collateral in ETH of the user |
| totalDebtETH | uint256 | the total debt in ETH of the user |
| availableBorrowsETH | uint256 | the borrowing power left of the user |
| currentLiquidationThreshold | uint256 | the liquidation threshold of the user |
| ltv | uint256 | the loan to value of the user |
| healthFactor | uint256 | the current health factor of the user |

### initReserve

```solidity
function initReserve(address reserve, address aTokenAddress, address stableDebtAddress, address variableDebtAddress, address interestRateStrategyAddress) external
```

### setReserveInterestRateStrategyAddress

```solidity
function setReserveInterestRateStrategyAddress(address reserve, address rateStrategyAddress) external
```

### setConfiguration

```solidity
function setConfiguration(address reserve, uint256 configuration) external
```

### getConfiguration

```solidity
function getConfiguration(address asset) external view returns (struct DataTypes.ReserveConfigurationMap)
```

_Returns the configuration of the reserve_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveConfigurationMap | The configuration of the reserve |

### getUserConfiguration

```solidity
function getUserConfiguration(address user) external view returns (struct DataTypes.UserConfigurationMap)
```

_Returns the configuration of the user across all the reserves_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The user address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.UserConfigurationMap | The configuration of the user |

### getReserveNormalizedIncome

```solidity
function getReserveNormalizedIncome(address asset) external view returns (uint256)
```

_Returns the normalized income normalized income of the reserve_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve's normalized income |

### getReserveNormalizedVariableDebt

```solidity
function getReserveNormalizedVariableDebt(address asset) external view returns (uint256)
```

_Returns the normalized variable debt per unit of asset_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve normalized variable debt |

### getReserveData

```solidity
function getReserveData(address asset) external view returns (struct DataTypes.ReserveData)
```

_Returns the state and configuration of the reserve_

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveData | The state of the reserve |

### finalizeTransfer

```solidity
function finalizeTransfer(address asset, address from, address to, uint256 amount, uint256 balanceFromAfter, uint256 balanceToBefore) external
```

### getReservesList

```solidity
function getReservesList() external view returns (address[])
```

### getAddressesProvider

```solidity
function getAddressesProvider() external view returns (contract ILendingPoolAddressesProvider)
```

### setPause

```solidity
function setPause(bool val) external
```

### paused

```solidity
function paused() external view returns (bool)
```

## IStableDebtToken

### Mint

```solidity
event Mint(address user, address onBehalfOf, uint256 amount, uint256 currentBalance, uint256 balanceIncrease, uint256 newRate, uint256 avgStableRate, uint256 newTotalSupply)
```

_Emitted when new stable debt is minted_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user who triggered the minting |
| onBehalfOf | address | The recipient of stable debt tokens |
| amount | uint256 | The amount minted |
| currentBalance | uint256 | The current balance of the user |
| balanceIncrease | uint256 | The increase in balance since the last action of the user |
| newRate | uint256 | The rate of the debt after the minting |
| avgStableRate | uint256 | The new average stable rate after the minting |
| newTotalSupply | uint256 | The new total supply of the stable debt token after the action |

### Burn

```solidity
event Burn(address user, uint256 amount, uint256 currentBalance, uint256 balanceIncrease, uint256 avgStableRate, uint256 newTotalSupply)
```

_Emitted when new stable debt is burned_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| amount | uint256 | The amount being burned |
| currentBalance | uint256 | The current balance of the user |
| balanceIncrease | uint256 | The the increase in balance since the last action of the user |
| avgStableRate | uint256 | The new average stable rate after the burning |
| newTotalSupply | uint256 | The new total supply of the stable debt token after the action |

### approveDelegation

```solidity
function approveDelegation(address delegatee, uint256 amount) external
```

_delegates borrowing power to a user on the specific debt token_

| Name | Type | Description |
| ---- | ---- | ----------- |
| delegatee | address | the address receiving the delegated borrowing power |
| amount | uint256 | the maximum amount being delegated. Delegation will still respect the liquidation constraints (even if delegated, a delegatee cannot force a delegator HF to go below 1) |

### borrowAllowance

```solidity
function borrowAllowance(address fromUser, address toUser) external view returns (uint256)
```

_returns the borrow allowance of the user_

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromUser | address | The user to giving allowance |
| toUser | address | The user to give allowance to |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the current allowance of toUser |

### mint

```solidity
function mint(address user, address onBehalfOf, uint256 amount, uint256 rate) external returns (bool)
```

_Mints debt token to the `onBehalfOf` address.
- The resulting rate is the weighted average between the rate of the new debt
and the rate of the previous debt_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address receiving the borrowed underlying, being the delegatee in case of credit delegate, or same as `onBehalfOf` otherwise |
| onBehalfOf | address | The address receiving the debt tokens |
| amount | uint256 | The amount of debt tokens to mint |
| rate | uint256 | The rate of the debt being minted |

### burn

```solidity
function burn(address user, uint256 amount) external
```

_Burns debt of `user`
- The resulting rate is the weighted average between the rate of the new debt
and the rate of the previous debt_

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user getting his debt burned |
| amount | uint256 | The amount of debt tokens getting burned |

### getAverageStableRate

```solidity
function getAverageStableRate() external view returns (uint256)
```

_Returns the average rate of all the stable rate loans._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The average stable rate |

### getUserStableRate

```solidity
function getUserStableRate(address user) external view returns (uint256)
```

_Returns the stable rate of the user debt_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The stable rate of the user |

### getUserLastUpdated

```solidity
function getUserLastUpdated(address user) external view returns (uint40)
```

_Returns the timestamp of the last update of the user_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint40 | The timestamp |

### getSupplyData

```solidity
function getSupplyData() external view returns (uint256, uint256, uint256, uint40)
```

_Returns the principal, the total supply and the average stable rate_

### getTotalSupplyLastUpdated

```solidity
function getTotalSupplyLastUpdated() external view returns (uint40)
```

_Returns the timestamp of the last update of the total supply_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint40 | The timestamp |

### getTotalSupplyAndAvgRate

```solidity
function getTotalSupplyAndAvgRate() external view returns (uint256, uint256)
```

_Returns the total supply and the average stable rate_

### principalBalanceOf

```solidity
function principalBalanceOf(address user) external view returns (uint256)
```

_Returns the principal debt balance of the user_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The debt balance of the user since the last burn/mint action |

## IDynamicPricing

### DynamicPricingState

```solidity
enum DynamicPricingState {
  NotStarted,
  Finished,
  InProgress,
  Aborted
}
```

### getPricingType

```solidity
function getPricingType() external view returns (bytes32)
```

### getPrice

```solidity
function getPrice(bytes32 did) external view returns (uint256)
```

### getTokenAddress

```solidity
function getTokenAddress(bytes32 did) external view returns (address)
```

### getStatus

```solidity
function getStatus(bytes32 did) external view returns (enum IDynamicPricing.DynamicPricingState, uint256, address)
```

### canBePurchased

```solidity
function canBePurchased(bytes32 did) external view returns (bool)
```

### withdraw

```solidity
function withdraw(bytes32 did, address withdrawAddress) external returns (bool)
```

## IList

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

### has

```solidity
function has(bytes32 value, bytes32 id) external view returns (bool)
```

## IRoyaltyScheme

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) external view returns (bool)
```

check that royalties are correct

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | compute royalties for this DID |
| _amounts | uint256[] | amounts in payment |
| _receivers | address[] | receivers of payments |
| _tokenAddress | address | payment token. zero address means native token (ether) |

## ISecretStore

### checkPermissions

```solidity
function checkPermissions(address user, bytes32 documentKeyId) external view returns (bool permissionGranted)
```

checkPermissions is called by Parity secret store

## ISecretStorePermission

### grantPermission

```solidity
function grantPermission(address user, bytes32 documentKeyId) external
```

grantPermission is called only by documentKeyId Owner or provider

### renouncePermission

```solidity
function renouncePermission(address user, bytes32 documentKeyId) external
```

renouncePermission is called only by documentKeyId Owner or provider

## IWETHGateway

### depositETH

```solidity
function depositETH(address lendingPool, address onBehalfOf, uint16 referralCode) external payable
```

### withdrawETH

```solidity
function withdrawETH(address lendingPool, uint256 amount, address to) external
```

### repayETH

```solidity
function repayETH(address lendingPool, uint256 amount, uint256 rateMode, address onBehalfOf) external payable
```

### borrowETH

```solidity
function borrowETH(address lendingPool, uint256 amount, uint256 interesRateMode, uint16 referralCode) external
```

## DataTypes

### ReserveData

```solidity
struct ReserveData {
  struct DataTypes.ReserveConfigurationMap configuration;
  uint128 liquidityIndex;
  uint128 variableBorrowIndex;
  uint128 currentLiquidityRate;
  uint128 currentVariableBorrowRate;
  uint128 currentStableBorrowRate;
  uint40 lastUpdateTimestamp;
  address aTokenAddress;
  address stableDebtTokenAddress;
  address variableDebtTokenAddress;
  address interestRateStrategyAddress;
  uint8 id;
}
```

### ReserveConfigurationMap

```solidity
struct ReserveConfigurationMap {
  uint256 data;
}
```

### UserConfigurationMap

```solidity
struct UserConfigurationMap {
  uint256 data;
}
```

### InterestRateMode

```solidity
enum InterestRateMode {
  NONE,
  STABLE,
  VARIABLE
}
```

## SafeMath

### add

```solidity
function add(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the addition of two unsigned integers, reverting on
overflow.

Counterpart to Solidity's `+` operator.

Requirements:
- Addition cannot overflow._

### sub

```solidity
function sub(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the subtraction of two unsigned integers, reverting on
overflow (when the result is negative).

Counterpart to Solidity's `-` operator.

Requirements:
- Subtraction cannot overflow._

### sub

```solidity
function sub(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the subtraction of two unsigned integers, reverting with custom message on
overflow (when the result is negative).

Counterpart to Solidity's `-` operator.

Requirements:
- Subtraction cannot overflow._

### mul

```solidity
function mul(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the multiplication of two unsigned integers, reverting on
overflow.

Counterpart to Solidity's `*` operator.

Requirements:
- Multiplication cannot overflow._

### div

```solidity
function div(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the integer division of two unsigned integers. Reverts on
division by zero. The result is rounded towards zero.

Counterpart to Solidity's `/` operator. Note: this function uses a
`revert` opcode (which leaves remaining gas untouched) while Solidity
uses an invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### div

```solidity
function div(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the integer division of two unsigned integers. Reverts with custom message on
division by zero. The result is rounded towards zero.

Counterpart to Solidity's `/` operator. Note: this function uses a
`revert` opcode (which leaves remaining gas untouched) while Solidity
uses an invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### mod

```solidity
function mod(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
Reverts when dividing by zero.

Counterpart to Solidity's `%` operator. This function uses a `revert`
opcode (which leaves remaining gas untouched) while Solidity uses an
invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### mod

```solidity
function mod(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
Reverts with custom message when dividing by zero.

Counterpart to Solidity's `%` operator. This function uses a `revert`
opcode (which leaves remaining gas untouched) while Solidity uses an
invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

## Address

### isContract

```solidity
function isContract(address account) internal view returns (bool)
```

_Returns true if `account` is a contract.

[IMPORTANT]
====
It is unsafe to assume that an address for which this function returns
false is an externally-owned account (EOA) and not a contract.

Among others, `isContract` will return false for the following
types of addresses:

 - an externally-owned account
 - a contract in construction
 - an address where a contract will be created
 - an address where a contract lived, but was destroyed
====_

### sendValue

```solidity
function sendValue(address payable recipient, uint256 amount) internal
```

_Replacement for Solidity's `transfer`: sends `amount` wei to
`recipient`, forwarding all available gas and reverting on errors.

https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
of certain opcodes, possibly making contracts go over the 2300 gas limit
imposed by `transfer`, making them unable to receive funds via
`transfer`. {sendValue} removes this limitation.

https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].

IMPORTANT: because control is transferred to `recipient`, care must be
taken to not create reentrancy vulnerabilities. Consider using
{ReentrancyGuard} or the
https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]._

## SafeERC20

_Wrappers around ERC20 operations that throw on failure (when the token
contract returns false). Tokens that return no value (and instead revert or
throw on failure) are also supported, non-reverting calls are assumed to be
successful.
To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
which allows you to call the safe operations as `token.safeTransfer(...)`, etc._

### safeTransfer

```solidity
function safeTransfer(contract IERC20 token, address to, uint256 value) internal
```

### safeTransferFrom

```solidity
function safeTransferFrom(contract IERC20 token, address from, address to, uint256 value) internal
```

### safeApprove

```solidity
function safeApprove(contract IERC20 token, address spender, uint256 value) internal
```

### callOptionalReturn

```solidity
function callOptionalReturn(contract IERC20 token, bytes data) private
```

## CloneFactory

### createClone

```solidity
function createClone(address target) internal returns (address result)
```

### isClone

```solidity
function isClone(address target, address query) internal view returns (bool result)
```

## EpochLibrary

_Implementation of Epoch Library.
     For an arbitrary Epoch, this library manages the life
     cycle of an Epoch. Usually this library is used for 
     handling the time window between conditions in an agreement._

### Epoch

```solidity
struct Epoch {
  uint256 timeLock;
  uint256 timeOut;
  uint256 blockNumber;
}
```

### EpochList

```solidity
struct EpochList {
  mapping(bytes32 &#x3D;&gt; struct EpochLibrary.Epoch) epochs;
  bytes32[] epochIds;
}
```

### create

```solidity
function create(struct EpochLibrary.EpochList _self, bytes32 _id, uint256 _timeLock, uint256 _timeOut) internal
```

create creates new Epoch

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |
| _timeLock | uint256 | value in block count (can not fulfill before) |
| _timeOut | uint256 | value in block count (can not fulfill after) |

### isTimedOut

```solidity
function isTimedOut(struct EpochLibrary.EpochList _self, bytes32 _id) external view returns (bool)
```

isTimedOut means you cannot fulfill after

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the current block number is gt timeOut |

### isTimeLocked

```solidity
function isTimeLocked(struct EpochLibrary.EpochList _self, bytes32 _id) external view returns (bool)
```

isTimeLocked means you cannot fulfill before

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the current block number is gt timeLock |

### getEpochTimeOut

```solidity
function getEpochTimeOut(struct EpochLibrary.Epoch _self) public view returns (uint256)
```

getEpochTimeOut

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.Epoch | is the Epoch storage pointer |

### getEpochTimeLock

```solidity
function getEpochTimeLock(struct EpochLibrary.Epoch _self) public view returns (uint256)
```

getEpochTimeLock

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.Epoch | is the Epoch storage pointer |

## HashListLibrary

_Implementation of the basic functionality of list of hash values.
This library allows other contracts to build and maintain lists
and also preserves the privacy of the data by accepting only hashed 
content (bytes32 based data type)_

### List

```solidity
struct List {
  address _owner;
  bytes32[] values;
  mapping(bytes32 &#x3D;&gt; uint256) indices;
}
```

### onlyListOwner

```solidity
modifier onlyListOwner(struct HashListLibrary.List _self)
```

### add

```solidity
function add(struct HashListLibrary.List _self, bytes32 value) public returns (bool)
```

_add index an element then add it to a list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is a bytes32 value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is added successfully |

### add

```solidity
function add(struct HashListLibrary.List _self, bytes32[] values) public returns (bool)
```

_put an array of elements without indexing
     this meant to save gas in case of large arrays_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| values | bytes32[] | is an array of elements value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if values are added successfully |

### update

```solidity
function update(struct HashListLibrary.List _self, bytes32 oldValue, bytes32 newValue) public returns (bool)
```

_update the value with a new value and maintain indices_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| oldValue | bytes32 | is an element value in a list |
| newValue | bytes32 | new value |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is updated successfully |

### remove

```solidity
function remove(struct HashListLibrary.List _self, bytes32 value) public returns (bool)
```

_remove value from a list, updates indices, and list size_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is an element value in a list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is removed successfully |

### get

```solidity
function get(struct HashListLibrary.List _self, uint256 __index) public view returns (bytes32)
```

_has value by index_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| __index | uint256 | is where is value is stored in the list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the value if exists |

### index

```solidity
function index(struct HashListLibrary.List _self, uint256 from, uint256 to) public returns (bool)
```

_index is used to map each element value to its index on the list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| from | uint256 | index is where to 'from' indexing in the list |
| to | uint256 | index is where to stop indexing |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the sub list is indexed |

### setOwner

```solidity
function setOwner(struct HashListLibrary.List _self, address _owner) public
```

_setOwner set list owner
param _owner owner address_

### indexOf

```solidity
function indexOf(struct HashListLibrary.List _self, bytes32 value) public view returns (uint256)
```

_indexOf gets the index of a value in a list_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is element value in list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | value index in list |

### isIndexed

```solidity
function isIndexed(struct HashListLibrary.List _self) public view returns (bool)
```

_isIndexed checks if the list is indexed_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the list is indexed |

### all

```solidity
function all(struct HashListLibrary.List _self) public view returns (bytes32[])
```

_all returns all list elements_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32[] | all list elements |

### has

```solidity
function has(struct HashListLibrary.List _self, bytes32 value) public view returns (bool)
```

_size returns the list size_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is element value in list |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### size

```solidity
function size(struct HashListLibrary.List _self) public view returns (uint256)
```

_size gets the list size_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | total length of the list |

### ownedBy

```solidity
function ownedBy(struct HashListLibrary.List _self) public view returns (address)
```

_ownedBy gets the list owner_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | list owner |

### _index

```solidity
function _index(struct HashListLibrary.List _self, uint256 from, uint256 to) private returns (bool)
```

__index assign index to the list elements_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| from | uint256 | is the starting index id |
| to | uint256 | is the ending index id |

## AbstractAuction

### AUCTION_MANAGER_ROLE

```solidity
bytes32 AUCTION_MANAGER_ROLE
```

### NVM_AGREEMENT_ROLE

```solidity
bytes32 NVM_AGREEMENT_ROLE
```

### Auction

```solidity
struct Auction {
  bytes32 did;
  enum IDynamicPricing.DynamicPricingState state;
  address creator;
  uint256 blockNumberCreated;
  uint256 floor;
  uint256 starts;
  uint256 ends;
  uint256 price;
  address tokenAddress;
  address whoCanClaim;
  string hash;
}
```

### auctions

```solidity
mapping(bytes32 => struct AbstractAuction.Auction) auctions
```

### auctionBids

```solidity
mapping(bytes32 => mapping(address => uint256)) auctionBids
```

### AuctionCreated

```solidity
event AuctionCreated(bytes32 auctionId, bytes32 did, address creator, uint256 blockNumberCreated, uint256 floor, uint256 starts, uint256 ends, address tokenAddress)
```

### AuctionChangedState

```solidity
event AuctionChangedState(bytes32 auctionId, address who, enum IDynamicPricing.DynamicPricingState previousState, enum IDynamicPricing.DynamicPricingState newState)
```

### AuctionBidReceived

```solidity
event AuctionBidReceived(bytes32 auctionId, address bidder, address tokenAddress, uint256 amount)
```

### AuctionWithdrawal

```solidity
event AuctionWithdrawal(bytes32 auctionId, address receiver, address tokenAddress, uint256 amount)
```

### receive

```solidity
receive() external payable
```

### abortAuction

```solidity
function abortAuction(bytes32 _auctionId) external virtual
```

### withdraw

```solidity
function withdraw(bytes32 _auctionId, address _withdrawAddress) external virtual returns (bool)
```

### getPricingType

```solidity
function getPricingType() external pure virtual returns (bytes32)
```

### getPrice

```solidity
function getPrice(bytes32 _auctionId) external view returns (uint256)
```

### getTokenAddress

```solidity
function getTokenAddress(bytes32 _auctionId) external view returns (address)
```

### getStatus

```solidity
function getStatus(bytes32 _auctionId) external view returns (enum IDynamicPricing.DynamicPricingState state, uint256 price, address whoCanClaim)
```

### canBePurchased

```solidity
function canBePurchased(bytes32 _auctionId) external view virtual returns (bool)
```

### addNVMAgreementRole

```solidity
function addNVMAgreementRole(address account) public
```

### onlyCreator

```solidity
modifier onlyCreator(bytes32 _auctionId)
```

### onlyCreatorOrAdmin

```solidity
modifier onlyCreatorOrAdmin(bytes32 _auctionId)
```

### onlyNotCreator

```solidity
modifier onlyNotCreator(bytes32 _auctionId)
```

### onlyAfterStart

```solidity
modifier onlyAfterStart(bytes32 _auctionId)
```

### onlyBeforeStarts

```solidity
modifier onlyBeforeStarts(bytes32 _auctionId)
```

### onlyBeforeEnd

```solidity
modifier onlyBeforeEnd(bytes32 _auctionId)
```

### onlyNotAbortedOrFinished

```solidity
modifier onlyNotAbortedOrFinished(bytes32 _auctionId)
```

### onlyAbortedOrFinished

```solidity
modifier onlyAbortedOrFinished(bytes32 _auctionId)
```

### onlyNotAborted

```solidity
modifier onlyNotAborted(bytes32 _auctionId)
```

### onlyFinishedOrAborted

```solidity
modifier onlyFinishedOrAborted(bytes32 _auctionId)
```

## DutchAuction

### initialize

```solidity
function initialize(address _owner) external
```

initialize init the contract with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |

### create

```solidity
function create(bytes32 _auctionId, bytes32 _did, uint256 _startPrice, uint256 _starts, uint256 _ends, address _tokenAddress, string _hash) external virtual
```

It creates a new Auction given some setup parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _auctionId | bytes32 | unique auction identifier |
| _did | bytes32 | reference to the asset part of the auction |
| _startPrice | uint256 | start price (and max) for the auction |
| _starts | uint256 | block number when the auction starts |
| _ends | uint256 | block number of when the auction ends |
| _tokenAddress | address | token address to use for the auction. If address(0) means native token |
| _hash | string | ipfs hash referring to the auction metadata |

### placeNativeTokenBid

```solidity
function placeNativeTokenBid(bytes32 _auctionId) external payable virtual
```

### placeERC20Bid

```solidity
function placeERC20Bid(bytes32 _auctionId, uint256 _bidAmount) external virtual
```

### withdraw

```solidity
function withdraw(bytes32 _auctionId, address _withdrawAddress) external virtual returns (bool)
```

### getPricingType

```solidity
function getPricingType() external pure returns (bytes32)
```

## EnglishAuction

### initialize

```solidity
function initialize(address _owner) external
```

initialize init the contract with the following parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |

### create

```solidity
function create(bytes32 _auctionId, bytes32 _did, uint256 _floor, uint256 _starts, uint256 _ends, address _tokenAddress, string _hash) external virtual
```

It creates a new Auction given some setup parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _auctionId | bytes32 | unique auction identifier |
| _did | bytes32 | reference to the asset part of the auction |
| _floor | uint256 | floor price |
| _starts | uint256 | block number when the auction starts |
| _ends | uint256 | block number of when the auction ends |
| _tokenAddress | address | token address to use for the auction. If address(0) means native token |
| _hash | string | ipfs hash referring to the auction metadata |

### placeNativeTokenBid

```solidity
function placeNativeTokenBid(bytes32 _auctionId) external payable virtual
```

### placeERC20Bid

```solidity
function placeERC20Bid(bytes32 _auctionId, uint256 _bidAmount) external virtual
```

### getPricingType

```solidity
function getPricingType() external pure returns (bytes32)
```

## DIDFactory

_Implementation of the DID Registry._

### didRegisterList

```solidity
struct DIDRegistryLibrary.DIDRegisterList didRegisterList
```

_state storage for the DID registry_

### didPermissions

```solidity
mapping(bytes32 => mapping(address => bool)) didPermissions
```

### manager

```solidity
address manager
```

### onlyDIDOwner

```solidity
modifier onlyDIDOwner(bytes32 _did)
```

### onlyManager

```solidity
modifier onlyManager()
```

### onlyOwnerProviderOrDelegated

```solidity
modifier onlyOwnerProviderOrDelegated(bytes32 _did)
```

### onlyValidAttributes

```solidity
modifier onlyValidAttributes(string _attributes)
```

### nftIsInitialized

```solidity
modifier nftIsInitialized(bytes32 _did)
```

### nft721IsInitialized

```solidity
modifier nft721IsInitialized(bytes32 _did)
```

### DIDAttributeRegistered

```solidity
event DIDAttributeRegistered(bytes32 _did, address _owner, bytes32 _checksum, string _value, address _lastUpdatedBy, uint256 _blockNumberUpdated)
```

DID Events

### DIDProviderRemoved

```solidity
event DIDProviderRemoved(bytes32 _did, address _provider, bool state)
```

### DIDProviderAdded

```solidity
event DIDProviderAdded(bytes32 _did, address _provider)
```

### DIDOwnershipTransferred

```solidity
event DIDOwnershipTransferred(bytes32 _did, address _previousOwner, address _newOwner)
```

### DIDPermissionGranted

```solidity
event DIDPermissionGranted(bytes32 _did, address _owner, address _grantee)
```

### DIDPermissionRevoked

```solidity
event DIDPermissionRevoked(bytes32 _did, address _owner, address _grantee)
```

### DIDProvenanceDelegateRemoved

```solidity
event DIDProvenanceDelegateRemoved(bytes32 _did, address _delegate, bool state)
```

### DIDProvenanceDelegateAdded

```solidity
event DIDProvenanceDelegateAdded(bytes32 _did, address _delegate)
```

### setManager

```solidity
function setManager(address _addr) external
```

Sets the manager role. Should be the TransferCondition contract address

### registerAttribute

```solidity
function registerAttribute(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url) public virtual
```

Register DID attributes.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] |  |
| _url | string | refers to the attribute value, limited to 2048 bytes. |

### registerDID

```solidity
function registerDID(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url, bytes32 _activityId, string _attributes) public virtual
```

Register DID attributes.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID).           The final DID will be calculated with the creator address using the `hashDID` function |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

### hashDID

```solidity
function hashDID(bytes32 _didSeed, address _creator) public pure returns (bytes32)
```

It generates a DID using as seed a bytes32 and the address of the DID creator

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to DID Seed used as base to generate the final DID |
| _creator | address | address of the creator of the DID |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the new DID created |

### areRoyaltiesValid

```solidity
function areRoyaltiesValid(bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) public view returns (bool)
```

areRoyaltiesValid checks if for a given DID and rewards distribution, this allocate the  
original creator royalties properly

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _amounts | uint256[] | refers to the amounts to reward |
| _receivers | address[] | refers to the receivers of rewards |
| _tokenAddress | address |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the rewards distribution respect the original creator royalties |

### wasGeneratedBy

```solidity
function wasGeneratedBy(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal returns (bool)
```

### used

```solidity
function used(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes _signatureUsing, string _attributes) public returns (bool success)
```

### wasDerivedFrom

```solidity
function wasDerivedFrom(bytes32 _provId, bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, string _attributes) public returns (bool success)
```

### wasAssociatedWith

```solidity
function wasAssociatedWith(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) public returns (bool success)
```

### actedOnBehalf

```solidity
function actedOnBehalf(bytes32 _provId, bytes32 _did, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes _signatureDelegate, string _attributes) public returns (bool success)
```

Implements the W3C PROV Delegation action
Each party involved in this method (_delegateAgentId & _responsibleAgentId) must provide a valid signature.
The content to sign is a representation of the footprint of the event (_did + _delegateAgentId + _responsibleAgentId + _activityId)

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _delegateAgentId | address | refers to address acting on behalf of the provenance record |
| _responsibleAgentId | address | refers to address responsible of the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### addDIDProvider

```solidity
function addDIDProvider(bytes32 _did, address _provider) external
```

addDIDProvider add new DID provider.

_it adds new DID provider to the providers list. A provider
     is any entity that can serve the registered asset_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### removeDIDProvider

```solidity
function removeDIDProvider(bytes32 _did, address _provider) external
```

removeDIDProvider delete an existing DID provider.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### addDIDProvenanceDelegate

```solidity
function addDIDProvenanceDelegate(bytes32 _did, address _delegate) public
```

addDIDProvenanceDelegate add new DID provenance delegate.

_it adds new DID provenance delegate to the delegates list. 
A delegate is any entity that interact with the provenance entries of one DID_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegates's address. |

### removeDIDProvenanceDelegate

```solidity
function removeDIDProvenanceDelegate(bytes32 _did, address _delegate) external
```

removeDIDProvenanceDelegate delete an existing DID delegate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegate's address. |

### transferDIDOwnership

```solidity
function transferDIDOwnership(bytes32 _did, address _newOwner) external
```

transferDIDOwnership transfer DID ownership

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _newOwner | address | new owner address |

### transferDIDOwnershipManaged

```solidity
function transferDIDOwnershipManaged(address _sender, bytes32 _did, address _newOwner) external
```

transferDIDOwnershipManaged transfer DID ownership

| Name | Type | Description |
| ---- | ---- | ----------- |
| _sender | address |  |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _newOwner | address | new owner address |

### _transferDIDOwnership

```solidity
function _transferDIDOwnership(address _sender, bytes32 _did, address _newOwner) internal
```

### grantPermission

```solidity
function grantPermission(bytes32 _did, address _grantee) external
```

_grantPermission grants access permission to grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### revokePermission

```solidity
function revokePermission(bytes32 _did, address _grantee) external
```

_revokePermission revokes access permission from grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### getPermission

```solidity
function getPermission(bytes32 _did, address _grantee) external view returns (bool)
```

_getPermission gets access permission of a grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if grantee has access permission to a DID |

### isDIDProvider

```solidity
function isDIDProvider(bytes32 _did, address _provider) public view returns (bool)
```

isDIDProvider check whether a given DID provider exists

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### isDIDProviderOrOwner

```solidity
function isDIDProviderOrOwner(bytes32 _did, address _provider) public view returns (bool)
```

### getDIDRegister

```solidity
function getDIDRegister(bytes32 _did) public view returns (address owner, bytes32 lastChecksum, string url, address lastUpdatedBy, uint256 blockNumberUpdated, address[] providers, uint256 nftSupply, uint256 mintCap, uint256 royalties)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the did owner |
| lastChecksum | bytes32 | last checksum |
| url | string | URL to the DID metadata |
| lastUpdatedBy | address | who was the last updating the DID |
| blockNumberUpdated | uint256 | In which block was the DID updated |
| providers | address[] | the list of providers |
| nftSupply | uint256 | the supply of nfts |
| mintCap | uint256 | the maximum number of nfts that can be minted |
| royalties | uint256 | the royalties amount |

### getDIDSupply

```solidity
function getDIDSupply(bytes32 _did) public view returns (uint256 nftSupply, uint256 mintCap)
```

### getBlockNumberUpdated

```solidity
function getBlockNumberUpdated(bytes32 _did) public view returns (uint256 blockNumberUpdated)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| blockNumberUpdated | uint256 | last modified (update) block number of a DID. |

### getDIDOwner

```solidity
function getDIDOwner(bytes32 _did) public view returns (address didOwner)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| didOwner | address | the address of the DID owner. |

### getDIDRoyaltyRecipient

```solidity
function getDIDRoyaltyRecipient(bytes32 _did) public view returns (address)
```

### getDIDRoyaltyScheme

```solidity
function getDIDRoyaltyScheme(bytes32 _did) public view returns (address)
```

### getDIDCreator

```solidity
function getDIDCreator(bytes32 _did) public view returns (address)
```

### _grantPermission

```solidity
function _grantPermission(bytes32 _did, address _grantee) internal
```

__grantPermission grants access permission to grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### _revokePermission

```solidity
function _revokePermission(bytes32 _did, address _grantee) internal
```

__revokePermission revokes access permission from grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### _getPermission

```solidity
function _getPermission(bytes32 _did, address _grantee) internal view returns (bool)
```

__getPermission gets access permission of a grantee_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if grantee has access permission to a DID |

### getProvenanceEntry

```solidity
function getProvenanceEntry(bytes32 _provId) public view returns (bytes32 did, bytes32 relatedDid, address agentId, bytes32 activityId, address agentInvolvedId, uint8 method, address createdBy, uint256 blockNumberUpdated, bytes signature)
```

Fetch the complete provenance entry attributes

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | refers to the provenance identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| did | bytes32 | to what DID refers this entry |
| relatedDid | bytes32 | DID related with the entry |
| agentId | address | the agent identifier |
| activityId | bytes32 | referring to the id of the activity |
| agentInvolvedId | address | agent involved with the action |
| method | uint8 | the w3c provenance method |
| createdBy | address | who is creating this entry |
| blockNumberUpdated | uint256 | in which block was updated |
| signature | bytes | digital signature |

### isDIDOwner

```solidity
function isDIDOwner(address _address, bytes32 _did) public view returns (bool)
```

isDIDOwner check whether a given address is owner for a DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | user address. |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

### isOwnerProviderOrDelegate

```solidity
function isOwnerProviderOrDelegate(bytes32 _did) public view returns (bool)
```

isOwnerProviderOrDelegate check whether msg.sender is owner, provider or
delegate for a DID given

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | boolean true if yes |

### isProvenanceDelegate

```solidity
function isProvenanceDelegate(bytes32 _did, address _delegate) public view returns (bool)
```

isProvenanceDelegate check whether a given DID delegate exists

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegate's address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | boolean true if yes |

### getProvenanceOwner

```solidity
function getProvenanceOwner(bytes32 _did) public view returns (address provenanceOwner)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| provenanceOwner | address | the address of the Provenance owner. |

## DIDRegistry

_Implementation of a Mintable DID Registry._

### erc1155

```solidity
contract NFTUpgradeable erc1155
```

### erc721

```solidity
contract NFT721Upgradeable erc721
```

### royaltiesCheckers

```solidity
mapping(address => bool) royaltiesCheckers
```

### initialize

```solidity
function initialize(address _owner, address _erc1155, address _erc721) public
```

_DIDRegistry Initializer
     Initialize Ownable. Only on contract creation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract. |
| _erc1155 | address |  |
| _erc721 | address |  |

### registerRoyaltiesChecker

```solidity
function registerRoyaltiesChecker(address _addr) public
```

### DIDRoyaltiesAdded

```solidity
event DIDRoyaltiesAdded(bytes32 did, address addr)
```

### DIDRoyaltyRecipientChanged

```solidity
event DIDRoyaltyRecipientChanged(bytes32 did, address addr)
```

### setDIDRoyalties

```solidity
function setDIDRoyalties(bytes32 _did, address _royalties) public
```

### setDIDRoyaltyRecipient

```solidity
function setDIDRoyaltyRecipient(bytes32 _did, address _recipient) public
```

### registerMintableDID

```solidity
function registerMintableDID(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url, uint256 _cap, uint8 _royalties, bool _mint, bytes32 _activityId, string _nftMetadata) public
```

Register a Mintable DID using NFTs based in the ERC-1155 standard.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if true it mints the ERC-1155 NFTs attached to the asset |
| _activityId | bytes32 | refers to activity |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### registerMintableDID721

```solidity
function registerMintableDID721(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url, uint8 _royalties, bool _mint, bytes32 _activityId, string _nftMetadata) public
```

Register a Mintable DID using NFTs based in the ERC-721 standard.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if true it mints the ERC-1155 NFTs attached to the asset |
| _activityId | bytes32 | refers to activity |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### registerMintableDID

```solidity
function registerMintableDID(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url, uint256 _cap, uint8 _royalties, bytes32 _activityId, string _nftMetadata) public
```

Register a Mintable DID.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market |
| _activityId | bytes32 | refers to activity |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### enableAndMintDidNft

```solidity
function enableAndMintDidNft(bytes32 _did, uint256 _cap, uint8 _royalties, bool _mint, string _nftMetadata) public returns (bool success)
```

enableDidNft creates the initial setup of NFTs minting and royalties distribution for ERC-1155 NFTs.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the mintCap and royalties configuration_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if is true mint directly the amount capped tokens and lock in the _lockAddress |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### enableAndMintDidNft721

```solidity
function enableAndMintDidNft721(bytes32 _did, uint8 _royalties, bool _mint, string _nftMetadata) public returns (bool success)
```

enableAndMintDidNft721 creates the initial setup of NFTs minting and royalties distribution for ERC-721 NFTs.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the mintCap and royalties configuration_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if is true mint directly the amount capped tokens and lock in the _lockAddress |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### mint

```solidity
function mint(bytes32 _did, uint256 _amount, address _receiver) public
```

Mints a NFT associated to the DID

_Because ERC-1155 uses uint256 and DID's are bytes32, there is a conversion between both
     Only the DID owner can mint NFTs associated to the DID_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _amount | uint256 | amount to mint |
| _receiver | address | the address that will receive the new nfts minted |

### mint

```solidity
function mint(bytes32 _did, uint256 _amount) public
```

### mint721

```solidity
function mint721(bytes32 _did, address _receiver) public
```

Mints a ERC-721 NFT associated to the DID

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _receiver | address | the address that will receive the new nfts minted |

### mint721

```solidity
function mint721(bytes32 _did) public
```

### burn

```solidity
function burn(bytes32 _did, uint256 _amount) public
```

Burns NFTs associated to the DID

_Because ERC-1155 uses uint256 and DID's are bytes32, there is a conversion between both
     Only the DID owner can burn NFTs associated to the DID_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _amount | uint256 | amount to burn |

### burn721

```solidity
function burn721(bytes32 _did) public
```

## DIDRegistryLibrary

_All function calls are currently implemented without side effects_

### DIDRegister

```solidity
struct DIDRegister {
  address owner;
  uint8 royalties;
  bool nftInitialized;
  bool nft721Initialized;
  address creator;
  bytes32 lastChecksum;
  string url;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
  address[] providers;
  address[] delegates;
  uint256 nftSupply;
  uint256 mintCap;
  address royaltyRecipient;
  contract IRoyaltyScheme royaltyScheme;
}
```

### DIDRegisterList

```solidity
struct DIDRegisterList {
  mapping(bytes32 &#x3D;&gt; struct DIDRegistryLibrary.DIDRegister) didRegisters;
  bytes32[] didRegisterIds;
}
```

### update

```solidity
function update(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, bytes32 _checksum, string _url) external
```

update the DID store

_access modifiers and storage pointer should be implemented in DIDRegistry_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content |
| _url | string | includes the url resolving to the DID Document (DDO) |

### initializeNftConfig

```solidity
function initializeNftConfig(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, uint256 _cap, uint8 _royalties) internal
```

initializeNftConfig creates the initial setup of NFTs minting and royalties distribution.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the mintCap and royalties configuration_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint8 | refers to the royalties to reward to the DID creator in the secondary market        The royalties in secondary market for the creator should be between 0% >= x < 100% |

### initializeNft721Config

```solidity
function initializeNft721Config(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, uint8 _royalties) internal
```

### areRoyaltiesValid

```solidity
function areRoyaltiesValid(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) internal view returns (bool)
```

areRoyaltiesValid checks if for a given DID and rewards distribution, this allocate the  
original creator royalties properly

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _amounts | uint256[] | refers to the amounts to reward |
| _receivers | address[] | refers to the receivers of rewards |
| _tokenAddress | address |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the rewards distribution respect the original creator royalties |

### addProvider

```solidity
function addProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address provider) internal
```

addProvider add provider to DID registry

_update the DID registry providers list by adding a new provider_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| provider | address | the provider's address |

### removeProvider

```solidity
function removeProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _provider) internal returns (bool)
```

removeProvider remove provider from DID registry

_update the DID registry providers list by removing an existing provider_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _provider | address | the provider's address |

### updateDIDOwner

```solidity
function updateDIDOwner(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _newOwner) internal
```

updateDIDOwner transfer DID ownership to a new owner

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _newOwner | address | the new DID owner address |

### isProvider

```solidity
function isProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _provider) public view returns (bool)
```

isProvider check whether DID provider exists

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _provider | address | the provider's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the provider already exists |

### getProviderIndex

```solidity
function getProviderIndex(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address provider) private view returns (int256)
```

getProviderIndex get the index of a provider

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| provider | address | the provider's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the index if the provider exists otherwise return -1 |

### addDelegate

```solidity
function addDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address delegate) internal
```

addDelegate add delegate to DID registry

_update the DID registry delegates list by adding a new delegate_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| delegate | address | the delegate's address |

### removeDelegate

```solidity
function removeDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _delegate) internal returns (bool)
```

removeDelegate remove delegate from DID registry

_update the DID registry delegates list by removing an existing delegate_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _delegate | address | the delegate's address |

### isDelegate

```solidity
function isDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _delegate) public view returns (bool)
```

isDelegate check whether DID delegate exists

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _delegate | address | the delegate's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the delegate already exists |

### getDelegateIndex

```solidity
function getDelegateIndex(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address delegate) private view returns (int256)
```

getDelegateIndex get the index of a delegate

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| delegate | address | the delegate's address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the index if the delegate exists otherwise return -1 |

## ProvenanceRegistry

_All function calls are currently implemented without side effects_

### __ProvenanceRegistry_init

```solidity
function __ProvenanceRegistry_init() internal
```

### __ProvenanceRegistry_init_unchained

```solidity
function __ProvenanceRegistry_init_unchained() internal
```

### Provenance

```solidity
struct Provenance {
  bytes32 did;
  bytes32 relatedDid;
  address agentId;
  bytes32 activityId;
  address agentInvolvedId;
  uint8 method;
  address createdBy;
  uint256 blockNumberUpdated;
  bytes signature;
}
```

### ProvenanceRegistryList

```solidity
struct ProvenanceRegistryList {
  mapping(bytes32 &#x3D;&gt; struct ProvenanceRegistry.Provenance) list;
}
```

### provenanceRegistry

```solidity
struct ProvenanceRegistry.ProvenanceRegistryList provenanceRegistry
```

### ProvenanceMethod

```solidity
enum ProvenanceMethod {
  ENTITY,
  ACTIVITY,
  WAS_GENERATED_BY,
  USED,
  WAS_INFORMED_BY,
  WAS_STARTED_BY,
  WAS_ENDED_BY,
  WAS_INVALIDATED_BY,
  WAS_DERIVED_FROM,
  AGENT,
  WAS_ATTRIBUTED_TO,
  WAS_ASSOCIATED_WITH,
  ACTED_ON_BEHALF
}
```

### ProvenanceAttributeRegistered

```solidity
event ProvenanceAttributeRegistered(bytes32 provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes32 _relatedDid, address _agentInvolvedId, enum ProvenanceRegistry.ProvenanceMethod _method, string _attributes, uint256 _blockNumberUpdated)
```

Provenance Events

### WasGeneratedBy

```solidity
event WasGeneratedBy(bytes32 _did, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### Used

```solidity
event Used(bytes32 _did, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### WasDerivedFrom

```solidity
event WasDerivedFrom(bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### WasAssociatedWith

```solidity
event WasAssociatedWith(bytes32 _entityDid, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### ActedOnBehalf

```solidity
event ActedOnBehalf(bytes32 _entityDid, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### createProvenanceEntry

```solidity
function createProvenanceEntry(bytes32 _provId, bytes32 _did, bytes32 _relatedDid, address _agentId, bytes32 _activityId, address _agentInvolvedId, enum ProvenanceRegistry.ProvenanceMethod _method, address _createdBy, bytes _signatureDelegate, string _attributes) internal returns (bool)
```

create an event in the Provenance store

_access modifiers and storage pointer should be implemented in ProvenanceRegistry_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | refers to provenance event identifier |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _relatedDid | bytes32 | refers to decentralized identifier (a byte32 length ID) of a related entity |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _agentInvolvedId | address | refers to address of the agent involved with the provenance record |
| _method | enum ProvenanceRegistry.ProvenanceMethod | refers to the W3C Provenance method |
| _createdBy | address | refers to address of the agent triggering the activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string |  |

### _wasGeneratedBy

```solidity
function _wasGeneratedBy(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool)
```

Implements the W3C PROV Generation action

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | the number of the new provenance size |

### _used

```solidity
function _used(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes _signatureUsing, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Usage action

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureUsing | bytes | refers to the digital signature provided by the agent using the _did |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _wasDerivedFrom

```solidity
function _wasDerivedFrom(bytes32 _provId, bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Derivation action

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _newEntityDid | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _usedEntityDid | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity used to derive the new did |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _wasAssociatedWith

```solidity
function _wasAssociatedWith(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Association action

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _actedOnBehalf

```solidity
function _actedOnBehalf(bytes32 _provId, bytes32 _did, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes _signatureDelegate, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Delegation action
Each party involved in this method (_delegateAgentId & _responsibleAgentId) must provide a valid signature.
The content to sign is a representation of the footprint of the event (_did + _delegateAgentId + _responsibleAgentId + _activityId)

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _delegateAgentId | address | refers to address acting on behalf of the provenance record |
| _responsibleAgentId | address | refers to address responsible of the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string | refers to the provenance attributes |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

## CurveRoyalties

### registry

```solidity
contract DIDRegistry registry
```

### DENOMINATOR

```solidity
uint256 DENOMINATOR
```

### royalties

```solidity
mapping(bytes32 => uint256) royalties
```

### initialize

```solidity
function initialize(address _registry) public
```

### royaltyCurve

```solidity
function royaltyCurve(uint256 num, uint256 max, uint256 rate) public pure virtual returns (uint256)
```

### setRoyalty

```solidity
function setRoyalty(bytes32 _did, uint256 _royalty) public
```

Set royalties for a DID

_Can only be called by creator of the DID_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID for which the royalties are set |
| _royalty | uint256 | Royalty, the actual royalty will be _royalty / 10000 percent |

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address _token) external view returns (bool)
```

## RewardsDistributor

### used

```solidity
mapping(bytes32 => bool) used
```

### receivers

```solidity
mapping(bytes32 => address[]) receivers
```

### registry

```solidity
contract DIDRegistry registry
```

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### escrow

```solidity
address escrow
```

### initialize

```solidity
function initialize(address _registry, address _conditionStoreManager, address _escrow) public
```

### setReceivers

```solidity
function setReceivers(bytes32 _did, address[] _addr) public
```

set receivers for did

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID |
| _addr | address[] | list of receivers |

### claimReward

```solidity
function claimReward(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public
```

distribute rewards associated with an escrow condition

_as paramemeters, it just gets the same parameters as fulfill for escrow condition_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

## StandardRoyalties

### registry

```solidity
contract DIDRegistry registry
```

### DENOMINATOR

```solidity
uint256 DENOMINATOR
```

### royalties

```solidity
mapping(bytes32 => uint256) royalties
```

### initialize

```solidity
function initialize(address _registry) public
```

### setRoyalty

```solidity
function setRoyalty(bytes32 _did, uint256 _royalty) public
```

Set royalties for a DID

_Can only be called by creator of the DID_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID for which the royalties are set |
| _royalty | uint256 | Royalty, the actual royalty will be _royalty / 10000 percent |

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address) external view returns (bool)
```

## AaveCreditTemplate

_Implementation of the Aaven Credit Agreement Template
 0. Initialize the agreement
 1. LockNFT - Delegatee locks the NFT
 2. AaveCollateralDeposit - Delegator deposits the collateral into Aave. And approves the delegation flow
 3. AaveBorrowCondition - The Delegatee claim the credit amount from Aave
 4. AaveRepayCondition. Options:
     4.a Fulfilled state - The Delegatee pay back the loan (including fee) into Aave and gets back the NFT
     4.b Aborted state - The Delegatee doesn't pay the loan in time so the Delegator gets the NFT. The Delegator pays the loan to Aave
 5. TransferNFT. Options:
     5.a if AaveRepayCondition was fulfilled, it will allow transfer back to the Delegatee or Borrower
     5.b if AaveRepayCondition was aborted, it will allow transfer the NFT to the Delegator or Lender_

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftLockCondition

```solidity
contract INFTLock nftLockCondition
```

### depositCondition

```solidity
contract AaveCollateralDepositCondition depositCondition
```

### borrowCondition

```solidity
contract AaveBorrowCondition borrowCondition
```

### repayCondition

```solidity
contract AaveRepayCondition repayCondition
```

### transferCondition

```solidity
contract DistributeNFTCollateralCondition transferCondition
```

### withdrawCondition

```solidity
contract AaveCollateralWithdrawCondition withdrawCondition
```

### vaultAddress

```solidity
mapping(bytes32 => address) vaultAddress
```

### nvmFee

```solidity
uint256 nvmFee
```

### vaultLibrary

```solidity
address vaultLibrary
```

### VaultCreated

```solidity
event VaultCreated(address _vaultAddress, address _creator, address _lender, address _borrower)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftLockConditionAddress, address _depositConditionAddress, address _borrowConditionAddress, address _repayConditionAddress, address _withdrawCollateralAddress, address _transferConditionAddress, address _vaultLibrary) external
```

initialize init the  contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and
      set push the required condition types including
      access , lock payment and escrow payment conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftLockConditionAddress | address | NFT Lock Condition contract address |
| _depositConditionAddress | address | Aave collateral deposit Condition address |
| _borrowConditionAddress | address | Aave borrow deposit Condition address |
| _repayConditionAddress | address | Aave repay credit Condition address |
| _withdrawCollateralAddress | address |  |
| _transferConditionAddress | address | NFT Transfer Condition address |
| _vaultLibrary | address |  |

### createVaultAgreement

```solidity
function createVaultAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _vaultAddress) public
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, address _lendingPool, address _dataProvider, address _weth, uint256 _agreementFee, address _treasuryAddress, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _lender) public
```

### deployVault

```solidity
function deployVault(address _lendingPool, address _dataProvider, address _weth, uint256 _agreementFee, address _treasuryAddress, address _borrower, address _lender) public returns (address)
```

### getVaultForAgreement

```solidity
function getVaultForAgreement(bytes32 _agreementId) public view returns (address)
```

### updateNVMFee

```solidity
function updateNVMFee(uint256 _newFee) public
```

Updates the nevermined fee for this type of agreement

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newFee | uint256 | New nevermined fee expressed in basis points |

### changeCreditVaultLibrary

```solidity
function changeCreditVaultLibrary(address _vaultLibrary) public
```

## AccessProofTemplate

_Implementation of Access Agreement Template_

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### lockCondition

```solidity
contract LockPaymentCondition lockCondition
```

### escrowReward

```solidity
contract EscrowPaymentCondition escrowReward
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _accessConditionAddress, address _lockConditionAddress, address payable _escrowConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access , lock payment and escrow payment conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _accessConditionAddress | address | access condition address |
| _lockConditionAddress | address | lock reward condition contract address |
| _escrowConditionAddress | address payable | escrow reward contract address |

## AccessTemplate

_Implementation of Access Agreement Template

     Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an on-chain SEA. The template is a composite of three basic
     conditions. Once the agreement is created, the consumer will lock an amount
     of tokens (as listed in the DID document - off-chain metadata) to the 
     the lock reward contract which in turn will fire an event. ON the other hand 
     the provider is listening to all the emitted events, the provider 
     will catch the event and grant permissions to the consumer through 
     secret store contract, the consumer now is able to download the data set
     by asking the off-chain component of secret store to decrypt the DID and 
     encrypt it using the consumer's public key. Then the secret store will 
     provide an on-chain proof that the consumer had access to the data set.
     Finally, the provider can call the escrow reward condition in order 
     to release the payment. Every condition has a time window (time lock and 
     time out). This implies that if the provider didn't grant the access to 
     the consumer through secret store within this time window, the consumer 
     can ask for refund._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### accessCondition

```solidity
contract AccessCondition accessCondition
```

### lockCondition

```solidity
contract LockPaymentCondition lockCondition
```

### escrowReward

```solidity
contract EscrowPaymentCondition escrowReward
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _accessConditionAddress, address _lockConditionAddress, address payable _escrowConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access , lock payment and escrow payment conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _accessConditionAddress | address | access condition address |
| _lockConditionAddress | address | lock reward condition contract address |
| _escrowConditionAddress | address payable | escrow reward contract address |

## AgreementTemplate

_Implementation of Agreement Template

     Agreement template is a reference template where it
     has the ability to create agreements from whitelisted 
     template_

### conditionTypes

```solidity
address[] conditionTypes
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts) public
```

createAgreement create new agreement

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | agreement unique identifier |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _conditionIds | bytes32[] | list of condition identifiers |
| _timeLocks | uint256[] | list of time locks, each time lock will be assigned to the           same condition that has the same index |
| _timeOuts | uint256[] | list of time outs, each time out will be assigned to the           same condition that has the same index |

### createAgreementAndPay

```solidity
function createAgreementAndPay(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, uint256 _idx, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, uint256[] _indices, address[] _accounts, bytes[] _params) internal
```

### getConditionTypes

```solidity
function getConditionTypes() public view returns (address[])
```

getConditionTypes gets the conditions addresses list

_for the current template returns list of condition contracts 
     addresses_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | list of conditions contract addresses |

## BaseEscrowTemplate

### agreementData

```solidity
struct BaseEscrowTemplate.AgreementData agreementData
```

### AgreementCreated

```solidity
event AgreementCreated(bytes32 _agreementId, bytes32 _did, address _accessConsumer, address _accessProvider, uint256[] _timeLocks, uint256[] _timeOuts, bytes32[] _conditionIdSeeds, bytes32[] _conditionIds, bytes32 _idSeed, address _creator)
```

### AgreementDataModel

```solidity
struct AgreementDataModel {
  address accessConsumer;
  address accessProvider;
  bytes32 did;
}
```

### AgreementData

```solidity
struct AgreementData {
  mapping(bytes32 &#x3D;&gt; struct BaseEscrowTemplate.AgreementDataModel) agreementDataItems;
  bytes32[] agreementIds;
}
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer) public
```

createAgreement creates agreements through agreement template

_this function initializes the agreement by setting the DID,
      conditions ID, timeouts, time locks and the consumer address.
      The DID provider/owner is automatically detected by the DID
      Registry_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | SEA agreement unique identifier |
| _did | bytes32 | Decentralized Identifier (DID) |
| _conditionIds | bytes32[] | conditions ID associated with the condition types |
| _timeLocks | uint256[] | the starting point of the time window ,time lock is        in block number not seconds |
| _timeOuts | uint256[] | the ending point of the time window ,time lock is        in block number not seconds |
| _accessConsumer | address | consumer address |

### createAgreementAndPayEscrow

```solidity
function createAgreementAndPayEscrow(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, uint256 _idx, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, uint256[] _indices, address[] _accounts, bytes[] _params) internal
```

### _makeIds

```solidity
function _makeIds(bytes32 _idSeed, bytes32[] _conditionIds) internal view returns (bytes32[])
```

### _initAgreement

```solidity
function _initAgreement(bytes32 _idSeed, bytes32 _did, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, bytes32[] _conditionIds) internal
```

### getAgreementData

```solidity
function getAgreementData(bytes32 _id) external view returns (address accessConsumer, address accessProvider)
```

getAgreementData return the agreement Data

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | SEA agreement unique identifier |

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessConsumer | address | the agreement consumer |
| accessProvider | address | the provider addresses |

## DIDSalesTemplate

_Implementation of DID Sales Template

     The DID Sales template supports an scenario where an Asset owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing an Asset owner to get transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer DID Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the ownership transfer of an asset
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract TransferDIDOwnershipCondition transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer ownership condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |

## DynamicAccessTemplate

_Implementation of Agreement Template
This is a dynamic template that allows to setup flexible conditions depending 
on the use case._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### templateConfig

```solidity
struct DynamicAccessTemplate.TemplateConditions templateConfig
```

### TemplateConditions

```solidity
struct TemplateConditions {
  mapping(address &#x3D;&gt; contract Condition) templateConditions;
}
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |

### addTemplateCondition

```solidity
function addTemplateCondition(address _conditionAddress) external returns (uint256 length)
```

addTemplateCondition adds a new condition to the template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _conditionAddress | address | condition contract address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | uint256 | conditionTypes array size |

### removeLastTemplateCondition

```solidity
function removeLastTemplateCondition() external returns (address[])
```

removeLastTemplateCondition removes last condition added to the template

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | conditionTypes existing in the array |

## EscrowComputeExecutionTemplate

_Implementation of a Compute Execution Agreement Template

     EscrowComputeExecutionTemplate is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an on-chain SEA. The template is a composite of three basic
     conditions. Once the agreement is created, the consumer will lock an amount
     of tokens (as listed in the DID document - off-chain metadata) to the 
     the lock reward contract which in turn will fire an event. ON the other hand 
     the provider is listening to all the emitted events, the provider 
     will catch the event and grant permissions to trigger a computation granting
     the execution via the ComputeExecutionCondition contract. 
     The consumer now is able to trigger that computation
     by asking the off-chain gateway to start the execution of a compute workflow.
     Finally, the provider can call the escrow reward condition in order 
     to release the payment. Every condition has a time window (time lock and 
     time out). This implies that if the provider didn't grant the execution to 
     the consumer within this time window, the consumer 
     can ask for refund._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### computeExecutionCondition

```solidity
contract ComputeExecutionCondition computeExecutionCondition
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### escrowPayment

```solidity
contract EscrowPaymentCondition escrowPayment
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _computeExecutionConditionAddress, address _lockPaymentConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      service executor condition, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _computeExecutionConditionAddress | address | service executor condition contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _escrowPaymentAddress | address payable | escrow reward contract address |

### name

```solidity
function name() public pure returns (string)
```

## NFT721AccessProofTemplate

_Implementation of NFT721 Access Proof Template_

## NFT721AccessSwapTemplate

## NFT721AccessTemplate

_Implementation of NFT Access Template_

## NFT721SalesTemplate

_Implementation of NFT Sales Template_

## NFT721SalesWithAccessTemplate

## NFTAccessProofTemplate

_Implementation of NFT Access Template

     The NFT Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing NFT holders to get access to Nevermined services. 
     The template is a composite of 2 basic conditions: 
     - NFT Holding Condition
     - Access Condition

     Once the agreement is created, the consumer can demonstrate is holding a NFT
     for a specific DID. If that's the case the Access condition can be fulfilled
     by the asset owner or provider and all the agreement is fulfilled.
     This can be used in scenarios where a data or services owner, can allow 
     users to get access to exclusive services only when they demonstrate the 
     are holding a specific number of NFTs of a DID.
     This is very useful in use cases like arts._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftHolderCondition

```solidity
contract INFTHolder nftHolderCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftHolderConditionAddress, address _accessConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftHolderConditionAddress | address | lock reward condition contract address |
| _accessConditionAddress | address | access condition contract address |

## NFTAccessSwapTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract INFTLock lockPaymentCondition
```

### rewardCondition

```solidity
contract INFTEscrow rewardCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address payable _escrowPaymentAddress, address _accessCondition) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |
| _accessCondition | address |  |

## NFTAccessTemplate

_Implementation of NFT Access Template

     The NFT Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing NFT holders to get access to Nevermined services. 
     The template is a composite of 2 basic conditions: 
     - NFT Holding Condition
     - Access Condition

     Once the agreement is created, the consumer can demonstrate is holding a NFT
     for a specific DID. If that's the case the Access condition can be fulfilled
     by the asset owner or provider and all the agreement is fulfilled.
     This can be used in scenarios where a data or services owner, can allow 
     users to get access to exclusive services only when they demonstrate the 
     are holding a specific number of NFTs of a DID.
     This is very useful in use cases like arts._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftHolderCondition

```solidity
contract INFTHolder nftHolderCondition
```

### accessCondition

```solidity
contract INFTAccess accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftHolderConditionAddress, address _accessConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftHolderConditionAddress | address | lock reward condition contract address |
| _accessConditionAddress | address | access condition contract address |

## NFTSalesTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract ITransferNFT transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer NFT condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |

### nftPrice

```solidity
mapping(address => mapping(address => mapping(address => mapping(bytes32 => uint256)))) nftPrice
```

### nftSale

```solidity
function nftSale(address nftAddress, bytes32 nftId, address token, uint256 amount) external
```

### checkParamsTransfer

```solidity
function checkParamsTransfer(bytes[] _params, bytes32 lockPaymentConditionId, bytes32 _did) internal view returns (address)
```

### checkParamsEscrow

```solidity
function checkParamsEscrow(bytes[] _params, bytes32 lockPaymentId, bytes32 transferId) internal pure
```

### createAgreementFulfill

```solidity
function createAgreementFulfill(bytes32 _id, bytes32 _did, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, bytes[] _params) external payable
```

## NFTSalesWithAccessTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract ITransferNFT transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress, address _accessCondition) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer NFT condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |
| _accessCondition | address |  |

## TemplateStoreLibrary

_Implementation of the Template Store Library.
     
     Templates are blueprints for modular SEAs. When 
     creating an Agreement, a templateId defines the condition 
     and reward types that are instantiated in the ConditionStore._

### TemplateState

```solidity
enum TemplateState {
  Uninitialized,
  Proposed,
  Approved,
  Revoked
}
```

### Template

```solidity
struct Template {
  enum TemplateStoreLibrary.TemplateState state;
  address owner;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
}
```

### TemplateList

```solidity
struct TemplateList {
  mapping(address &#x3D;&gt; struct TemplateStoreLibrary.Template) templates;
  address[] templateIds;
}
```

### propose

```solidity
function propose(struct TemplateStoreLibrary.TemplateList _self, address _id) internal returns (uint256 size)
```

propose new template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | proposed template contract address |

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | uint256 | which is the index of the proposed template |

### approve

```solidity
function approve(struct TemplateStoreLibrary.TemplateList _self, address _id) internal
```

approve new template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | proposed template contract address |

### revoke

```solidity
function revoke(struct TemplateStoreLibrary.TemplateList _self, address _id) internal
```

revoke new template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | approved template contract address |

## TemplateStoreManager

_Implementation of the Template Store Manager.
     Templates are blueprints for modular SEAs. When creating an Agreement, 
     a templateId defines the condition and reward types that are instantiated 
     in the ConditionStore. This contract manages the life cycle 
     of the template ( Propose --> Approve --> Revoke )._

### templateList

```solidity
struct TemplateStoreLibrary.TemplateList templateList
```

### onlyOwnerOrTemplateOwner

```solidity
modifier onlyOwnerOrTemplateOwner(address _id)
```

### initialize

```solidity
function initialize(address _owner) public
```

_initialize TemplateStoreManager Initializer
     Initializes Ownable. Only on contract creation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |

### proposeTemplate

```solidity
function proposeTemplate(address _id) external returns (uint256 size)
```

proposeTemplate proposes a new template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address |

### approveTemplate

```solidity
function approveTemplate(address _id) external
```

approveTemplate approves a template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. Only template store        manager owner (i.e OPNF) can approve this template. |

### revokeTemplate

```solidity
function revokeTemplate(address _id) external
```

revokeTemplate revoke a template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. Only template store        manager owner (i.e OPNF) or template owner        can revoke this template. |

### getTemplate

```solidity
function getTemplate(address _id) external view returns (enum TemplateStoreLibrary.TemplateState state, address owner, address lastUpdatedBy, uint256 blockNumberUpdated)
```

getTemplate get more information about a template

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| state | enum TemplateStoreLibrary.TemplateState | template status |
| owner | address | template owner |
| lastUpdatedBy | address | last updated by |
| blockNumberUpdated | uint256 | last updated at. |

### getTemplateListSize

```solidity
function getTemplateListSize() external view virtual returns (uint256 size)
```

getTemplateListSize number of templates

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | uint256 | number of templates |

### isTemplateApproved

```solidity
function isTemplateApproved(address _id) external view returns (bool)
```

isTemplateApproved check whether the template is approved

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the template is approved |

## AgreementStoreManagerChangeFunctionSignature

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, address[] _conditionTypes, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _creator, address _sender) public
```

## AgreementStoreManagerChangeInStorage

### agreementCount

```solidity
uint256 agreementCount
```

## AgreementStoreManagerChangeInStorageAndLogic

## AgreementStoreManagerExtraFunctionality

### dummyFunction

```solidity
function dummyFunction() public pure returns (bool)
```

## AgreementStoreManagerWithBug

### getDIDRegistryAddress

```solidity
function getDIDRegistryAddress() public pure returns (address)
```

_getDIDRegistryAddress utility function 
used by other contracts or any EOA._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the DIDRegistry address |

## ConditionStoreChangeFunctionSignature

### createCondition

```solidity
function createCondition(bytes32 _id, address _typeRef, address _sender) public
```

## ConditionStoreChangeInStorage

### conditionCount

```solidity
uint256 conditionCount
```

## ConditionStoreChangeInStorageAndLogic

## ConditionStoreExtraFunctionality

### dummyFunction

```solidity
function dummyFunction() public pure returns (bool)
```

## ConditionStoreWithBug

### getConditionState

```solidity
function getConditionState(bytes32 _id) public view returns (enum ConditionStoreLibrary.ConditionState)
```

_getConditionState_

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## DIDRegistryChangeFunctionSignature

### registerAttribute

```solidity
function registerAttribute(bytes32 _didSeed, address[] _providers, bytes32 _checksum, string _url) public
```

## DIDRegistryChangeInStorage

### timeOfRegister

```solidity
mapping(bytes32 => uint256) timeOfRegister
```

## DIDRegistryChangeInStorageAndLogic

## DIDRegistryExtraFunctionality

### getNumber

```solidity
function getNumber() public pure returns (uint256)
```

## DIDRegistryWithBug

### registerAttribute

```solidity
function registerAttribute(bytes32 _checksum, bytes32 _didSeed, address[] _providers, string _url) public
```

registerAttribute is called only by DID owner.

_this function registers DID attributes_

| Name | Type | Description |
| ---- | ---- | ----------- |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content |
| _didSeed | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _providers | address[] |  |
| _url | string | refers to the attribute value |

## IPNFT

### TokenURIChanged

```solidity
event TokenURIChanged(uint256 tokenId, string newURI)
```

### initialize

```solidity
function initialize(string _name, string _symbol) public
```

### setTokenURI

```solidity
function setTokenURI(uint256 tokenId, string _tokenURI) public
```

### mint

```solidity
function mint(address to, uint256 _tokenId, string _tokenURI) public returns (bool)
```

### mintWithoutTokenURI

```solidity
function mintWithoutTokenURI(address to, uint256 _tokenId) external
```

### transfer

```solidity
function transfer(address from, address to, uint256 _tokenId) public
```

## NeverminedConfigChangeInStorage

### newVariable

```solidity
uint256 newVariable
```

## NeverminedConfigChangeFunctionSignature

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver, uint256 _newParameter) external virtual
```

## NeverminedConfigChangeInStorageAndLogic

## NeverminedConfigWithBug

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver) external virtual
```

The governor can update the Nevermined Marketplace fees

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketplaceFee | uint256 | new marketplace fee |
| _feeReceiver | address | The address receiving the fee |

## TemplateStoreChangeFunctionSignature

### proposeTemplate

```solidity
function proposeTemplate(address _id, address _sender) external returns (uint256 size)
```

## TemplateStoreChangeInStorage

### templateCount

```solidity
uint256 templateCount
```

## TemplateStoreChangeInStorageAndLogic

## TemplateStoreExtraFunctionality

### dummyFunction

```solidity
function dummyFunction() public pure returns (bool)
```

## TemplateStoreWithBug

### getTemplateListSize

```solidity
function getTemplateListSize() external view returns (uint256 size)
```

getTemplateListSize number of templates

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | uint256 | number of templates |

## TestERC721

### initialize

```solidity
function initialize() public
```

### mint

```solidity
function mint(uint256 id) public
```

## DIDRegistryLibraryProxy

### didRegister

```solidity
struct DIDRegistryLibrary.DIDRegister didRegister
```

### didRegisterList

```solidity
struct DIDRegistryLibrary.DIDRegisterList didRegisterList
```

### areRoyaltiesValid

```solidity
function areRoyaltiesValid(bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) public view returns (bool)
```

### updateDIDOwner

```solidity
function updateDIDOwner(bytes32 _did, address _newOwner) public
```

### update

```solidity
function update(bytes32 _did, bytes32 _checksum, string _url) public
```

### initializeNftConfig

```solidity
function initializeNftConfig(bytes32 _did, uint256 _cap, uint8 _royalties) public
```

### initializeNft721Config

```solidity
function initializeNft721Config(bytes32 _did, uint8 _royalties) public
```

### getDIDInfo

```solidity
function getDIDInfo(bytes32 _did) public view returns (address owner, address creator, uint256 royalties)
```

## EpochLibraryProxy

### epoch

```solidity
struct EpochLibrary.Epoch epoch
```

### epochList

```solidity
struct EpochLibrary.EpochList epochList
```

### create

```solidity
function create(bytes32 _id, uint256 _timeLock, uint256 _timeOut) external
```

## HashListLibraryProxy

### testData

```solidity
struct HashListLibrary.List testData
```

### initialize

```solidity
function initialize(address _owner) public
```

### hash

```solidity
function hash(address _address) public pure returns (bytes32)
```

### add

```solidity
function add(bytes32[] values) external returns (bool)
```

### add

```solidity
function add(bytes32 value) external returns (bool)
```

### update

```solidity
function update(bytes32 oldValue, bytes32 newValue) external returns (bool)
```

### index

```solidity
function index(uint256 from, uint256 to) external returns (bool)
```

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

### remove

```solidity
function remove(bytes32 value) external returns (bool)
```

### get

```solidity
function get(uint256 _index) external view returns (bytes32)
```

### size

```solidity
function size() external view returns (uint256)
```

### all

```solidity
function all() external view returns (bytes32[])
```

### indexOf

```solidity
function indexOf(bytes32 value) external view returns (uint256)
```

### ownedBy

```solidity
function ownedBy() external view returns (address)
```

### isIndexed

```solidity
function isIndexed() external view returns (bool)
```

## NFTBase

_Implementation of the Royalties EIP-2981 base contract
See https://eips.ethereum.org/EIPS/eip-2981_

### _proxyApprovals

```solidity
mapping(address => bool) _proxyApprovals
```

### MINTER_ROLE

```solidity
bytes32 MINTER_ROLE
```

### RoyaltyInfo

```solidity
struct RoyaltyInfo {
  address receiver;
  uint256 royaltyAmount;
}
```

### NFTMetadata

```solidity
struct NFTMetadata {
  string nftURI;
}
```

### _royalties

```solidity
mapping(uint256 => struct NFTBase.RoyaltyInfo) _royalties
```

### _metadata

```solidity
mapping(uint256 => struct NFTBase.NFTMetadata) _metadata
```

### _expiration

```solidity
mapping(address => uint256) _expiration
```

### ProxyApproval

```solidity
event ProxyApproval(address sender, address operator, bool approved)
```

Event for recording proxy approvals.

### setProxyApproval

```solidity
function setProxyApproval(address operator, bool approved) public virtual
```

### _setNFTMetadata

```solidity
function _setNFTMetadata(uint256 tokenId, string tokenURI) internal
```

### _setTokenRoyalty

```solidity
function _setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) internal
```

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 value) external view returns (address receiver, uint256 royaltyAmount)
```

@inheritdoc	IERC2981Upgradeable

## NFTUpgradeable

_Implementation of the basic standard multi-token.
See https://eips.ethereum.org/EIPS/eip-1155_

### initialize

```solidity
function initialize(string uri_) public
```

_See {_setURI}._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### mint

```solidity
function mint(address to, uint256 id, uint256 amount, bytes data) public
```

### burn

```solidity
function burn(address to, uint256 id, uint256 amount) public
```

### addMinter

```solidity
function addMinter(address account) public
```

### uri

```solidity
function uri(uint256 tokenId) public view returns (string)
```

### setNFTMetadata

```solidity
function setNFTMetadata(uint256 tokenId, string nftURI) public
```

_Record some NFT Metadata_

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| nftURI | string | the URI (https, ipfs, etc) to the metadata describing the NFT |

### setTokenRoyalty

```solidity
function setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) public
```

_Record the asset royalties_

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| receiver | address | the receiver of the royalties (the original creator) |
| royaltyAmount | uint256 | percentage (no decimals, between 0 and 100) |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

## NFT721SubscriptionUpgradeable

### mint

```solidity
function mint(address to, uint256 id, uint256 expirationBlock) public
```

_This mint function allows to define when the NFT expires. 
The minter should calculate this block number depending on the network velocity

TransferNFT721Condition needs to have the `MINTER_ROLE`_

### balanceOf

```solidity
function balanceOf(address owner) public view returns (uint256)
```

_See {IERC721-balanceOf}._

## NFT721Upgradeable

_Implementation of the basic standard multi-token._

### initialize

```solidity
function initialize(string name, string symbol) public virtual
```

### initialize

```solidity
function initialize() public virtual
```

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### addMinter

```solidity
function addMinter(address account) public
```

### mint

```solidity
function mint(address to, uint256 id) public virtual
```

### burn

```solidity
function burn(uint256 id) public
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string)
```

_See {IERC721Metadata-tokenURI}._

### setNFTMetadata

```solidity
function setNFTMetadata(uint256 tokenId, string nftURI) public
```

_Record some NFT Metadata_

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| nftURI | string | the URI (https, ipfs, etc) to the metadata describing the NFT |

### setTokenRoyalty

```solidity
function setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) public
```

_Record the asset royalties_

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| receiver | address | the receiver of the royalties (the original creator) |
| royaltyAmount | uint256 | percentage (no decimals, between 0 and 100) |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

## POAPUpgradeable

### _tokenIdCounter

```solidity
struct CountersUpgradeable.Counter _tokenIdCounter
```

### _tokenEvent

```solidity
mapping(uint256 => uint256) _tokenEvent
```

### initialize

```solidity
function initialize() public
```

### initialize

```solidity
function initialize(string name, string symbol) public virtual
```

### mint

```solidity
function mint(address to, string uri, uint256 eventId) public
```

### mint

```solidity
function mint(address to, uint256 id) public
```

### tokenEvent

```solidity
function tokenEvent(uint256 tokenId) public view returns (uint256)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal
```

### _burn

```solidity
function _burn(uint256 tokenId) internal
```

### tokenDetailsOfOwner

```solidity
function tokenDetailsOfOwner(address owner) public view returns (uint256[] tokenIds, uint256[] eventIds)
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view returns (string)
```

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view returns (bool)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

## PlonkVerifier

### n

```solidity
uint32 n
```

### nPublic

```solidity
uint16 nPublic
```

### nLagrange

```solidity
uint16 nLagrange
```

### Qmx

```solidity
uint256 Qmx
```

### Qmy

```solidity
uint256 Qmy
```

### Qlx

```solidity
uint256 Qlx
```

### Qly

```solidity
uint256 Qly
```

### Qrx

```solidity
uint256 Qrx
```

### Qry

```solidity
uint256 Qry
```

### Qox

```solidity
uint256 Qox
```

### Qoy

```solidity
uint256 Qoy
```

### Qcx

```solidity
uint256 Qcx
```

### Qcy

```solidity
uint256 Qcy
```

### S1x

```solidity
uint256 S1x
```

### S1y

```solidity
uint256 S1y
```

### S2x

```solidity
uint256 S2x
```

### S2y

```solidity
uint256 S2y
```

### S3x

```solidity
uint256 S3x
```

### S3y

```solidity
uint256 S3y
```

### k1

```solidity
uint256 k1
```

### k2

```solidity
uint256 k2
```

### X2x1

```solidity
uint256 X2x1
```

### X2x2

```solidity
uint256 X2x2
```

### X2y1

```solidity
uint256 X2y1
```

### X2y2

```solidity
uint256 X2y2
```

### q

```solidity
uint256 q
```

### qf

```solidity
uint256 qf
```

### w1

```solidity
uint256 w1
```

### G1x

```solidity
uint256 G1x
```

### G1y

```solidity
uint256 G1y
```

### G2x1

```solidity
uint256 G2x1
```

### G2x2

```solidity
uint256 G2x2
```

### G2y1

```solidity
uint256 G2y1
```

### G2y2

```solidity
uint256 G2y2
```

### pA

```solidity
uint16 pA
```

### pB

```solidity
uint16 pB
```

### pC

```solidity
uint16 pC
```

### pZ

```solidity
uint16 pZ
```

### pT1

```solidity
uint16 pT1
```

### pT2

```solidity
uint16 pT2
```

### pT3

```solidity
uint16 pT3
```

### pWxi

```solidity
uint16 pWxi
```

### pWxiw

```solidity
uint16 pWxiw
```

### pEval_a

```solidity
uint16 pEval_a
```

### pEval_b

```solidity
uint16 pEval_b
```

### pEval_c

```solidity
uint16 pEval_c
```

### pEval_s1

```solidity
uint16 pEval_s1
```

### pEval_s2

```solidity
uint16 pEval_s2
```

### pEval_zw

```solidity
uint16 pEval_zw
```

### pEval_r

```solidity
uint16 pEval_r
```

### pAlpha

```solidity
uint16 pAlpha
```

### pBeta

```solidity
uint16 pBeta
```

### pGamma

```solidity
uint16 pGamma
```

### pXi

```solidity
uint16 pXi
```

### pXin

```solidity
uint16 pXin
```

### pBetaXi

```solidity
uint16 pBetaXi
```

### pV1

```solidity
uint16 pV1
```

### pV2

```solidity
uint16 pV2
```

### pV3

```solidity
uint16 pV3
```

### pV4

```solidity
uint16 pV4
```

### pV5

```solidity
uint16 pV5
```

### pV6

```solidity
uint16 pV6
```

### pU

```solidity
uint16 pU
```

### pPl

```solidity
uint16 pPl
```

### pEval_t

```solidity
uint16 pEval_t
```

### pA1

```solidity
uint16 pA1
```

### pB1

```solidity
uint16 pB1
```

### pZh

```solidity
uint16 pZh
```

### pZhInv

```solidity
uint16 pZhInv
```

### pEval_l1

```solidity
uint16 pEval_l1
```

### pEval_l2

```solidity
uint16 pEval_l2
```

### pEval_l3

```solidity
uint16 pEval_l3
```

### pEval_l4

```solidity
uint16 pEval_l4
```

### pEval_l5

```solidity
uint16 pEval_l5
```

### pEval_l6

```solidity
uint16 pEval_l6
```

### pEval_l7

```solidity
uint16 pEval_l7
```

### lastMem

```solidity
uint16 lastMem
```

### verifyProof

```solidity
function verifyProof(bytes proof, uint256[] pubSignals) public view returns (bool)
```

# Solidity API

## Common

### getCurrentBlockNumber

```solidity
function getCurrentBlockNumber() external view returns (uint256)
```

getCurrentBlockNumber get block number

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the current block number |

### isContract

```solidity
function isContract(address addr) public view returns (bool)
```

_isContract detect whether the address is 
         is a contract address or externally owned account_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if it is a contract address |

### calculateTotalAmount

```solidity
function calculateTotalAmount(uint256[] _amounts) public pure returns (uint256)
```

_Sum the total amount given an uint array_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the total amount |

### addressToBytes32

```solidity
function addressToBytes32(address _addr) public pure returns (bytes32)
```

### bytes32ToAddress

```solidity
function bytes32ToAddress(bytes32 _b32) public pure returns (address)
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view virtual returns (address)
```

### getTrustedForwarder

```solidity
function getTrustedForwarder() public view virtual returns (address)
```

Implement IERC2771Recipient

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) public view virtual returns (bool)
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## CommonOwnable

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## CommonAccessControl

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## Dispenser

### tokenRequests

```solidity
mapping(address => uint256) tokenRequests
```

### totalMintAmount

```solidity
uint256 totalMintAmount
```

### maxAmount

```solidity
uint256 maxAmount
```

### maxMintAmount

```solidity
uint256 maxMintAmount
```

### minPeriod

```solidity
uint256 minPeriod
```

### scale

```solidity
uint256 scale
```

### token

```solidity
contract NeverminedToken token
```

### RequestFrequencyExceeded

```solidity
event RequestFrequencyExceeded(address requester, uint256 minPeriod)
```

### RequestLimitExceeded

```solidity
event RequestLimitExceeded(address requester, uint256 amount, uint256 maxAmount)
```

### isValidAddress

```solidity
modifier isValidAddress(address _address)
```

### initialize

```solidity
function initialize(address _tokenAddress, address _owner) external
```

_Dispenser Initializer_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenAddress | address | The deployed contract address of an ERC20 |
| _owner | address | The owner of the Dispenser Runs only on initial contract creation. |

### requestTokens

```solidity
function requestTokens(uint256 amount) external returns (bool tokensTransferred)
```

_user can request some tokens for testing_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the amount of tokens to be requested |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokensTransferred | bool | Boolean indication of tokens are requested |

### setMinPeriod

```solidity
function setMinPeriod(uint256 period) external
```

_the Owner can set the min period for token requests_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| period | uint256 | the min amount of time before next request |

### setMaxAmount

```solidity
function setMaxAmount(uint256 amount) external
```

_the Owner can set the max amount for token requests_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the max amount of tokens that can be requested |

### setMaxMintAmount

```solidity
function setMaxMintAmount(uint256 amount) external
```

_the Owner can set the max amount for token requests_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | the max amount of tokens that can be requested |

## HashLists

_Hash lists contract is a sample list contract in which uses 
     HashListLibrary.sol in order to store, retrieve, remove, and 
     update bytes32 values in hash lists.
     This is a reference implementation for IList interface. It is 
     used for whitelisting condition. Any entity can have its own 
     implementation of the interface in which could be used for the
     same condition._

### lists

```solidity
mapping(bytes32 => struct HashListLibrary.List) lists
```

### initialize

```solidity
function initialize(address _owner) public
```

_HashLists Initializer_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The owner of the hash list Runs only upon contract creation. |

### hash

```solidity
function hash(address account) public pure returns (bytes32)
```

_hash ethereum accounts_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | Ethereum address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of the account |

### add

```solidity
function add(bytes32[] values) external returns (bool)
```

_put an array of elements without indexing
     this meant to save gas in case of large arrays_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| values | bytes32[] | is an array of elements value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if values are added successfully |

### add

```solidity
function add(bytes32 value) external returns (bool)
```

_add indexes an element then adds it to a list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is a bytes32 value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is added successfully |

### update

```solidity
function update(bytes32 oldValue, bytes32 newValue) external returns (bool)
```

_update the value with a new value and maintain indices_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| oldValue | bytes32 | is an element value in a list |
| newValue | bytes32 | new value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is updated successfully |

### index

```solidity
function index(uint256 from, uint256 to) external returns (bool)
```

_index is used to map each element value to its index on the list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | index is where to 'from' indexing in the list |
| to | uint256 | index is where to stop indexing |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the sub list is indexed |

### has

```solidity
function has(bytes32 id, bytes32 value) external view returns (bool)
```

_has checks whether a value is exist_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| value | bytes32 | is element value in list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

_has checks whether a value is exist_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is element value in list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### remove

```solidity
function remove(bytes32 value) external returns (bool)
```

_remove value from a list, updates indices, and list size_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | bytes32 | is an element value in a list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is removed successfully |

### get

```solidity
function get(bytes32 id, uint256 _index) external view returns (bytes32)
```

_has value by index_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| _index | uint256 | is where is value is stored in the list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the value if exists |

### size

```solidity
function size(bytes32 id) external view returns (uint256)
```

_size gets the list size_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | total length of the list |

### all

```solidity
function all(bytes32 id) external view returns (bytes32[])
```

_all returns all list elements_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32[] | all list elements |

### indexOf

```solidity
function indexOf(bytes32 id, bytes32 value) external view returns (uint256)
```

_indexOf gets the index of a value in a list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |
| value | bytes32 | is element value in list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | value index in list |

### ownedBy

```solidity
function ownedBy(bytes32 id) external view returns (address)
```

_ownedBy gets the list owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | list owner |

### isIndexed

```solidity
function isIndexed(bytes32 id) external view returns (bool)
```

_isIndexed checks if the list is indexed_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | bytes32 | the list identifier (the hash of list owner's address) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the list is indexed |

## NeverminedToken

_Implementation of a Test Token.
     Test Token is an ERC20 token only for testing purposes_

### nvmConfig

```solidity
address nvmConfig
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

### initialize

```solidity
function initialize(address _owner, address payable _initialMinter) public
```

_NeverminedToken Initializer
     Runs only on initial contract creation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |
| _initialMinter | address payable | is the first token minter added |

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 amount) internal
```

_See {ERC20-_beforeTokenTransfer}.

Requirements:

- minted tokens must not cause the total supply to go over the cap._

### mint

```solidity
function mint(address account, uint256 amount) external returns (bool)
```

_Creates `amount` tokens and assigns them to `account`, increasing
the total supply.

Emits a {Transfer} event with `from` set to the zero address.

Requirements:

- `to` cannot be the zero address._

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## AgreementStoreLibrary

_Implementation of the Agreement Store Library.
     The agreement store library holds the business logic
     in which manages the life cycle of SEA agreement, each 
     agreement is linked to the DID of an asset, template, and
     condition IDs._

### Agreement

```solidity
struct Agreement {
  address templateId;
}
```

### AgreementList

```solidity
struct AgreementList {
  mapping(bytes32 => struct AgreementStoreLibrary.Agreement) agreements;
  mapping(bytes32 => bytes32[]) didToAgreementIds;
  mapping(address => bytes32[]) templateIdToAgreementIds;
}
```

### create

```solidity
function create(struct AgreementStoreLibrary.AgreementList _self, bytes32 _id, address _templateId) internal
```

_create new agreement
     checks whether the agreement Id exists, creates new agreement 
     instance, including the template, conditions and DID._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct AgreementStoreLibrary.AgreementList | is AgreementList storage pointer |
| _id | bytes32 | agreement identifier |
| _templateId | address | template identifier |

## Template

### getConditionTypes

```solidity
function getConditionTypes() external view returns (address[])
```

## AgreementStoreManager

_Implementation of the Agreement Store.

     The agreement store generates conditions for an agreement template.
     Agreement templates must to be approved in the Template Store
     Each agreement is linked to the DID of an asset._

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### agreementList

```solidity
struct AgreementStoreLibrary.AgreementList agreementList
```

_state storage for the agreements_

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### templateStoreManager

```solidity
contract TemplateStoreManager templateStoreManager
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _templateStoreManagerAddress, address _didRegistryAddress) public
```

_initialize AgreementStoreManager Initializer
     Initializes Ownable. Only on contract creation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |
| _conditionStoreManagerAddress | address | is the address of the connected condition store |
| _templateStoreManagerAddress | address | is the address of the connected template store |
| _didRegistryAddress | address | is the address of the connected DID Registry |

### fullConditionId

```solidity
function fullConditionId(bytes32 _agreementId, address _condType, bytes32 _valueHash) public pure returns (bytes32)
```

### agreementId

```solidity
function agreementId(bytes32 _agreementId, address _creator) public pure returns (bytes32)
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, address[] _conditionTypes, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts) public
```

_Create a new agreement.
     The agreement will create conditions of conditionType with conditionId.
     Only "approved" templates can access this function._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | is the ID of the new agreement. Must be unique. |
| _did | bytes32 | is the bytes32 DID of the asset. The DID must be registered beforehand. |
| _conditionTypes | address[] | is a list of addresses that point to Condition contracts. |
| _conditionIds | bytes32[] | is a list of bytes32 content-addressed Condition IDs |
| _timeLocks | uint256[] | is a list of uint time lock values associated to each Condition |
| _timeOuts | uint256[] | is a list of uint time out values associated to each Condition |

### CreateAgreementArgs

```solidity
struct CreateAgreementArgs {
  bytes32 _id;
  bytes32 _did;
  address[] _conditionTypes;
  bytes32[] _conditionIds;
  uint256[] _timeLocks;
  uint256[] _timeOuts;
  address _creator;
  uint256 _idx;
  address payable _rewardAddress;
  address _tokenAddress;
  uint256[] _amounts;
  address[] _receivers;
}
```

### createAgreementAndPay

```solidity
function createAgreementAndPay(struct AgreementStoreManager.CreateAgreementArgs args) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, address[] _conditionTypes, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address[] _account, uint256[] _idx, bytes[] params) public payable
```

### getAgreementTemplate

```solidity
function getAgreementTemplate(bytes32 _id) external view returns (address)
```

### getDIDRegistryAddress

```solidity
function getDIDRegistryAddress() public view virtual returns (address)
```

_getDIDRegistryAddress utility function 
used by other contracts or any EOA._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the DIDRegistry address |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

## AccessCondition

_Implementation of the Access Condition

     Access Secret Store Condition is special condition
     where a client or Parity secret store can encrypt/decrypt documents 
     based on the on-chain granted permissions. For a given DID 
     document, and agreement ID, the owner/provider of the DID 
     will fulfill the condition. Consequently secret store 
     will check whether the permission is granted for the consumer
     in order to encrypt/decrypt the document._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### DocumentPermission

```solidity
struct DocumentPermission {
  bytes32 agreementIdDeprecated;
  mapping(address => bool) permission;
}
```

### documentPermissions

```solidity
mapping(bytes32 => struct AccessCondition.DocumentPermission) documentPermissions
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _documentId, address _grantee, bytes32 _conditionId)
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _documentId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |

### reinitialize

```solidity
function reinitialize() external
```

Should be called when the contract has been upgraded.

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill access secret store condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### grantPermission

```solidity
function grantPermission(address _grantee, bytes32 _documentId) public
```

grantPermission is called only by DID owner or provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### renouncePermission

```solidity
function renouncePermission(address _grantee, bytes32 _documentId) public
```

renouncePermission is called only by DID owner or provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### checkPermissions

```solidity
function checkPermissions(address _grantee, bytes32 _documentId) external view returns (bool permissionGranted)
```

checkPermissions is called by Parity secret store

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| permissionGranted | bool | true if the access was granted |

## IDisputeManager

### verifyProof

```solidity
function verifyProof(bytes proof, uint256[] pubSignals) external view returns (bool)
```

## AccessProofCondition

_Implementation of the Access Condition with transfer proof.
The idea is that the hash of the decryption key is known before hand, and the key matching this hash
is passed from data provider to the buyer using this smart contract. Using ZK proof the key is kept
hidden from outsiders. For the protocol to work, both the provider and buyer need to have public keys
in the babyjub curve. To initiate the deal, buyer will pass the key hash and the public keys of participants.
The provider needs to pass the cipher text encrypted using MIMC (symmetric encryption). The secret key for MIMC
is computed using ECDH (requires one public key and one secret key for the curve). The hash function that is
used is Poseidon._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### disputeManager

```solidity
contract IDisputeManager disputeManager
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, uint256 _origHash, uint256[2] _buyer, uint256[2] _provider, uint256[2] _cipher, bytes _proof, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress, address _disputeManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |
| _disputeManagerAddress | address | dispute manager address |

### changeDisputeManager

```solidity
function changeDisputeManager(address _disputeManagerAddress) external
```

### hashValues

```solidity
function hashValues(uint256 _origHash, uint256[2] _buyer, uint256[2] _provider) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _origHash | uint256 | is the hash of the key |
| _buyer | uint256[2] | buyer public key |
| _provider | uint256[2] | provider public key |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, uint256 _origHash, uint256[2] _buyer, uint256[2] _provider, uint256[2] _cipher, bytes _proof) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill key transfer

_The key with hash _origHash is transferred to the _buyer from _provider._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | associated agreement |
| _origHash | uint256 | is the hash of data to access |
| _buyer | uint256[2] | buyer public key |
| _provider | uint256[2] | provider public key |
| _cipher | uint256[2] | encrypted version of the key |
| _proof | bytes | SNARK proof that the cipher text can be decrypted by buyer to give the key with hash _origHash |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## ComputeExecutionCondition

_Implementation of the Compute Execution Condition
     This condition is meant to be a signal in which triggers
     the execution of a compute service. The compute service is fully described
     in the associated DID document. The provider of the compute service will
     send this signal to its workers by fulfilling the condition where
     they are listening to the fulfilled event._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### computeExecutionStatus

```solidity
mapping(bytes32 => mapping(address => bool)) computeExecutionStatus
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _computeConsumer, bytes32 _conditionId)
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _did)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _agreementStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _agreementStoreManagerAddress | address | agreement store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _computeConsumer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the consumer's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _computeConsumer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill compute execution condition

_only the compute provider can fulfill this condition. By fulfilling this 
condition the compute provider will trigger the execution of 
the offered job/compute. The compute service is described in a DID document._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the consumer's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### wasComputeTriggered

```solidity
function wasComputeTriggered(bytes32 _did, address _computeConsumer) public view returns (bool)
```

wasComputeTriggered checks whether the compute is triggered or not.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | Decentralized Identifier (unique compute/asset resolver) describes the compute service |
| _computeConsumer | address | is the compute consumer's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the compute is triggered |

## Condition

_Implementation of the Condition

     Each condition has a validation function that returns either FULFILLED, 
     ABORTED or UNFULFILLED. When a condition is successfully solved, we call 
     it FULFILLED. If a condition cannot be FULFILLED anymore due to a timeout 
     or other types of counter-proofs, the condition is ABORTED. UNFULFILLED 
     values imply that a condition has not been provably FULFILLED or ABORTED. 
     All initialized conditions start out as UNFULFILLED._

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### generateId

```solidity
function generateId(bytes32 _agreementId, bytes32 _valueHash) public view returns (bytes32)
```

generateId condition Id from the following 
      parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement ID |
| _valueHash | bytes32 | hash of all the condition input values |

### fulfill

```solidity
function fulfill(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) internal returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill set the condition state to Fulfill | Abort

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState | new condition state (Fulfill/Abort) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the updated condition state |

### fulfillWithProvenance

```solidity
function fulfillWithProvenance(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState, bytes32 _did, string _name, address _user) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### abortByTimeOut

```solidity
function abortByTimeOut(bytes32 _id) external returns (enum ConditionStoreLibrary.ConditionState)
```

abortByTimeOut set condition state to Aborted 
        if the condition is timed out

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the updated condition state |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

## ConditionStoreLibrary

_Implementation of the Condition Store Library.
     
     Condition is a key component in the service execution agreement. 
     This library holds the logic for creating and updating condition 
     Any Condition has only four state transitions starts with Uninitialized,
     Unfulfilled, Fulfilled, and Aborted. Condition state transition goes only 
     forward from Unintialized -> Unfulfilled -> {Fulfilled || Aborted}_

### ConditionState

```solidity
enum ConditionState {
  Uninitialized,
  Unfulfilled,
  Fulfilled,
  Aborted
}
```

### Condition

```solidity
struct Condition {
  address typeRef;
  enum ConditionStoreLibrary.ConditionState state;
}
```

### ConditionList

```solidity
struct ConditionList {
  mapping(bytes32 => struct ConditionStoreLibrary.Condition) conditions;
  mapping(bytes32 => mapping(bytes32 => bytes32)) map;
}
```

### create

```solidity
function create(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, address _typeRef) internal
```

create new condition

_check whether the condition exists, assigns 
      condition type, condition state, last updated by, 
      and update at (which is the current block number)_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct ConditionStoreLibrary.ConditionList | is the ConditionList storage pointer |
| _id | bytes32 | valid condition identifier |
| _typeRef | address | condition contract address |

### updateState

```solidity
function updateState(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) internal
```

updateState update the condition state

_check whether the condition state transition is right,
      assign the new state, update last updated by and
      updated at._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct ConditionStoreLibrary.ConditionList | is the ConditionList storage pointer |
| _id | bytes32 | condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState | the new state of the condition |

### updateKeyValue

```solidity
function updateKeyValue(struct ConditionStoreLibrary.ConditionList _self, bytes32 _id, bytes32 _key, bytes32 _value) internal
```

## ConditionStoreManager

_Implementation of the Condition Store Manager.

     Condition store manager is responsible for enforcing the 
     the business logic behind creating/updating the condition state
     based on the assigned role to each party. Only specific type of
     contracts are allowed to call this contract, therefore there are 
     two types of roles, create role that in which is able to create conditions.
     The second role is the update role, which is can update the condition state.
     Also, it support delegating the roles to other contract(s)/account(s)._

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### RoleType

```solidity
enum RoleType {
  Create,
  Update
}
```

### createRole

```solidity
address createRole
```

### conditionList

```solidity
struct ConditionStoreLibrary.ConditionList conditionList
```

### epochList

```solidity
struct EpochLibrary.EpochList epochList
```

### nvmConfigAddress

```solidity
address nvmConfigAddress
```

### didRegistry

```solidity
contract IExternalRegistry didRegistry
```

### ConditionCreated

```solidity
event ConditionCreated(bytes32 _id, address _typeRef, address _who)
```

### ConditionUpdated

```solidity
event ConditionUpdated(bytes32 _id, address _typeRef, enum ConditionStoreLibrary.ConditionState _state, address _who)
```

### onlyCreateRole

```solidity
modifier onlyCreateRole()
```

### onlyUpdateRole

```solidity
modifier onlyUpdateRole(bytes32 _id)
```

### onlyValidType

```solidity
modifier onlyValidType(address typeRef)
```

### createEpoch

```solidity
function createEpoch(struct EpochLibrary.EpochList _self, bytes32 _id, uint256 _timeLock, uint256 _timeOut) internal
```

create creates new Epoch

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |
| _timeLock | uint256 | value in block count (can not fulfill before) |
| _timeOut | uint256 | value in block count (can not fulfill after) |

### initialize

```solidity
function initialize(address _creator, address _owner, address _nvmConfigAddress) public
```

_initialize ConditionStoreManager Initializer
     Initialize Ownable. Only on contract creation,_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _creator | address | refers to the creator of the contract |
| _owner | address | refers to the owner of the contract |
| _nvmConfigAddress | address | refers to the contract address of `NeverminedConfig` |

### setProvenanceRegistry

```solidity
function setProvenanceRegistry(address _didAddress) public
```

_Set provenance registry_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didAddress | address | did registry address. can be zero |

### getCreateRole

```solidity
function getCreateRole() external view returns (address)
```

_getCreateRole get the address of contract
     which has the create role_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | create condition role address |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

### delegateCreateRole

```solidity
function delegateCreateRole(address delegatee) external
```

_delegateCreateRole only owner can delegate the 
     create condition role to a different address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| delegatee | address | delegatee address |

### delegateUpdateRole

```solidity
function delegateUpdateRole(bytes32 _id, address delegatee) external
```

_delegateUpdateRole only owner can delegate 
     the update role to a different address for 
     specific condition Id which has the create role_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 |  |
| delegatee | address | delegatee address |

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### createCondition

```solidity
function createCondition(bytes32 _id, address _typeRef) external
```

_createCondition only called by create role address 
     the condition should use a valid condition contract 
     address, valid time lock and timeout. Moreover, it 
     enforce the condition state transition from 
     Uninitialized to Unfulfilled._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _typeRef | address | condition contract address |

### createCondition2

```solidity
function createCondition2(bytes32 _id, address _typeRef) external
```

### createCondition

```solidity
function createCondition(bytes32 _id, address _typeRef, uint256 _timeLock, uint256 _timeOut) public
```

_createCondition only called by create role address 
     the condition should use a valid condition contract 
     address, valid time lock and timeout. Moreover, it 
     enforce the condition state transition from 
     Uninitialized to Unfulfilled._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _typeRef | address | condition contract address |
| _timeLock | uint256 | start of the time window |
| _timeOut | uint256 | end of the time window |

### updateConditionState

```solidity
function updateConditionState(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) external returns (enum ConditionStoreLibrary.ConditionState)
```

_updateConditionState only called by update role address. 
     It enforce the condition state transition to either 
     Fulfill or Aborted state_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | unique condition identifier |
| _newState | enum ConditionStoreLibrary.ConditionState |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | the current condition state |

### _updateConditionState

```solidity
function _updateConditionState(bytes32 _id, enum ConditionStoreLibrary.ConditionState _newState) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### updateConditionStateWithProvenance

```solidity
function updateConditionStateWithProvenance(bytes32 _id, bytes32 _did, string name, address user, enum ConditionStoreLibrary.ConditionState _newState) external returns (enum ConditionStoreLibrary.ConditionState)
```

### updateConditionMapping

```solidity
function updateConditionMapping(bytes32 _id, bytes32 _key, bytes32 _value) external
```

### updateConditionMappingProxy

```solidity
function updateConditionMappingProxy(bytes32 _id, bytes32 _key, bytes32 _value) external
```

### getCondition

```solidity
function getCondition(bytes32 _id) external view returns (address typeRef, enum ConditionStoreLibrary.ConditionState state, uint256 timeLock, uint256 timeOut, uint256 blockNumber)
```

_getCondition_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| typeRef | address | the type reference |
| state | enum ConditionStoreLibrary.ConditionState | condition state |
| timeLock | uint256 | the time lock |
| timeOut | uint256 | time out |
| blockNumber | uint256 | block number |

### getConditionState

```solidity
function getConditionState(bytes32 _id) external view virtual returns (enum ConditionStoreLibrary.ConditionState)
```

_getConditionState_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### getConditionTypeRef

```solidity
function getConditionTypeRef(bytes32 _id) external view virtual returns (address)
```

_getConditionTypeRef_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | condition typeRef |

### getMappingValue

```solidity
function getMappingValue(bytes32 _id, bytes32 _key) external view virtual returns (bytes32)
```

_getConditionState_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | condition state |

### isConditionTimeLocked

```solidity
function isConditionTimeLocked(bytes32 _id) public view returns (bool)
```

_isConditionTimeLocked_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | whether the condition is timedLock ended |

### isConditionTimedOut

```solidity
function isConditionTimedOut(bytes32 _id) public view returns (bool)
```

_isConditionTimedOut_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | whether the condition is timed out |

## HashLockCondition

_Implementation of the Hash Lock Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(uint256 _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | uint256 | refers uint value of the hash pre-image. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(string _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | string | refers string value of the hash pre-image. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _preimage) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _preimage | bytes32 | refers bytes32 value of the hash pre-image. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, uint256 _preimage) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image uint value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | uint256 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, string _preimage) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image string value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | string |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _preimage) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the condition by calling check the 
      the hash and the pre-image bytes32 value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _preimage | bytes32 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### _fulfill

```solidity
function _fulfill(bytes32 _generatedId) private returns (enum ConditionStoreLibrary.ConditionState)
```

_fulfill calls super fulfil method

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _generatedId | bytes32 | SEA agreement identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## ICondition

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes params) external payable
```

## ILockPayment

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId, address _rewardAddress, address _tokenAddress, address[] _receivers, uint256[] _amounts)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires valid token transfer in order 
          to lock the amount of tokens based on the SEA

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment. |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## LockPaymentCondition

_Implementation of the Lock Payment Condition
This condition allows to lock payment for multiple receivers taking
into account the royalties to be paid to the original creators in a secondary market._

### DENOMINATOR

```solidity
uint256 DENOMINATOR
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nvmConfig

```solidity
contract INVMConfig nvmConfig
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### KEY_ASSET_RECEIVER

```solidity
bytes32 KEY_ASSET_RECEIVER
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### ALLOWED_EXTERNAL_CONTRACT_ROLE

```solidity
bytes32 ALLOWED_EXTERNAL_CONTRACT_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### grantExternalContractRole

```solidity
function grantExternalContractRole(address _address) public
```

### revokeExternalContractRole

```solidity
function revokeExternalContractRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |

### reinitialize

```solidity
function reinitialize() external
```

Should be called when the contract has been upgraded.

### hashValues

```solidity
function hashValues(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires valid token transfer in order 
          to lock the amount of tokens based on the SEA

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment. |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfillExternal

```solidity
function fulfillExternal(bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _externalContract, bytes32 _remoteId, uint256[] _amounts, address[] _receivers) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill lock condition using the funds locked in an external contract 
         (auction, bonding curve, lottery, etc)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the agreement identifier |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address payable | the contract address where the reward is locked |
| _externalContract | address | the address of the contract with the lock funds are locked |
| _remoteId | bytes32 | the id used to identify into the external contract |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### encodeParams

```solidity
function encodeParams(bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) external pure returns (bytes)
```

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes params) external payable
```

### _transferERC20Proxy

```solidity
function _transferERC20Proxy(address _senderAddress, address _rewardAddress, address _tokenAddress, uint256 _amount) internal
```

_transferERC20Proxy transfer ERC20 tokens

_Will throw if transfer fails_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _senderAddress | address | the address to send the tokens from |
| _rewardAddress | address | the address to receive the tokens |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _amount | uint256 | token amount to be locked/released |

### _transferETH

```solidity
function _transferETH(address payable _rewardAddress, uint256 _amount) internal
```

_transferETH transfer ETH

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _rewardAddress | address payable | the address to receive the ETH |
| _amount | uint256 | ETH amount to be locked/released |

### allowedExternalContract

```solidity
modifier allowedExternalContract(address _externalContractAddress)
```

### areMarketplaceFeesIncluded

```solidity
function areMarketplaceFeesIncluded(uint256[] _amounts, address[] _receivers) internal view returns (bool)
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## DistributeNFTCollateralCondition

_Implementation of a condition allowing to transfer a NFT
     to an account or another depending on the final state of a lock condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### _lockConditionAddress

```solidity
address _lockConditionAddress
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, bytes32 _conditionId, address _contract)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _lockNFTConditionAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _lockNFTConditionAddress | address | Lock NFT Condition address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _vaultAddress | address | The contract address of the vault |
| _nftContractAddress | address | NFT contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _vaultAddress | address | The contract address of the vault |
| _nftContractAddress | address | NFT contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTAccess

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _documentId, address _grantee, bytes32 _conditionId)
```

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee, address _contractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access conditions

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTHolder

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _address, bytes32 _conditionId, uint256 _amount)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## INFTLock

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _lockAddress, bytes32 _conditionId, uint256 _amount, address _receiver, address _nftContractAddress)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the NFTs locked |
| _nftContractAddress | address | Is the address of the NFT (ERC-721, ERC-1155) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) external pure returns (bytes32)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

## ITransferNFT

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, uint256 _amount, bytes32 _conditionId, address _contract)
```

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _contract, bool _transfer) external pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _contract | address |  |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _contract | address |  |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

## NFT721HolderCondition

_Implementation of the Nft Holder Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## NFT721LockCondition

_Implementation of the NFT Lock Condition for ERC-721 based NFTs_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the  contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public pure returns (bytes32)
```

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method lock a NFT into the `_lockAddress`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens (1) |
| _receiver | address |  |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-721) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) public virtual returns (bytes4)
```

Always returns `IERC721Receiver.onERC721Received.selector`.

## NFTAccessCondition

_Implementation of the Access Condition specific for NFTs

     NFT Access Condition is special condition used to give access 
     to a specific NFT related to a DID._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### DocumentPermission

```solidity
struct DocumentPermission {
  bytes32 agreementIdDeprecated;
  mapping(address => bool) permission;
}
```

### nftPermissions

```solidity
mapping(bytes32 => struct NFTAccessCondition.DocumentPermission) nftPermissions
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### onlyDIDOwnerOrProvider

```solidity
modifier onlyDIDOwnerOrProvider(bytes32 _documentId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID registry address |

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _documentId, address _grantee, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _documentId, address _grantee, address _contractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill NFT Access condition

_only DID owner or DID provider can call this
      method. Fulfill method sets the permissions 
      for the granted consumer's address to true then
      fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _grantee | address | is the address of the granted user or the DID provider |
| _contractAddress | address | is the contract address of the NFT implementation (ERC-1155 or ERC-721) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### grantPermission

```solidity
function grantPermission(address _grantee, bytes32 _documentId) public
```

grantPermission is called only by DID owner or provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID in which secret store will issue the decryption keys |

### checkPermissions

```solidity
function checkPermissions(address _grantee, bytes32 _documentId) external view returns (bool permissionGranted)
```

checkPermissions is called to validate the permissions of user related to the NFT attached to an asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _grantee | address | is the address of the granted user or the DID provider |
| _documentId | bytes32 | refers to the DID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| permissionGranted | bool | true if the access was granted |

## NFTHolderCondition

_Implementation of the Nft Holder Condition_

### erc1155

```solidity
contract ERC1155BurnableUpgradeable erc1155
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _ercAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _ercAddress | address | Nevermined ERC-1155 address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the address of the NFT holder |
| _amount | uint256 | is the amount NFTs that need to be hold by the holder |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _holderAddress, uint256 _amount, address _contractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill requires a validation that holder has enough
      NFTs for a specific DID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _did | bytes32 | the Decentralized Identifier of the asset |
| _holderAddress | address | the contract address where the reward is locked |
| _amount | uint256 | is the amount of NFT to be hold |
| _contractAddress | address | contract address holding the NFT (ERC-721) or the NFT Factory (ERC-1155) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## NFTLockCondition

_Implementation of the NFT Lock Condition_

### erc1155

```solidity
contract IERC1155Upgradeable erc1155
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### ERC1155_ACCEPTED

```solidity
bytes4 ERC1155_ACCEPTED
```

### ERC1155_BATCH_ACCEPTED

```solidity
bytes4 ERC1155_BATCH_ACCEPTED
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _ercAddress) external
```

initialize init the  contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _ercAddress | address | Nevermined ERC-1155 address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _lockAddress, uint256 _amount, address _nftContractAddress) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset with NFTs attached to lock |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _nftContractAddress | address | Is the address of the NFT (ERC-1155) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesMarked

```solidity
function hashValuesMarked(bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public pure returns (bytes32)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _nft) public returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillMarked

```solidity
function fulfillMarked(bytes32 _agreementId, bytes32 _did, address _lockAddress, uint256 _amount, address _receiver, address _nftContractAddress) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _lockAddress | address | the contract address where the NFT will be locked |
| _amount | uint256 | is the amount of the locked tokens |
| _receiver | address |  |
| _nftContractAddress | address | Is the address of the NFT (ERC-1155) contract to use |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external pure returns (bytes4)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## TransferNFT721Condition

_Implementation of condition allowing to transfer an NFT
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### MARKET_ROLE

```solidity
bytes32 MARKET_ROLE
```

### erc721

```solidity
contract NFT721Upgradeable erc721
```

### _lockConditionAddress

```solidity
address _lockConditionAddress
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress, address _ercAddress, address _lockNFTConditionAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |
| _ercAddress | address | Nevermined ERC-721 address |
| _lockNFTConditionAddress | address |  |

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _contract, bool _transfer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _contract | address | NFT contract to use |
| _transfer | bool |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### encodeParams

```solidity
function encodeParams(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) external pure returns (bytes)
```

Encodes/serialize all the parameters received

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the NFT contract to use |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | the encoded parameters |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _contract | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes _params) external payable
```

fulfill the transfer NFT condition by a proxy

_Fulfill method transfer a certain amount of NFTs_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | NFT Holder |
| _agreementId | bytes32 | agreement identifier |
| _params | bytes | encoded parameters |

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _contract, bool _transfer, uint256 _expirationBlock) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer, address _nftContractAddress, uint256 _expirationBlock) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |
| _nftContractAddress | address | the address of the ERC-721 NFT contract |
| _expirationBlock | uint256 | in which block the nft expires, if 0 it doesn't expire |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## TransferNFTCondition

_Implementation of condition allowing to transfer an NFT
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### MARKET_ROLE

```solidity
bytes32 MARKET_ROLE
```

### erc1155

```solidity
contract NFT1155Upgradeable erc1155
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### PROXY_ROLE

```solidity
bytes32 PROXY_ROLE
```

### grantProxyRole

```solidity
function grantProxyRole(address _address) public
```

### revokeProxyRole

```solidity
function revokeProxyRole(address _address) public
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress, address _ercAddress, address _nftContractAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |
| _ercAddress | address | Nevermined ERC-1155 address |
| _nftContractAddress | address | Market address |

### grantMarketRole

```solidity
function grantMarketRole(address _nftContractAddress) public
```

### revokeMarketRole

```solidity
function revokeMarketRole(address _nftContractAddress) public
```

### getNFTDefaultAddress

```solidity
function getNFTDefaultAddress() external view returns (address)
```

returns if the default NFT contract address

_The default NFT contract address was given to the Transfer Condition during
the contract initialization_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the NFT contract address used by default in the transfer condition |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition) public view returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValues

```solidity
function hashValues(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockCondition, address _nftContractAddress, bool _transfer) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address |  |
| _nftReceiver | address | is the address of the granted user or the DID provider |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockCondition | bytes32 | lock condition identifier |
| _nftContractAddress | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition) public returns (enum ConditionStoreLibrary.ConditionState)
```

### encodeParams

```solidity
function encodeParams(bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) external pure returns (bytes)
```

Encodes/serialize all the parameters received

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the NFT contract to use |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | the encoded parameters |

### fulfillProxy

```solidity
function fulfillProxy(address _account, bytes32 _agreementId, bytes _params) external payable
```

fulfill the transfer NFT condition by a proxy

_Fulfill method transfer a certain amount of NFTs_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _account | address | NFT Holder |
| _agreementId | bytes32 | agreement identifier |
| _params | bytes | encoded parameters |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | NFT contract to use |
| _transfer | bool | Indicates if the NFT will be transferred (true) or minted (false) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillInternal

```solidity
function fulfillInternal(address _account, bytes32 _agreementId, bytes32 _did, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### fulfillForDelegate

```solidity
function fulfillForDelegate(bytes32 _agreementId, bytes32 _did, address _nftHolder, address _nftReceiver, uint256 _nftAmount, bytes32 _lockPaymentCondition, address _nftContractAddress, bool _transfer) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer NFT condition

_Fulfill method transfer a certain amount of NFTs 
      to the _nftReceiver address in the DIDRegistry contract. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _nftHolder | address | is the address of the account to receive the NFT |
| _nftReceiver | address | is the address of the account to receive the NFT |
| _nftAmount | uint256 | amount of NFTs to transfer |
| _lockPaymentCondition | bytes32 | lock payment condition identifier |
| _nftContractAddress | address | the address of the ERC-721 NFT contract |
| _transfer | bool | if yes it does a transfer if false it mints the NFT |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## SignCondition

_Implementation of the Sign Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _message, address _publicKey) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _message | bytes32 | the message to be signed |
| _publicKey | address | the public key of the signing address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _message, address _publicKey, bytes _signature) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill validate the signed message and fulfill the condition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _message | bytes32 | the message to be signed |
| _publicKey | address | the public key of the signing address |
| _signature | bytes | signature of the signed message using the public key |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## ThresholdCondition

_Implementation of the Threshold Condition

     Threshold condition acts as a filter for a set of input condition(s) in which sends 
     a signal whether to complete the flow execution or abort it. This type of conditions 
     works as intermediary conditions where they wire SEA conditions in order to support  
     more complex scenarios._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32[] inputConditions, uint256 threshold) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32[] _inputConditions, uint256 threshold) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill threshold condition

_the fulfill method check whether input conditions are
      fulfilled or not._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### canFulfill

```solidity
function canFulfill(bytes32[] _inputConditions, uint256 threshold) private view returns (bool _fulfill)
```

canFulfill check if condition can be fulfilled

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _inputConditions | bytes32[] | array of input conditions IDs |
| threshold | uint256 | the required number of fulfilled input conditions |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| _fulfill | bool | true if can fulfill |

## TransferDIDOwnershipCondition

_Implementation of condition allowing to transfer the ownership
     between the original owner and a receiver_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, address _receiver, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |
| _didRegistryAddress | address | DID Registry address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _receiver) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _receiver | address | is the address of the granted user or the DID provider |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _receiver) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill the transfer DID ownership condition

_only DID owner or DID provider can call this
      method. Fulfill method transfer full ownership permissions 
      to to _receiver address. 
      When true then fulfill the condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | refers to the DID in which secret store will issue the decryption keys |
| _receiver | address | is the address of the granted user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## WhitelistingCondition

_Implementation of the Whitelisting Condition_

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

_this function is called only once during the contract
      initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(address _listAddress, bytes32 _item) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _listAddress | address | list contract address |
| _item | bytes32 | item in the list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, address _listAddress, bytes32 _item) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill check whether address is whitelisted
in order to fulfill the condition. This method will be 
called by any one in this whitelist.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | SEA agreement identifier |
| _listAddress | address | list contract address |
| _item | bytes32 | item in the list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state |

## AaveBorrowCondition

_Implementation of the Aave Borrow Credit Condition_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _assetToBorrow, uint256 _amount, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToBorrow | address | the address of the asset to borrow (i.e DAI) |
| _amount | uint256 | the amount of the ERC-20 the assets to borrow (i.e 50 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _assetToBorrow, uint256 _amount, uint256 _interestRateMode) external returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to borrow the asset deposited by the lender

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToBorrow | address | the address of the asset to borrow (i.e DAI) |
| _amount | uint256 | the amount of the ERC-20 the assets to borrow (i.e 50 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCollateralDepositCondition

_Implementation of the Aave Collateral Deposit Condition
This condition allows a Lender to deposit the collateral that 
into account the royalties to be paid to the original creators in a secondary market._

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _collateralAsset, uint256 _collateralAmount, address _delegatedAsset, uint256 _delegatedAmount, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the ERC-20 that will be used as collateral (i.e WETH) |
| _collateralAmount | uint256 | the amount of the ERC-20 that will be used as collateral (i.e 10 WETH) |
| _delegatedAsset | address | the address of the ERC-20 that will be delegated to the borrower (i.e DAI) |
| _delegatedAmount | uint256 | the amount of the ERC-20 that will be delegated to the borrower (i.e 500 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _collateralAsset, uint256 _collateralAmount, address _delegatedAsset, uint256 _delegatedAmount, uint256 _interestRateMode) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

It fulfills the condition if the collateral can be deposited into the vault

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the ERC-20 that will be used as collateral (i.e WETH) |
| _collateralAmount | uint256 | the amount of the ERC-20 that will be used as collateral (i.e 10 WETH) |
| _delegatedAsset | address | the address of the ERC-20 that will be delegated to the borrower (i.e DAI) |
| _delegatedAmount | uint256 | the amount of the ERC-20 that will be delegated to the borrower (i.e 500 DAI) |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCollateralWithdrawCondition

_Implementation of the Collateral Withdraw Condition
This condition allows to credit delegator withdraw the collateral and fees
after the agreement expiration_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _collateralAsset) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the asset used as collateral (i.e DAI) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _collateralAsset) external payable returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to repay the loan

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | Address of the vault |
| _collateralAsset | address | the address of the asset used as collateral (i.e DAI) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## AaveCreditVault

### lendingPool

```solidity
contract ILendingPool lendingPool
```

### dataProvider

```solidity
contract IProtocolDataProvider dataProvider
```

### weth

```solidity
contract IWETHGateway weth
```

### addressProvider

```solidity
contract ILendingPoolAddressesProvider addressProvider
```

### priceOracle

```solidity
contract IPriceOracleGetter priceOracle
```

### borrowedAsset

```solidity
address borrowedAsset
```

### borrowedAmount

```solidity
uint256 borrowedAmount
```

### nvmFee

```solidity
uint256 nvmFee
```

### agreementFee

```solidity
uint256 agreementFee
```

### FEE_BASE

```solidity
uint256 FEE_BASE
```

### treasuryAddress

```solidity
address treasuryAddress
```

### borrower

```solidity
address borrower
```

### lender

```solidity
address lender
```

### repayConditionId

```solidity
bytes32 repayConditionId
```

### nftId

```solidity
uint256 nftId
```

### nftAddress

```solidity
address nftAddress
```

### BORROWER_ROLE

```solidity
bytes32 BORROWER_ROLE
```

### LENDER_ROLE

```solidity
bytes32 LENDER_ROLE
```

### CONDITION_ROLE

```solidity
bytes32 CONDITION_ROLE
```

### initialize

```solidity
function initialize(address _lendingPool, address _dataProvider, address _weth, uint256 _nvmFee, uint256 _agreementFee, address _treasuryAddress, address _borrower, address _lender, address[] _conditions) public
```

Vault constructor, creates a unique vault for each agreement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _lendingPool | address | Aave lending pool address |
| _dataProvider | address | Aave data provider address |
| _weth | address | WETH address |
| _nvmFee | uint256 | Nevermined fee that will apply to this agreement |
| _agreementFee | uint256 | Agreement fee that lender will receive on agreement maturity |
| _treasuryAddress | address | Address of Nevermined contract to store fees |
| _borrower | address |  |
| _lender | address |  |
| _conditions | address[] |  |

### createClone

```solidity
function createClone(address _lendingPool, address _dataProvider, address _weth, uint256 _nvmFee, uint256 _agreementFee, address _treasuryAddress, address _borrower, address _lender, address[] _conditions) external virtual returns (address)
```

### isLender

```solidity
function isLender(address _address) public view returns (bool)
```

### isBorrower

```solidity
function isBorrower(address _address) public view returns (bool)
```

### deposit

```solidity
function deposit(address _collateralAsset, uint256 _amount) public payable
```

Deposit function. Receives the funds from the delegator and deposits the funds
in the Aave contracts

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collateralAsset | address | collateral asset that will be deposit on Aave |
| _amount | uint256 | Amount of collateral to deposit |

### approveBorrower

```solidity
function approveBorrower(address _borrower, uint256 _amount, address _asset, uint256 _interestRateMode) public
```

Appproves delegatee to borrow funds from Aave on behalf of delegator

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _borrower | address | delegatee that will borrow the funds |
| _amount | uint256 | Amount of funds to delegate |
| _asset | address | Asset to delegate the borrow |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### delegatedAmount

```solidity
function delegatedAmount(address _borrower, address _asset, uint256 _interestRateMode) public view returns (uint256)
```

Return the actual delegated amount for the borrower in the specific asset

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _borrower | address | The borrower of the funds (i.e. delgatee) |
| _asset | address | The asset they are allowed to borrow |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### borrow

```solidity
function borrow(address _assetToBorrow, uint256 _amount, address _delgatee, uint256 _interestRateMode) public
```

Borrower can call this function to borrow the delegated funds

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _assetToBorrow | address | The asset they are allowed to borrow |
| _amount | uint256 | Amount to borrow |
| _delgatee | address | Address where the funds will be transfered |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

### repay

```solidity
function repay(address _asset, uint256 _interestRateMode, bytes32 _repayConditionId) public
```

Repay an uncollaterised loan

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The asset to be repaid |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |
| _repayConditionId | bytes32 | identifier of the condition id working as lock for other vault methods |

### setRepayConditionId

```solidity
function setRepayConditionId(bytes32 _repayConditionId) public
```

### getBorrowedAmount

```solidity
function getBorrowedAmount() public view returns (uint256)
```

Returns the borrowed amount from the delegatee on this agreement

### getAssetPrice

```solidity
function getAssetPrice(address _asset) public view returns (uint256)
```

Returns the priceof the asset in the Aave oracles

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The asset to get the actual price |

### getCreditAssetDebt

```solidity
function getCreditAssetDebt() public view returns (uint256)
```

Returns the total debt of the credit in the Aave protocol expressed in token units

### getActualCreditDebt

```solidity
function getActualCreditDebt() public view returns (uint256)
```

Returns the total debt of the credit in the Aave protocol expressed in ETH units

### getTotalActualDebt

```solidity
function getTotalActualDebt() public view returns (uint256)
```

Returns the total actual debt of the agreement credit + fees in token units

### withdrawCollateral

```solidity
function withdrawCollateral(address _asset, address _delegator) public
```

Withdraw all of a collateral as the underlying asset, if no outstanding loans delegated

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _asset | address | The underlying asset to withdraw |
| _delegator | address | Delegator address that deposited the collateral |

### transferNFT

```solidity
function transferNFT(uint256 _tokenId, address _receiver) public
```

Transfer a NFT (ERC-721) locked into the vault to a receiver address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokenId | uint256 | the token id |
| _receiver | address | the receiver adddress |

### _transferERC20

```solidity
function _transferERC20(address _collateralAsset, uint256 _amount) internal
```

Transfers the ERC20 token deposited to the Aave contracts

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collateralAsset | address | collateral asset that will be deposit on Aave |
| _amount | uint256 | Amount of collateral to deposit |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256 _tokenId, bytes) public virtual returns (bytes4)
```

Handle the receipt of an NFT

_The ERC721 smart contract calls this function on the recipient
after a {IERC721-safeTransferFrom}. This function MUST return the function selector,
otherwise the caller will revert the transaction. 

Note: the ERC721 contract address is always the message sender.
(param not used): operator The address which called `safeTransferFrom` function
(param not used): from The address which previously owned the token_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | The NFT identifier which is being transferred (param not used): data Additional data with no specified format |
|  | bytes |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | bytes4 `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))` |

## AaveRepayCondition

_Implementation of the Aave Repay Condition
This condition allows to a borrower to repay a credit as part of a credit template_

### aaveCreditVault

```solidity
contract AaveCreditVault aaveCreditVault
```

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, bytes32 _did, bytes32 _conditionId)
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the contract with the following parameters

_this function is called only once during the contract initialization._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, address _vaultAddress, address _assetToRepay, uint256 _amountToRepay, uint256 _interestRateMode) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToRepay | address | the address of the asset to repay (i.e DAI) |
| _amountToRepay | uint256 | Amount to repay |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, address _vaultAddress, address _assetToRepay, uint256 _amountToRepay, uint256 _interestRateMode) external returns (enum ConditionStoreLibrary.ConditionState)
```

It allows the borrower to repay the loan

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | the identifier of the agreement |
| _did | bytes32 | the DID of the asset |
| _vaultAddress | address | the address of vault locking the deposited collateral and the asset |
| _assetToRepay | address | the address of the asset to repay (i.e DAI) |
| _amountToRepay | uint256 | Amount to repay |
| _interestRateMode | uint256 | interest rate type stable 1, variable 2 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | ConditionStoreLibrary.ConditionState the state of the condition (Fulfilled if everything went good) |

## EscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### USED_PAYMENT_ID

```solidity
bytes32 USED_PAYMENT_ID
```

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, address _tokenAddress, address[] _receivers, bytes32 _conditionId, uint256[] _amounts)
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValuesMulti

```solidity
function hashValuesMulti(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### encodeParams

```solidity
function encodeParams(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes)
```

### hashValues

```solidity
function hashValues(bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32 _releaseCondition) public pure returns (bytes32)
```

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _rewardAddress | address | the contract address where the reward is locked |
| _tokenAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfillMulti

```solidity
function fulfillMulti(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256[] _amounts;
  address[] _receivers;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct EscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32 _releaseCondition) external returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillERC20

```solidity
function _transferAndFulfillERC20(bytes32 _id, address _tokenAddress, address[] _receivers, uint256[] _amounts, bytes32 _did) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receivers | address[] | receiver's address |
| _amounts | uint256[] | token amount to be locked/released |
| _did | bytes32 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### _transferAndFulfillETH

```solidity
function _transferAndFulfillETH(bytes32 _id, address[] _receivers, uint256[] _amounts, bytes32 _did) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ETH and 
      fulfill the condition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | condition identifier |
| _receivers | address[] | receiver's address |
| _amounts | uint256[] | token amount to be locked/released |
| _did | bytes32 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

## INFTEscrow

_Common interface for ERC-721 and ERC-1155_

### Fulfilled

```solidity
event Fulfilled(bytes32 _agreementId, address _tokenAddress, bytes32 _did, address _receivers, bytes32 _conditionId, uint256 _amounts)
```

## NFT721EscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, uint256 _amounts, address _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256 | token amounts to be locked/released |
| _receivers | address | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _lockAddress, address _nftContractAddress, uint256 _amount, address _receiver) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _lockAddress | address | the contract address where the reward is locked |
| _nftContractAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256 _amount, address _receiver, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256 _amount;
  address _receiver;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct NFT721EscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillNFT

```solidity
function _transferAndFulfillNFT(bytes32 _agreementId, bytes32 _id, bytes32 _did, address _tokenAddress, address _receiver, uint256 _amount) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 |  |
| _id | bytes32 | condition identifier |
| _did | bytes32 |  |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receiver | address | receiver's address |
| _amount | uint256 | token amount to be locked/released |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) public virtual returns (bytes4)
```

## NFTEscrowPaymentCondition

_Implementation of the Escrow Payment Condition

     The Escrow payment is reward condition in which only 
     can release reward if lock and release conditions
     are fulfilled._

### CONDITION_TYPE

```solidity
bytes32 CONDITION_TYPE
```

### LOCK_CONDITION_TYPE

```solidity
bytes32 LOCK_CONDITION_TYPE
```

### Received

```solidity
event Received(address _from, uint256 _value)
```

### receive

```solidity
receive() external payable
```

### initialize

```solidity
function initialize(address _owner, address _conditionStoreManagerAddress) external
```

initialize init the 
      contract with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _conditionStoreManagerAddress | address | condition store manager address |

### hashValues

```solidity
function hashValues(bytes32 _did, uint256 _amounts, address _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public pure returns (bytes32)
```

hashValues generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256 | token amounts to be locked/released |
| _receivers | address | receiver's addresses |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### hashValuesLockPayment

```solidity
function hashValuesLockPayment(bytes32 _did, address _lockAddress, address _nftContractAddress, uint256 _amount, address _receiver) public pure returns (bytes32)
```

hashValuesLockPayment generates the hash of condition inputs 
       with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | the asset decentralized identifier |
| _lockAddress | address | the contract address where the reward is locked |
| _nftContractAddress | address | the ERC20 contract address to use during the lock payment.         If the address is 0x0 means we won't use a ERC20 but ETH for payment |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's addresses |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | bytes32 hash of all these values |

### fulfill

```solidity
function fulfill(bytes32 _agreementId, bytes32 _did, uint256 _amount, address _receiver, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) external returns (enum ConditionStoreLibrary.ConditionState)
```

fulfill escrow reward condition

_fulfill method checks whether the lock and 
     release conditions are fulfilled in order to 
     release/refund the reward to receiver/sender 
     respectively._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amount | uint256 | token amounts to be locked/released |
| _receiver | address | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### Args

```solidity
struct Args {
  bytes32 _agreementId;
  bytes32 _did;
  uint256 _amount;
  address _receiver;
  address _returnAddress;
  address _lockPaymentAddress;
  address _tokenAddress;
  bytes32 _lockCondition;
  bytes32[] _releaseConditions;
}
```

### fulfillKludge

```solidity
function fulfillKludge(struct NFTEscrowPaymentCondition.Args a) internal returns (enum ConditionStoreLibrary.ConditionState)
```

### _transferAndFulfillNFT

```solidity
function _transferAndFulfillNFT(bytes32 _agreementId, bytes32 _id, bytes32 _did, address _tokenAddress, address _receiver, uint256 _amount) private returns (enum ConditionStoreLibrary.ConditionState)
```

_transferAndFulfill transfer ERC20 tokens and 
      fulfill the condition

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 |  |
| _id | bytes32 | condition identifier |
| _did | bytes32 |  |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _receiver | address | receiver's address |
| _amount | uint256 | token amount to be locked/released |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum ConditionStoreLibrary.ConditionState | condition state (Fulfilled/Aborted) |

### ERC1155_ACCEPTED

```solidity
bytes4 ERC1155_ACCEPTED
```

### ERC1155_BATCH_ACCEPTED

```solidity
bytes4 ERC1155_BATCH_ACCEPTED
```

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external pure returns (bytes4)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## Reward

_Implementation of the Reward.

     Generic reward condition_

## INVMConfig

### GOVERNOR_ROLE

```solidity
bytes32 GOVERNOR_ROLE
```

### NeverminedConfigChange

```solidity
event NeverminedConfigChange(address _whoChanged, bytes32 _parameter)
```

Event that is emitted when a parameter is changed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _whoChanged | address | the address of the governor changing the parameter |
| _parameter | bytes32 | the hash of the name of the parameter changed |

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver) external virtual
```

The governor can update the Nevermined Marketplace fees

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketplaceFee | uint256 | new marketplace fee |
| _feeReceiver | address | The address receiving the fee |

### isGovernor

```solidity
function isGovernor(address _address) external view virtual returns (bool)
```

Indicates if an address is a having the GOVERNOR role

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | The address to validate |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if is a governor |

### getMarketplaceFee

```solidity
function getMarketplaceFee() external view virtual returns (uint256)
```

Returns the marketplace fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the marketplace fee |

### getFeeReceiver

```solidity
function getFeeReceiver() external view virtual returns (address)
```

Returns the receiver address of the marketplace fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the receiver address |

### getProvenanceStorage

```solidity
function getProvenanceStorage() external view virtual returns (bool)
```

Returns true if provenance should be stored in storage

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if provenance should be stored in storage |

### getTrustedForwarder

```solidity
function getTrustedForwarder() external view virtual returns (address)
```

## NeverminedConfig

### marketplaceFee

```solidity
uint256 marketplaceFee
```

### feeReceiver

```solidity
address feeReceiver
```

### provenanceOff

```solidity
bool provenanceOff
```

### trustedForwarder

```solidity
address trustedForwarder
```

### initialize

```solidity
function initialize(address _owner, address _governor, bool _provenanceOff) public
```

Used to initialize the contract during delegator constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The owner of the contract |
| _governor | address | The address to be granted with the `GOVERNOR_ROLE` |
| _provenanceOff | bool |  |

### setMarketplaceFees

```solidity
function setMarketplaceFees(uint256 _marketplaceFee, address _feeReceiver) external virtual
```

The governor can update the Nevermined Marketplace fees

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketplaceFee | uint256 | new marketplace fee |
| _feeReceiver | address | The address receiving the fee |

### setGovernor

```solidity
function setGovernor(address _address) external
```

### isGovernor

```solidity
function isGovernor(address _address) external view returns (bool)
```

Indicates if an address is a having the GOVERNOR role

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | The address to validate |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if is a governor |

### getMarketplaceFee

```solidity
function getMarketplaceFee() external view returns (uint256)
```

Returns the marketplace fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the marketplace fee |

### getFeeReceiver

```solidity
function getFeeReceiver() external view returns (address)
```

Returns the receiver address of the marketplace fee

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | the receiver address |

### getProvenanceStorage

```solidity
function getProvenanceStorage() external view returns (bool)
```

Returns true if provenance should be stored in storage

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if provenance should be stored in storage |

### getTrustedForwarder

```solidity
function getTrustedForwarder() external view virtual returns (address)
```

### setTrustedForwarder

```solidity
function setTrustedForwarder(address forwarder) external
```

### onlyGovernor

```solidity
modifier onlyGovernor(address _address)
```

## IERC20

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Returns the amount of tokens in existence._

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_Returns the amount of tokens owned by `account`._

### transfer

```solidity
function transfer(address recipient, uint256 amount) external returns (bool)
```

_Moves `amount` tokens from the caller's account to `recipient`.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_Returns the remaining number of tokens that `spender` will be
allowed to spend on behalf of `owner` through {transferFrom}. This is
zero by default.

This value changes when {approve} or {transferFrom} are called._

### approve

```solidity
function approve(address spender, uint256 amount) external returns (bool)
```

_Sets `amount` as the allowance of `spender` over the caller's tokens.

Returns a boolean value indicating whether the operation succeeded.

IMPORTANT: Beware that changing an allowance with this method brings the risk
that someone may use both the old and the new allowance by unfortunate
transaction ordering. One possible solution to mitigate this race
condition is to first reduce the spender's allowance to 0 and set the
desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729

Emits an {Approval} event._

### transferFrom

```solidity
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)
```

_Moves `amount` tokens from `sender` to `recipient` using the
allowance mechanism. `amount` is then deducted from the caller's
allowance.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

_Emitted when `value` tokens are moved from one account (`from`) to
another (`to`).

Note that `value` may be zero._

### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

_Emitted when the allowance of a `spender` for an `owner` is set by
a call to {approve}. `value` is the new allowance._

## IPriceOracleGetter

Interface for the Aave price oracle.

### getAssetPrice

```solidity
function getAssetPrice(address asset) external view returns (uint256)
```

_returns the asset price in ETH_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | the address of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the ETH price of the asset |

## IProtocolDataProvider

### TokenData

```solidity
struct TokenData {
  string symbol;
  address tokenAddress;
}
```

### ADDRESSES_PROVIDER

```solidity
function ADDRESSES_PROVIDER() external view returns (contract ILendingPoolAddressesProvider)
```

### getAllReservesTokens

```solidity
function getAllReservesTokens() external view returns (struct IProtocolDataProvider.TokenData[])
```

### getAllATokens

```solidity
function getAllATokens() external view returns (struct IProtocolDataProvider.TokenData[])
```

### getReserveConfigurationData

```solidity
function getReserveConfigurationData(address asset) external view returns (uint256 decimals, uint256 ltv, uint256 liquidationThreshold, uint256 liquidationBonus, uint256 reserveFactor, bool usageAsCollateralEnabled, bool borrowingEnabled, bool stableBorrowRateEnabled, bool isActive, bool isFrozen)
```

### getReserveData

```solidity
function getReserveData(address asset) external view returns (uint256 availableLiquidity, uint256 totalStableDebt, uint256 totalVariableDebt, uint256 liquidityRate, uint256 variableBorrowRate, uint256 stableBorrowRate, uint256 averageStableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex, uint40 lastUpdateTimestamp)
```

### getUserReserveData

```solidity
function getUserReserveData(address asset, address user) external view returns (uint256 currentATokenBalance, uint256 currentStableDebt, uint256 currentVariableDebt, uint256 principalStableDebt, uint256 scaledVariableDebt, uint256 stableBorrowRate, uint256 liquidityRate, uint40 stableRateLastUpdated, bool usageAsCollateralEnabled)
```

### getReserveTokensAddresses

```solidity
function getReserveTokensAddresses(address asset) external view returns (address aTokenAddress, address stableDebtTokenAddress, address variableDebtTokenAddress)
```

## ILendingPoolAddressesProvider

### MarketIdSet

```solidity
event MarketIdSet(string newMarketId)
```

### LendingPoolUpdated

```solidity
event LendingPoolUpdated(address newAddress)
```

### ConfigurationAdminUpdated

```solidity
event ConfigurationAdminUpdated(address newAddress)
```

### EmergencyAdminUpdated

```solidity
event EmergencyAdminUpdated(address newAddress)
```

### LendingPoolConfiguratorUpdated

```solidity
event LendingPoolConfiguratorUpdated(address newAddress)
```

### LendingPoolCollateralManagerUpdated

```solidity
event LendingPoolCollateralManagerUpdated(address newAddress)
```

### PriceOracleUpdated

```solidity
event PriceOracleUpdated(address newAddress)
```

### LendingRateOracleUpdated

```solidity
event LendingRateOracleUpdated(address newAddress)
```

### ProxyCreated

```solidity
event ProxyCreated(bytes32 id, address newAddress)
```

### AddressSet

```solidity
event AddressSet(bytes32 id, address newAddress, bool hasProxy)
```

### getMarketId

```solidity
function getMarketId() external view returns (string)
```

### setMarketId

```solidity
function setMarketId(string marketId) external
```

### setAddress

```solidity
function setAddress(bytes32 id, address newAddress) external
```

### setAddressAsProxy

```solidity
function setAddressAsProxy(bytes32 id, address impl) external
```

### getAddress

```solidity
function getAddress(bytes32 id) external view returns (address)
```

### getLendingPool

```solidity
function getLendingPool() external view returns (address)
```

### setLendingPoolImpl

```solidity
function setLendingPoolImpl(address pool) external
```

### getLendingPoolConfigurator

```solidity
function getLendingPoolConfigurator() external view returns (address)
```

### setLendingPoolConfiguratorImpl

```solidity
function setLendingPoolConfiguratorImpl(address configurator) external
```

### getLendingPoolCollateralManager

```solidity
function getLendingPoolCollateralManager() external view returns (address)
```

### setLendingPoolCollateralManager

```solidity
function setLendingPoolCollateralManager(address manager) external
```

### getPoolAdmin

```solidity
function getPoolAdmin() external view returns (address)
```

### setPoolAdmin

```solidity
function setPoolAdmin(address admin) external
```

### getEmergencyAdmin

```solidity
function getEmergencyAdmin() external view returns (address)
```

### setEmergencyAdmin

```solidity
function setEmergencyAdmin(address admin) external
```

### getPriceOracle

```solidity
function getPriceOracle() external view returns (address)
```

### setPriceOracle

```solidity
function setPriceOracle(address priceOracle) external
```

### getLendingRateOracle

```solidity
function getLendingRateOracle() external view returns (address)
```

### setLendingRateOracle

```solidity
function setLendingRateOracle(address lendingRateOracle) external
```

## ILendingPool

### Deposit

```solidity
event Deposit(address reserve, address user, address onBehalfOf, uint256 amount, uint16 referral)
```

_Emitted on deposit()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address initiating the deposit |
| onBehalfOf | address | The beneficiary of the deposit, receiving the aTokens |
| amount | uint256 | The amount deposited |
| referral | uint16 | The referral code used |

### Withdraw

```solidity
event Withdraw(address reserve, address user, address to, uint256 amount)
```

_Emitted on withdraw()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlyng asset being withdrawn |
| user | address | The address initiating the withdrawal, owner of aTokens |
| to | address | Address that will receive the underlying |
| amount | uint256 | The amount to be withdrawn |

### Borrow

```solidity
event Borrow(address reserve, address user, address onBehalfOf, uint256 amount, uint256 borrowRateMode, uint256 borrowRate, uint16 referral)
```

_Emitted on borrow() and flashLoan() when debt needs to be opened_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset being borrowed |
| user | address | The address of the user initiating the borrow(), receiving the funds on borrow() or just initiator of the transaction on flashLoan() |
| onBehalfOf | address | The address that will be getting the debt |
| amount | uint256 | The amount borrowed out |
| borrowRateMode | uint256 | The rate mode: 1 for Stable, 2 for Variable |
| borrowRate | uint256 | The numeric rate at which the user has borrowed |
| referral | uint16 | The referral code used |

### Repay

```solidity
event Repay(address reserve, address user, address repayer, uint256 amount)
```

_Emitted on repay()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The beneficiary of the repayment, getting his debt reduced |
| repayer | address | The address of the user initiating the repay(), providing the funds |
| amount | uint256 | The amount repaid |

### Swap

```solidity
event Swap(address reserve, address user, uint256 rateMode)
```

_Emitted on swapBorrowRateMode()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user swapping his rate mode |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### ReserveUsedAsCollateralEnabled

```solidity
event ReserveUsedAsCollateralEnabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### ReserveUsedAsCollateralDisabled

```solidity
event ReserveUsedAsCollateralDisabled(address reserve, address user)
```

_Emitted on setUserUseReserveAsCollateral()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user enabling the usage as collateral |

### RebalanceStableBorrowRate

```solidity
event RebalanceStableBorrowRate(address reserve, address user)
```

_Emitted on rebalanceStableBorrowRate()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| user | address | The address of the user for which the rebalance has been executed |

### FlashLoan

```solidity
event FlashLoan(address target, address initiator, address asset, uint256 amount, uint256 premium, uint16 referralCode)
```

_Emitted on flashLoan()_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | address | The address of the flash loan receiver contract |
| initiator | address | The address initiating the flash loan |
| asset | address | The address of the asset being flash borrowed |
| amount | uint256 | The amount flash borrowed |
| premium | uint256 | The fee flash borrowed |
| referralCode | uint16 | The referral code used |

### Paused

```solidity
event Paused()
```

_Emitted when the pause is triggered._

### Unpaused

```solidity
event Unpaused()
```

_Emitted when the pause is lifted._

### LiquidationCall

```solidity
event LiquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, uint256 liquidatedCollateralAmount, address liquidator, bool receiveAToken)
```

_Emitted when a borrower is liquidated. This event is emitted by the LendingPool via
LendingPoolCollateral manager using a DELEGATECALL
This allows to have the events in the generated ABI for LendingPool._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| liquidatedCollateralAmount | uint256 | The amount of collateral received by the liiquidator |
| liquidator | address | The address of the liquidator |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### ReserveDataUpdated

```solidity
event ReserveDataUpdated(address reserve, uint256 liquidityRate, uint256 stableBorrowRate, uint256 variableBorrowRate, uint256 liquidityIndex, uint256 variableBorrowIndex)
```

_Emitted when the state of a reserve is updated. NOTE: This event is actually declared
in the ReserveLogic library and emitted in the updateInterestRates() function. Since the function is internal,
the event will actually be fired by the LendingPool contract. The event is therefore replicated here so it
gets added to the LendingPool ABI_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve | address | The address of the underlying asset of the reserve |
| liquidityRate | uint256 | The new liquidity rate |
| stableBorrowRate | uint256 | The new stable borrow rate |
| variableBorrowRate | uint256 | The new variable borrow rate |
| liquidityIndex | uint256 | The new liquidity index |
| variableBorrowIndex | uint256 | The new variable borrow index |

### deposit

```solidity
function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external
```

_Deposits an `amount` of underlying asset into the reserve, receiving in return overlying aTokens.
- E.g. User deposits 100 USDC and gets in return 100 aUSDC_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to deposit |
| amount | uint256 | The amount to be deposited |
| onBehalfOf | address | The address that will receive the aTokens, same as msg.sender if the user   wants to receive them on his own wallet, or a different address if the beneficiary of aTokens   is a different wallet |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### withdraw

```solidity
function withdraw(address asset, uint256 amount, address to) external returns (uint256)
```

_Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned
E.g. User has 100 aUSDC, calls withdraw() and receives 100 USDC, burning the 100 aUSDC_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to withdraw |
| amount | uint256 | The underlying amount to be withdrawn   - Send the value type(uint256).max in order to withdraw the whole aToken balance |
| to | address | Address that will receive the underlying, same as msg.sender if the user   wants to receive it on his own wallet, or a different address if the beneficiary is a   different wallet |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount withdrawn |

### borrow

```solidity
function borrow(address asset, uint256 amount, uint256 interestRateMode, uint16 referralCode, address onBehalfOf) external
```

_Allows users to borrow a specific `amount` of the reserve underlying asset, provided that the borrower
already deposited enough collateral, or he was given enough allowance by a credit delegator on the
corresponding debt token (StableDebtToken or VariableDebtToken)
- E.g. User borrows 100 USDC passing as `onBehalfOf` his own address, receiving the 100 USDC in his wallet
  and 100 stable/variable debt tokens, depending on the `interestRateMode`_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset to borrow |
| amount | uint256 | The amount to be borrowed |
| interestRateMode | uint256 | The interest rate mode at which the user wants to borrow: 1 for Stable, 2 for Variable |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |
| onBehalfOf | address | Address of the user who will receive the debt. Should be the address of the borrower itself calling the function if he wants to borrow against his own collateral, or the address of the credit delegator if he has been given credit delegation allowance |

### repay

```solidity
function repay(address asset, uint256 amount, uint256 rateMode, address onBehalfOf) external returns (uint256)
```

Repays a borrowed `amount` on a specific reserve, burning the equivalent debt tokens owned
- E.g. User repays 100 USDC, burning 100 variable/stable debt tokens of the `onBehalfOf` address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the borrowed underlying asset previously borrowed |
| amount | uint256 | The amount to repay - Send the value type(uint256).max in order to repay the whole debt for `asset` on the specific `debtMode` |
| rateMode | uint256 | The interest rate mode at of the debt the user wants to repay: 1 for Stable, 2 for Variable |
| onBehalfOf | address | Address of the user who will get his debt reduced/removed. Should be the address of the user calling the function if he wants to reduce/remove his own debt, or the address of any other other borrower whose debt should be removed |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The final amount repaid |

### swapBorrowRateMode

```solidity
function swapBorrowRateMode(address asset, uint256 rateMode) external
```

_Allows a borrower to swap his debt between stable and variable mode, or viceversa_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| rateMode | uint256 | The rate mode that the user wants to swap to |

### rebalanceStableBorrowRate

```solidity
function rebalanceStableBorrowRate(address asset, address user) external
```

_Rebalances the stable interest rate of a user to the current stable rate defined on the reserve.
- Users can be rebalanced if the following conditions are satisfied:
    1. Usage ratio is above 95%
    2. the current deposit APY is below REBALANCE_UP_THRESHOLD * maxVariableBorrowRate, which means that too much has been
       borrowed at a stable rate and depositors are not earning enough_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset borrowed |
| user | address | The address of the user to be rebalanced |

### setUserUseReserveAsCollateral

```solidity
function setUserUseReserveAsCollateral(address asset, bool useAsCollateral) external
```

_Allows depositors to enable/disable a specific deposited asset as collateral_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset deposited |
| useAsCollateral | bool | `true` if the user wants to use the deposit as collateral, `false` otherwise |

### liquidationCall

```solidity
function liquidationCall(address collateralAsset, address debtAsset, address user, uint256 debtToCover, bool receiveAToken) external
```

_Function to liquidate a non-healthy position collateral-wise, with Health Factor below 1
- The caller (liquidator) covers `debtToCover` amount of debt of the user getting liquidated, and receives
  a proportionally amount of the `collateralAsset` plus a bonus to cover market risk_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| collateralAsset | address | The address of the underlying asset used as collateral, to receive as result of the liquidation |
| debtAsset | address | The address of the underlying borrowed asset to be repaid with the liquidation |
| user | address | The address of the borrower getting liquidated |
| debtToCover | uint256 | The debt amount of borrowed `asset` the liquidator wants to cover |
| receiveAToken | bool | `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants to receive the underlying collateral asset directly |

### flashLoan

```solidity
function flashLoan(address receiverAddress, address[] assets, uint256[] amounts, uint256[] modes, address onBehalfOf, bytes params, uint16 referralCode) external
```

_Allows smartcontracts to access the liquidity of the pool within one transaction,
as long as the amount taken plus a fee is returned.
IMPORTANT There are security concerns for developers of flashloan receiver contracts that must be kept into consideration.
For further details please visit https://developers.aave.com_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiverAddress | address | The address of the contract receiving the funds, implementing the IFlashLoanReceiver interface |
| assets | address[] | The addresses of the assets being flash-borrowed |
| amounts | uint256[] | The amounts amounts being flash-borrowed |
| modes | uint256[] | Types of the debt to open if the flash loan is not returned:   0 -> Don't open any debt, just revert if funds can't be transferred from the receiver   1 -> Open debt at stable rate for the value of the amount flash-borrowed to the `onBehalfOf` address   2 -> Open debt at variable rate for the value of the amount flash-borrowed to the `onBehalfOf` address |
| onBehalfOf | address | The address  that will receive the debt in the case of using on `modes` 1 or 2 |
| params | bytes | Variadic packed params to pass to the receiver as extra information |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man |

### getUserAccountData

```solidity
function getUserAccountData(address user) external view returns (uint256 totalCollateralETH, uint256 totalDebtETH, uint256 availableBorrowsETH, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)
```

_Returns the user account data across all the reserves_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| totalCollateralETH | uint256 | the total collateral in ETH of the user |
| totalDebtETH | uint256 | the total debt in ETH of the user |
| availableBorrowsETH | uint256 | the borrowing power left of the user |
| currentLiquidationThreshold | uint256 | the liquidation threshold of the user |
| ltv | uint256 | the loan to value of the user |
| healthFactor | uint256 | the current health factor of the user |

### initReserve

```solidity
function initReserve(address reserve, address aTokenAddress, address stableDebtAddress, address variableDebtAddress, address interestRateStrategyAddress) external
```

### setReserveInterestRateStrategyAddress

```solidity
function setReserveInterestRateStrategyAddress(address reserve, address rateStrategyAddress) external
```

### setConfiguration

```solidity
function setConfiguration(address reserve, uint256 configuration) external
```

### getConfiguration

```solidity
function getConfiguration(address asset) external view returns (struct DataTypes.ReserveConfigurationMap)
```

_Returns the configuration of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveConfigurationMap | The configuration of the reserve |

### getUserConfiguration

```solidity
function getUserConfiguration(address user) external view returns (struct DataTypes.UserConfigurationMap)
```

_Returns the configuration of the user across all the reserves_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The user address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.UserConfigurationMap | The configuration of the user |

### getReserveNormalizedIncome

```solidity
function getReserveNormalizedIncome(address asset) external view returns (uint256)
```

_Returns the normalized income normalized income of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve's normalized income |

### getReserveNormalizedVariableDebt

```solidity
function getReserveNormalizedVariableDebt(address asset) external view returns (uint256)
```

_Returns the normalized variable debt per unit of asset_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The reserve normalized variable debt |

### getReserveData

```solidity
function getReserveData(address asset) external view returns (struct DataTypes.ReserveData)
```

_Returns the state and configuration of the reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| asset | address | The address of the underlying asset of the reserve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct DataTypes.ReserveData | The state of the reserve |

### finalizeTransfer

```solidity
function finalizeTransfer(address asset, address from, address to, uint256 amount, uint256 balanceFromAfter, uint256 balanceToBefore) external
```

### getReservesList

```solidity
function getReservesList() external view returns (address[])
```

### getAddressesProvider

```solidity
function getAddressesProvider() external view returns (contract ILendingPoolAddressesProvider)
```

### setPause

```solidity
function setPause(bool val) external
```

### paused

```solidity
function paused() external view returns (bool)
```

## IStableDebtToken

### Mint

```solidity
event Mint(address user, address onBehalfOf, uint256 amount, uint256 currentBalance, uint256 balanceIncrease, uint256 newRate, uint256 avgStableRate, uint256 newTotalSupply)
```

_Emitted when new stable debt is minted_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user who triggered the minting |
| onBehalfOf | address | The recipient of stable debt tokens |
| amount | uint256 | The amount minted |
| currentBalance | uint256 | The current balance of the user |
| balanceIncrease | uint256 | The increase in balance since the last action of the user |
| newRate | uint256 | The rate of the debt after the minting |
| avgStableRate | uint256 | The new average stable rate after the minting |
| newTotalSupply | uint256 | The new total supply of the stable debt token after the action |

### Burn

```solidity
event Burn(address user, uint256 amount, uint256 currentBalance, uint256 balanceIncrease, uint256 avgStableRate, uint256 newTotalSupply)
```

_Emitted when new stable debt is burned_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user |
| amount | uint256 | The amount being burned |
| currentBalance | uint256 | The current balance of the user |
| balanceIncrease | uint256 | The the increase in balance since the last action of the user |
| avgStableRate | uint256 | The new average stable rate after the burning |
| newTotalSupply | uint256 | The new total supply of the stable debt token after the action |

### approveDelegation

```solidity
function approveDelegation(address delegatee, uint256 amount) external
```

_delegates borrowing power to a user on the specific debt token_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| delegatee | address | the address receiving the delegated borrowing power |
| amount | uint256 | the maximum amount being delegated. Delegation will still respect the liquidation constraints (even if delegated, a delegatee cannot force a delegator HF to go below 1) |

### borrowAllowance

```solidity
function borrowAllowance(address fromUser, address toUser) external view returns (uint256)
```

_returns the borrow allowance of the user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fromUser | address | The user to giving allowance |
| toUser | address | The user to give allowance to |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | the current allowance of toUser |

### mint

```solidity
function mint(address user, address onBehalfOf, uint256 amount, uint256 rate) external returns (bool)
```

_Mints debt token to the `onBehalfOf` address.
- The resulting rate is the weighted average between the rate of the new debt
and the rate of the previous debt_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address receiving the borrowed underlying, being the delegatee in case of credit delegate, or same as `onBehalfOf` otherwise |
| onBehalfOf | address | The address receiving the debt tokens |
| amount | uint256 | The amount of debt tokens to mint |
| rate | uint256 | The rate of the debt being minted |

### burn

```solidity
function burn(address user, uint256 amount) external
```

_Burns debt of `user`
- The resulting rate is the weighted average between the rate of the new debt
and the rate of the previous debt_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | address | The address of the user getting his debt burned |
| amount | uint256 | The amount of debt tokens getting burned |

### getAverageStableRate

```solidity
function getAverageStableRate() external view returns (uint256)
```

_Returns the average rate of all the stable rate loans._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The average stable rate |

### getUserStableRate

```solidity
function getUserStableRate(address user) external view returns (uint256)
```

_Returns the stable rate of the user debt_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The stable rate of the user |

### getUserLastUpdated

```solidity
function getUserLastUpdated(address user) external view returns (uint40)
```

_Returns the timestamp of the last update of the user_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint40 | The timestamp |

### getSupplyData

```solidity
function getSupplyData() external view returns (uint256, uint256, uint256, uint40)
```

_Returns the principal, the total supply and the average stable rate_

### getTotalSupplyLastUpdated

```solidity
function getTotalSupplyLastUpdated() external view returns (uint40)
```

_Returns the timestamp of the last update of the total supply_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint40 | The timestamp |

### getTotalSupplyAndAvgRate

```solidity
function getTotalSupplyAndAvgRate() external view returns (uint256, uint256)
```

_Returns the total supply and the average stable rate_

### principalBalanceOf

```solidity
function principalBalanceOf(address user) external view returns (uint256)
```

_Returns the principal debt balance of the user_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The debt balance of the user since the last burn/mint action |

## IAccessControl

### checkPermissions

```solidity
function checkPermissions(address _address, bytes32 _did) external view returns (bool permissionGranted)
```

It checks if an address (`_address`) has access to a certain asset (`_did`)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | address of the account to check if has address |
| _did | bytes32 | unique identifier of the asset |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| permissionGranted | bool | is true if the `_address` has access to the `_did` |

### grantPermission

```solidity
function grantPermission(address _address, bytes32 _did) external
```

Grants access permissions to an `_address` to a specific `_did`

_`grantPermission` is called only by the `_did` owner or provider_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | address of the account to check if has address |
| _did | bytes32 | unique identifier of the asset |

### renouncePermission

```solidity
function renouncePermission(address _address, bytes32 _did) external
```

Renounce access permissions to an `_address` to a specific `_did`

_`renouncePermission` is called only by the `_did` owner or provider_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | address of the account to check if has address |
| _did | bytes32 | unique identifier of the asset |

## IDynamicPricing

### DynamicPricingState

```solidity
enum DynamicPricingState {
  NotStarted,
  Finished,
  InProgress,
  Aborted
}
```

### getPricingType

```solidity
function getPricingType() external view returns (bytes32)
```

### getPrice

```solidity
function getPrice(bytes32 did) external view returns (uint256)
```

### getTokenAddress

```solidity
function getTokenAddress(bytes32 did) external view returns (address)
```

### getStatus

```solidity
function getStatus(bytes32 did) external view returns (enum IDynamicPricing.DynamicPricingState, uint256, address)
```

### canBePurchased

```solidity
function canBePurchased(bytes32 did) external view returns (bool)
```

### withdraw

```solidity
function withdraw(bytes32 did, address withdrawAddress) external returns (bool)
```

## IExternalRegistry

### used

```solidity
function used(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes _signatureUsing, string _attributes) external returns (bool success)
```

### getDIDOwner

```solidity
function getDIDOwner(bytes32 _did) external view returns (address didOwner)
```

## IList

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

### has

```solidity
function has(bytes32 value, bytes32 id) external view returns (bool)
```

## IRoyaltyScheme

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) external view returns (bool)
```

check that royalties are correct

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | compute royalties for this DID |
| _amounts | uint256[] | amounts in payment |
| _receivers | address[] | receivers of payments |
| _tokenAddress | address | payment token. zero address means native token (ether) |

## IWETHGateway

### depositETH

```solidity
function depositETH(address lendingPool, address onBehalfOf, uint16 referralCode) external payable
```

### withdrawETH

```solidity
function withdrawETH(address lendingPool, uint256 amount, address to) external
```

### repayETH

```solidity
function repayETH(address lendingPool, uint256 amount, uint256 rateMode, address onBehalfOf) external payable
```

### borrowETH

```solidity
function borrowETH(address lendingPool, uint256 amount, uint256 interesRateMode, uint16 referralCode) external
```

## DataTypes

### ReserveData

```solidity
struct ReserveData {
  struct DataTypes.ReserveConfigurationMap configuration;
  uint128 liquidityIndex;
  uint128 variableBorrowIndex;
  uint128 currentLiquidityRate;
  uint128 currentVariableBorrowRate;
  uint128 currentStableBorrowRate;
  uint40 lastUpdateTimestamp;
  address aTokenAddress;
  address stableDebtTokenAddress;
  address variableDebtTokenAddress;
  address interestRateStrategyAddress;
  uint8 id;
}
```

### ReserveConfigurationMap

```solidity
struct ReserveConfigurationMap {
  uint256 data;
}
```

### UserConfigurationMap

```solidity
struct UserConfigurationMap {
  uint256 data;
}
```

### InterestRateMode

```solidity
enum InterestRateMode {
  NONE,
  STABLE,
  VARIABLE
}
```

## SafeMath

### add

```solidity
function add(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the addition of two unsigned integers, reverting on
overflow.

Counterpart to Solidity's `+` operator.

Requirements:
- Addition cannot overflow._

### sub

```solidity
function sub(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the subtraction of two unsigned integers, reverting on
overflow (when the result is negative).

Counterpart to Solidity's `-` operator.

Requirements:
- Subtraction cannot overflow._

### sub

```solidity
function sub(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the subtraction of two unsigned integers, reverting with custom message on
overflow (when the result is negative).

Counterpart to Solidity's `-` operator.

Requirements:
- Subtraction cannot overflow._

### mul

```solidity
function mul(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the multiplication of two unsigned integers, reverting on
overflow.

Counterpart to Solidity's `*` operator.

Requirements:
- Multiplication cannot overflow._

### div

```solidity
function div(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the integer division of two unsigned integers. Reverts on
division by zero. The result is rounded towards zero.

Counterpart to Solidity's `/` operator. Note: this function uses a
`revert` opcode (which leaves remaining gas untouched) while Solidity
uses an invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### div

```solidity
function div(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the integer division of two unsigned integers. Reverts with custom message on
division by zero. The result is rounded towards zero.

Counterpart to Solidity's `/` operator. Note: this function uses a
`revert` opcode (which leaves remaining gas untouched) while Solidity
uses an invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### mod

```solidity
function mod(uint256 a, uint256 b) internal pure returns (uint256)
```

_Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
Reverts when dividing by zero.

Counterpart to Solidity's `%` operator. This function uses a `revert`
opcode (which leaves remaining gas untouched) while Solidity uses an
invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

### mod

```solidity
function mod(uint256 a, uint256 b, string errorMessage) internal pure returns (uint256)
```

_Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
Reverts with custom message when dividing by zero.

Counterpart to Solidity's `%` operator. This function uses a `revert`
opcode (which leaves remaining gas untouched) while Solidity uses an
invalid opcode to revert (consuming all remaining gas).

Requirements:
- The divisor cannot be zero._

## Address

### isContract

```solidity
function isContract(address account) internal view returns (bool)
```

_Returns true if `account` is a contract.

[IMPORTANT]
====
It is unsafe to assume that an address for which this function returns
false is an externally-owned account (EOA) and not a contract.

Among others, `isContract` will return false for the following
types of addresses:

 - an externally-owned account
 - a contract in construction
 - an address where a contract will be created
 - an address where a contract lived, but was destroyed
====_

### sendValue

```solidity
function sendValue(address payable recipient, uint256 amount) internal
```

_Replacement for Solidity's `transfer`: sends `amount` wei to
`recipient`, forwarding all available gas and reverting on errors.

https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
of certain opcodes, possibly making contracts go over the 2300 gas limit
imposed by `transfer`, making them unable to receive funds via
`transfer`. {sendValue} removes this limitation.

https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].

IMPORTANT: because control is transferred to `recipient`, care must be
taken to not create reentrancy vulnerabilities. Consider using
{ReentrancyGuard} or the
https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]._

## SafeERC20

_Wrappers around ERC20 operations that throw on failure (when the token
contract returns false). Tokens that return no value (and instead revert or
throw on failure) are also supported, non-reverting calls are assumed to be
successful.
To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
which allows you to call the safe operations as `token.safeTransfer(...)`, etc._

### safeTransfer

```solidity
function safeTransfer(contract IERC20 token, address to, uint256 value) internal
```

### safeTransferFrom

```solidity
function safeTransferFrom(contract IERC20 token, address from, address to, uint256 value) internal
```

### safeApprove

```solidity
function safeApprove(contract IERC20 token, address spender, uint256 value) internal
```

### callOptionalReturn

```solidity
function callOptionalReturn(contract IERC20 token, bytes data) private
```

## CloneFactory

### createClone

```solidity
function createClone(address target) internal returns (address result)
```

### isClone

```solidity
function isClone(address target, address query) internal view returns (bool result)
```

## EpochLibrary

_Implementation of Epoch Library.
     For an arbitrary Epoch, this library manages the life
     cycle of an Epoch. Usually this library is used for 
     handling the time window between conditions in an agreement._

### Epoch

```solidity
struct Epoch {
  uint256 timeLock;
  uint256 timeOut;
  uint256 blockNumber;
}
```

### EpochList

```solidity
struct EpochList {
  mapping(bytes32 => struct EpochLibrary.Epoch) epochs;
}
```

### isTimedOut

```solidity
function isTimedOut(struct EpochLibrary.EpochList _self, bytes32 _id) internal view returns (bool)
```

isTimedOut means you cannot fulfill after

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the current block number is gt timeOut |

### isTimeLocked

```solidity
function isTimeLocked(struct EpochLibrary.EpochList _self, bytes32 _id) internal view returns (bool)
```

isTimeLocked means you cannot fulfill before

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.EpochList | is the Epoch storage pointer |
| _id | bytes32 |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the current block number is gt timeLock |

### getEpochTimeOut

```solidity
function getEpochTimeOut(struct EpochLibrary.Epoch _self) internal view returns (uint256)
```

getEpochTimeOut

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.Epoch | is the Epoch storage pointer |

### getEpochTimeLock

```solidity
function getEpochTimeLock(struct EpochLibrary.Epoch _self) internal view returns (uint256)
```

getEpochTimeLock

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct EpochLibrary.Epoch | is the Epoch storage pointer |

## HashListLibrary

_Implementation of the basic functionality of list of hash values.
This library allows other contracts to build and maintain lists
and also preserves the privacy of the data by accepting only hashed 
content (bytes32 based data type)_

### List

```solidity
struct List {
  address _owner;
  bytes32[] values;
  mapping(bytes32 => uint256) indices;
}
```

### onlyListOwner

```solidity
modifier onlyListOwner(struct HashListLibrary.List _self)
```

### add

```solidity
function add(struct HashListLibrary.List _self, bytes32 value) public returns (bool)
```

_add index an element then add it to a list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is a bytes32 value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is added successfully |

### add

```solidity
function add(struct HashListLibrary.List _self, bytes32[] values) public returns (bool)
```

_put an array of elements without indexing
     this meant to save gas in case of large arrays_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| values | bytes32[] | is an array of elements value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if values are added successfully |

### update

```solidity
function update(struct HashListLibrary.List _self, bytes32 oldValue, bytes32 newValue) public returns (bool)
```

_update the value with a new value and maintain indices_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| oldValue | bytes32 | is an element value in a list |
| newValue | bytes32 | new value |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is updated successfully |

### remove

```solidity
function remove(struct HashListLibrary.List _self, bytes32 value) public returns (bool)
```

_remove value from a list, updates indices, and list size_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is an element value in a list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if value is removed successfully |

### get

```solidity
function get(struct HashListLibrary.List _self, uint256 __index) public view returns (bytes32)
```

_has value by index_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| __index | uint256 | is where is value is stored in the list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the value if exists |

### index

```solidity
function index(struct HashListLibrary.List _self, uint256 from, uint256 to) public returns (bool)
```

_index is used to map each element value to its index on the list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| from | uint256 | index is where to 'from' indexing in the list |
| to | uint256 | index is where to stop indexing |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the sub list is indexed |

### setOwner

```solidity
function setOwner(struct HashListLibrary.List _self, address _owner) public
```

_setOwner set list owner
param _owner owner address_

### indexOf

```solidity
function indexOf(struct HashListLibrary.List _self, bytes32 value) public view returns (uint256)
```

_indexOf gets the index of a value in a list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is element value in list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | value index in list |

### isIndexed

```solidity
function isIndexed(struct HashListLibrary.List _self) public view returns (bool)
```

_isIndexed checks if the list is indexed_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the list is indexed |

### all

```solidity
function all(struct HashListLibrary.List _self) public view returns (bytes32[])
```

_all returns all list elements_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32[] | all list elements |

### has

```solidity
function has(struct HashListLibrary.List _self, bytes32 value) public view returns (bool)
```

_size returns the list size_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| value | bytes32 | is element value in list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the value exists |

### size

```solidity
function size(struct HashListLibrary.List _self) public view returns (uint256)
```

_size gets the list size_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | total length of the list |

### ownedBy

```solidity
function ownedBy(struct HashListLibrary.List _self) public view returns (address)
```

_ownedBy gets the list owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | list owner |

### _index

```solidity
function _index(struct HashListLibrary.List _self, uint256 from, uint256 to) private returns (bool)
```

__index assign index to the list elements_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct HashListLibrary.List | is a pointer to list in the storage |
| from | uint256 | is the starting index id |
| to | uint256 | is the ending index id |

## AbstractAuction

### AUCTION_MANAGER_ROLE

```solidity
bytes32 AUCTION_MANAGER_ROLE
```

### NVM_AGREEMENT_ROLE

```solidity
bytes32 NVM_AGREEMENT_ROLE
```

### Auction

```solidity
struct Auction {
  bytes32 did;
  enum IDynamicPricing.DynamicPricingState state;
  address creator;
  uint256 blockNumberCreated;
  uint256 floor;
  uint256 starts;
  uint256 ends;
  uint256 price;
  address tokenAddress;
  address whoCanClaim;
  string hash;
}
```

### auctions

```solidity
mapping(bytes32 => struct AbstractAuction.Auction) auctions
```

### auctionBids

```solidity
mapping(bytes32 => mapping(address => uint256)) auctionBids
```

### nvmConfig

```solidity
address nvmConfig
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

### AuctionCreated

```solidity
event AuctionCreated(bytes32 auctionId, bytes32 did, address creator, uint256 blockNumberCreated, uint256 floor, uint256 starts, uint256 ends, address tokenAddress)
```

### AuctionChangedState

```solidity
event AuctionChangedState(bytes32 auctionId, address who, enum IDynamicPricing.DynamicPricingState previousState, enum IDynamicPricing.DynamicPricingState newState)
```

### AuctionBidReceived

```solidity
event AuctionBidReceived(bytes32 auctionId, address bidder, address tokenAddress, uint256 amount)
```

### AuctionWithdrawal

```solidity
event AuctionWithdrawal(bytes32 auctionId, address receiver, address tokenAddress, uint256 amount)
```

### receive

```solidity
receive() external payable
```

### abortAuction

```solidity
function abortAuction(bytes32 _auctionId) external virtual
```

### withdraw

```solidity
function withdraw(bytes32 _auctionId, address _withdrawAddress) external virtual returns (bool)
```

### getPricingType

```solidity
function getPricingType() external pure virtual returns (bytes32)
```

### getPrice

```solidity
function getPrice(bytes32 _auctionId) external view returns (uint256)
```

### getTokenAddress

```solidity
function getTokenAddress(bytes32 _auctionId) external view returns (address)
```

### getStatus

```solidity
function getStatus(bytes32 _auctionId) external view returns (enum IDynamicPricing.DynamicPricingState state, uint256 price, address whoCanClaim)
```

### canBePurchased

```solidity
function canBePurchased(bytes32 _auctionId) external view virtual returns (bool)
```

### addNVMAgreementRole

```solidity
function addNVMAgreementRole(address account) public
```

### onlyCreator

```solidity
modifier onlyCreator(bytes32 _auctionId)
```

### onlyCreatorOrAdmin

```solidity
modifier onlyCreatorOrAdmin(bytes32 _auctionId)
```

### onlyNotCreator

```solidity
modifier onlyNotCreator(bytes32 _auctionId)
```

### onlyAfterStart

```solidity
modifier onlyAfterStart(bytes32 _auctionId)
```

### onlyBeforeStarts

```solidity
modifier onlyBeforeStarts(bytes32 _auctionId)
```

### onlyBeforeEnd

```solidity
modifier onlyBeforeEnd(bytes32 _auctionId)
```

### onlyNotAbortedOrFinished

```solidity
modifier onlyNotAbortedOrFinished(bytes32 _auctionId)
```

### onlyAbortedOrFinished

```solidity
modifier onlyAbortedOrFinished(bytes32 _auctionId)
```

### onlyNotAborted

```solidity
modifier onlyNotAborted(bytes32 _auctionId)
```

### onlyFinishedOrAborted

```solidity
modifier onlyFinishedOrAborted(bytes32 _auctionId)
```

## DutchAuction

### initialize

```solidity
function initialize(address _owner) external
```

initialize init the contract with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |

### create

```solidity
function create(bytes32 _auctionId, bytes32 _did, uint256 _startPrice, uint256 _starts, uint256 _ends, address _tokenAddress, string _hash) external virtual
```

It creates a new Auction given some setup parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _auctionId | bytes32 | unique auction identifier |
| _did | bytes32 | reference to the asset part of the auction |
| _startPrice | uint256 | start price (and max) for the auction |
| _starts | uint256 | block number when the auction starts |
| _ends | uint256 | block number of when the auction ends |
| _tokenAddress | address | token address to use for the auction. If address(0) means native token |
| _hash | string | ipfs hash referring to the auction metadata |

### placeNativeTokenBid

```solidity
function placeNativeTokenBid(bytes32 _auctionId) external payable virtual
```

### placeERC20Bid

```solidity
function placeERC20Bid(bytes32 _auctionId, uint256 _bidAmount) external virtual
```

### withdraw

```solidity
function withdraw(bytes32 _auctionId, address _withdrawAddress) external virtual returns (bool)
```

### getPricingType

```solidity
function getPricingType() external pure returns (bytes32)
```

## EnglishAuction

### initialize

```solidity
function initialize(address _owner) external
```

initialize init the contract with the following parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |

### create

```solidity
function create(bytes32 _auctionId, bytes32 _did, uint256 _floor, uint256 _starts, uint256 _ends, address _tokenAddress, string _hash) external virtual
```

It creates a new Auction given some setup parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _auctionId | bytes32 | unique auction identifier |
| _did | bytes32 | reference to the asset part of the auction |
| _floor | uint256 | floor price |
| _starts | uint256 | block number when the auction starts |
| _ends | uint256 | block number of when the auction ends |
| _tokenAddress | address | token address to use for the auction. If address(0) means native token |
| _hash | string | ipfs hash referring to the auction metadata |

### placeNativeTokenBid

```solidity
function placeNativeTokenBid(bytes32 _auctionId) external payable virtual
```

### placeERC20Bid

```solidity
function placeERC20Bid(bytes32 _auctionId, uint256 _bidAmount) external virtual
```

### getPricingType

```solidity
function getPricingType() external pure returns (bytes32)
```

## DIDFactory

_Implementation of the DID Registry._

### didRegisterList

```solidity
struct DIDRegistryLibrary.DIDRegisterList didRegisterList
```

_state storage for the DID registry_

### didPermissions

```solidity
mapping(bytes32 => mapping(address => bool)) didPermissions
```

### manager

```solidity
address manager
```

### onlyDIDOwner

```solidity
modifier onlyDIDOwner(bytes32 _did)
```

### onlyOwnerProviderOrDelegated

```solidity
modifier onlyOwnerProviderOrDelegated(bytes32 _did)
```

### onlyValidAttributes

```solidity
modifier onlyValidAttributes(string _attributes)
```

### nftIsInitialized

```solidity
modifier nftIsInitialized(bytes32 _did)
```

### DIDAttributeRegistered

```solidity
event DIDAttributeRegistered(bytes32 _did, address _owner, bytes32 _checksum, string _value, address _lastUpdatedBy, uint256 _blockNumberUpdated)
```

DID Events

### DIDMetadataUpdated

```solidity
event DIDMetadataUpdated(bytes32 _did, address _owner, bytes32 _checksum, string _url, string _immutableUrl)
```

### DIDProviderRemoved

```solidity
event DIDProviderRemoved(bytes32 _did, address _provider, bool state)
```

### DIDProviderAdded

```solidity
event DIDProviderAdded(bytes32 _did, address _provider)
```

### DIDOwnershipTransferred

```solidity
event DIDOwnershipTransferred(bytes32 _did, address _previousOwner, address _newOwner)
```

### DIDPermissionGranted

```solidity
event DIDPermissionGranted(bytes32 _did, address _owner, address _grantee)
```

### DIDPermissionRevoked

```solidity
event DIDPermissionRevoked(bytes32 _did, address _owner, address _grantee)
```

### DIDProvenanceDelegateRemoved

```solidity
event DIDProvenanceDelegateRemoved(bytes32 _did, address _delegate, bool state)
```

### DIDProvenanceDelegateAdded

```solidity
event DIDProvenanceDelegateAdded(bytes32 _did, address _delegate)
```

### registerAttribute

```solidity
function registerAttribute(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url) public virtual
```

Register DID attributes.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] |  |
| _url | string | refers to the attribute value, limited to 2048 bytes. |

### registerDID

```solidity
function registerDID(bytes32 _didSeed, bytes32 _checksum, address[] _providers, string _url, bytes32 _activityId, string _immutableUrl) public virtual
```

Register DID attributes.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID).           The final DID will be calculated with the creator address using the `hashDID` function |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _activityId | bytes32 | refers to activity |
| _immutableUrl | string | refers to url stored in an immutable storage network like IPFS, Filecoin, Arweave |

### updateMetadataUrl

```solidity
function updateMetadataUrl(bytes32 _did, bytes32 _checksum, string _url, string _immutableUrl) public virtual
```

### hashDID

```solidity
function hashDID(bytes32 _didSeed, address _creator) public pure returns (bytes32)
```

It generates a DID using as seed a bytes32 and the address of the DID creator

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to DID Seed used as base to generate the final DID |
| _creator | address | address of the creator of the DID |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the new DID created |

### areRoyaltiesValid

```solidity
function areRoyaltiesValid(bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) public view returns (bool)
```

areRoyaltiesValid checks if for a given DID and rewards distribution, this allocate the  
original creator royalties properly

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _amounts | uint256[] | refers to the amounts to reward |
| _receivers | address[] | refers to the receivers of rewards |
| _tokenAddress | address |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the rewards distribution respect the original creator royalties |

### wasGeneratedBy

```solidity
function wasGeneratedBy(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal returns (bool)
```

### used

```solidity
function used(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes _signatureUsing, string _attributes) public returns (bool success)
```

### wasDerivedFrom

```solidity
function wasDerivedFrom(bytes32 _provId, bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, string _attributes) public returns (bool success)
```

### wasAssociatedWith

```solidity
function wasAssociatedWith(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) public returns (bool success)
```

### actedOnBehalf

```solidity
function actedOnBehalf(bytes32 _provId, bytes32 _did, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes _signatureDelegate, string _attributes) public returns (bool success)
```

Implements the W3C PROV Delegation action
Each party involved in this method (_delegateAgentId & _responsibleAgentId) must provide a valid signature.
The content to sign is a representation of the footprint of the event (_did + _delegateAgentId + _responsibleAgentId + _activityId)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _delegateAgentId | address | refers to address acting on behalf of the provenance record |
| _responsibleAgentId | address | refers to address responsible of the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### addDIDProvider

```solidity
function addDIDProvider(bytes32 _did, address _provider) external
```

addDIDProvider add new DID provider.

_it adds new DID provider to the providers list. A provider
     is any entity that can serve the registered asset_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### removeDIDProvider

```solidity
function removeDIDProvider(bytes32 _did, address _provider) external
```

removeDIDProvider delete an existing DID provider.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### addDIDProvenanceDelegate

```solidity
function addDIDProvenanceDelegate(bytes32 _did, address _delegate) public
```

addDIDProvenanceDelegate add new DID provenance delegate.

_it adds new DID provenance delegate to the delegates list. 
A delegate is any entity that interact with the provenance entries of one DID_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegates's address. |

### removeDIDProvenanceDelegate

```solidity
function removeDIDProvenanceDelegate(bytes32 _did, address _delegate) external
```

removeDIDProvenanceDelegate delete an existing DID delegate.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegate's address. |

### transferDIDOwnership

```solidity
function transferDIDOwnership(bytes32 _did, address _newOwner) external
```

transferDIDOwnership transfer DID ownership

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _newOwner | address | new owner address |

### _transferDIDOwnership

```solidity
function _transferDIDOwnership(address _sender, bytes32 _did, address _newOwner) internal
```

### grantPermission

```solidity
function grantPermission(bytes32 _did, address _grantee) external
```

_grantPermission grants access permission to grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### revokePermission

```solidity
function revokePermission(bytes32 _did, address _grantee) external
```

_revokePermission revokes access permission from grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### getPermission

```solidity
function getPermission(bytes32 _did, address _grantee) external view returns (bool)
```

_getPermission gets access permission of a grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if grantee has access permission to a DID |

### isDIDProvider

```solidity
function isDIDProvider(bytes32 _did, address _provider) public view returns (bool)
```

isDIDProvider check whether a given DID provider exists

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _provider | address | provider's address. |

### isDIDProviderOrOwner

```solidity
function isDIDProviderOrOwner(bytes32 _did, address _provider) public view returns (bool)
```

### getDIDRegister

```solidity
function getDIDRegister(bytes32 _did) public view returns (address owner, bytes32 lastChecksum, string url, address lastUpdatedBy, uint256 blockNumberUpdated, address[] providers, uint256 royalties, string immutableUrl, bool nftInitialized)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the did owner |
| lastChecksum | bytes32 | last checksum |
| url | string | URL to the DID metadata |
| lastUpdatedBy | address | who was the last updating the DID |
| blockNumberUpdated | uint256 | In which block was the DID updated |
| providers | address[] | the list of providers |
| royalties | uint256 | the royalties amount |
| immutableUrl | string | includes the url to the DDO in immutable storage |
| nftInitialized | bool | if the NFT has been initialized |

### getNFTInfo

```solidity
function getNFTInfo(bytes32 _did) public view returns (address nftContractAddress, bool nftInitialized)
```

### getBlockNumberUpdated

```solidity
function getBlockNumberUpdated(bytes32 _did) public view returns (uint256 blockNumberUpdated)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| blockNumberUpdated | uint256 | last modified (update) block number of a DID. |

### getDIDOwner

```solidity
function getDIDOwner(bytes32 _did) public view returns (address didOwner)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| didOwner | address | the address of the DID owner. |

### getDIDRoyaltyRecipient

```solidity
function getDIDRoyaltyRecipient(bytes32 _did) public view returns (address)
```

### getDIDRoyaltyScheme

```solidity
function getDIDRoyaltyScheme(bytes32 _did) public view returns (address)
```

### getDIDCreator

```solidity
function getDIDCreator(bytes32 _did) public view returns (address)
```

### _grantPermission

```solidity
function _grantPermission(bytes32 _did, address _grantee) internal
```

__grantPermission grants access permission to grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### _revokePermission

```solidity
function _revokePermission(bytes32 _did, address _grantee) internal
```

__revokePermission revokes access permission from grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

### _getPermission

```solidity
function _getPermission(bytes32 _did, address _grantee) internal view returns (bool)
```

__getPermission gets access permission of a grantee_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _grantee | address | address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if grantee has access permission to a DID |

### getProvenanceEntry

```solidity
function getProvenanceEntry(bytes32 _provId) public view returns (bytes32 did, bytes32 relatedDid, address agentId, bytes32 activityId, address agentInvolvedId, uint8 method, address createdBy, uint256 blockNumberUpdated, bytes signature)
```

Fetch the complete provenance entry attributes

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | refers to the provenance identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| did | bytes32 | to what DID refers this entry |
| relatedDid | bytes32 | DID related with the entry |
| agentId | address | the agent identifier |
| activityId | bytes32 | referring to the id of the activity |
| agentInvolvedId | address | agent involved with the action |
| method | uint8 | the w3c provenance method |
| createdBy | address | who is creating this entry |
| blockNumberUpdated | uint256 | in which block was updated |
| signature | bytes | digital signature |

### isDIDOwner

```solidity
function isDIDOwner(address _address, bytes32 _did) public view returns (bool)
```

isDIDOwner check whether a given address is owner for a DID

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | user address. |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

### isOwnerProviderOrDelegate

```solidity
function isOwnerProviderOrDelegate(bytes32 _did) public view returns (bool)
```

isOwnerProviderOrDelegate check whether _msgSender() is owner, provider or
delegate for a DID given

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | boolean true if yes |

### isProvenanceDelegate

```solidity
function isProvenanceDelegate(bytes32 _did, address _delegate) public view returns (bool)
```

isProvenanceDelegate check whether a given DID delegate exists

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _delegate | address | delegate's address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | boolean true if yes |

### getProvenanceOwner

```solidity
function getProvenanceOwner(bytes32 _did) public view returns (address provenanceOwner)
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provenanceOwner | address | the address of the Provenance owner. |

## DIDRegistry

_Implementation of an on-chain registry of assets. It allows users to register their digital assets
and the on-chain resolution of them via a Decentralized Identifier (DID) into their Metadata (DDO).  

The permissions are organized in different levels:

1. Contract Ownership Level. At the top level the DID Registry contract is 'Ownable' so the owner (typically the deployer) of the contract
   can manage everything in the registry.
2. Contract Operator Level. At the second level we have the Registry contract operator `REGISTRY_OPERATOR_ROLE`. Typically this role is 
   granted to some Nevermined contracts to automate the execution of common functions.
   This role is managed using the  `grantRegistryOperatorRole` and `revokeRegistryOperatorRole` function
3. Asset Access Level. Asset owners can provide individual asset permissions to external providers via the `addProvider` function.
   Providers typically (Nevermined Nodes) can manage asset access. 
4. Asset Provenance Level. Provenance delegates can register provenance events at asset level._

### erc1155

```solidity
contract NFT1155Upgradeable erc1155
```

### erc721

```solidity
contract NFT721Upgradeable erc721
```

### royaltiesCheckers

```solidity
mapping(address => bool) royaltiesCheckers
```

### defaultRoyalties

```solidity
contract StandardRoyalties defaultRoyalties
```

### nvmConfig

```solidity
contract INVMConfig nvmConfig
```

### REGISTRY_OPERATOR_ROLE

```solidity
bytes32 REGISTRY_OPERATOR_ROLE
```

### onlyRegistryOperator

```solidity
modifier onlyRegistryOperator()
```

### initialize

```solidity
function initialize(address _owner, address _erc1155, address _erc721, address _config, address _royalties) public
```

_DIDRegistry Initializer
     Initialize Ownable. Only on contract creation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract. |
| _erc1155 | address |  |
| _erc721 | address |  |
| _config | address |  |
| _royalties | address |  |

### setDefaultRoyalties

```solidity
function setDefaultRoyalties(address _royalties) public
```

### registerRoyaltiesChecker

```solidity
function registerRoyaltiesChecker(address _addr) public
```

### setNFT1155

```solidity
function setNFT1155(address _erc1155) public
```

### grantRegistryOperatorRole

```solidity
function grantRegistryOperatorRole(address account) public virtual
```

### revokeRegistryOperatorRole

```solidity
function revokeRegistryOperatorRole(address account) public virtual
```

### isRegistryOperator

```solidity
function isRegistryOperator(address operator) public view virtual returns (bool)
```

### DIDRoyaltiesAdded

```solidity
event DIDRoyaltiesAdded(bytes32 did, address addr)
```

### DIDRoyaltyRecipientChanged

```solidity
event DIDRoyaltyRecipientChanged(bytes32 did, address addr)
```

### setDIDRoyalties

```solidity
function setDIDRoyalties(bytes32 _did, address _royalties) public
```

### setDIDRoyaltyRecipient

```solidity
function setDIDRoyaltyRecipient(bytes32 _did, address _recipient) public
```

### transferDIDOwnershipManaged

```solidity
function transferDIDOwnershipManaged(address _sender, bytes32 _did, address _newOwner) external
```

transferDIDOwnershipManaged transfer DID ownership

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _sender | address |  |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) |
| _newOwner | address | new owner address |

### registerMintableDID

```solidity
function registerMintableDID(bytes32 _didSeed, address _nftContractAddress, bytes32 _checksum, address[] _providers, string _url, uint256 _cap, uint256 _royalties, bool _mint, bytes32 _activityId, string _nftMetadata, string _immutableUrl) public
```

Register a Mintable DID using NFTs based in the ERC-1155 standard.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _nftContractAddress | address | is the address of the NFT contract associated to the asset |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint256 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if true it mints the ERC-1155 NFTs attached to the asset |
| _activityId | bytes32 | refers to activity |
| _nftMetadata | string | refers to the url providing the NFT Metadata |
| _immutableUrl | string | includes the url to the DDO in immutable storage |

### registerMintableDID721

```solidity
function registerMintableDID721(bytes32 _didSeed, address _nftContractAddress, bytes32 _checksum, address[] _providers, string _url, uint256 _royalties, bool _mint, bytes32 _activityId, string _immutableUrl) public
```

Register a Mintable DID using NFTs based in the ERC-721 standard.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _nftContractAddress | address | address of the NFT contract associated to the asset |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _royalties | uint256 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if true it mints the ERC-1155 NFTs attached to the asset |
| _activityId | bytes32 | refers to activity |
| _immutableUrl | string | includes the url to the DDO in immutable storage |

### registerMintableDID

```solidity
function registerMintableDID(bytes32 _didSeed, address _nftContractAddress, bytes32 _checksum, address[] _providers, string _url, uint256 _cap, uint256 _royalties, bytes32 _activityId, string _nftMetadata, string _immutableUrl) public
```

Register a Mintable DID.

_The first attribute of a DID registered sets the DID owner.
     Subsequent updates record _checksum and update info._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _didSeed | bytes32 | refers to decentralized identifier seed (a bytes32 length ID). |
| _nftContractAddress | address | address of the NFT contract associated to the asset |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content. |
| _providers | address[] | list of addresses that can act as an asset provider |
| _url | string | refers to the url resolving the DID into a DID Document (DDO), limited to 2048 bytes. |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint256 | refers to the royalties to reward to the DID creator in the secondary market |
| _activityId | bytes32 | refers to activity |
| _nftMetadata | string | refers to the url providing the NFT Metadata |
| _immutableUrl | string | includes the url to the DDO in immutable storage |

### enableAndMintDidNft

```solidity
function enableAndMintDidNft(bytes32 _did, address _nftAddress, uint256 _cap, uint256 _royalties, bool _mint, string _nftMetadata) public returns (bool success)
```

enableDidNft creates the initial setup of NFTs minting and royalties distribution for ERC-1155 NFTs.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the mintCap and royalties configuration_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _nftAddress | address |  |
| _cap | uint256 | refers to the mint cap |
| _royalties | uint256 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if is true mint directly the amount capped tokens and lock in the _lockAddress |
| _nftMetadata | string | refers to the url providing the NFT Metadata |

### enableAndMintDidNft721

```solidity
function enableAndMintDidNft721(bytes32 _did, address _nftContractAddress, uint256 _royalties, bool _mint) public returns (bool success)
```

enableAndMintDidNft721 creates the initial setup of NFTs minting and royalties distribution for ERC-721 NFTs.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the mintCap and royalties configuration_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _nftContractAddress | address | address of the NFT contract associated to the asset |
| _royalties | uint256 | refers to the royalties to reward to the DID creator in the secondary market |
| _mint | bool | if is true mint directly the amount capped tokens and lock in the _lockAddress |

### _provenanceStorage

```solidity
function _provenanceStorage() internal view returns (bool)
```

### registerUsedProvenance

```solidity
function registerUsedProvenance(bytes32 _did, bytes32 _cond, string name, address user) public
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

## DIDRegistryLibrary

_All function calls are currently implemented without side effects_

### DIDRegister

```solidity
struct DIDRegister {
  address owner;
  uint8 royalties;
  bool nftInitialized;
  address nftContractAddress;
  address creator;
  bytes32 lastChecksum;
  string url;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
  address[] providers;
  address[] delegates;
  address royaltyRecipient;
  contract IRoyaltyScheme royaltyScheme;
  string immutableUrl;
}
```

### DIDRegisterList

```solidity
struct DIDRegisterList {
  mapping(bytes32 => struct DIDRegistryLibrary.DIDRegister) didRegisters;
}
```

### update

```solidity
function update(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, bytes32 _checksum, string _url, address _sender, string _immutableUrl) internal
```

update the DID store

_access modifiers and storage pointer should be implemented in DIDRegistry_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _checksum | bytes32 | includes a one-way HASH calculated using the DDO content |
| _url | string | includes the url resolving to the DID Document (DDO) |
| _sender | address | the address of the user updating the entry |
| _immutableUrl | string | includes the url to the DDO in immutable storage |

### initializeNftConfig

```solidity
function initializeNftConfig(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _nftContractAddress, contract IRoyaltyScheme _royaltyHandler) internal
```

initializeNftConfig creates the initial setup of NFTs minting and royalties distribution.
After this initial setup, this data can't be changed anymore for the DID given, even for the owner of the DID.
The reason of this is to avoid minting additional NFTs after the initial agreement, what could affect the 
valuation of NFTs of a DID already created.

_update the DID registry providers list by adding the nftContract and royalties configuration_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _nftContractAddress | address |  |
| _royaltyHandler | contract IRoyaltyScheme | contract for handling royalties |

### initializeNft721Config

```solidity
function initializeNft721Config(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _nftContractAddress, contract IRoyaltyScheme _royaltyHandler) internal
```

### areRoyaltiesValid

```solidity
function areRoyaltiesValid(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, uint256[] _amounts, address[] _receivers, address _tokenAddress) internal view returns (bool)
```

areRoyaltiesValid checks if for a given DID and rewards distribution, this allocate the  
original creator royalties properly

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _amounts | uint256[] | refers to the amounts to reward |
| _receivers | address[] | refers to the receivers of rewards |
| _tokenAddress | address |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the rewards distribution respect the original creator royalties |

### addProvider

```solidity
function addProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address provider) internal
```

addProvider add provider to DID registry

_update the DID registry providers list by adding a new provider_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| provider | address | the provider's address |

### removeProvider

```solidity
function removeProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _provider) internal returns (bool)
```

removeProvider remove provider from DID registry

_update the DID registry providers list by removing an existing provider_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _provider | address | the provider's address |

### updateDIDOwner

```solidity
function updateDIDOwner(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _newOwner) internal
```

updateDIDOwner transfer DID ownership to a new owner

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _newOwner | address | the new DID owner address |

### isProvider

```solidity
function isProvider(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _provider) internal view returns (bool)
```

isProvider check whether DID provider exists

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _provider | address | the provider's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the provider already exists |

### getProviderIndex

```solidity
function getProviderIndex(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address provider) private view returns (int256)
```

getProviderIndex get the index of a provider

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| provider | address | the provider's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the index if the provider exists otherwise return -1 |

### addDelegate

```solidity
function addDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address delegate) internal
```

addDelegate add delegate to DID registry

_update the DID registry delegates list by adding a new delegate_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| delegate | address | the delegate's address |

### removeDelegate

```solidity
function removeDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _delegate) internal returns (bool)
```

removeDelegate remove delegate from DID registry

_update the DID registry delegates list by removing an existing delegate_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _delegate | address | the delegate's address |

### isDelegate

```solidity
function isDelegate(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address _delegate) internal view returns (bool)
```

isDelegate check whether DID delegate exists

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _delegate | address | the delegate's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the delegate already exists |

### getDelegateIndex

```solidity
function getDelegateIndex(struct DIDRegistryLibrary.DIDRegisterList _self, bytes32 _did, address delegate) private view returns (int256)
```

getDelegateIndex get the index of a delegate

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct DIDRegistryLibrary.DIDRegisterList | refers to storage pointer |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| delegate | address | the delegate's address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the index if the delegate exists otherwise return -1 |

## ProvenanceRegistry

_All function calls are currently implemented without side effects_

### __ProvenanceRegistry_init

```solidity
function __ProvenanceRegistry_init() internal
```

### __ProvenanceRegistry_init_unchained

```solidity
function __ProvenanceRegistry_init_unchained() internal
```

### Provenance

```solidity
struct Provenance {
  bytes32 did;
  bytes32 relatedDid;
  address agentId;
  bytes32 activityId;
  address agentInvolvedId;
  uint8 method;
  address createdBy;
  uint256 blockNumberUpdated;
  bytes signature;
}
```

### ProvenanceRegistryList

```solidity
struct ProvenanceRegistryList {
  mapping(bytes32 => struct ProvenanceRegistry.Provenance) list;
}
```

### provenanceRegistry

```solidity
struct ProvenanceRegistry.ProvenanceRegistryList provenanceRegistry
```

### ProvenanceMethod

```solidity
enum ProvenanceMethod {
  ENTITY,
  ACTIVITY,
  WAS_GENERATED_BY,
  USED,
  WAS_INFORMED_BY,
  WAS_STARTED_BY,
  WAS_ENDED_BY,
  WAS_INVALIDATED_BY,
  WAS_DERIVED_FROM,
  AGENT,
  WAS_ATTRIBUTED_TO,
  WAS_ASSOCIATED_WITH,
  ACTED_ON_BEHALF
}
```

### ProvenanceAttributeRegistered

```solidity
event ProvenanceAttributeRegistered(bytes32 provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes32 _relatedDid, address _agentInvolvedId, enum ProvenanceRegistry.ProvenanceMethod _method, string _attributes, uint256 _blockNumberUpdated)
```

Provenance Events

### WasGeneratedBy

```solidity
event WasGeneratedBy(bytes32 _did, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### Used

```solidity
event Used(bytes32 _did, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### WasDerivedFrom

```solidity
event WasDerivedFrom(bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### WasAssociatedWith

```solidity
event WasAssociatedWith(bytes32 _entityDid, address _agentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### ActedOnBehalf

```solidity
event ActedOnBehalf(bytes32 _entityDid, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes32 provId, string _attributes, uint256 _blockNumberUpdated)
```

### _provenanceStorage

```solidity
function _provenanceStorage() internal virtual returns (bool)
```

### createProvenanceEntry

```solidity
function createProvenanceEntry(bytes32 _provId, bytes32 _did, bytes32 _relatedDid, address _agentId, bytes32 _activityId, address _agentInvolvedId, enum ProvenanceRegistry.ProvenanceMethod _method, address _createdBy, bytes _signatureDelegate, string _attributes) internal
```

create an event in the Provenance store

_access modifiers and storage pointer should be implemented in ProvenanceRegistry_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | refers to provenance event identifier |
| _did | bytes32 | refers to decentralized identifier (a byte32 length ID) |
| _relatedDid | bytes32 | refers to decentralized identifier (a byte32 length ID) of a related entity |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _agentInvolvedId | address | refers to address of the agent involved with the provenance record |
| _method | enum ProvenanceRegistry.ProvenanceMethod | refers to the W3C Provenance method |
| _createdBy | address | refers to address of the agent triggering the activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string |  |

### _wasGeneratedBy

```solidity
function _wasGeneratedBy(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool)
```

Implements the W3C PROV Generation action

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | the number of the new provenance size |

### _used

```solidity
function _used(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, bytes _signatureUsing, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Usage action

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureUsing | bytes | refers to the digital signature provided by the agent using the _did |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _wasDerivedFrom

```solidity
function _wasDerivedFrom(bytes32 _provId, bytes32 _newEntityDid, bytes32 _usedEntityDid, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Derivation action

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _newEntityDid | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity created |
| _usedEntityDid | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity used to derive the new did |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _wasAssociatedWith

```solidity
function _wasAssociatedWith(bytes32 _provId, bytes32 _did, address _agentId, bytes32 _activityId, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Association action

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _agentId | address | refers to address of the agent creating the provenance record |
| _activityId | bytes32 | refers to activity |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _actedOnBehalf

```solidity
function _actedOnBehalf(bytes32 _provId, bytes32 _did, address _delegateAgentId, address _responsibleAgentId, bytes32 _activityId, bytes _signatureDelegate, string _attributes) internal virtual returns (bool success)
```

Implements the W3C PROV Delegation action
Each party involved in this method (_delegateAgentId & _responsibleAgentId) must provide a valid signature.
The content to sign is a representation of the footprint of the event (_did + _delegateAgentId + _responsibleAgentId + _activityId)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _provId | bytes32 | unique identifier referring to the provenance entry |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID) of the entity |
| _delegateAgentId | address | refers to address acting on behalf of the provenance record |
| _responsibleAgentId | address | refers to address responsible of the provenance record |
| _activityId | bytes32 | refers to activity |
| _signatureDelegate | bytes | refers to the digital signature provided by the did delegate. |
| _attributes | string | refers to the provenance attributes |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | true if the action was properly registered |

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## CurveRoyalties

### registry

```solidity
contract DIDRegistry registry
```

### DENOMINATOR

```solidity
uint256 DENOMINATOR
```

### royalties

```solidity
mapping(bytes32 => uint256) royalties
```

### initialize

```solidity
function initialize(address _registry) public
```

### royaltyCurve

```solidity
function royaltyCurve(uint256 num, uint256 max, uint256 rate) public pure virtual returns (uint256)
```

### setRoyalty

```solidity
function setRoyalty(bytes32 _did, uint256 _royalty) public
```

Set royalties for a DID

_Can only be called by creator of the DID_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID for which the royalties are set |
| _royalty | uint256 | Royalty, the actual royalty will be _royalty / 10000 percent |

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address _token) external view returns (bool)
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

## RewardsDistributor

### used

```solidity
mapping(bytes32 => bool) used
```

### receivers

```solidity
mapping(bytes32 => address[]) receivers
```

### registry

```solidity
contract DIDRegistry registry
```

### conditionStoreManager

```solidity
contract ConditionStoreManager conditionStoreManager
```

### escrow

```solidity
address escrow
```

### initialize

```solidity
function initialize(address _registry, address _conditionStoreManager, address _escrow) public
```

### setReceivers

```solidity
function setReceivers(bytes32 _did, address[] _addr) public
```

set receivers for did

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID |
| _addr | address[] | list of receivers |

### claimReward

```solidity
function claimReward(bytes32 _agreementId, bytes32 _did, uint256[] _amounts, address[] _receivers, address _returnAddress, address _lockPaymentAddress, address _tokenAddress, bytes32 _lockCondition, bytes32[] _releaseConditions) public
```

distribute rewards associated with an escrow condition

_as paramemeters, it just gets the same parameters as fulfill for escrow condition_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _agreementId | bytes32 | agreement identifier |
| _did | bytes32 | asset decentralized identifier |
| _amounts | uint256[] | token amounts to be locked/released |
| _receivers | address[] | receiver's address |
| _returnAddress | address |  |
| _lockPaymentAddress | address | lock payment contract address |
| _tokenAddress | address | the ERC20 contract address to use during the payment |
| _lockCondition | bytes32 | lock condition identifier |
| _releaseConditions | bytes32[] | release condition identifier |

## StandardRoyalties

### registry

```solidity
contract DIDRegistry registry
```

### DENOMINATOR

```solidity
uint256 DENOMINATOR
```

### royalties

```solidity
mapping(bytes32 => uint256) royalties
```

### initialize

```solidity
function initialize(address _registry) public
```

### setRoyalty

```solidity
function setRoyalty(bytes32 _did, uint256 _royalty) public
```

Set royalties for a DID

_Can only be called by creator of the DID_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _did | bytes32 | DID for which the royalties are set |
| _royalty | uint256 | Royalty, the actual royalty will be _royalty / 10000 percent |

### check

```solidity
function check(bytes32 _did, uint256[] _amounts, address[] _receivers, address) external view returns (bool)
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

## AaveCreditTemplate

_Implementation of the Aaven Credit Agreement Template
 0. Initialize the agreement
 1. LockNFT - Delegatee locks the NFT
 2. AaveCollateralDeposit - Delegator deposits the collateral into Aave. And approves the delegation flow
 3. AaveBorrowCondition - The Delegatee claim the credit amount from Aave
 4. AaveRepayCondition. Options:
     4.a Fulfilled state - The Delegatee pay back the loan (including fee) into Aave and gets back the NFT
     4.b Aborted state - The Delegatee doesn't pay the loan in time so the Delegator gets the NFT. The Delegator pays the loan to Aave
 5. TransferNFT. Options:
     5.a if AaveRepayCondition was fulfilled, it will allow transfer back to the Delegatee or Borrower
     5.b if AaveRepayCondition was aborted, it will allow transfer the NFT to the Delegator or Lender_

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftLockCondition

```solidity
contract INFTLock nftLockCondition
```

### depositCondition

```solidity
contract AaveCollateralDepositCondition depositCondition
```

### borrowCondition

```solidity
contract AaveBorrowCondition borrowCondition
```

### repayCondition

```solidity
contract AaveRepayCondition repayCondition
```

### transferCondition

```solidity
contract DistributeNFTCollateralCondition transferCondition
```

### withdrawCondition

```solidity
contract AaveCollateralWithdrawCondition withdrawCondition
```

### vaultAddress

```solidity
mapping(bytes32 => address) vaultAddress
```

### nvmFee

```solidity
uint256 nvmFee
```

### vaultLibrary

```solidity
address vaultLibrary
```

### VaultCreated

```solidity
event VaultCreated(address _vaultAddress, address _creator, address _lender, address _borrower)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftLockConditionAddress, address _depositConditionAddress, address _borrowConditionAddress, address _repayConditionAddress, address _withdrawCollateralAddress, address _transferConditionAddress, address _vaultLibrary) external
```

initialize init the  contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and
      set push the required condition types including
      access , lock payment and escrow payment conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftLockConditionAddress | address | NFT Lock Condition contract address |
| _depositConditionAddress | address | Aave collateral deposit Condition address |
| _borrowConditionAddress | address | Aave borrow deposit Condition address |
| _repayConditionAddress | address | Aave repay credit Condition address |
| _withdrawCollateralAddress | address |  |
| _transferConditionAddress | address | NFT Transfer Condition address |
| _vaultLibrary | address |  |

### createVaultAgreement

```solidity
function createVaultAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _vaultAddress) public
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, address _lendingPool, address _dataProvider, address _weth, uint256 _agreementFee, address _treasuryAddress, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _lender) public
```

### deployVault

```solidity
function deployVault(address _lendingPool, address _dataProvider, address _weth, uint256 _agreementFee, address _treasuryAddress, address _borrower, address _lender) public returns (address)
```

### getVaultForAgreement

```solidity
function getVaultForAgreement(bytes32 _agreementId) public view returns (address)
```

### updateNVMFee

```solidity
function updateNVMFee(uint256 _newFee) public
```

Updates the nevermined fee for this type of agreement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _newFee | uint256 | New nevermined fee expressed in basis points |

### changeCreditVaultLibrary

```solidity
function changeCreditVaultLibrary(address _vaultLibrary) public
```

## AccessProofTemplate

_Implementation of Access Agreement Template_

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### lockCondition

```solidity
contract LockPaymentCondition lockCondition
```

### escrowReward

```solidity
contract EscrowPaymentCondition escrowReward
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _accessConditionAddress, address _lockConditionAddress, address payable _escrowConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access , lock payment and escrow payment conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _accessConditionAddress | address | access condition address |
| _lockConditionAddress | address | lock reward condition contract address |
| _escrowConditionAddress | address payable | escrow reward contract address |

## AccessTemplate

_Implementation of Access Agreement Template

     Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an on-chain SEA. The template is a composite of three basic
     conditions. Once the agreement is created, the consumer will lock an amount
     of tokens (as listed in the DID document - off-chain metadata) to the 
     the lock reward contract which in turn will fire an event. ON the other hand 
     the provider is listening to all the emitted events, the provider 
     will catch the event and grant permissions to the consumer through 
     secret store contract, the consumer now is able to download the data set
     by asking the off-chain component of secret store to decrypt the DID and 
     encrypt it using the consumer's public key. Then the secret store will 
     provide an on-chain proof that the consumer had access to the data set.
     Finally, the provider can call the escrow reward condition in order 
     to release the payment. Every condition has a time window (time lock and 
     time out). This implies that if the provider didn't grant the access to 
     the consumer through secret store within this time window, the consumer 
     can ask for refund._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### accessCondition

```solidity
contract AccessCondition accessCondition
```

### lockCondition

```solidity
contract LockPaymentCondition lockCondition
```

### escrowReward

```solidity
contract EscrowPaymentCondition escrowReward
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _accessConditionAddress, address _lockConditionAddress, address payable _escrowConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access , lock payment and escrow payment conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _accessConditionAddress | address | access condition address |
| _lockConditionAddress | address | lock reward condition contract address |
| _escrowConditionAddress | address payable | escrow reward contract address |

## AgreementTemplate

_Implementation of Agreement Template

     Agreement template is a reference template where it
     has the ability to create agreements from whitelisted 
     template_

### conditionTypes

```solidity
address[] conditionTypes
```

### agreementStoreManager

```solidity
contract AgreementStoreManager agreementStoreManager
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts) public
```

createAgreement create new agreement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | agreement unique identifier |
| _did | bytes32 | refers to decentralized identifier (a bytes32 length ID). |
| _conditionIds | bytes32[] | list of condition identifiers |
| _timeLocks | uint256[] | list of time locks, each time lock will be assigned to the           same condition that has the same index |
| _timeOuts | uint256[] | list of time outs, each time out will be assigned to the           same condition that has the same index |

### createAgreementAndPay

```solidity
function createAgreementAndPay(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, uint256 _idx, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, uint256[] _indices, address[] _accounts, bytes[] _params) internal
```

### getConditionTypes

```solidity
function getConditionTypes() public view returns (address[])
```

getConditionTypes gets the conditions addresses list

_for the current template returns list of condition contracts 
     addresses_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | list of conditions contract addresses |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

## BaseEscrowTemplate

### agreementData

```solidity
struct BaseEscrowTemplate.AgreementData agreementData
```

### AgreementCreated

```solidity
event AgreementCreated(bytes32 _agreementId, bytes32 _did, address _accessConsumer, address _accessProvider, uint256[] _timeLocks, uint256[] _timeOuts, bytes32[] _conditionIdSeeds, bytes32[] _conditionIds, bytes32 _idSeed, address _creator)
```

### AgreementDataModel

```solidity
struct AgreementDataModel {
  address accessConsumer;
  address accessProvider;
  bytes32 did;
}
```

### AgreementData

```solidity
struct AgreementData {
  mapping(bytes32 => struct BaseEscrowTemplate.AgreementDataModel) agreementDataItems;
  bytes32[] agreementIds;
}
```

### createAgreement

```solidity
function createAgreement(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer) public
```

createAgreement creates agreements through agreement template

_this function initializes the agreement by setting the DID,
      conditions ID, timeouts, time locks and the consumer address.
      The DID provider/owner is automatically detected by the DID
      Registry_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | SEA agreement unique identifier |
| _did | bytes32 | Decentralized Identifier (DID) |
| _conditionIds | bytes32[] | conditions ID associated with the condition types |
| _timeLocks | uint256[] | the starting point of the time window ,time lock is        in block number not seconds |
| _timeOuts | uint256[] | the ending point of the time window ,time lock is        in block number not seconds |
| _accessConsumer | address | consumer address |

### createAgreementAndPayEscrow

```solidity
function createAgreementAndPayEscrow(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, uint256 _idx, address payable _rewardAddress, address _tokenAddress, uint256[] _amounts, address[] _receivers) public payable
```

### createAgreementAndFulfill

```solidity
function createAgreementAndFulfill(bytes32 _id, bytes32 _did, bytes32[] _conditionIds, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, uint256[] _indices, address[] _accounts, bytes[] _params) internal
```

### _makeIds

```solidity
function _makeIds(bytes32 _idSeed, bytes32[] _conditionIds) internal view returns (bytes32[])
```

### _initAgreement

```solidity
function _initAgreement(bytes32 _idSeed, bytes32 _did, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, bytes32[] _conditionIds) internal
```

### getAgreementData

```solidity
function getAgreementData(bytes32 _id) external view returns (address accessConsumer, address accessProvider)
```

getAgreementData return the agreement Data

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | bytes32 | SEA agreement unique identifier |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| accessConsumer | address | the agreement consumer |
| accessProvider | address | the provider addresses |

## DIDSalesTemplate

_Implementation of DID Sales Template

     The DID Sales template supports an scenario where an Asset owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing an Asset owner to get transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer DID Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the ownership transfer of an asset
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract TransferDIDOwnershipCondition transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer ownership condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |

## DynamicAccessTemplate

_Implementation of Agreement Template
This is a dynamic template that allows to setup flexible conditions depending 
on the use case._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### templateConfig

```solidity
struct DynamicAccessTemplate.TemplateConditions templateConfig
```

### TemplateConditions

```solidity
struct TemplateConditions {
  mapping(address => contract Condition) templateConditions;
}
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |

### addTemplateCondition

```solidity
function addTemplateCondition(address _conditionAddress) external returns (uint256 length)
```

addTemplateCondition adds a new condition to the template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _conditionAddress | address | condition contract address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | uint256 | conditionTypes array size |

### removeLastTemplateCondition

```solidity
function removeLastTemplateCondition() external returns (address[])
```

removeLastTemplateCondition removes last condition added to the template

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | conditionTypes existing in the array |

## EscrowComputeExecutionTemplate

_Implementation of a Compute Execution Agreement Template

     EscrowComputeExecutionTemplate is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an on-chain SEA. The template is a composite of three basic
     conditions. Once the agreement is created, the consumer will lock an amount
     of tokens (as listed in the DID document - off-chain metadata) to the 
     the lock reward contract which in turn will fire an event. ON the other hand 
     the provider is listening to all the emitted events, the provider 
     will catch the event and grant permissions to trigger a computation granting
     the execution via the ComputeExecutionCondition contract. 
     The consumer now is able to trigger that computation
     by asking the off-chain gateway to start the execution of a compute workflow.
     Finally, the provider can call the escrow reward condition in order 
     to release the payment. Every condition has a time window (time lock and 
     time out). This implies that if the provider didn't grant the execution to 
     the consumer within this time window, the consumer 
     can ask for refund._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### computeExecutionCondition

```solidity
contract ComputeExecutionCondition computeExecutionCondition
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### escrowPayment

```solidity
contract EscrowPaymentCondition escrowPayment
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _didRegistryAddress, address _computeExecutionConditionAddress, address _lockPaymentConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      service executor condition, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _didRegistryAddress | address | DID registry contract address |
| _computeExecutionConditionAddress | address | service executor condition contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _escrowPaymentAddress | address payable | escrow reward contract address |

### name

```solidity
function name() public pure returns (string)
```

## NFT721AccessProofTemplate

_Implementation of NFT721 Access Proof Template_

## NFT721AccessSwapTemplate

## NFT721AccessTemplate

_Implementation of NFT Access Template_

## NFT721SalesTemplate

_Implementation of NFT Sales Template_

## NFT721SalesWithAccessTemplate

## NFTAccessProofTemplate

_Implementation of NFT Access Template

     The NFT Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing NFT holders to get access to Nevermined services. 
     The template is a composite of 2 basic conditions: 
     - NFT Holding Condition
     - Access Condition

     Once the agreement is created, the consumer can demonstrate is holding a NFT
     for a specific DID. If that's the case the Access condition can be fulfilled
     by the asset owner or provider and all the agreement is fulfilled.
     This can be used in scenarios where a data or services owner, can allow 
     users to get access to exclusive services only when they demonstrate the 
     are holding a specific number of NFTs of a DID.
     This is very useful in use cases like arts._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftHolderCondition

```solidity
contract INFTHolder nftHolderCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftHolderConditionAddress, address _accessConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftHolderConditionAddress | address | lock reward condition contract address |
| _accessConditionAddress | address | access condition contract address |

## NFTAccessSwapTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract INFTLock lockPaymentCondition
```

### rewardCondition

```solidity
contract INFTEscrow rewardCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address payable _escrowPaymentAddress, address _accessCondition) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |
| _accessCondition | address |  |

## NFTAccessTemplate

_Implementation of NFT Access Template

     The NFT Access template is use case specific template.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing NFT holders to get access to Nevermined services. 
     The template is a composite of 2 basic conditions: 
     - NFT Holding Condition
     - Access Condition

     Once the agreement is created, the consumer can demonstrate is holding a NFT
     for a specific DID. If that's the case the Access condition can be fulfilled
     by the asset owner or provider and all the agreement is fulfilled.
     This can be used in scenarios where a data or services owner, can allow 
     users to get access to exclusive services only when they demonstrate the 
     are holding a specific number of NFTs of a DID.
     This is very useful in use cases like arts._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### nftHolderCondition

```solidity
contract INFTHolder nftHolderCondition
```

### accessCondition

```solidity
contract INFTAccess accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _nftHolderConditionAddress, address _accessConditionAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _nftHolderConditionAddress | address | lock reward condition contract address |
| _accessConditionAddress | address | access condition contract address |

## NFTSalesTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract ITransferNFT transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### id

```solidity
function id() public pure returns (uint256)
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer NFT condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |

### nftPrice

```solidity
mapping(address => mapping(address => mapping(address => mapping(bytes32 => uint256)))) nftPrice
```

### nftSale

```solidity
function nftSale(address nftAddress, bytes32 nftId, address token, uint256 amount) external
```

### checkParamsTransfer

```solidity
function checkParamsTransfer(bytes[] _params, bytes32 lockPaymentConditionId, bytes32 _did) internal view returns (address)
```

### checkParamsEscrow

```solidity
function checkParamsEscrow(bytes[] _params, bytes32 lockPaymentId, bytes32 transferId) internal pure
```

### createAgreementFulfill

```solidity
function createAgreementFulfill(bytes32 _id, bytes32 _did, uint256[] _timeLocks, uint256[] _timeOuts, address _accessConsumer, bytes[] _params) external payable
```

## NFTSalesWithAccessTemplate

_Implementation of NFT Sales Template

     The NFT Sales template supports an scenario where a NFT owner
     can sell that asset to a new Owner.
     Anyone (consumer/provider/publisher) can use this template in order
     to setup an agreement allowing a NFT owner to transfer the asset ownership
     after some payment. 
     The template is a composite of 3 basic conditions: 
     - Lock Payment Condition
     - Transfer NFT Condition
     - Escrow Reward Condition

     This scenario takes into account royalties for original creators in the secondary market.
     Once the agreement is created, the consumer after payment can request the transfer of the NFT
     from the current owner for a specific DID._

### didRegistry

```solidity
contract DIDRegistry didRegistry
```

### lockPaymentCondition

```solidity
contract LockPaymentCondition lockPaymentCondition
```

### transferCondition

```solidity
contract ITransferNFT transferCondition
```

### rewardCondition

```solidity
contract EscrowPaymentCondition rewardCondition
```

### accessCondition

```solidity
contract AccessProofCondition accessCondition
```

### initialize

```solidity
function initialize(address _owner, address _agreementStoreManagerAddress, address _lockPaymentConditionAddress, address _transferConditionAddress, address payable _escrowPaymentAddress, address _accessCondition) external
```

initialize init the 
      contract with the following parameters.

_this function is called only once during the contract
      initialization. It initializes the ownable feature, and 
      set push the required condition types including 
      access secret store, lock reward and escrow reward conditions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | contract's owner account address |
| _agreementStoreManagerAddress | address | agreement store manager contract address |
| _lockPaymentConditionAddress | address | lock reward condition contract address |
| _transferConditionAddress | address | transfer NFT condition contract address |
| _escrowPaymentAddress | address payable | escrow reward condition contract address |
| _accessCondition | address |  |

## TemplateStoreLibrary

_Implementation of the Template Store Library.
     
     Templates are blueprints for modular SEAs. When 
     creating an Agreement, a templateId defines the condition 
     and reward types that are instantiated in the ConditionStore._

### TemplateState

```solidity
enum TemplateState {
  Uninitialized,
  Proposed,
  Approved,
  Revoked
}
```

### Template

```solidity
struct Template {
  enum TemplateStoreLibrary.TemplateState state;
  address owner;
  address lastUpdatedBy;
  uint256 blockNumberUpdated;
}
```

### TemplateList

```solidity
struct TemplateList {
  mapping(address => struct TemplateStoreLibrary.Template) templates;
  address[] templateIds;
}
```

### propose

```solidity
function propose(struct TemplateStoreLibrary.TemplateList _self, address _id, address _sender) internal returns (uint256 size)
```

propose new template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | proposed template contract address |
| _sender | address |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | uint256 | which is the index of the proposed template |

### approve

```solidity
function approve(struct TemplateStoreLibrary.TemplateList _self, address _id, address _sender) internal
```

approve new template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | proposed template contract address |
| _sender | address |  |

### revoke

```solidity
function revoke(struct TemplateStoreLibrary.TemplateList _self, address _id, address _sender) internal
```

revoke new template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _self | struct TemplateStoreLibrary.TemplateList | is the TemplateList storage pointer |
| _id | address | approved template contract address |
| _sender | address |  |

## TemplateStoreManager

_Implementation of the Template Store Manager.
     Templates are blueprints for modular SEAs. When creating an Agreement, 
     a templateId defines the condition and reward types that are instantiated 
     in the ConditionStore. This contract manages the life cycle 
     of the template ( Propose --> Approve --> Revoke )._

### templateList

```solidity
struct TemplateStoreLibrary.TemplateList templateList
```

### nvmConfig

```solidity
address nvmConfig
```

### onlyOwnerOrTemplateOwner

```solidity
modifier onlyOwnerOrTemplateOwner(address _id)
```

### initialize

```solidity
function initialize(address _owner) public
```

_initialize TemplateStoreManager Initializer
     Initializes Ownable. Only on contract creation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | refers to the owner of the contract |

### proposeTemplate

```solidity
function proposeTemplate(address _id) external returns (uint256 size)
```

proposeTemplate proposes a new template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address |

### approveTemplate

```solidity
function approveTemplate(address _id) external
```

approveTemplate approves a template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. Only template store        manager owner (i.e OPNF) can approve this template. |

### revokeTemplate

```solidity
function revokeTemplate(address _id) external
```

revokeTemplate revoke a template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. Only template store        manager owner (i.e OPNF) or template owner        can revoke this template. |

### getTemplate

```solidity
function getTemplate(address _id) external view returns (enum TemplateStoreLibrary.TemplateState state, address owner, address lastUpdatedBy, uint256 blockNumberUpdated)
```

getTemplate get more information about a template

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| state | enum TemplateStoreLibrary.TemplateState | template status |
| owner | address | template owner |
| lastUpdatedBy | address | last updated by |
| blockNumberUpdated | uint256 | last updated at. |

### getTemplateListSize

```solidity
function getTemplateListSize() external view virtual returns (uint256 size)
```

getTemplateListSize number of templates

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| size | uint256 | number of templates |

### isTemplateApproved

```solidity
function isTemplateApproved(address _id) external view returns (bool)
```

isTemplateApproved check whether the template is approved

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _id | address | unique template identifier which is basically        the template contract address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the template is approved |

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

## IPNFT

### TokenURIChanged

```solidity
event TokenURIChanged(uint256 tokenId, string newURI)
```

### initialize

```solidity
function initialize(string _name, string _symbol) public
```

### setTokenURI

```solidity
function setTokenURI(uint256 tokenId, string _tokenURI) public
```

### mint

```solidity
function mint(address to, uint256 _tokenId, string _tokenURI) public returns (bool)
```

### mintWithoutTokenURI

```solidity
function mintWithoutTokenURI(address to, uint256 _tokenId) external
```

### transfer

```solidity
function transfer(address from, address to, uint256 _tokenId) public
```

## TestDisputeManager

### accept

```solidity
mapping(bytes32 => bool) accept
```

### accepted

```solidity
function accepted(address provider, address buyer, bytes32 orig, bytes32 crypted) public view returns (bool)
```

### setAccepted

```solidity
function setAccepted(bytes32 orig, bytes32 crypted, address provider, address buyer) public
```

## TestERC721

### initialize

```solidity
function initialize() public
```

### mint

```solidity
function mint(uint256 id) public
```

## EpochLibraryProxy

### create

```solidity
function create(bytes32 _id, uint256 _timeLock, uint256 _timeOut) external
```

## HashListLibraryProxy

### testData

```solidity
struct HashListLibrary.List testData
```

### initialize

```solidity
function initialize(address _owner) public
```

### hash

```solidity
function hash(address _address) public pure returns (bytes32)
```

### add

```solidity
function add(bytes32[] values) external returns (bool)
```

### add

```solidity
function add(bytes32 value) external returns (bool)
```

### update

```solidity
function update(bytes32 oldValue, bytes32 newValue) external returns (bool)
```

### index

```solidity
function index(uint256 from, uint256 to) external returns (bool)
```

### has

```solidity
function has(bytes32 value) external view returns (bool)
```

### remove

```solidity
function remove(bytes32 value) external returns (bool)
```

### get

```solidity
function get(uint256 _index) external view returns (bytes32)
```

### size

```solidity
function size() external view returns (uint256)
```

### all

```solidity
function all() external view returns (bytes32[])
```

### indexOf

```solidity
function indexOf(bytes32 value) external view returns (uint256)
```

### ownedBy

```solidity
function ownedBy() external view returns (address)
```

### isIndexed

```solidity
function isIndexed() external view returns (bool)
```

## NFTBase

_Implementation of the Royalties EIP-2981 base contract
See https://eips.ethereum.org/EIPS/eip-2981_

### NVM_OPERATOR_ROLE

```solidity
bytes32 NVM_OPERATOR_ROLE
```

### RoyaltyInfo

```solidity
struct RoyaltyInfo {
  address receiver;
  uint256 royaltyAmount;
}
```

### NFTAttributes

```solidity
struct NFTAttributes {
  bool nftInitialized;
  uint256 nftSupply;
  uint256 mintCap;
  string nftURI;
}
```

### _royalties

```solidity
mapping(uint256 => struct NFTBase.RoyaltyInfo) _royalties
```

### _nftAttributes

```solidity
mapping(uint256 => struct NFTBase.NFTAttributes) _nftAttributes
```

### _expiration

```solidity
mapping(address => uint256) _expiration
```

### _contractMetadataUri

```solidity
string _contractMetadataUri
```

### nvmConfig

```solidity
address nvmConfig
```

### NFTCloned

```solidity
event NFTCloned(address _newAddress, address _fromAddress, uint256 _ercType)
```

### onlyOperatorOrOwner

```solidity
modifier onlyOperatorOrOwner()
```

### getNvmConfigAddress

```solidity
function getNvmConfigAddress() public view returns (address)
```

_getNvmConfigAddress get the address of the NeverminedConfig contract_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | NeverminedConfig contract address |

### setNvmConfigAddress

```solidity
function setNvmConfigAddress(address _addr) external
```

### _setNFTAttributes

```solidity
function _setNFTAttributes(uint256 tokenId, uint256 nftSupply, uint256 mintCap, string tokenURI) internal
```

### _setNFTMetadata

```solidity
function _setNFTMetadata(uint256 tokenId, string tokenURI) internal
```

### getNFTAttributes

```solidity
function getNFTAttributes(uint256 tokenId) external view virtual returns (bool nftInitialized, uint256 nftSupply, uint256 mintCap, string nftURI)
```

### _setTokenRoyalty

```solidity
function _setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) internal
```

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 value) external view returns (address receiver, uint256 royaltyAmount)
```

@inheritdoc	IERC2981Upgradeable

### setContractMetadataUri

```solidity
function setContractMetadataUri(string _uri) public virtual
```

_Record the URI storing the Metadata describing the NFT Contract
     More information about the file format here: 
     https://docs.opensea.io/docs/contract-level-metadata_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _uri | string | the URI (https, ipfs, etc) to the metadata describing the NFT Contract |

### contractURI

```solidity
function contractURI() public view returns (string)
```

### grantOperatorRole

```solidity
function grantOperatorRole(address account) public virtual
```

### revokeOperatorRole

```solidity
function revokeOperatorRole(address account) public virtual
```

### isOperator

```solidity
function isOperator(address operator) public view virtual returns (bool)
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## NFT1155SubscriptionUpgradeable

### MintedTokens

```solidity
struct MintedTokens {
  uint256 amountMinted;
  uint256 expirationBlock;
  uint256 mintBlock;
}
```

### _tokens

```solidity
mapping(bytes32 => struct NFT1155SubscriptionUpgradeable.MintedTokens[]) _tokens
```

### mint

```solidity
function mint(address to, uint256 tokenId, uint256 amount, uint256 expirationBlock, bytes data) public virtual
```

_This mint function allows to define when the tokenId of the NFT expires. 
The minter should calculate this block number depending on the network velocity_

### burn

```solidity
function burn(uint256 id, uint256 amount) public
```

### burn

```solidity
function burn(address to, uint256 id, uint256 amount) public
```

### balanceOf

```solidity
function balanceOf(address account, uint256 tokenId) public view virtual returns (uint256)
```

_See {NFT1155Upgradeableable-balanceOf}._

### whenWasMinted

```solidity
function whenWasMinted(address owner, uint256 tokenId) public view returns (uint256[])
```

### getMintedEntries

```solidity
function getMintedEntries(address owner, uint256 tokenId) public view returns (struct NFT1155SubscriptionUpgradeable.MintedTokens[])
```

### _getTokenKey

```solidity
function _getTokenKey(address account, uint256 tokenId) internal pure returns (bytes32)
```

## NFT1155Upgradeable

_Implementation of the basic standard multi-token.
See https://eips.ethereum.org/EIPS/eip-1155_

### name

```solidity
string name
```

### symbol

```solidity
string symbol
```

### nftRegistry

```solidity
contract IExternalRegistry nftRegistry
```

### initialize

```solidity
function initialize(address owner, address didRegistryAddress, string name_, string symbol_, string uri_) public virtual
```

### createClone

```solidity
function createClone(string _name, string _symbol, string _uri, address[] _operators) external virtual returns (address)
```

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

_See {IERC1155-isApprovedForAll}._

### mint

```solidity
function mint(uint256 id, uint256 amount) public
```

### mint

```solidity
function mint(address to, uint256 id, uint256 amount, bytes data) public
```

### burn

```solidity
function burn(uint256 id, uint256 amount) public virtual
```

### burn

```solidity
function burn(address to, uint256 id, uint256 amount) public virtual
```

### uri

```solidity
function uri(uint256 tokenId) public view returns (string)
```

### setNFTAttributes

```solidity
function setNFTAttributes(uint256 tokenId, uint256 nftSupply, uint256 mintCap, string nftURI) public
```

_Record some NFT Metadata_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| nftSupply | uint256 | the NFTs supply |
| mintCap | uint256 | the max number of editions that can be minted |
| nftURI | string | the URI (https, ipfs, etc) to the metadata describing the NFT |

### setNFTMetadata

```solidity
function setNFTMetadata(uint256 tokenId, string nftURI) public
```

_Record some NFT Metadata_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| nftURI | string | the URI (https, ipfs, etc) to the metadata describing the NFT |

### setTokenRoyalty

```solidity
function setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) public
```

_Record the asset royalties_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| receiver | address | the receiver of the royalties (the original creator) |
| royaltyAmount | uint256 | percentage (no decimals, between 0 and 100) |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address operator, address from, address to, uint256[] ids, uint256[] amounts, bytes data) internal virtual
```

_It protects NFT transfers to force going through service agreements and enforce royalties_

## NFT721SubscriptionUpgradeable

### MintedTokens

```solidity
struct MintedTokens {
  uint256 tokenId;
  uint256 expirationBlock;
  uint256 mintBlock;
}
```

### _tokens

```solidity
mapping(address => struct NFT721SubscriptionUpgradeable.MintedTokens[]) _tokens
```

### mint

```solidity
function mint(address to, uint256 tokenId, uint256 expirationBlock) public
```

_This mint function allows to define when the NFT expires. 
The minter should calculate this block number depending on the network velocity

TransferNFT721Condition needs to have the `NVM_OPERATOR_ROLE`_

### burn

```solidity
function burn(uint256 tokenId) public
```

_Burning tokens does not decrement the counter of tokens minted!
     This is by design._

### balanceOf

```solidity
function balanceOf(address owner) public view returns (uint256)
```

_See {IERC721-balanceOf}._

### whenWasMinted

```solidity
function whenWasMinted(address owner) public view returns (uint256[])
```

### getMintedEntries

```solidity
function getMintedEntries(address owner) public view returns (struct NFT721SubscriptionUpgradeable.MintedTokens[])
```

## NFT721Upgradeable

_Implementation of the basic standard multi-token._

### _nftContractCap

```solidity
uint256 _nftContractCap
```

### nftRegistry

```solidity
contract IExternalRegistry nftRegistry
```

### _counterMinted

```solidity
struct CountersUpgradeable.Counter _counterMinted
```

### initialize

```solidity
function initialize(address owner, address didRegistryAddress, string name, string symbol, string uri, uint256 cap) public virtual
```

### createClone

```solidity
function createClone(string name, string symbol, string uri, uint256 cap, address[] _operators) external virtual returns (address)
```

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

### mint

```solidity
function mint(address to, uint256 tokenId) public virtual
```

### mint

```solidity
function mint(uint256 tokenId) public virtual
```

### getHowManyMinted

```solidity
function getHowManyMinted() public view returns (uint256)
```

### burn

```solidity
function burn(uint256 tokenId) public virtual
```

_Burning tokens does not decrement the counter of tokens minted!
     This is by design._

### _baseURI

```solidity
function _baseURI() internal view virtual returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setNFTMetadata

```solidity
function setNFTMetadata(uint256 tokenId, string nftURI) public
```

_Record some NFT Metadata_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| nftURI | string | the URI (https, ipfs, etc) to the metadata describing the NFT |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string)
```

_See {IERC721Metadata-tokenURI}._

### setTokenRoyalty

```solidity
function setTokenRoyalty(uint256 tokenId, address receiver, uint256 royaltyAmount) public
```

_Record the asset royalties_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | the id of the asset with the royalties associated |
| receiver | address | the receiver of the royalties (the original creator) |
| royaltyAmount | uint256 | percentage (no decimals, between 0 and 100) |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256, uint256 batchSize) internal virtual
```

_It protects NFT transfers to force going through service agreements and enforce royalties_

## POAPUpgradeable

### _tokenEvent

```solidity
mapping(uint256 => uint256) _tokenEvent
```

### mint

```solidity
function mint(address to, uint256 tokenId, uint256 eventId) public virtual
```

### mint

```solidity
function mint(address to, uint256 eventId) public virtual
```

### mint

```solidity
function mint(address to) public virtual
```

### mintBatch

```solidity
function mintBatch(address[] to, uint256[] tokenIds, uint256[] eventIds) public virtual
```

### burnBatch

```solidity
function burnBatch(uint256[] tokenIds) public virtual
```

### tokenEvent

```solidity
function tokenEvent(uint256 tokenId) public view returns (uint256)
```

### _burn

```solidity
function _burn(uint256 tokenId) internal
```

_Destroys `tokenId`.
The approval is cleared when the token is burned.
This is an internal function that does not check if the sender is authorized to operate on the token.

Requirements:

- `tokenId` must exist.

Emits a {Transfer} event._

### tokenDetailsOfOwner

```solidity
function tokenDetailsOfOwner(address owner) public view returns (uint256[] tokenIds, uint256[] eventIds)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) public view virtual returns (bool)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string)
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 tokenId) internal
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address ret)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes ret)
```

## SoulBoundUpgradeable

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address, address, uint256, uint256) internal virtual
```

## PlonkVerifier

### n

```solidity
uint32 n
```

### nPublic

```solidity
uint16 nPublic
```

### nLagrange

```solidity
uint16 nLagrange
```

### Qmx

```solidity
uint256 Qmx
```

### Qmy

```solidity
uint256 Qmy
```

### Qlx

```solidity
uint256 Qlx
```

### Qly

```solidity
uint256 Qly
```

### Qrx

```solidity
uint256 Qrx
```

### Qry

```solidity
uint256 Qry
```

### Qox

```solidity
uint256 Qox
```

### Qoy

```solidity
uint256 Qoy
```

### Qcx

```solidity
uint256 Qcx
```

### Qcy

```solidity
uint256 Qcy
```

### S1x

```solidity
uint256 S1x
```

### S1y

```solidity
uint256 S1y
```

### S2x

```solidity
uint256 S2x
```

### S2y

```solidity
uint256 S2y
```

### S3x

```solidity
uint256 S3x
```

### S3y

```solidity
uint256 S3y
```

### k1

```solidity
uint256 k1
```

### k2

```solidity
uint256 k2
```

### X2x1

```solidity
uint256 X2x1
```

### X2x2

```solidity
uint256 X2x2
```

### X2y1

```solidity
uint256 X2y1
```

### X2y2

```solidity
uint256 X2y2
```

### q

```solidity
uint256 q
```

### qf

```solidity
uint256 qf
```

### w1

```solidity
uint256 w1
```

### G1x

```solidity
uint256 G1x
```

### G1y

```solidity
uint256 G1y
```

### G2x1

```solidity
uint256 G2x1
```

### G2x2

```solidity
uint256 G2x2
```

### G2y1

```solidity
uint256 G2y1
```

### G2y2

```solidity
uint256 G2y2
```

### pA

```solidity
uint16 pA
```

### pB

```solidity
uint16 pB
```

### pC

```solidity
uint16 pC
```

### pZ

```solidity
uint16 pZ
```

### pT1

```solidity
uint16 pT1
```

### pT2

```solidity
uint16 pT2
```

### pT3

```solidity
uint16 pT3
```

### pWxi

```solidity
uint16 pWxi
```

### pWxiw

```solidity
uint16 pWxiw
```

### pEval_a

```solidity
uint16 pEval_a
```

### pEval_b

```solidity
uint16 pEval_b
```

### pEval_c

```solidity
uint16 pEval_c
```

### pEval_s1

```solidity
uint16 pEval_s1
```

### pEval_s2

```solidity
uint16 pEval_s2
```

### pEval_zw

```solidity
uint16 pEval_zw
```

### pEval_r

```solidity
uint16 pEval_r
```

### pAlpha

```solidity
uint16 pAlpha
```

### pBeta

```solidity
uint16 pBeta
```

### pGamma

```solidity
uint16 pGamma
```

### pXi

```solidity
uint16 pXi
```

### pXin

```solidity
uint16 pXin
```

### pBetaXi

```solidity
uint16 pBetaXi
```

### pV1

```solidity
uint16 pV1
```

### pV2

```solidity
uint16 pV2
```

### pV3

```solidity
uint16 pV3
```

### pV4

```solidity
uint16 pV4
```

### pV5

```solidity
uint16 pV5
```

### pV6

```solidity
uint16 pV6
```

### pU

```solidity
uint16 pU
```

### pPl

```solidity
uint16 pPl
```

### pEval_t

```solidity
uint16 pEval_t
```

### pA1

```solidity
uint16 pA1
```

### pB1

```solidity
uint16 pB1
```

### pZh

```solidity
uint16 pZh
```

### pZhInv

```solidity
uint16 pZhInv
```

### pEval_l1

```solidity
uint16 pEval_l1
```

### pEval_l2

```solidity
uint16 pEval_l2
```

### pEval_l3

```solidity
uint16 pEval_l3
```

### pEval_l4

```solidity
uint16 pEval_l4
```

### pEval_l5

```solidity
uint16 pEval_l5
```

### pEval_l6

```solidity
uint16 pEval_l6
```

### pEval_l7

```solidity
uint16 pEval_l7
```

### lastMem

```solidity
uint16 lastMem
```

### verifyProof

```solidity
function verifyProof(bytes proof, uint256[] pubSignals) public view returns (bool)
```

