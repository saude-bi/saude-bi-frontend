import React from 'react';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { cookies } from 'next/dist/client/components/headers';
import { FindDashboardUrlDto } from '@/types/dashboards';

async function getData(dashboard: string) {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('credentials', 'same-origin');
  requestHeaders.set('mode', 'cors');

  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const workRelation = cookieStore.get('workRelation');

  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token.value}`);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dashboards/${dashboard}/url?workRelation=${workRelation?.value}`,
    {
      method: 'GET',
      headers: requestHeaders,
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await res.json()) as FindDashboardUrlDto;
}

export default async function Home({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <ContentCard h="100%">
      <iframe src={data?.url} frameBorder="0" width="100%" height="100%"></iframe>
    </ContentCard>
  );
}
