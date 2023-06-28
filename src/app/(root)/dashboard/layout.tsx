import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';

export const metadata = {
  title: 'Dashboars'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar title="Dashboars"></NavBar>
      {children}
    </>
  );
}
