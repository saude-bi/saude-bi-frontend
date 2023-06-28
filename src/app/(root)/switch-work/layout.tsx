import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Alterar Vínculo'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Alterar Vínculo"></NavBar>
      {children}
    </>
  );
}
