import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';
import { useRouter } from 'next/router';
import useLogin from '@/hooks/useLogin';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login, error } = useLogin(password, username, router);

  return (
    <div className={styles.container}>
      <div className={styles.parteEsquerda}>{/* Conteúdo da parte esquerda */}</div>
      <div className={styles.parteDireita}>
        <form className={styles.form}>
          <TextInput
            placeholder="Digite o seu nome de usuario"
            label="Nome de usuário"
            radius="md"
            sx={{ width: '100%' }}
            value={username ? username : ''}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            placeholder="Digite a sua senha"
            label="Senha"
            radius="md"
            value={password ? password : ''}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          <Button
            variant="filled"
            onClick={login}
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
