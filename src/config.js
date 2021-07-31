// https://github.com/trufflesuite/ganache-core
const ganache = require("ganache");

// load provider for ethers rpc requests
const PROVIDER = new ethers.providers.Web3Provider(ganache.provider());

// These accounts and private keys are based of the ganache server using the given mnuemonic:
//
// 'merry notice voice when split denial divorce nice guitar cross call dash pony ranch photo'
//
// accounts - 100 ETH on each address
const ACCOUNTS = [
  "0x04cF8a5925b18fF745EdF1e77f91176d3dfb77f2",
  "0xa9B1FD0068Bc7D1E9937FD3F4D9CF9543bdDf719",
  "0xe546b557bB6F5ac27a1fc16a9475d134746fc8Ff",
  "0x24b724CB3D1df431E9B5bf479F4E8d9C9F366007",
  "0x38f4880822eE0aa28d118161839FAB73F80c83D3",
  "0x2706e9bb9F2F2Ab677656D5764EA9beC5d407816",
  "0x29d42bFe76d948DA2bcd40C3BD266E70e5a21321",
  "0x201a9518682162dF8a078feebE2133B87DA79E91",
  "0x0B29a7fc962119034DE7D195F0624B73b2325372",
  "0xa6B9C99c6d61a89B12291200893E1701bdDa236c"
]

// Private Keys
PRIVATE_KEYS = [
  "0x7fe77179aede29d82723a52175366c32cd5085650e538db341cc77710d1633c3",
  "0x943bf9bdaf8f93ce00089b5d4debdf362d292a047ed422ea603613bf5ef4c0bd",
  "0xd9bb28ef67426cf72b8af01a0b3b19cc0b7edbc7bda476f4f8bd2d00ec3e79f8",
  "0x3a7a89ee526672bd3b63c361735a871b69a92d7e4c5b7b285cfe39d01d4dabc8",
  "0x0a1cf26fddd35fd1415813e7a02436d1718e6c694380486fe7ae9fe30aafc4ee",
  "0xca82fc8a53cfd1e9f2ba6525283a34689bc219af8c921369e96bdb98a6befd72",
  "0x607d544e548f4732716e509f9e5168512ef704f0d687f3386e68f6ac1c505c80",
  "0xda5caacd6c4581b2fe3aef28fa23d084077f7c7657d35d7fc4ca614487421548",
  "0xe36855e9603c7936e4804adbb18a8d1abc6ca5a21155781118327d18fae30136",
  "0x2eb3bf7e9f608745219ccc52eec56f56efec7b60518efff670c19954ab5dc47c"
]

// Netowork - based on ganache-cli --networkId 100
// const DEV_NETWORK = {
//   netowrkId: 100,
// }

module.exports = {
  PROVIDER,
  ACCOUNTS,
  PRIVATE_KEYS
}
