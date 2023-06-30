'use client';

import { useFindAllDashboardQuery } from '@/store/dashboards';
import { Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import Link from 'next/link';
import { IconDashboard, IconMap } from '@tabler/icons-react';
import { Dashboard } from '@/types/dashboards';

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

type DashboardGroups = {
  [key: string]: Dashboard[];
};

export const ClientDashboards: React.FC = () => {
  const { data: dashboards } = useFindAllDashboardQuery(
    { page: 0, perPage: 1000 },
    { pollingInterval: 30000 }
  );

  console.log(dashboards);

  const teste: Map<string, Dashboard> = new Map();

  dashboards?.data.map((dashboard) => teste.set(dashboard.category.name, dashboard));

  return (
    <Stack>
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
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
