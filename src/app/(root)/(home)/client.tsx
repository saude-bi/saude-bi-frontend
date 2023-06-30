'use client';

import { useFindAllDashboardQuery } from '@/store/dashboards';
import { Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import Link from 'next/link';
import { IconDashboard, IconMap } from '@tabler/icons-react';
import { Dashboard } from '@/types/dashboards';
import { string } from 'zod';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const searchParams = useSearchParams();
  const {
    data: dashboards,
    isLoading,
    isSuccess,
  } = useFindAllDashboardQuery({ page: 0, perPage: 1000 }, { pollingInterval: 30000 });
  const [dashboardsMap, setdashboardsMap] = useState<Map<string, Dashboard[]>>(new Map());

  const allDashboardsMap: Map<string, Dashboard[]> = new Map();

  dashboards?.data.forEach((dashboard) => {
    allDashboardsMap.has(dashboard.category.name)
      ? allDashboardsMap.get(dashboard.category.name)?.push(dashboard)
      : allDashboardsMap.set(dashboard.category.name, [dashboard]);
  });

  const updateDashboards = () => {
    if (searchParams.get('filter') && searchParams.get('filter') !== 'todos') {
      setdashboardsMap(
        new Map().set(searchParams.get('filter'), allDashboardsMap.get(searchParams.get('filter')!))
      );
    } else {
      setdashboardsMap(allDashboardsMap);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      updateDashboards();
    }
  }, [searchParams]);

  useEffect(() => {
    updateDashboards();
  }, [dashboards, isSuccess]);

  console.log(dashboards);

  return (
    <Stack>
      <Stack>
        {dashboardsMap &&
          Array.from(dashboardsMap.keys()).map((key) => (
            <>
              <Title order={4}>{key}</Title>
              <SimpleGrid
                cols={3}
                breakpoints={[
                  { maxWidth: 'md', cols: 2, spacing: 'md' },
                  { maxWidth: 'sm', cols: 1, spacing: 'sm' },
                  { maxWidth: 'xs', cols: 1, spacing: 'sm' },
                ]}
              >
                {dashboardsMap.get(key)?.map((dashboard) => (
                  <DashboardCard
                    key={dashboard.id}
                    type="dashboard"
                    title={dashboard.name}
                    href={`dashboard/${dashboard.id}`}
                  />
                ))}
              </SimpleGrid>
            </>
          ))}
      </Stack>
    </Stack>
  );
};
