'use client';

import { LoginForm } from '@/components/Login/LoginForm';
import { Center, Group, Image, Stack, Text, Title } from '@mantine/core';

export default function LoginPage() {
  return (
    <Group w="100vw" h="100vh" bg="gray.2">
      <Stack w="50%" h="100%" align="center" justify="center" p="xl">
        <Image src="/login-image.png" height={250} fit="contain" />
        <Title color="dark.3">Título</Title>
        <Text color="dark.3" align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Stack>
      <Center h="100%" p="5rem 10rem" sx={{ flexGrow: 1 }}>
        <LoginForm />
      </Center>
    </Group>
  );
}
