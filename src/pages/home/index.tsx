import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Drawer from '@/components/Drawer/Drawer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from "./home.module.css"
export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const[verificaToken, setVerificaToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('access_token') || '');
    setVerificaToken(true)
  });

  // redirecionamento para a pagina de login, no caso do usuario não estar autenticado
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
    <div className={styles.pagina}>
      <Drawer />
      <div className={styles.content}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb />
        </div>
        {/* Restante do conteúdo da página */}
      </div>
    </div>
  );  
}