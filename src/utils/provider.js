const { Wallet, utils, providers: { JsonRpcProvider } } = require('ethers');

// connect to a JSON RPC endpoint
const PROVIDER = new JsonRpcProvider("http://localhost:8545");

export default PROVIDER;
