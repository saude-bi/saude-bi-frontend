'use client';

import { useGetCurrentUserQuery } from '@/store/auth';
import { Group, Title } from '@mantine/core';
import { AccessCard } from './_components/access-card';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { WorkRelation } from '@/types/medical-worker';

export const ClientSwitchWork: React.FC = () => {
  const searchParams = useSearchParams();
  const { currentData: currentUser, isLoading } = useGetCurrentUserQuery();
  const [workRelations, setWorkRelations] = useState<WorkRelation[]>();

  const updateWorkRelations = () => {
    if (searchParams.get('filter') !== 'todos') {
      setWorkRelations(
        currentUser?.medicalWorker?.workRelations?.filter(
          (workRelation) =>
            workRelation.establishment?.directorship?.acronym === searchParams.get('filter')
        )
      );
    } else {
      console.log(currentUser?.medicalWorker?.workRelations);
      setWorkRelations(currentUser?.medicalWorker?.workRelations);
    }
  };

  useEffect(() => {
    updateWorkRelations();
  }, [searchParams]);

  useEffect(() => {
    if (!isLoading) {
      updateWorkRelations();
    }
  }, [currentUser]);

  return (
    <>
      <Title order={4}>Selecione o acesso que deseja utilizar:</Title>
      <Group>
        {workRelations?.map((workRelation) => (
          <AccessCard
            key={workRelation.id}
            establishment={workRelation.establishment?.name}
            occupation={workRelation.occupation?.name}
            workRelation={workRelation.id}
          />
        ))}
      </Group>
    </>
  );
};
