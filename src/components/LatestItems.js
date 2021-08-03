import { Box, SimpleGrid } from '@chakra-ui/react'

import LatestBlock from '../components/LatestBlock'
import LatestTransactions from '../components/latestTransactions'

const LatestItems = ({ blocks, latestTrasnsactions,...rest }) => {
  return (
    <Box pl={40} pr={40} pt={5} mx={'auto'} px={{ base: 2, sm: 12, md: 17 }} width="100%" height="100%">
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Box borderColor="gray">
          <Box fontWeight="extrabold">Latest Blocks</Box>
          <LatestBlock blocks={blocks} {...rest} />
        </Box>
        <Box borderColor="gray">
          <Box fontWeight="extrabold">Latest Transactions</Box>
          <LatestTransactions latestTrasnsactions={latestTrasnsactions} {...rest} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default LatestItems;
