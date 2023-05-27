import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';

import { useForm } from '@mantine/form';
import { useLoginMutation } from '@/store/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface FormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const [login, { isSuccess, isError }] = useLoginMutation();
  const router = useRouter();

  const { onSubmit, errors, getInputProps } = useForm<FormValues>({
    initialValues: { username: '', password: '' },
    validate: {
      username: (username) => {
        if (username === '') {
          return 'o nome de usuário é obrigatorio';
        }

        if (username.length < 5) {
          return 'O nome de usuário deve ter pelo menos 5 caracteres';
        }
      },

      password: (password) => {
        if (password === '') {
          return 'a senha de usuário é obrigatoria';
        }

        if (password.length < 5) {
          return 'A senha deve ter pelo menos 5 caracteres';
        }
      },
    },
  });

  useEffect(() => {
    if (isSuccess) {
      router.push('/home');
    }
  }, [isSuccess]);

  return (
    <div className={styles.container}>
      <div className={styles.parteEsquerda}>{/* Conteúdo da parte esquerda */}</div>
      <div className={styles.parteDireita}>
        <form className={styles.form} onSubmit={onSubmit((credentials) => login(credentials))}>
          <TextInput
            placeholder="Digite o seu nome de usuario"
            label="Nome de usuário"
            radius="md"
            sx={{ width: '100%' }}
            {...getInputProps('username')}
          />

          <TextInput
            placeholder="Digite a sua senha"
            label="Senha"
            radius="md"
            sx={{ marginBottom: '20px', width: '100%' }}
            type="password"
            {...getInputProps('password')}
          />

          <Button
            variant="filled"
            type="submit"
            sx={{
              width: '30%',
            }}
          >
            Entrar
          </Button>
          {isError && <p className={styles.errorMessage}>Usuario ou senha invalidos</p>}
        </form>
      </div>
    </div>
  );
}
