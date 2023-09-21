'use client';

import { LoginForm } from '@/components/Login/LoginForm';
import { Center, Group, Image, Stack, Text, Title } from '@mantine/core';

export default function LoginPage() {
  return (
    <Group w="100vw" h="100vh" bg="gray.2">
      <Stack w="50%" h="100%" align="center" justify="center" p="xl">
        <Image src="/login-image.png" height={250} fit="contain" />
        <Title color="dark.3">SAUDE-BI (teste)</Title>
        <Text color="dark.3" align="center">
          Bem-vindo ao Saude-Bi, o sistema de gestão de B.I para a área da saúde! Nossa solução
          oferece gestão de acessos e filtros de acordo com o perfil de cada usuário, garantindo o
          acesso aos dashboards de acordo com as autorizações concedidas. Faça login ao lado e
          desfrute do poder do B.I para uma gestão eficiente da saúde.
        </Text>
      </Stack>
      <Center h="100%" p="5rem 10rem" sx={{ flexGrow: 1 }}>
        <LoginForm />
      </Center>
    </Group>
  );
}
