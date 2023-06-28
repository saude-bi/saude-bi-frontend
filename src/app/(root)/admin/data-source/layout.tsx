import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Fontes de Dados'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Fontes de Dados"></NavBar>
      {children}
    </>
  );
}
