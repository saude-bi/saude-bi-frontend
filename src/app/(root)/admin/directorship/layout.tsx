import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Diretorias',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Diretorias"></NavBar>
      {children}
    </>
  );
}
