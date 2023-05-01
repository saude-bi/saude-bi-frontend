
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function HomePage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const[verificaToken, setVerificaToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('access_token') || '');
    setVerificaToken(true)
  });

  useEffect(()=> {
    if(verificaToken) {
      if (token) {
        console.log('Token encontrado:', token);
      } else {
        console.log('Token não encontrado.');
        router.push('/auth/login');
      }
    }
  }, [verificaToken])

  const logout = () => {
    localStorage.removeItem('access_token');
    router.push('/auth/login');
  };

  return (
    <>
      {verificaToken && token && <div>
        
        <h1>
          Usuário autenticado
        </h1>
        <button onClick={logout}>Logout</button>
      </div>}
      {verificaToken && !token && <div>Usuário não autenticado</div>}
    </>
  );
}
