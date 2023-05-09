import React from 'react';
import styles from './Drawer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Drawer() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('access_token');
    router.push('/auth/login');
  };

  const redirecionamentoParaPaginaHome = () => {
    router.push('/home');
  };

  return (
    <div className={styles.drawerContainer}>
      <article className={styles.iconContainer}>
        <Image
          src="/botao-de-inicio.png"
          alt="Autor: Mayor Icons"
          width={50}
          height={50}
          onClick={redirecionamentoParaPaginaHome}
          className={styles.iconCursor}
        />
      </article>
      <article className={styles.iconContainer}>
        <Image src="/engrenagem.png" alt="Autor: ambar" width={50} height={50} />
      </article>
      <article className={styles.iconContainer}>
        <Image
          src="/botao-de-logout.png"
          alt="Autor: ambar"
          width={50}
          height={50}
          onClick={logout}
          className={styles.iconCursor}
        />
      </article>
    </div>
  );
}
