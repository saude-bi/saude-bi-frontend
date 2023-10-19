import React from 'react';
import { NavBar } from '@/components/Common/NavBar/NavBar';

export const metadata = {
  title: 'Gestão de Dashbboards',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Gestão de Dashbboards" />
      {children}
    </>
  );
}
