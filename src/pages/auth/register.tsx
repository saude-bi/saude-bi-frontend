import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextInput } from '@mantine/core';
import styles from './auth.module.css';
import { useRouter } from 'next/router';
export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const confirmPasswordValidation = () => {
    return password === confirmPassword
  }

  const register = async () => {

    if (confirmPasswordValidation()) {
      try {
        // Faça a requisição para uma API
        const response = await axios.post('http://localhost:8000/users', {
          username,
          password,
        });
  
        // Exiba os dados recebidos
        console.log(response.data);
        router.push('/auth/login');
      } catch (error) {
        // Trate os erros
        console.error('Erro ao fazer a requisição:', error);
      }
    } else {
      console.error("Erro: As senhas não são iguais")
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
              sx={{ width: "100%"}}
            />
            <TextInput
              placeholder="Digite a sua senha Novamente"
              label="Confirmação de senha"
              radius="md" 
              value={confirmPassword ? confirmPassword : ''}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              sx={{marginBottom: "20px", width: "100%"}}
            />
            <Button variant="filled" onClick={register} sx={{
              width: "30%" 
            }}>
              Cadastrar
            </Button>
        </form>
      </div>
    </div>
  );
}
