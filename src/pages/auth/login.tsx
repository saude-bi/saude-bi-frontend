import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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

      if(response.status === 200) {
        localStorage.setItem('access_token', response.data.access_token);
      }
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
    <div className={styles.container}>
      <div className={styles.parteEsquerda}>{/* Conteúdo da parte esquerda */}</div>
      <div className={styles.parteDireita}>
        <form className={styles.form}>
            <TextInput
              placeholder="Digite o seu nome de usuario"
              label="Nome de usuário"
              radius="md" sx={{width: "100%"}}
              value={username ? username : ''}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              placeholder="Digite a sua senha"
              label="Senha"
              radius="md" 
              value={password ? password : ''}
              onChange={(e) => setPassword(e.target.value)} 
              sx={{marginBottom: "20px", width: "100%"}}
            />
            <Button variant="filled" onClick={login} sx={{
              width: "30%" 
            }}>
              Entrar
            </Button>
        </form>
      </div>
    </div>
  );
}
