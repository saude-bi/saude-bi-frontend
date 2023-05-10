import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Drawer from '@/components/Drawer/Drawer';
import styles from './home.module.css';
import Header from '@/components/Header/Header';
export default function Home() {
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
      if (!token) {
        console.log('Token não encontrado.');
        router.push('/auth/login');
      }
    }
  }, [verificaToken]);

  return (
    <>
      {verificaToken && token && (
        <div className={styles.pagina}>
          <Drawer />
          <div className={styles.content}>
            <main className={styles.conteudo_pagina}>
              <Header />
            </main>
          </div>
        </div>
      )}
      {verificaToken && !token && <div>Usuário não autenticado</div>}
    </>
  );
}
