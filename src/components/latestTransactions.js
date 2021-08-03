import { UnorderedList, Box } from "@chakra-ui/react"
import ListItemDetail from "../components/ListItemDetail"

import { ethers } from 'ethers';

const LatestTransactions = (props) => {
  const items = props.latestTransactions.transactions.map((tx) => {
    console.log(tx)
    return <ListItemDetail
              key={tx.hash}
              p={5}
              border="2px"
              abbreviation="Tx"
              identifier={`${tx.hash.substring(0, 10)}...`}
              nonce={tx.nonce}
              confirmations={tx.confirmations}
              totalValue={tx.value.hex}
            />
    })
  // const transactions = [{key: 1}]
  return (
    <UnorderedList p={4}>
      { items }
    </UnorderedList>
  );
}

export default LatestTransactions;
