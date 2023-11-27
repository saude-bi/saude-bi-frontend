'use client';

import { Flex, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { IconDashboard, IconMap } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Dashboard } from '@/types/dashboards';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { useFindAllDashboardQuery } from '@/store/dashboards';
import { useFindAllGeoMapsQuery } from '@/store/geo-maps';
import { GeoMaps } from '@/types/geo-maps';

type Props = {
  type: 'dashboard' | 'map';
  title: string;
  href: string;
};

const DashboardCard: React.FC<Props> = ({ title, type, href }) => (
  <Link href={href} style={{ textDecoration: 'none' }}>
    <ContentCard h={90}>
      <Flex h="100%">
        <Group spacing="sm" noWrap align="center">
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

export const ClientDashboards: React.FC = () => {
  const searchParams = useSearchParams();
  const {
    data: dashboards,
    isLoading,
    isSuccess,
  } = useFindAllDashboardQuery({ page: 0, perPage: 1000 }, { pollingInterval: 30000 });

  const {
    data: geomaps,
    isLoading: isGeomapsLoading,
    isSuccess: isGeomapsSuccess,
  } = useFindAllGeoMapsQuery({ page: 0, perPage: 1000 }, { pollingInterval: 30000 });

  const [dashboardsMap, setdashboardsMap] = useState<Map<string, Dashboard[]>>(new Map());
  const [geomapsMap, setgeomapsMap] = useState<Map<string, GeoMaps[]>>(new Map());

  const allDashboardsMap: Map<string, Dashboard[]> = new Map();
  const allGeomapsMap: Map<string, GeoMaps[]> = new Map();

  dashboards?.data.forEach((dashboard) => {
    allDashboardsMap.has(dashboard.category.name)
      ? allDashboardsMap.get(dashboard.category.name)?.push(dashboard)
      : allDashboardsMap.set(dashboard.category.name, [dashboard]);
  });

  geomaps?.data.forEach((geomap) => {
    allGeomapsMap.has(geomap.category.name)
      ? allGeomapsMap.get(geomap.category.name)?.push(geomap)
      : allGeomapsMap.set(geomap.category.name, [geomap]);
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

  const updateGeomaps = () => {
    if (searchParams.get('filter') && searchParams.get('filter') !== 'todos') {
      setgeomapsMap(
        new Map().set(searchParams.get('filter'), allGeomapsMap.get(searchParams.get('filter')!))
      );
    } else {
      setgeomapsMap(allGeomapsMap);
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

  useEffect(() => {
    if (!isGeomapsLoading) {
      updateGeomaps();
    }
  }, [searchParams]);

  useEffect(() => {
    updateGeomaps();
  }, [geomaps, isGeomapsSuccess]);

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
        {geomapsMap &&
          Array.from(geomapsMap.keys()).map((key) => (
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
                {geomapsMap.get(key)?.map((geomap) => (
                  <DashboardCard
                    key={geomap.id}
                    type="map"
                    title={geomap.name}
                    href={`map/${geomap.id}`}
                  />
                ))}
              </SimpleGrid>
            </>
          ))}
      </Stack>
    </Stack>
  );
};
