import { Component } from 'react';
import EthersClient from '../utils/EthersClient'

// import ethPriceIcon from '../components/logos/ethereumLogo'
// import marketCapIcon from '../components/logos/marketCap'
// import totalTransactionsIcon from '../components/logos/transactions.js'
// import difficultyIcon from '../components/logos/difficulty.js'

import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}
class DashboardStatistics extends Component {

  constructor(props) {
    super(props)
    this.etherClient = new EthersClient();
    this.state = {
      hashrate: this.props.hashrate,
      difficulty: this.props.difficulty
    };
  };

  componentDidMount() {
    this.etherClient.getDashboardStatistics().then((response) => {
      this.setState(response)
    });
  }

  render() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} {...this.props}>
        {/* <Box>{{this.stats}}</Box> */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'ETHEREUM PRICE'}
            stat={this.state.ethPrice}
          />
          <StatsCard
            title={'MARKET CAP'}
            stat={`${this.state.marketCap}`}
          />
          <StatsCard
            title={'TRANSACTIONS'}
            stat={`${this.state.totalTransactions} M (14.0 TPS)`}
          />
          <StatsCard
            title={'DIFFICULTY'}
            stat={`${this.state.difficulty} TH`}
          />
          <StatsCard
            title={'MED GAS PRICE'}
            stat={`${this.state.avgGasPrice} Gwei`}
          />
          <StatsCard
            title={'HASH RATE'}
            stat={`${this.state.hashrate} GH/s`}
          />
        </SimpleGrid>
      </Box>
    );
  };
}

export default DashboardStatistics;
