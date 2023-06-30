import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Categorias de Dashbboards'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Categorias de Dashbboards"></NavBar>
      {children}
    </>
  );
}
