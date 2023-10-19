import React from 'react';
import { NavBar } from '@/components/Common/NavBar/NavBar';

export const metadata = {
  title: 'Categorias de Dashbboards',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Categorias de Dashbboards" />
      {children}
    </>
  );
}
