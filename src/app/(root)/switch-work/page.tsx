'use client';

import { useGetCurrentUserQuery } from '@/store/auth';
import { Group, Title } from '@mantine/core';
import { useState } from 'react';
import { AccessCard } from './_components/access-card';

export default function Home() {
  const { currentData: currentUser } = useGetCurrentUserQuery();
  const [workRelations] = useState(currentUser?.medicalWorker?.workRelations);
  return (
    <>
      <Title order={4}>Selecione o acesso que deseja utilizar:</Title>
      <Group>
        {workRelations?.map((workRelation) => (
          <AccessCard
            establishment={workRelation.establishment?.name}
            occupation={workRelation.occupation?.name}
            workRelation={workRelation.id}
          />
        ))}
      </Group>
    </>
  );
}
