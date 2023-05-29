import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Drawer from '@/components/Drawer/Drawer';
import DrawerStyle from '@/components/MenuLateral/Drawer.module.css';
export default function HomePage() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [verificaToken, setVerificaToken] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('access_token') || '');
    setVerificaToken(true);
  });

  // redirecionamento para a pagina de login, no caso do usuario não estar autenticado
  useEffect(() => {
    if (verificaToken) {
      if (token) {
        console.log('Token encontrado:', token);
        router.push("/home")
      } else {
        console.log('Token não encontrado.');
        router.push('/auth/login');
      }
    }
  }, [verificaToken]);

  const logout = () => {
    localStorage.removeItem('access_token');
    router.push('/auth/login');
  };

  return (
    <>
      {verificaToken && token && <div></div>}
      {verificaToken && !token && <div>Usuário não autenticado</div>}
    </>
  );
}
