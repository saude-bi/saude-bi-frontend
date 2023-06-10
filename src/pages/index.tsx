import { useEffect } from 'react';
import { useFindAllDashboardsQuery } from '@/store/dashboards';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';

type Props = {
  title: string;
  text: string;
  href: string;
};

const AccessCard: React.FC<Props> = ({ title, text, href }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <ContentCard>
        <Stack spacing={'sm'}>
          <Text fz="sm" fw={500}>
            {title}
          </Text>
          <Text component="p" sx={{ margin: 0 }}>
            {text}
          </Text>
        </Stack>
      </ContentCard>
    </Link>
  );
};

export default function Home() {
  const { currentData: dashboards } = useFindAllDashboardsQuery();

  useEffect(() => {
    console.log(dashboards);
  }, [dashboards]);

  return (
    <CommonLayout title="Dashboards">
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
            <AccessCard title="Núcleo de Saúde AKLP" text="CBO - Enfermeiro" href="dashboards" />
            <AccessCard
              title="Núcleo de Saúde AKLP"
              text="CBO - Gerente de Serviços em Saúde"
              href="dashboards"
            />
          </Group>
        </Stack>
      </Stack>
    </CommonLayout>
  );
}
