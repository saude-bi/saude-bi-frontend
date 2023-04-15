import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    } catch (error) {
      // Trate os erros
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="digite o seu email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="digite a sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Entrar</button>
    </div>
  );
}
