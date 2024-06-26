import { Box, Title, Grid, Flex, Avatar, Button, Table } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const FormikList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const getUsers = () => {
        axios.get('http://localhost:3000/users').then((res) => {
            setUsers(res.data);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`).then(() => {
            getUsers();
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Box px="20" pt="20" className='userlist'>
            <Flex justify="space-between" align="center">
                <Title order={2} c="#2f3541">Formik Form</Title>
                <Link to="/formik-form">
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
                            users.map((user) => (
                                <Table.Tr key={user.name} bg="#ffffff">
                                    <Table.Td>{user.name}</Table.Td>
                                    <Table.Td>{user.title}</Table.Td>
                                    <Table.Td>{user.status}</Table.Td>
                                    <Table.Td>{user.role}</Table.Td>
                                    <Table.Td>
                                        <Link to={`/edit-user/${user.id}`} state={{ userData: user }}>
                                            <Button variant="transparent" c="#7368c9">Edit</Button>
                                        </Link>
                                        <Button variant="transparent" c="red" ms="10" onClick={() => handleDelete(user.id)}>Delete</Button>
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

export default FormikList