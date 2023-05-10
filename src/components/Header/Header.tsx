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
      <div className={styles.container_area_breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.container_area_input_pesquisa}>
        <TextInput placeholder="Pesquisar" width={50} height={50} />
      </div>
      <div className={styles.container_area_icone_perfil}>
        <Image
          src={'/icone-de-usuario.png'}
          alt="Autor:"
          width={50}
          height={50}
          className={styles.icone_style}
        />
      </div>
    </div>
  );
};

export default Header;
