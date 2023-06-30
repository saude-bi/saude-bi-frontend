'use client';

import { ContentCard } from '@/components/Common/ContentCard/ContentCard';
import { Stack, Text } from '@mantine/core';
import { FilterSelector } from '@/components/FilterSelector/FilterSelector';
import { Dashboard } from '@/types/dashboards';
import { DashboardCategory } from '@/types/dashboard-category';

type Props = {
  children: React.ReactNode;
  categories: DashboardCategory[];
};

export const DashboardsLayout: React.FC<Props> = ({ children, categories }) => {
  return (
    <Stack>
      <ContentCard>
        <Stack align="center" justify="center">
          <Text>Filtrar por Categoria:</Text>
          <FilterSelector
            options={categories.map((category) => category.name)}
            setSelectedOption={() => {}}
          />
        </Stack>
      </ContentCard>
      <Stack>{children}</Stack>
    </Stack>
  );
};
