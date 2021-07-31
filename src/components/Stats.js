import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

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

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Ethereum Price'}
          stat={'$10,000'} // TODO fetch this data
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Market Cap'}
          stat={'$287,549,286,926.00'} // TODO fetch this data
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Transactions'}
          stat={'1,228.96 M (14.0 TPS)'} // TODO fetch this data
          icon={<GoLocation size={'3em'} />}
        />
        <StatsCard
          title={'Difficulty'}
          stat={'7,243.23 TH'} // TODO fetch this data
          icon={<GoLocation size={'3em'} />}
        />
        <StatsCard
          title={'MED GAS PRICE'}
          stat={'66 Gwei ($3.41)'} // TODO fetch this data
          icon={<GoLocation size={'3em'} />}
        />
        <StatsCard
          title={'Hash Rate'}
          stat={'565,649.72  GH/s'} // TODO fetch this data
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
