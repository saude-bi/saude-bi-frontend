import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Drawer from '@/components/Drawer/Drawer';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './home.module.css';

import { Button } from '@mantine/core';
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
            <div className={styles.breadcrumbContainer}>
              <Breadcrumb />
            </div>
            <main className={styles.conteudo_pagina}>{/* conteudo da pagina */}</main>
          </div>
        </div>
      )}
      {verificaToken && !token && <div>Usuário não autenticado</div>}
    </>
  );
}
