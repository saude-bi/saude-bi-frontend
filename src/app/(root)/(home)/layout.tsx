import { NavBar } from '@/components/Common/NavBar/NavBar';
import React from 'react';
import { DashboardsLayout } from './_components/dashboards-layout';
import { cookies } from 'next/dist/client/components/headers';
import { PaginatedResponse } from '@/types/common';
import { DashboardCategory } from '@/types/dashboard-category';

export const metadata = {
  title: 'Dashboars',
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

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard-categories`, {
    method: 'GET',
    headers: requestHeaders,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await res.json()) as PaginatedResponse<DashboardCategory>;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const categories = await getData();

  return (
    <>
      <NavBar title="Dashboards"></NavBar>
      <DashboardsLayout categories={categories.data}>{children}</DashboardsLayout>
    </>
  );
}
