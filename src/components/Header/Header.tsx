import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './Header.module.css';
import { TextInput } from '@mantine/core';
import Image from 'next/image';

interface HeaderProps {
  // você pode definir as props que precisa aqui
}

const Header: React.FC<HeaderProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/home/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_area_breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.container_area_input_pesquisa}>
        <form onSubmit={handleSearch}>
          <TextInput
            placeholder="Pesquisar"
            width={50}
            height={80}
            radius="lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.container_area_icone_perfil}>
        <Image
          src={'/icone-de-usuario.png'}
          alt="Autor:"
          width={35}
          height={35}
          className={styles.icone_style}
        />
      </div>
    </div>
  );
};

export default Header;
