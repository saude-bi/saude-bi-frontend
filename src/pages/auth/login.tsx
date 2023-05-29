import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';

import Image from 'next/image';
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

  const { onSubmit, getInputProps } = useForm<FormValues>({
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
      <div className={styles.parteEsquerda}>
      <Image
          src="/login-image.png"
          alt="Autor: Mayor Icons"
          onClick={() => router.push('/home')}
          width={400}
          height={400}
        />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum iaculis dictumst habitasse sed vivamus fusce dapibus curae neque libero sodales, 
          etiam mollis etiam netus ut purus lorem augue aliquet ante cubilia. curae praesent potenti eget nulla nec cras aenean 
          itora pharetra, quam non mi porta odio duis mi libero ornare, curabitur tellus hac tortor porta risus ultrices egestas.
        </p>
      </div>
      <div className={styles.parteDireita}>
        <form className={styles.form} onSubmit={onSubmit((credentials) => login(credentials))}>
          <h3>Acessar o sistema</h3>
          <TextInput
            placeholder="Digite o seu nome de usuario"
            label="Nome de usuário"
            radius="md"
            sx={{ width: '85%', marginBottom: '20px'}}
            {...getInputProps('username')}
          />

          <TextInput
            placeholder="Digite a sua senha"
            label="Senha"
            radius="md"
            sx={{ marginBottom: '40px', width: '85%' }}
            type="password"
            {...getInputProps('password')}
          />

          <Button
            variant="filled"
            type="submit"
            sx={{
              width: '100%',
              height: "6vh",
              borderRadius: "7px",
              backgroundColor: "#748FFC",
              fontSize: "2.3vh"
            }}
          >
            Login
          </Button>
          {isError && <p className={styles.errorMessage}>Usuario ou senha invalidos</p>}
        </form>
      </div>
    </div>
  );
}
