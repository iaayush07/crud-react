import React from 'react'
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Grid, Box } from '@mantine/core';

const UserForm = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            title: '',
            email: '',
            favoriteColor: '',
            age: 18,
        },

        validate: {
            name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
            title: isNotEmpty('Enter title'),
            email: isEmail('Invalid email'),
            favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
            age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
        },
    });

    return (
        <Box px="20" pt="20" className='userlist'>
            <Grid pt="15" gutter="md" className='userform' justify="center" align="center">
                <Grid.Col span={4} bg="#ffffff" p="20" className='user-form-wrapper'>
                    <form onSubmit={form.onSubmit(() => { })}>
                        <TextInput
                            label="Name"
                            placeholder="Name"
                            withAsterisk
                            key={form.key('name')}
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label="Title"
                            placeholder="Title"
                            withAsterisk
                            mt="md"
                            key={form.key('title')}
                            {...form.getInputProps('title')}
                        />
                        <TextInput
                            label="Your email"
                            placeholder="Your email"
                            withAsterisk
                            mt="md"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            label="Your favorite color"
                            placeholder="Your favorite color"
                            withAsterisk
                            mt="md"
                            key={form.key('favoriteColor')}
                            {...form.getInputProps('favoriteColor')}
                        />
                        <NumberInput
                            label="Your age"
                            placeholder="Your age"
                            withAsterisk
                            mt="md"
                            key={form.key('age')}
                            {...form.getInputProps('age')}
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </Grid.Col>
            </Grid>
        </Box>


    );
}

export default UserForm