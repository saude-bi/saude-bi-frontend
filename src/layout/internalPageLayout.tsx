import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Drawer from '@/components/Drawer/Drawer';
import styles from './internalPageLayout.module.css';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';
import { useGetCurrentUserQuery } from '@/store/auth';
import { Flex, LoadingOverlay } from '@mantine/core';

interface InternalPageLayoutProps {
  children?: ReactNode;
}

export default function InternalPageLayout({ children }: InternalPageLayoutProps) {
  const router = useRouter();
  const { isLoading, isError } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isError) {
      router.push('/auth/login');
    }
  }, [isError]);

  return (
    <div className={styles.area_pagina}>
      {isLoading || isError ? (
        <LoadingOverlay visible />
      ) : (
        <Flex w="100%">
          <div className={styles.area_esquerda}>
            <Drawer />
          </div>
          <div className={styles.area_direita}>
            <div className={styles.area_de_pesquisa}>
              <Header />
            </div>
            <div className={styles.area_do_conteudo}>{children}</div>
          </div>
        </Flex>
      )}
    </div>
  );
}
