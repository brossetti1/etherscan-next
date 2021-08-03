const { Wallet, utils, providers: { JsonRpcProvider } } = require('ethers');
const axios = require('axios');

// connect to a JSON RPC endpoint
const provider = new JsonRpcProvider("http://localhost:8545");

// 1) get latest transactions
// provider.getBlockNumber()
//   .then((latestBlockNumber) => provider.getBlock(latestBlockNumber -1))
//   .then(response => response.transactions);

// 2) get latestBlock
return provider.getBlockNumber().then((latestBlockNumber) => provider.getBlock(latestBlockNumber - 1).then((response) => console.log(response)))

// 3) get gas price
// return provider.getGasPrice().then((gasPrice) => console.log(utils.formatUnits(gasPrice, "gwei")));

// get eth price
// const CoinGecko = require('coingecko-api');
// const coinGecko = new CoinGecko();
// return coinGecko.simple.price({ ids: ['ethereum'], include_market_cap: true }).then((response) => console.log(response))

// rpc methods get hashRate
// axios.post('https://mainnet.infura.io/v3/b8f090fd80d34184b6c84039ce60fe57', {
//   jsonrpc: "2.0",
//   id: 1,
//   method: 'eth_hashrate',
//   params: []
// }).then((response) => console.log(response.data))

// CHEATING AND USING therescan directly
// return axios.get("https://etherchain.org/api/basic_stats?apikey=JIKG3GHQAYNSZ4ZZ9EGEGUJEX3JYPF86VY").then((response) => console.log(response.data.currentStats))
