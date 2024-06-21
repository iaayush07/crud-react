import { Flex, Box } from '@mantine/core'
import { Input } from '@mantine/core';
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from '@mantine/core';
import React from 'react'

const Header = () => {
  return (
    <Flex justify="space-between" p="15" className='header-wrapper'>
      <Input placeholder="Search" leftSection={<FaSearch  size={16} />} />
      <Flex align="center">
        <Flex mr="15" align="center">
          <IoMdNotificationsOutline size={24} />
        </Flex>
        <Avatar src="avatar.png" alt="it's me" />
      </Flex>
    </Flex>
  )
}

export default Header