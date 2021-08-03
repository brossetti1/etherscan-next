const ETHERSCAN_TOKEN = 'JIKG3GHQAYNSZ4ZZ9EGEGUJEX3JYPF86VY'
const axios = require('axios')

import React from 'react'

import {
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import { Container } from '../components/layout/Container'
import { NavBar } from '../components/layout/navbar';
import { Footer } from '../components/Footer'
import LatestItems from '../components/LatestItems'
import DashboardStatistics from '../components/DashboardStatistics'

import EthersClient from '../utils/EthersClient';

import ethers from 'ethers'

// import {useState, useEffect} from 'react'

// i have not figured out how to get the hashRate or the difficulty
// so im cheating and just using the stats from etherscan.... DONT JUDGE ME
export async function getStaticProps(context) {
  const stats = await axios.get(`https://etherchain.org/api/basic_stats?apikey=${ETHERSCAN_TOKEN}`).then((response) => response.data.currentStats)
  const formatNumber = (thing) => thing.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const client = new EthersClient();

  const blocks = await client.getLatestBlocks(true).then((a) => { return { ...a, gasLimit: 2, gasUsed: 2 } })
  const transactions = await client.getLatestTransasactions(true).then((data) => {
    const txs = data.transactions.map((t) => {
      return {
        confirmations: t.confirmations,
        nonce: t.nonce,
        totalValue: t.value.hex,
        ...t
      }
    })

    console.log(txs)
    return  {
      transactions: txs,
      ...data
    }
  })

  return {
    props: {
      hashRate: formatNumber(stats.hashrate),
      difficulty: formatNumber(stats.difficulty),
      blocks: JSON.stringify(blocks),
      transactions: JSON.stringify(transactions)
    }
  }
}

const Index = (props) => {
  return (
    <Container suppressHydrationWarning={true}>
      <NavBar/>
      <DashboardStatistics hashrate={props.hashRate} difficulty={props.difficulty} mb={20} />
      <LatestItems blocks={props.blocks} latestTransactions={JSON.parse(props.transactions)} />
      {/* <Footer>
        <div><Text>Next ❤️ Chakra</Text></div>
      </Footer> */}
    </Container>
  )
}

export default Index
