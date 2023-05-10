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
        <div className={styles.area_pagina}>
          <div className={styles.area_esquerda}>
            <Drawer />
          </div>
          <div className={styles.area_direita}>
            <div className={styles.area_de_pesquisa}>
              <Header />
            </div>
            <div className={styles.area_do_conteudo}></div>
          </div>
        </div>
      )}
      {verificaToken && !token && <div>Usuário não autenticado</div>}
    </>
  );
}
