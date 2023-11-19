import { NavBar } from "@/components/Common/NavBar/NavBar";
import React from "react";

export const metadata = {
    title: 'Mapas Geograficos',
};

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <>
            <NavBar title="Mapas Geograficos" />
            {children}
        </>
    )
}