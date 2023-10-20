'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { getCookie } from 'cookies-next';
import { useFindDashboardUrlQuery } from '@/store/dashboards';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

export default function Home() {
  const { slug } = useParams();
  const id = parseInt(slug as string, 10);
  const workRelation = parseInt(getCookie('workRelation') as string, 10);

  const { data } = useFindDashboardUrlQuery(
    !!slug && !!workRelation
      ? {
          id,
          params: { workRelation },
        }
      : skipToken
  );

  return (
    <ContentCard h="100%">
      <iframe title="dashboard" src={data?.url} frameBorder="0" width="100%" height="100%" />
    </ContentCard>
  );
}
