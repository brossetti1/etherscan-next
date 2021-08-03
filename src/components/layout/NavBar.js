import React from "react"
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from './DarkModeSwitch'

import Image from 'next/image'
import ethereumLogo from '../../../public/ethereum-icon.png'

function Logo(props) {
  const logoImage = <Image src={ethereumLogo} alt="etheruem logo"/>

  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link
          isExternal
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          { logoImage }
        </Link>
      </Text>
    </Box>
  )
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <PhoneIcon /> : <AddIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = (props) => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/">Stuff</MenuItem>
      <MenuItem to="/how">Other Stuff</MenuItem>
      <DarkModeSwitch />
    </Stack>

  )
}

const NavBarContainer = (props) => {
  return (
    <Flex
      as="div"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    />
  )
}

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo w="50px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}
