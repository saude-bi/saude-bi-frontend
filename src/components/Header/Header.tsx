// src/components/Header/index.tsx
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './Header.module.css';
import { TextInput } from '@mantine/core';
import Image from 'next/image';
interface HeaderProps {
  // você pode definir as props que precisa aqui
}

const Header: React.FC<HeaderProps> = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // implemente a lógica de pesquisa aqui
  };

  return (
    <div className={styles.container}>
      <div className={styles.espaco_do_breadcrumb}>
        <Breadcrumb />
      </div>

      <TextInput placeholder="Pesquisar" className={styles.inputSearch} />
      <div className={styles.espaco_da_imagem}>
        <Image
          src="/icone-de-usuario.png"
          alt="Autor: Mayor Icons"
          width={50}
          height={50}
          className={styles.iconCursor}
        />
      </div>
    </div>
  );
};

export default Header;
