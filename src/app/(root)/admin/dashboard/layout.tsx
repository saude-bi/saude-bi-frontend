import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Gestão de Dashbboards'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Gestão de Dashbboards"></NavBar>
      {children}
    </>
  );
}
