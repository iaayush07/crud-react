import { Box, Flex, Title } from '@mantine/core'
import React from 'react'

const Navbar = () => {
  return (
    <Box w={200} bg="#101826" c="#ffffff" h="100%">
        <Flex my="25" justify="end" pe="15">
            <Title order={3} >V-Dashboard</Title>
        </Flex>
    </Box>
  )
}

export default Navbar