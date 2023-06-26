'use client';

import { useEffect, useState } from 'react';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { Anchor, Group, Stack, Text, Title } from '@mantine/core';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import { useGetCurrentUserQuery } from '@/store/auth';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

type Props = {
  establishment: string;
  occupation: string;
  workRelation: number;
};

const AccessCard: React.FC<Props> = ({ establishment, occupation, workRelation }) => {
  const router = useRouter();

  const onClick = () => {
    setCookie('workRelation', workRelation.toString());
    router.push('/');
  };

  return (
    <Anchor onClick={onClick} style={{ textDecoration: 'none' }}>
      <ContentCard>
        <Stack spacing={'sm'}>
          <Text fz="sm" fw={500}>
            {establishment}
          </Text>
          <Text component="p" sx={{ margin: 0 }}>
            {occupation}
          </Text>
        </Stack>
      </ContentCard>
    </Anchor>
  );
};

export default function Home() {
  const { currentData: currentUser } = useGetCurrentUserQuery();
  const [workRelations] = useState(currentUser?.medicalWorker?.workRelations);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <Stack>
      <ContentCard>
        <Stack align="center" justify="center">
          <Text>Filtrar por Diretoria:</Text>
          <FilterSelector
            options={['DIAT', 'DIAC', 'DIES', 'DIFC', 'DIRS', 'DIVS', 'DIEC']}
            setSelectedOption={() => {}}
          />
        </Stack>
      </ContentCard>
      <Stack>
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
      </Stack>
    </Stack>
  );
}
