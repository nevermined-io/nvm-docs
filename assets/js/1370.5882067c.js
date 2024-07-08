"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1370],{51370:e=>{e.exports=JSON.parse('{"name":"DIDSalesTemplate","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_agreementId","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_did","type":"bytes32"},{"indexed":true,"internalType":"address","name":"_accessConsumer","type":"address"},{"indexed":true,"internalType":"address","name":"_accessProvider","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIdSeeds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"indexed":false,"internalType":"bytes32","name":"_idSeed","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_creator","type":"address"}],"name":"AgreementCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"addressToBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function","signature":"0x82c947b7"},{"inputs":[{"internalType":"bytes32","name":"_b32","type":"bytes32"}],"name":"bytes32ToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function","signature":"0x5ced058e"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"calculateTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0x5ea3ab85"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2e166f3e"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"}],"name":"createAgreement","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4183e72b"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPay","outputs":[],"stateMutability":"payable","type":"function","signature":"0x6104ff1a"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"},{"internalType":"bytes32","name":"_did","type":"bytes32"},{"internalType":"bytes32[]","name":"_conditionIds","type":"bytes32[]"},{"internalType":"uint256[]","name":"_timeLocks","type":"uint256[]"},{"internalType":"uint256[]","name":"_timeOuts","type":"uint256[]"},{"internalType":"address","name":"_accessConsumer","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"},{"internalType":"address payable","name":"_rewardAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"createAgreementAndPayEscrow","outputs":[],"stateMutability":"payable","type":"function","signature":"0xf8fe1070"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"getAgreementData","outputs":[{"internalType":"address","name":"accessConsumer","type":"address"},{"internalType":"address","name":"accessProvider","type":"address"},{"internalType":"bytes32","name":"did","type":"bytes32"}],"stateMutability":"view","type":"function","signature":"0x6ff015ae"},{"inputs":[],"name":"getConditionTypes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","signature":"0x91a169bf"},{"inputs":[],"name":"getCurrentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","signature":"0x6fd902e1"},{"inputs":[],"name":"getNvmConfigAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xab9de230"},{"inputs":[],"name":"getTrustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0xce1b815f"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"hasNVMOperatorRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x108762d0"},{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function","signature":"0xaf640d0f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_agreementStoreManagerAddress","type":"address"},{"internalType":"address","name":"_lockConditionAddress","type":"address"},{"internalType":"address","name":"_transferConditionAddress","type":"address"},{"internalType":"address payable","name":"_escrowPaymentAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1459457a"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x16279055"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","signature":"0x572b6c05"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"}],"bytecode":"0x608060405234801561001057600080fd5b50611bf5806100206000396000f3fe6080604052600436106100ef5760003560e01c8063108762d0146100f45780631459457a14610129578063162790551461014b5780632e166f3e1461016c5780634183e72b1461018c578063572b6c05146101ac5780635ced058e146101cc5780635ea3ab85146101f75780636104ff1a146102255780636fd902e1146102385780636ff015ae1461024b578063715018a61461029157806382c947b7146102a65780638da5cb5b146102cd57806391a169bf146102e2578063ab9de23014610304578063af640d0f14610319578063ce1b815f1461032d578063f2fde38b14610342578063f8fe107014610362575b600080fd5b34801561010057600080fd5b5061011461010f3660046110b1565b610375565b60405190151581526020015b60405180910390f35b34801561013557600080fd5b506101496101443660046110ce565b61040d565b005b34801561015757600080fd5b506101146101663660046110b1565b3b151590565b34801561017857600080fd5b50610149610187366004611213565b6106fc565b34801561019857600080fd5b506101496101a73660046112ae565b6107a3565b3480156101b857600080fd5b506101146101c73660046110b1565b6107be565b3480156101d857600080fd5b506101ea6101e736600461135c565b90565b6040516101209190611382565b34801561020357600080fd5b50610217610212366004611396565b6107e3565b604051908152602001610120565b610149610233366004611436565b610832565b34801561024457600080fd5b5043610217565b34801561025757600080fd5b5061026b61026636600461135c565b61094e565b604080516001600160a01b03948516815293909216602084015290820152606001610120565b34801561029d57600080fd5b50610149610ac5565b3480156102b257600080fd5b506102176102c13660046110b1565b6001600160a01b031690565b3480156102d957600080fd5b506101ea610ad9565b3480156102ee57600080fd5b506102f7610ae8565b604051610120919061158b565b34801561031057600080fd5b506101ea610b4a565b34801561032557600080fd5b506002610217565b34801561033957600080fd5b506101ea610bdf565b34801561034e57600080fd5b5061014961035d3660046110b1565b610c6a565b61014961037036600461159e565b610ce3565b600080610380610b4a565b90506001600160a01b0381166103995750600092915050565b604051630108762d60e41b81526001600160a01b0382169063108762d0906103c5908690600401611382565b602060405180830381865afa1580156103e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040691906116d9565b9392505050565b600054610100900460ff161580801561042d5750600054600160ff909116105b806104475750303b158015610447575060005460ff166001145b6104af5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156104d2576000805461ff0019166101001790555b6001600160a01b038616158015906104f257506001600160a01b03851615155b801561050657506001600160a01b03841615155b801561051a57506001600160a01b03831615155b801561052e57506001600160a01b03821615155b61056c5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016104a6565b610574610d10565b61057d86610c6a565b606680546001600160a01b0319166001600160a01b0387169081179091556040805163579e6e3f60e01b8152905163579e6e3f916004808201926020929091908290030181865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa91906116ff565b606980546001600160a01b03199081166001600160a01b0393841617909155606a80548216878416908117909155606b80548316878516178155606c80548416878616178155606580546001818101835560008390527f8ff97419363ffd7000167f130ef7168fbea05faf9251824ca5043f113cc6a7c79182018054881690961790955592548154808601835584018054918816918716919091179055905481549384019091559101805491909316911617905580156106f4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6066546001600160a01b031663955d0c2a86610716610d3f565b60405160200161072792919061171c565b6040516020818303038152906040528051906020012086610746610ae8565b8787876040518763ffffffff1660e01b815260040161076a96959493929190611763565b600060405180830381600087803b15801561078457600080fd5b505af1158015610798573d6000803e3d6000fd5b505050505050505050565b6107b086868686866106fc565b6106f4868685858589610d49565b60006107c8610bdf565b6001600160a01b0316826001600160a01b0316149050919050565b60008060005b835181101561082b57838181518110610804576108046117c9565b60200260200101518261081791906117f5565b91508061082381611808565b9150506107e9565b5092915050565b6066546040805161018081019091526001600160a01b0390911690637c719793903490808e61085f610d3f565b60405160200161087092919061171c565b6040516020818303038152906040528051906020012081526020018d8152602001610899610ae8565b81526020018c81526020018b81526020018a81526020016108b8610d3f565b6001600160a01b03168152602001898152602001886001600160a01b03168152602001876001600160a01b03168152602001868152602001858152506040518363ffffffff1660e01b81526004016109109190611821565b6000604051808303818588803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b505050505050505050505050505050565b6000806000806000905060606000606660009054906101000a90046001600160a01b03166001600160a01b031663579e6e3f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d391906116ff565b600088815260676020526040908190206002015490516322c6b51960e01b81529192506001600160a01b038316916322c6b51991610a179160040190815260200190565b600060405180830381865afa158015610a34573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a5c9190810190611a24565b505081519699509097505093159350610a95925050505781600081518110610a8657610a866117c9565b60200260200101519450610a99565b8294505b5050506000938452506067602052604090922080546002909101546001600160a01b0390911693909150565b610acd610e15565b610ad76000610e84565b565b6033546001600160a01b031690565b60606065805480602002602001604051908101604052809291908181526020018280548015610b4057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b22575b5050505050905090565b6066546000906001600160a01b0316610b635750600090565b606660009054906101000a90046001600160a01b03166001600160a01b031663ab9de2306040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bda91906116ff565b905090565b600080610bea610b4a565b90506001600160a01b038116610c0257600091505090565b806001600160a01b031663ce1b815f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6491906116ff565b91505090565b610c72610e15565b6001600160a01b038116610cd75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104a6565b610ce081610e84565b50565b610cf58b8b8b8b8b8a8a8a8a8a610832565b610d038b8b8a8a8a8e610d49565b5050505050505050505050565b600054610100900460ff16610d375760405162461bcd60e51b81526004016104a690611afc565b610ad7610ed6565b6000610bda610f0d565b600086610d54610d3f565b604051602001610d6592919061171c565b60408051808303601f19018152918152815160209283012060008181526067909352912080546001600160a01b0319166001600160a01b038681169182178355600283018a9055600190920154929350911690827f07999de014823a9b9957f806838838c2ef506d5cea4edf7a268607b0b3a0be3489898988610de88f82610f3b565b8f610df1610d3f565b604051610e049796959493929190611b47565b60405180910390a450505050505050565b610e1d610d3f565b6001600160a01b0316610e2e610ad9565b6001600160a01b031614610ad75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104a6565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610efd5760405162461bcd60e51b81526004016104a690611afc565b610ad7610f08610d3f565b610e84565b600060143610801590610f245750610f24336107be565b15610f36575060131936013560601c90565b503390565b6060600083610f48610d3f565b604051602001610f5992919061171c565b604051602081830303815290604052805190602001209050600083516001600160401b03811115610f8c57610f8c61113f565b604051908082528060200260200182016040528015610fb5578160200160208202803683370190505b50905060005b8151811015611081578260658281548110610fd857610fd86117c9565b9060005260206000200160009054906101000a90046001600160a01b0316868381518110611008576110086117c9565b602002602001015160405160200161103c939291909283526001600160a01b03919091166020830152604082015260600190565b60405160208183030381529060405280519060200120828281518110611064576110646117c9565b60209081029190910101528061107981611808565b915050610fbb565b509150505b92915050565b6001600160a01b0381168114610ce057600080fd5b80356110ac8161108c565b919050565b6000602082840312156110c357600080fd5b81356104068161108c565b600080600080600060a086880312156110e657600080fd5b85356110f18161108c565b945060208601356111018161108c565b935060408601356111118161108c565b925060608601356111218161108c565b915060808601356111318161108c565b809150509295509295909350565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561117d5761117d61113f565b604052919050565b60006001600160401b0382111561119e5761119e61113f565b5060051b60200190565b600082601f8301126111b957600080fd5b813560206111ce6111c983611185565b611155565b82815260059290921b840181019181810190868411156111ed57600080fd5b8286015b8481101561120857803583529183019183016111f1565b509695505050505050565b600080600080600060a0868803121561122b57600080fd5b853594506020860135935060408601356001600160401b038082111561125057600080fd5b61125c89838a016111a8565b9450606088013591508082111561127257600080fd5b61127e89838a016111a8565b9350608088013591508082111561129457600080fd5b506112a1888289016111a8565b9150509295509295909350565b60008060008060008060c087890312156112c757600080fd5b863595506020870135945060408701356001600160401b03808211156112ec57600080fd5b6112f88a838b016111a8565b9550606089013591508082111561130e57600080fd5b61131a8a838b016111a8565b9450608089013591508082111561133057600080fd5b5061133d89828a016111a8565b92505060a087013561134e8161108c565b809150509295509295509295565b60006020828403121561136e57600080fd5b5035919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6000602082840312156113a857600080fd5b81356001600160401b038111156113be57600080fd5b6113ca848285016111a8565b949350505050565b600082601f8301126113e357600080fd5b813560206113f36111c983611185565b82815260059290921b8401810191818101908684111561141257600080fd5b8286015b848110156112085780356114298161108c565b8352918301918301611416565b6000806000806000806000806000806101408b8d03121561145657600080fd5b8a35995060208b0135985060408b01356001600160401b038082111561147b57600080fd5b6114878e838f016111a8565b995060608d013591508082111561149d57600080fd5b6114a98e838f016111a8565b985060808d01359150808211156114bf57600080fd5b6114cb8e838f016111a8565b975060a08d013596506114e060c08e016110a1565b95506114ee60e08e016110a1565b94506101008d013591508082111561150557600080fd5b6115118e838f016111a8565b93506101208d013591508082111561152857600080fd5b506115358d828e016113d2565b9150509295989b9194979a5092959850565b600081518084526020808501945080840160005b838110156115805781516001600160a01b03168752958201959082019060010161155b565b509495945050505050565b6020815260006104066020830184611547565b60008060008060008060008060008060006101608c8e0312156115c057600080fd5b8b359a5060208c013599506001600160401b0360408d01358110156115e457600080fd5b6115f48e60408f01358f016111a8565b99508060608e0135111561160757600080fd5b6116178e60608f01358f016111a8565b98508060808e0135111561162a57600080fd5b61163a8e60808f01358f016111a8565b975061164860a08e016110a1565b965060c08d0135955061165d60e08e016110a1565b945061166c6101008e016110a1565b9350806101208e0135111561168057600080fd5b6116918e6101208f01358f016111a8565b9250806101408e013511156116a557600080fd5b506116b78d6101408e01358e016113d2565b90509295989b509295989b9093969950565b805180151581146110ac57600080fd5b6000602082840312156116eb57600080fd5b610406826116c9565b80516110ac8161108c565b60006020828403121561171157600080fd5b81516104068161108c565b9182526001600160a01b0316602082015260400190565b600081518084526020808501945080840160005b8381101561158057815187529582019590820190600101611747565b86815285602082015260c06040820152600061178260c0830187611547565b82810360608401526117948187611733565b905082810360808401526117a88186611733565b905082810360a08401526117bc8185611733565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115611086576110866117df565b60006001820161181a5761181a6117df565b5060010190565b602081528151602082015260208201516040820152600060408301516101808060608501526118546101a0850183611547565b91506060850151601f19808685030160808701526118728483611733565b935060808701519150808685030160a087015261188f8483611733565b935060a08701519150808685030160c08701526118ac8483611733565b935060c087015191506118c260e0870183611375565b60e08701516101008781019190915287015191506101206118e581880184611375565b87015191506101406118f987820184611375565b808801519250506101608187860301818801526119168584611733565b9088015187820390920184880152935090506119328382611547565b9695505050505050565b600082601f83011261194d57600080fd5b81516001600160401b038111156119665761196661113f565b602061197a601f8301601f19168201611155565b828152858284870101111561198e57600080fd5b60005b838110156119ac578581018301518282018401528201611991565b506000928101909101919091529392505050565b600082601f8301126119d157600080fd5b815160206119e16111c983611185565b82815260059290921b84018101918181019086841115611a0057600080fd5b8286015b84811015611208578051611a178161108c565b8352918301918301611a04565b60008060008060008060008060006101208a8c031215611a4357600080fd5b611a4c8a6116f4565b60208b015160408c0151919a5098506001600160401b0380821115611a7057600080fd5b611a7c8d838e0161193c565b9850611a8a60608d016116f4565b975060808c0151965060a08c0151915080821115611aa757600080fd5b611ab38d838e016119c0565b955060c08c0151945060e08c0151915080821115611ad057600080fd5b50611add8c828d0161193c565b925050611aed6101008b016116c9565b90509295985092959850929598565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b87815260e060208201526000611b6060e0830189611733565b8281036040840152611b728189611733565b90508281036060840152611b868188611733565b90508281036080840152611b9a8187611733565b60a084019590955250506001600160a01b039190911660c0909101529594505050505056fea2646970667358221220953e1a3385b02b7ea6f8c5e8aad1ecd3b730a4070d5b793c7afecf8355e16ea064736f6c63430008110033","address":"0xBAd0d12f393644ffF4610FdFFCfA4aad93bb74d0","implementation":"0xBAd0d12f393644ffF4610FdFFCfA4aad93bb74d0","version":"v3.5.5","libraries":{}}')}}]);