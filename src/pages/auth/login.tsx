import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mantine/core';
import { Stack, Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const login = async () => {
    try {
      // Faça a requisição para uma API
      const response = await axios.post('http://localhost:8000/auth', {
        username,
        password,
      });

      // Exiba os dados recebidos
      console.log(response.data);
    } catch (err) {
      // Trate os erros
      console.error('Erro ao fazer a requisição:', err);
      
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <Grid m={0} columns={24}>
        <Grid.Col span={12}></Grid.Col>
        <Grid.Col span={12}>
          <Stack
            justify="flex-end"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            })}
          >
            <TextInput
              placeholder="Digite o nome do seu usuário"
              label="Nome de usuário"
              radius="md"
              value={username ? username : ""}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              placeholder="Digite a sua senha"
              label="Senha"
              radius="md"
              value={password ? password : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="filled" onClick={login}>
              Entrar
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
  );
}
