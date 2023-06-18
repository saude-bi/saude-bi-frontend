import { Button, Stack, Title } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLoginMutation } from '@/store/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginFormDto } from '@/types/user';
import { ContentCard } from '../Common/ContentCard/ContentCard';

export const LoginForm: React.FC<{}> = () => {
  const [login, { isSuccess, isError }] = useLoginMutation();
  const router = useRouter();

  const { onSubmit, getInputProps } = useForm<LoginFormDto>({
    initialValues: { username: '', password: '' },
    validate: {
      username: (username) => {
        if (username.length < 5) {
          return 'O login deve ter pelo menos 5 caracteres';
        }
      },

      password: (password) => {
        if (password.length < 5) {
          return 'A senha deve ter pelo menos 5 caracteres';
        }
      },
    },
  });

  useEffect(() => {
    if (isSuccess) {
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <ContentCard w="100%" h="100%">
      <form
        onSubmit={onSubmit((credentials) => login(credentials))}
        style={{ width: '100%', height: '100%' }}
      >
        <Stack align="center" justify="center" spacing="xs" h="100%">
          <Title color="black" size="xs">
            Acessar o sistema
          </Title>
          <TextInput
            placeholder="Login"
            label="Login"
            radius="xs"
            w="100%"
            required
            {...getInputProps('username')}
          />

          <TextInput
            placeholder="Senha"
            label="Senha"
            radius="xs"
            w="100%"
            type="password"
            required
            {...getInputProps('password')}
          />

          <Button variant="filled" type="submit" w="100%" color="indigo.4">
            Login
          </Button>
          {isError && <p>Usuario ou senha invalidos</p>}
        </Stack>
      </form>
    </ContentCard>
  );
};
