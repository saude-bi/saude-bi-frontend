import React from 'react';
import { cookies } from 'next/dist/client/components/headers';
import { NavBar } from '@/components/Common/NavBar/NavBar';
import { SwitchWorkLayout } from './_components/switch-work-layout';

import { PaginatedResponse } from '@/types/common';
import { Directorship } from '@/types/directorship';

export const metadata = {
  title: 'Selecionar Vínculo',
};

async function getData() {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('credentials', 'same-origin');
  requestHeaders.set('mode', 'cors');

  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/directorships`, {
    method: 'GET',
    headers: requestHeaders,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await res.json()) as PaginatedResponse<Directorship>;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const directorship = await getData();
  return (
    <>
      <NavBar title="Selecionar Vínculo" />
      <SwitchWorkLayout directorships={directorship.data}>{children}</SwitchWorkLayout>
    </>
  );
}
