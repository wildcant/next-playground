import React from 'react'
import { Avatar, Flex, IconButton } from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between">
        <Avatar src="/images/profile.jpg" size="md" />
        <IconButton
          aria-label="Shopping Cart"
          icon={<MdShoppingCart size={25} />}
          outline="none"
          backgroundColor="white"
        />
      </Flex>
    </header>
  )
}

export default Header
