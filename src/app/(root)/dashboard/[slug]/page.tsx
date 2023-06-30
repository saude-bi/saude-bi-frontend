'use client';

import React from 'react';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { useFindDashboardUrlQuery } from '@/store/dashboards';
import { useParams } from 'next/navigation';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { getCookie } from 'cookies-next';

export default function Home() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const workRelation = parseInt(getCookie('workRelation') as string, 10);

  const { data, isSuccess, isError, isLoading } = useFindDashboardUrlQuery(
    !!slug && !!workRelation
      ? {
          id,
          params: { workRelation },
        }
      : skipToken
  );

  return (
    <ContentCard h="100%">
      <iframe src={data?.url} frameBorder="0" width="100%" height="100%"></iframe>
    </ContentCard>
  );
}
