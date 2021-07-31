import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Container } from '../components/layout/Container'
import { Main } from '../components/Main'
import { NavBar } from '../components/layout/navbar';
import { Footer } from '../components/Footer'

import {useState, useEffect} from 'react'

const Index = () => (
  <Container height="100vh" suppressHydrationWarning={true}>
    <NavBar/>
    <div>Hellow World</div>
    <Footer>
      <div><Text>Next ❤️ Chakra</Text></div>
    </Footer>
  </Container>
)

export default Index
