import React, { useEffect } from 'react';
import { useForm, isNotEmpty, hasLength } from '@mantine/form';
import { Button, Group, TextInput, Grid, Box } from '@mantine/core';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios'

const FormikForm = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const location = useLocation();
    const userData = location.state?.userData;
  
    const form = useForm({
      initialValues: {
        name: '',
        title: '',
        status: '',
        role: '',
      },
      validate: {
        name: hasLength({ min: 2, max: 20 }, 'Name must be 2-20 characters long'),
        title: isNotEmpty('Enter title'),
        status: isNotEmpty('Enter status'),
        role: isNotEmpty('Enter role'),
      },
    });
  
    useEffect(() => {
      if (userData) {
        form.setValues(userData);
      }
    }, [userData]);
  
    const handleSubmit = async (values) => {
        const url = userData ? `http://localhost:3000/users/${userId}` : "http://localhost:3000/users";
        const method = userData ? 'put' : 'post';
    
        try {
          const response = await axios({
            method,
            url,
            data: values,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 200 || response.status === 201) {
            console.log('User saved successfully:', response.data);
            navigate('/formik-list');
          } else {
            console.error('Failed to save user:', response.data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
    useEffect(() => {
      console.log('formData:', form.values);
    }, [form.values]);
  
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
                <Button type="submit">{userData ? 'Update' : 'Add'} User</Button>
              </Group>
            </form>
          </Grid.Col>
        </Grid>
      </Box>
    );
  }

export default FormikForm