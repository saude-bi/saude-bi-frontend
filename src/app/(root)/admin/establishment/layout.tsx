import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Estabelecimentos de Saúde'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Estabelecimentos de Saúde"></NavBar>
      {children}
    </>
  );
}
