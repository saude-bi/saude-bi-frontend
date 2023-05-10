import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';
import { useRouter } from 'next/router';
import useLogin from '@/hooks/useLogin';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '@/schemas/schemaLogin';

interface FormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { login, error } = useLogin(router);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: FormValues) => {
    login(data.username, data.password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.parteEsquerda}>{/* Conteúdo da parte esquerda */}</div>
      <div className={styles.parteDireita}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            placeholder="Digite o seu nome de usuario"
            label="Nome de usuário"
            radius="md"
            sx={{ width: '100%' }}
            {...register('username')}
          />
          <p className={styles.errorMessage}>{errors.username && errors.username.message}</p>

          <TextInput
            placeholder="Digite a sua senha"
            label="Senha"
            radius="md"
            sx={{ marginBottom: '20px', width: '100%' }}
            {...register('password')}
            type="password"
          />
          <p className={styles.errorMessage}>{errors.password && errors.password.message}</p>

          <Button
            variant="filled"
            type="submit"
            sx={{
              width: '30%',
            }}
          >
            Entrar
          </Button>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
