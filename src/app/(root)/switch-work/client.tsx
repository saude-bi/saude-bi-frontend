'use client';

import { Group, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AccessCard } from './_components/access-card';
import { useGetCurrentUserQuery } from '@/store/auth';
import { WorkRelation } from '@/types/medical-worker';

export const ClientSwitchWork: React.FC = () => {
  const searchParams = useSearchParams();
  const { currentData: currentUser, isLoading, isSuccess } = useGetCurrentUserQuery();
  const [workRelations, setWorkRelations] = useState<WorkRelation[]>();

  const updateWorkRelations = () => {
    if (searchParams.get('filter') && searchParams.get('filter') !== 'todos') {
      setWorkRelations(
        currentUser?.medicalWorker?.workRelations?.filter(
          (workRelation) =>
            workRelation.establishment?.directorship?.acronym === searchParams.get('filter')
        )
      );
    } else {
      setWorkRelations(currentUser?.medicalWorker?.workRelations);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      updateWorkRelations();
    }
  }, [searchParams]);

  useEffect(() => {
    updateWorkRelations();
  }, [currentUser, isSuccess]);

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
