import React from 'react';
import styles from './Drawer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { logout } from '@/store/auth';

export default function Drawer() {
  const router = useRouter();

  return (
    <div className={styles.drawerContainer}>
      <article className={styles.iconContainer}>
        <Image
          src="/botao-de-inicio.png"
          alt="Autor: Mayor Icons"
          onClick={() => router.push('/home')}
          className={styles.icon_style}
          width={30}
          height={30}
        />
      </article>
      <article className={styles.iconContainer}>
        <Image
          src="/engrenagem.png"
          alt="Autor: ambar"
          className={styles.icon_style}
          width={30}
          height={30}
        />
      </article>
      <article className={styles.iconContainer}>
        <Image
          src="/botao-de-logout.png"
          alt="Autor: ambar"
          onClick={() => {
            logout();
            router.push('/auth/login');
          }}
          className={styles.icon_style}
          width={30}
          height={30}
        />
      </article>
    </div>
  );
}
