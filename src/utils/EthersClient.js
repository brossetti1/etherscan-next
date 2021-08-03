import PROVIDER from './provider';
import CoinGecko from 'coingecko-api';
import ClientJSONRPC from './ClientJSONRPC';

import { utils, ethers } from 'ethers';

import * as currency from 'currency.js'

const ETHEREUM = "";

class EthersClient {
  constructor() {
    this.coinGecko = new CoinGecko();
    this.clientJsonRPC = new ClientJSONRPC();
  }

  async getLatestBlocks(fromFork = false) {
    return await PROVIDER.getBlockNumber().then(async (latestBlockNumber) => {
      const n = fromFork ? latestBlockNumber - 1 : latestBlockNumber

      const blockIds = [...Array(7)].map((_, index) => n - index + 1)

      const otherBlocks = blockIds.map(async (blockId) => await PROVIDER.getBlock(blockId))

      return [await PROVIDER.getBlock(n), ...otherBlocks ]
    })
  }

  async getLatestTransasactions(blockNumber) {
    return await PROVIDER.getBlockNumber()
      // get the latest full block data
      .then(async (latestBlockNumber) => await PROVIDER.getBlock(latestBlockNumber - 1))
      // grab the transactions out of the block
      .then(async (response) => {

        const transactions = await response.transactions.slice(0, 10).map(async (transactionId) => {
          return await PROVIDER.getTransaction(transactionId)
        })

        return Promise.all(transactions).then((trans) => {
          const t = trans.map((tx) => {
            return {
              value: tx.value.toHexString(),
              gasPrice: tx.gasPrice.toHexString(),
              gasLimit: tx.gasLimit.toHexString(),
              ...tx,
              wait: null
            }
          })

          console.log(t[0])
          return {
            transactions: t,
            height: response.number,
            hash: response.hash
          }
        })
      });
  }

  getDashboardStatistics() {
    return Promise.all([
      this.getEthereumData(),
      this.getAverageGasPrice(),
    ]).then(([ethData, gasData]) => {
      return {
        ethPrice: currency(ethData.usd).format(),
        marketCap: currency(ethData.usd_market_cap).format(),
        totalTransactions: 'somehting',
        avgGasPrice: gasData
      }
    })
  }

  getLatestTransactions() {

  }

  async getEthereumData() {
    return await this.coinGecko.simple.price({
      ids: ['ethereum'],
      include_market_cap: true
    }).then((response) => response.data.ethereum)
  }

  getMarketCap(token) {

  }

  getTotalTransactionCount(address = ETHEREUM) {

  }

  getAverageGasPrice() {
    return PROVIDER.getGasPrice().then((gasPrice) => utils.formatUnits(gasPrice, "gwei"));
  }

  getDifficulty() {

  }

  getHashRate() {

  }
}

export default EthersClient;
