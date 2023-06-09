import { useEffect } from 'react';
import { useFindAllDashboardsQuery } from '@/store/dashboards';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { Center, Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import Link from 'next/link';
import { IconDashboard, IconMap } from '@tabler/icons-react';

type Props = {
  type: 'dashboard' | 'map';
  title: string;
  href: string;
};

const DashboardCard: React.FC<Props> = ({ title, type, href }) => {
  return (
    <ContentCard h={90}>
      <Flex h="100%">
        <Group spacing={'sm'} noWrap align="center">
          {type === 'dashboard' && <IconDashboard size={24} />}
          {type === 'map' && <IconMap size={24} />}
          <Text fz="sm" fw={500}>
            {title}
          </Text>
        </Group>
      </Flex>
    </ContentCard>
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
              options={[
                'Previne Brasil',
                'Saúde da Mulher',
                'Saúde da Criança ',
                'Saúde da Familia',
                'Gerencial',
              ]}
              setSelectedOption={() => {}}
            />
          </Stack>
        </ContentCard>
        <Stack>
          <Title order={4}>Previne Brasil:</Title>
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: 'md', cols: 2, spacing: 'md' },
              { maxWidth: 'sm', cols: 1, spacing: 'sm' },
              { maxWidth: 'xs', cols: 1, spacing: 'sm' },
            ]}
          >
            <DashboardCard type="map" title="Gestantes sem cartão SUS informado" href="/" />
            <DashboardCard
              type="dashboard"
              title="Agendamentos Sem Pedido de Eletrocardiograma - Hospital Madre de Dio"
              href="/"
            />
            <DashboardCard
              type="map"
              title="Agendamentos Sem Pedido de Eletrocardiograma - Hospital Madre de Dio"
              href="/"
            />
          </SimpleGrid>
        </Stack>
      </Stack>
    </CommonLayout>
  );
}
