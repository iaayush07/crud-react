import { Box, Title, Grid, Flex, Avatar, Button, Table } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([])

  function getUsers() {
    fetch("http://localhost:3000/users")
  .then(res => res.json())
  .then(data => setUsers(data))
  .catch(error => console.error("Failed to fetch users:", error))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Box px="20" pt="20" className='userlist'>
      <Flex justify="space-between" align="center">
        <Title order={2} c="#2f3541">Dashboard</Title>
        <Link to="add-user">
          <Button variant="filled" bg="#7368c9">Add user</Button>
        </Link>
      </Flex>
      <Grid pt="15" gutter="md">
        <Grid.Col span={4} >
          <Flex align="center" className='card' p="15">
            <Avatar src="avatar.png" alt="it's me" size="lg" />
            <Flex direction="column" ms="25">
              <Box>
                <Title order={2} c="#3e424c">8282</Title>
              </Box>
              <Box>
                <Title order={5} c="#686b73">New User</Title>
              </Box>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} >
          <Flex align="center" className='card' p="15">
            <Avatar src="avatar.png" alt="it's me" size="lg" />
            <Flex direction="column" ms="25">
              <Box>
                <Title order={2} c="#3e424c">8282</Title>
              </Box>
              <Box>
                <Title order={5} c="#686b73">New User</Title>
              </Box>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} >
          <Flex align="center" className='card' p="15">
            <Avatar src="avatar.png" alt="it's me" size="lg" />
            <Flex direction="column" ms="25">
              <Box>
                <Title order={2} c="#3e424c">8282</Title>
              </Box>
              <Box>
                <Title order={5} c="#686b73">New User</Title>
              </Box>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
      <Box className='list-table' mt="20">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr bg="#f9fafc">
              <Table.Th>Name</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {
              users.map((element) => (
                <Table.Tr key={element.name} bg="#ffffff">
                  <Table.Td>{element.name}</Table.Td>
                  <Table.Td>{element.title}</Table.Td>
                  <Table.Td>{element.status}</Table.Td>
                  <Table.Td>{element.role}</Table.Td>
                  <Table.Td>
                    <Button variant="transparent" c="#7368c9">Edit</Button>
                  </Table.Td>
                </Table.Tr>
              ))
            }
          </Table.Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default UserList
