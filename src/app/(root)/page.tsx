'use client';

import { useFindAllDashboardQuery } from '@/store/dashboards';
import { Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
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
    <Link href={href} style={{ textDecoration: 'none' }}>
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
    </Link>
  );
};

export default function Home() {
  const { data: dashboards } = useFindAllDashboardQuery(
    { page: 0, perPage: 1000 },
    { pollingInterval: 30000 }
  );

  return (
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
          {dashboards &&
            dashboards.data.map((dashboard) => (
              <DashboardCard
                key={dashboard.id}
                type="dashboard"
                title={dashboard.name}
                href={`dashboard/${dashboard.id}`}
              />
            ))}

          <DashboardCard
            type="map"
            title="Gestantes sem cartão SUS informado"
            href="dashboards/1"
          />
          <DashboardCard
            type="dashboard"
            title="Agendamentos Sem Pedido de Eletrocardiograma - Hospital Madre de Dio"
            href="dashboard/1"
          />
          <DashboardCard
            type="map"
            title="Agendamentos Sem Pedido de Eletrocardiograma - Hospital Madre de Dio"
            href="dashboard/2"
          />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
