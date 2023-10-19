import React from 'react';
import { NavBar } from '@/components/Common/NavBar/NavBar';

export const metadata = {
  title: 'Fontes de Dados',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Fontes de Dados" />
      {children}
    </>
  );
}
