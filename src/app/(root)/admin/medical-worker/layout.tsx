import React from 'react';
import { NavBar } from '@/components/Common/NavBar/NavBar';

export const metadata = {
  title: 'Profissionais de Saúde',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Profissionais de Saúde" />
      {children}
    </>
  );
}
