import { Box, Flex, Title, NavLink } from '@mantine/core'
import { RiDashboard3Line } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box w={200} bg="#101826" c="#ffffff" h="100%">
      <Flex my="25" justify="end" pe="15">
        <Title order={3} >V-Dashboard</Title>
      </Flex>
      <Link to="/">
      <NavLink
        href="#required-for-focus"
        label="Dashboard"
        variant="filled"
        active
        c="white"
        fw="500"
        fs={20}
        pe="15"
        leftSection={<RiDashboard3Line size={22} />}
      />
      </Link>
      <Link to="formik-list">
      <NavLink
        href="#required-for-focus"
        label="Formik List"
        c="white"
        fw="500"
        fs={20}
        pe="15"
        leftSection={<FaListAlt size={22} />}
      />
      </Link>
    </Box>
  )
}

export default Navbar