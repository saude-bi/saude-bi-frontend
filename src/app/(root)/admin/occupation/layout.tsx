import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Gestão de Ocupações'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Gestão de Ocupações"></NavBar>
      {children}
    </>
  );
}
