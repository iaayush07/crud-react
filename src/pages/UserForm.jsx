import React, {useEffect} from 'react';
import { useForm, isNotEmpty, hasLength } from '@mantine/form';
import { Button, Group, TextInput, Grid, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      // Log the raw response
      console.log('Raw response:', response);
  
      // Attempt to parse the response as JSON
      const responseData = await response.json();
      console.log('Parsed response:', responseData);
  
      if (response.ok) {
        console.log('User added successfully:', responseData);
        navigate('/');
      } else {
        console.error('Failed to add user:', responseData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const form = useForm({
    initialValues: {
      name: '',
      title: '',
      status: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, 'Name must be 2-10 characters long'),
      title: isNotEmpty('Enter title'),
      status: isNotEmpty('Enter status'),
      role: isNotEmpty('Enter role'),
    },
  });

  return (
    <Box px="20" pt="20" className='userlist'>
      <Grid pt="15" gutter="md" className='userform' justify="center" align="center">
        <Grid.Col span={4} bg="#ffffff" p="20" className='user-form-wrapper'>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder="Name"
              withAsterisk
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Title"
              placeholder="Title"
              withAsterisk
              mt="md"
              {...form.getInputProps('title')}
            />
            <TextInput
              label="Your status"
              placeholder="Your status"
              withAsterisk
              mt="md"
              {...form.getInputProps('status')}
            />
            <TextInput
              label="Your role"
              placeholder="Your role"
              withAsterisk
              mt="md"
              {...form.getInputProps('role')}
            />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default UserForm;
