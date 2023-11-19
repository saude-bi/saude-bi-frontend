import React from 'react';
import { NavBar } from '@/components/Common/NavBar/NavBar';

export const metadata = {
    title: 'Fonte de Dados Geograficos',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar title="Fonte de Dados Geograficos" />
            {children}
        </>
    );
}
